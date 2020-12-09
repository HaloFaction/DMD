<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import config from '@/admin.config.js'
	import "colorui/main.css";
	import "colorui/icon.css";
	export default {
		computed: {
			...mapGetters({
				isTokenValid: 'user/isTokenValid'
			})
		},
		methods: {
			...mapActions({
				init: 'app/init'
			})
		},
		onPageNotFound(msg) {
			uni.redirectTo({
				url: config.error.url
			})
		},
		onLaunch: function() {
			
			if (!this.isTokenValid) {
				uni.navigateTo({
					url: config.login.url
				})
			} else {
				this.init()
			}
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	@import '@/common/uni.css';
	@import '@/common/uni-icons.css';
</style>
