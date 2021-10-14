export const routes  = {
  'home':'home' as const,
  'public':'public' as const,
  'private':'private' as const,
  'login':'login' as const,
  'signup':'signup' as const,
  'profile':'profile' as const,
  'notFound':'notFound' as const,
  'cgu': 'cgu' as const
}

export type MainNavigationParams = {
  [routes.home]: undefined;
  [routes.public]: {
    screen: keyof PublicNavigationParams;
    params?: any;
  },
  [routes.private]:{
    screen: keyof PrivateNavigationParams;
    params?: any;
  },
  [routes.notFound]:undefined,
  [routes.cgu]: undefined
}

export type PublicNavigationParams = {
  [routes.login]: {
    nextRoute?:{
      name: keyof typeof routes,
      params?: any
    }
  },
  [routes.signup]: {
    nextRoute?:{
      name: keyof typeof routes,
      params?: any
    }
  }
}

export type PrivateNavigationParams = {
  [routes.profile]: undefined;
}
