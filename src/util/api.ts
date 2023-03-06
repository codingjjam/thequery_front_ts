import axios, {AxiosResponse} from "axios";

export default (property:any) => {
    property.axios = axios;

    let requestOption = () => {
        return {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            timeout: 60000
        }
    }
    let requestOptionWithToken = () => {
        return {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': localStorage.getItem('accessToken'),
            },
            timeout: 60000
        }
    }

    interface pendingType {
        [key: string]: string[] | boolean;
    }

    let pending_get : pendingType
    let pending_post : pendingType
    let pending_put : pendingType
    let pending_delete : pendingType

    property.$DOMAIN = import.meta.env.VITE_APP_DOMAIN

    property.$post = function (callUrl:string, caller:string, postData:FormData, success:Function, fail:Function) {
        if (pending_post[arguments[0] + caller]) {
            console.log('request post fail : ' + arguments[0] + caller)
            return
        }
        pending_post[arguments[0] + caller] = true
        let _requestOption = requestOption()
        let token = localStorage.getItem('accessToken')
        if (token && token.length > 0) {
            _requestOption = requestOptionWithToken()
        }

        axios.post(this.$DOMAIN + callUrl, postData, _requestOption).then((response:AxiosResponse) => {
            pending_post[arguments[0] + caller] = false
            if (response.data.success) {
                success(response.data)
            } else {
                fail(response.data)
            }
        }).catch((e) => {
            pending_post[arguments[0] + caller] = false
            fail(e.response)
        })
    }

    property.$put = function (callUrl:string, caller:string, postData:FormData, success:Function, fail:Function) {
        if (pending_put[arguments[0] + caller]) {
            console.log('request put fail : ' + arguments[0] + caller)
            return
        }
        pending_put[arguments[0] + caller] = true
        let _requestOption = requestOption()
        let token = localStorage.getItem('accessToken')
        if (token && token.length > 0) {
            _requestOption = requestOptionWithToken()
        }

        axios.put(this.$DOMAIN + callUrl, postData, _requestOption).then((response:AxiosResponse) => {
            pending_put[arguments[0] + caller] = false
            if (response.data.success) {
                success(response.data)
            } else {
                fail(response.data)
            }
        }).catch((e) => {
            pending_put[arguments[0] + caller] = false
            fail(e.response)
        })
    }

    property.$delete = function (callUrl:string, caller:string, success:Function, fail:Function) {
        if (pending_delete[arguments[0] + caller]) {
            console.log('request delete fail : ' + arguments[0] + caller)
            return
        }
        pending_delete[arguments[0] + caller] = true
        let _requestOption = requestOption()
        let token = localStorage.getItem('accessToken')
        if (token && token.length > 0) {
            _requestOption = requestOptionWithToken()
        }

        axios.delete(this.$DOMAIN + callUrl, _requestOption).then((response:AxiosResponse) => {
            pending_delete[arguments[0] + caller] = false
            if (response.data.success) {
                success(response.data)
            } else {
                fail(response.data)
            }
        }).catch((e) => {
            pending_delete[arguments[0] + caller] = false
            fail(e.response)
        })
    }

    property.$get = function (callUrl:string, caller:string, success:Function, fail:Function) {
        if (pending_get[arguments[0] + caller]) {
            console.log('request get fail : ' + arguments[0] + caller)
            return
        }
        pending_get[arguments[0] + caller] = true
        let _requestOption = requestOption()
        let token = localStorage.getItem('accessToken')
        if (token && token.length > 0) {
            _requestOption = requestOptionWithToken()
        }
        axios.get(this.$DOMAIN + callUrl, _requestOption).then((response:AxiosResponse) => {
            pending_get[arguments[0] + caller] = false
            if (response.data.success) {
                success(response.data)
            } else {
                fail(response.data)
            }
        }).catch(e => {
            pending_get[arguments[0] + caller] = false
            fail(e.response)
        })
    }

}
