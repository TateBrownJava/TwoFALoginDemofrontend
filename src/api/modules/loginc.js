import request from '../http'
import requestUrl from '../requestUrl'

export function login(params) {
  return request.post(requestUrl('login'),params);
}

export function addOne(params) {
  return request.post(requestUrl('user/add'),params);
}

export function sendE(params) {
  return request.post(requestUrl('/user/sendEmail'),params);
}
export function forget(params) {
  return request.post(requestUrl('/user/forget'),params);
}
