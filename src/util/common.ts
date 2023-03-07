import moment from "moment";

export default (property:any) => {
    property.moment = moment

    // property.notify = function (type:string, msg:string, is_alert:boolean = false) {
    //     if (is_alert) {
    //         alert(msg)
    //     } else {
    //         if (type === 'error') {
    //             window.$('#alert-wrap').append("<div class=\"alert-content bg-red\"><i class=\"icon-alert-fail\"></i> <span>" + msg + "</span></div>")
    //         } else {
    //             window.$('#alert-wrap').append("<div class=\"alert-content\"><i class=\"icon-check\"></i> <span>" + msg + "</span></div>")
    //         }
    //         setTimeout(function () {
    //             window.$('#alert-wrap div:first-child').remove()
    //         }, 1000)
    //     }
    // }
    // interface httpErrorType {
    //     [key:string]: string
    //     error: any
    //     errors: any
    //     message: string
    // }
    // interface errorMsg {
    //     msg ?: string
    //     length?: number
    //     message ?: string
    // }
    // property.httpError = function (data: httpErrorType) {
    //     if (data.errors.length > 0 && data.errors[0].msg === 'Invalid token') {
    //         this.$toast.error('로그인이 필요합니다.')
    //         localStorage.removeItem('accessToken')
    //         localStorage.removeItem('refreshToken')
    //         this.$router.push({name: 'Login'}).catch(() => {
    //         })
    //     } else {
    //         if (data.message && data.message.length > 0) {
    //             this.$toast.error(data.message)
    //         } else if (data.error.length > 0) {
    //             let message = data.error[0].message
    //             this.$toast.error(message)
    //         } else if (data.errors.length > 0) {
    //             let message = data.errors[0].msg
    //             this.$toast.error(message)
    //         }
    //     }
    // }
    // 토큰 갱신
    interface refreshTokenSuccessType {
        data: {
            accessToken: string,
            refreshToken: string
        }
    }
    interface refreshTokenFailType {
        data: Object
    }
    property.refreshTokenRate = 5 * 60 * 1000
    property.refreshToken = function () {
        let refreshToken = localStorage.getItem('refreshToken')
        if (!refreshToken) {
            return
        }
        if (refreshToken) {
            let formData = new FormData()
            formData.append('refreshToken ', refreshToken)
            this.$post(this.$REFRESH_TOKEN, 'refreshToken', formData, (result:refreshTokenSuccessType) => {
                localStorage.setItem('accessToken', result.data.accessToken)
                localStorage.setItem('refreshToken', result.data.refreshToken)
                setTimeout(() => {
                    this.refreshToken()
                }, this.refreshTokenRate)
            }, (result:refreshTokenFailType) => {
                this.httpError(result.data)
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
            })
        }
    }


}
