const {
	Controller
} = require('uni-cloud-router')
const uniID = require('uni-id')
module.exports = class UserController extends Controller {
	async login() {
		const {
			username,
			password
		} = this.ctx.data
		return this.service.user.login({
			username,
			password
		})
	}

	async register() {
		const {
			username,
			password
		} = this.ctx.data
		// const admin = await this.service.user.hasAdmin()
		// if (admin) {
		// 	return {
		// 		code: 10001,
		// 		message: '超级管理员已存在，请登录...'
		// 	}
		// }
		return uniID.register({
			username,
			password,
			// role: ["admin"]
			role:["user_look"]
		})
	}
	

	async logout() {
		return this.service.user.logout(this.ctx.event.uniIdToken)
	}

}