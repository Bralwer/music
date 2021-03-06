import Home from '@views/Home/Home';

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			title: '首页'
		},
		component: Home,
		children: [
			/***************************************************************************************************/
			{
				path: '/player',
				meta: {
					keepAlive: true,
					title: '播放器'
				},
				component: () => import('@views/Player/Player')
			},
			/***************************************************************************************************/
			{
				path: '/login',
				meta: {
					title: '登录',
					keepAlive: false
				},
				component: () => import('@views/Login/Login')
			},
			/***************************************************************************************************/
			{
				path: '/dynamic/:userId',
				meta: {
					title: '动态',
					keepAlive: false
				},
				component: () => import('@views/User/Dynamic')
			},
			/***************************************************************************************************/
			{
				path: '/search',
				meta: {
					title: '搜索',
					keepAlive: false
				},
				component: () => import('@views/Search/Search'),
				children: [
					{
						path: '/search/:keywords',
						meta: {
							title: '搜索详情'
						},
						component: () => import('@views/Search/Result'),
						children: [
							{
								path: '/search/:keywords/player',
								meta: {
									title: '播放器'
								},
								component: () => import('@views/Player/Player')
							},
							{
								path: '/search/:keywords/:id',
								meta: {
									title: '歌单详情'
								},
								component: () => import('@views/Search/Sonplay'),
								children: [
									{
										path: '/search/:keywords/:id/player',
										meta: {
											title: '播放器'
										},
										component: () => import('@views/Player/Player')
									}
								]
							},
							{
								path: '/search/:keywords/singer/:id',
								meta: {
									title: '歌手详情'
								},
								component: () => import('@views/Search/Singer'),
								children: [
									{
										path: '/search/:keywords/singer/:id/player',
										meta: {
											title: '播放器'
										},
										component: () => import('@views/Player/Player')
									}
								]
							},
							{
								path: '/search/:keywords/albplay/:id',
								meta: {
									title: '专辑详情'
								},
								component: () => import('@views/Search/Albplay'),
								children: [
									{
										path: '/search/:keywords/albplay/:id/player',
										meta: {
											title: '播放器'
										},
										component: () => import('@views/Player/Player')
									}
								]
							}
						]
					}
				]
			},
			/***************************************************************************************************/
			{
				path: '/sonplay/:id',
				meta: {
					title: '歌单详情'
				},
				component: () => import('@views/Sonplay/Sonplay'),
				children: [
					{
						path: '/sonplay/:id/player',
						meta: {
							title: '播放器'
						},
						component: () => import('@views/Player/Player')
					}
				]
			},
			/***************************************************************************************************/
			{
				path: '/singer/:id',
				meta: {
					title: '歌手详情'
				},
				component: () => import('@views/Singer/Singer'),
				children: [
					{
						path: '/singer/:id/player',
						meta: {
							title: '播放器'
						},
						component: () => import('@views/Player/Player')
					}
				]
			},
			/***************************************************************************************************/
			{
				path: '/ranking',
				meta: {
					title: '排行榜'
				},
				component: () => import('@views/Ranking/Ranking'),
				children: [
					{
						path: '/ranking/player',
						meta: {
							title: '播放器'
						},
						component: () => import('@views/Player/Player')
					},
					{
						path: '/ranking/sonplay/:id',
						meta: {
							title: '排行榜'
						},
						component: () => import('@views/Ranking/Sonplay'),
						children: [
							{
								path: '/ranking/sonplay/:id/player',
								meta: {
									title: '播放器'
								},
								component: () => import('@views/Player/Player')
							}
						]
					}
				]
			},
			/***************************************************************************************************/
			{
				path: '/square',
				meta: {
					title: '歌单广场'
				},
				component: () => import('@views/Square/Square'),
				children: [
					{
						path: '/square/player',
						meta: {
							title: '播放器'
						},
						component: () => import('@views/Player/Player')
					},
					{
						path: '/square/sonplay/:id',
						meta: {
							title: '歌单详情'
						},
						component: () => import('@views/Square/Sonplay'),
						children: [
							{
								path: '/square/sonplay/:id/player',
								meta: {
									title: '播放器'
								},
								component: () => import('@views/Player/Player')
							}
						]
					}
				]
			},
			/***************************************************************************************************/
			{
				path: '/dayplay',
				meta: {
					title: '每日推荐'
				},
				component: () => import('@views/Dayplay/Dayplay'),
				children: [
					{
						path: '/dayplay/player',
						meta: {
							title: '播放器'
						},
						component: () => import('@views/Player/Player')
					}
				]
			}
			/***************************************************************************************************/
		]
	}
];

export default routes;
