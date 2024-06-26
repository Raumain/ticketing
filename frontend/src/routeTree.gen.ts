/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RepositoriesImport } from './routes/repositories'
import { Route as ProjectsImport } from './routes/projects'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as IssuesImport } from './routes/issues'
import { Route as IndexImport } from './routes/index'
import { Route as RepositoriesIdImport } from './routes/repositories_.$id'
import { Route as ProjectsIdImport } from './routes/projects_.$id'
import { Route as IssuesIdImport } from './routes/issues_.$id'

// Create/Update Routes

const RepositoriesRoute = RepositoriesImport.update({
  path: '/repositories',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsRoute = ProjectsImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IssuesRoute = IssuesImport.update({
  path: '/issues',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const RepositoriesIdRoute = RepositoriesIdImport.update({
  path: '/repositories/$id',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIdRoute = ProjectsIdImport.update({
  path: '/projects/$id',
  getParentRoute: () => rootRoute,
} as any)

const IssuesIdRoute = IssuesIdImport.update({
  path: '/issues/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/issues': {
      preLoaderRoute: typeof IssuesImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
    '/repositories': {
      preLoaderRoute: typeof RepositoriesImport
      parentRoute: typeof rootRoute
    }
    '/issues/$id': {
      preLoaderRoute: typeof IssuesIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$id': {
      preLoaderRoute: typeof ProjectsIdImport
      parentRoute: typeof rootRoute
    }
    '/repositories/$id': {
      preLoaderRoute: typeof RepositoriesIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  IssuesRoute,
  LoginRoute,
  ProfileRoute,
  ProjectsRoute,
  RepositoriesRoute,
  IssuesIdRoute,
  ProjectsIdRoute,
  RepositoriesIdRoute,
])

/* prettier-ignore-end */
