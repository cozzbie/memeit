import { RequestOptions, XHRBackend } from '@angular/http';
import { AuthInterceptor } from '../providers/auth-interceptor';

export function AuthFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
    return new AuthInterceptor(backend, defaultOptions);
}
