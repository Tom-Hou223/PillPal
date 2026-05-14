import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface SuccessResponse<T> {
  code: number;
  message: string;
  data: T;
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, SuccessResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<SuccessResponse<T>> {
    const response = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((data) => {
        // If the controller returns a raw response (e.g. already formatted), skip wrapping
        if (data && typeof data === 'object' && 'code' in data && 'message' in data) {
          return data;
        }
        return {
          code: response.statusCode < 400 ? 0 : response.statusCode,
          message: 'success',
          data: data ?? null,
        };
      }),
    );
  }
}
