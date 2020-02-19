import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { bodyValidators } from '../../middlewares/requiredBody';


export function controller(pathPrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.METHOD, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || [];
      const validator = bodyValidators(requiredBodyProps);
      if (path) {
        router[method](`${pathPrefix}/${path}`, ...middlewares, validator, routeHandler);
      }


    }
  }
}