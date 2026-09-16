import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MODULES, ModuleInfo, ModuleText } from '../modules-data';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

@Component({
  selector: 'app-module-detail',
  imports: [RouterLink, Reveal, Icon, TranslatePipe],
  templateUrl: './module-detail.html',
  styleUrl: './module-detail.scss',
})
export class ModuleDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly i18n = inject(I18nService);

  protected readonly allModules = MODULES;

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly module = computed<ModuleInfo | undefined>(() =>
    MODULES.find((mod) => mod.slug === this.slug()),
  );

  protected readonly previous = computed(() => this.sibling(-1));
  protected readonly next = computed(() => this.sibling(1));

  protected moduleText(slug: string): ModuleText | undefined {
    return this.i18n.raw<ModuleText>(`modules.${slug}`);
  }

  private sibling(offset: number): ModuleInfo | undefined {
    const current = this.module();
    if (!current) {
      return undefined;
    }
    const index = MODULES.findIndex((mod) => mod.slug === current.slug);
    const siblingIndex = (index + offset + MODULES.length) % MODULES.length;
    return MODULES[siblingIndex];
  }
}
