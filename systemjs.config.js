System.config({
  baseURL: '/',
  warnings: true,
  packages: {
    '/': {
      defaultExtensions: 'js',
      map: {
        'angular2': 'node_modules/angular2',
        'rxjs': 'node_modules/rxjs'
      }
    }
  }
})
