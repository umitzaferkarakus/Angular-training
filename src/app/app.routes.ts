import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/components.component').then(m => m.ComponentsComponent)
  },
  { path: 'components', loadComponent: () => import('./components/components.component').then(m => m.ComponentsComponent) },
  { path: 'lifecycle-hooks', loadComponent: () => import('./lifecycle-hooks/lifecycle-hooks.component').then(m => m.LifecycleHooksComponent) },
  { path: 'modules', loadComponent: () => import('./modules/modules.component').then(m => m.ModulesComponent) },
  { path: 'data-binding', loadComponent: () => import('./data-binding/data-binding.component').then(m => m.DataBindingComponent) },
  { path: 'built-in-directives', loadComponent: () => import('./built-in-directives/built-in-directives.component').then(m => m.BuiltInDirectivesComponent) },
  { path: 'dependency-injection', loadComponent: () => import('./dependency-injection/dependency-injection.component').then(m => m.DependencyInjectionComponent) },
  { path: 'component-communication', loadComponent: () => import('./component-communication/component-communication.component').then(m => m.ComponentCommunicationComponent) },
  { path: 'input-output', loadComponent: () => import('./input-output/input-output.component').then(m => m.InputOutputComponent) },
  { path: 'view-childs', loadComponent: () => import('./view-childs/view-childs.component').then(m => m.ViewChildsComponent) },
  { path: 'truncate-demo', loadChildren: () => import('./truncate-demo/truncate-demo.module').then(m => m.TruncateDemoModule) },
  { path: '**', redirectTo: '' }
];
