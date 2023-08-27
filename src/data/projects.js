// Projects data.

const projects = [
	{
		id: 0,
		title: 'Velocore',
		category: 'DEX',
		img: require('@/assets/images/projects/velocore.png'),
		url: 'https://app.velocore.xyz/'
	},
	{
		id: 0,
		title: 'zkSoul ID',
		category: 'Identity',
		img: require('@/assets/images/projects/zksoul.png'),
		url: 'https://id.zkchat.net/'
	},
	{
		id: 0,
		title: 'EraLend',
		category: 'Lending',
		img: require('@/assets/images/projects/eralend.png'),
		url: 'https://www.eralend.com/'
	},
	{
		id: 0,
		title: '1inch',
		category: 'DEX Aggregator',
		img: require('@/assets/images/projects/1inch.png'),
		url: 'https://app.1inch.io/#/324/simple/swap/ETH/USDC'
	},
	{
		id: 0,
		title: 'ReactorFusion',
		category: 'Lending',
		img: require('@/assets/images/projects/rf.png'),
		url: 'https://reactorfusion.xyz/'
	},
	{
		id: 0,
		title: 'Bungee',
		category: 'Bridge',
		img: require('@/assets/images/projects/bungee.png'),
		url: 'https://www.bungee.exchange/'
	},
	{
		id: 0,
		title: 'zkAnimals',
		category: 'NFT',
		img: require('@/assets/images/projects/zkanimals.jpg'),
		url: 'https://zkanimal.xyz/'
	},
	{
		id: 0,
		title: 'SyncSwap',
		category: 'DEX',
		img: require('@/assets/images/projects/syncswap.png'),
		url: 'https://syncswap.xyz/'
	},
	{
		id: 0,
		title: 'Element',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/element.png'),
		url: 'https://element.market/'
	},
	{
		id: 0,
		title: 'Mute',
		category: 'DEX',
		img: require('@/assets/images/projects/mute.png'),
		url: 'https://mute.io/'
	},
	{
		id: 0,
		title: 'Frax',
		category: 'Stablecoin',
		img: require('@/assets/images/projects/frax.jpg'),
		url: 'https://frax.finance/'
	},
	{
		id: 0,
		title: 'OpenOcean',
		category: 'DEX Aggregator',
		img: require('@/assets/images/projects/openocean.jpg'),
		url: 'https://app.openocean.finance/CLASSIC#/ZKSYNC/ETH/USDC'
	},
	{
		id: 0,
		title: 'MES Protocol',
		category: 'DEX',
		img: require('@/assets/images/projects/mes.png'),
		url: 'https://www.mesprotocol.com/'
	},
	{
		id: 0,
		title: 'zkBoredApes',
		category: 'NFT',
		img: require('@/assets/images/projects/zk-bored-apes.jpg'),
		url: 'https://zkboredapes.com/'
	},
	{
		id: 0,
		title: 'zkMarkets',
		category: 'NFT marketplace',
		img: require('@/assets/images/projects/zkmarkets.png'),
		url: 'https://www.zkmarkets.com/zksync-era'
	},
	{
		id: 0,
		title: 'Rhino.fi',
		category: 'DeFi (other)',
		img: require('@/assets/images/projects/rhino.jpg'),
		url: 'https://app.rhino.fi/'
	}
	,
	{
		id: 0,
		title: 'Celer Network',
		category: 'Bridge',
		img: require('@/assets/images/projects/celer-network.png'),
		url: 'https://cbridge.celer.network/1/324/ETH'
	}
	,
	{
		id: 0,
		title: 'Orbiter Finance',
		category: 'Bridge',
		img: require('@/assets/images/projects/orbiter-finance.png'),
		url: 'https://www.orbiter.finance/?source=Ethereum&dest=zkSync%20Era'
	}
	,
	{
		id: 0,
		title: 'Layerswap',
		category: 'Bridge',
		img: require('@/assets/images/projects/layerswap.png'),
		url: 'https://www.layerswap.io/app'
	}
	,
	{
		id: 0,
		title: 'KyberSwap',
		category: 'DEX',
		img: require('@/assets/images/projects/kyberswap.png'),
		url: 'https://kyberswap.com/swap/zksync'
	}
	,
	{
		id: 0,
		title: 'Symbiosis',
		category: 'DEX',
		img: require('@/assets/images/projects/symbiosis.png'),
		url: 'https://app.symbiosis.finance/swap?chainIn=Ethereum&chainOut=ZkSync%20Era&tokenIn=ETH&tokenOut=ETH'
	}
	,
	{
		id: 0,
		title: 'PancakeSwap',
		category: 'DEX',
		img: require('@/assets/images/projects/pancakeswap.png'),
		url: 'https://pancakeswap.finance/swap?chain=zkSync'
	}
	,
	{
		id: 0,
		title: 'SynFutures',
		category: 'DEX',
		img: require('@/assets/images/projects/synfutures.png'),
		url: 'https://trade.synfutures.com/#/trade'
	}
	,
	{
		id: 0,
		title: 'Tevaera',
		category: 'Gaming',
		img: require('@/assets/images/projects/tevaera.png'),
		url: 'https://tevaera.com/'
	}
	,
	{
		id: 0,
		title: 'SpaceFi',
		category: 'DeFi (other)',
		img: require('@/assets/images/projects/spacefi.png'),
		url: 'https://app.spacefi.io/#/home'
	}
	,
	{
		id: 0,
		title: 'Crypto Maze',
		category: 'Gaming',
		img: require('@/assets/images/projects/cryptomaze.png'),
		url: 'https://race.cryptomaze.app/'
	}
	,
	{
		id: 0,
		title: 'Onchain Trade',
		category: 'DeFi (other)',
		img: require('@/assets/images/projects/onchain-trade.png'),
		url: 'https://onchain.trade/'
	}
	,
	{
		id: 0,
		title: 'Kreatorland',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/kreatorland.png'),
		url: 'https://kreatorland.com/'
	}
	,
	{
		id: 0,
		title: 'UniDex',
		category: 'DEX',
		img: require('@/assets/images/projects/unidex.png'),
		url: 'https://app.unidex.exchange/#/324/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
	}
	,
	{
		id: 0,
		title: 'Meson',
		category: 'Bridge',
		img: require('@/assets/images/projects/meson.png'),
		url: 'https://meson.fi/'
	}
	,
	{
		id: 0,
		title: 'XY Finance',
		category: 'DEX',
		img: require('@/assets/images/projects/xy.png'),
		url: 'https://app.xy.finance/'
	}
	,
	{
		id: 0,
		title: 'OpenMeta',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/openmeta.png'),
		url: 'https://nft.openmeta.finance/#/home'
	}
	,
	{
		id: 0,
		title: 'zkApe',
		category: 'NFT',
		img: require('@/assets/images/projects/zkape.png'),
		url: 'https://zkape.io/#/'
	}
	,
	{
		id: 0,
		title: 'Funkyland',
		category: 'NFT',
		img: require('@/assets/images/projects/funkyland.png'),
		url: 'https://app.funkyland.org/'
	}
	,
	{
		id: 0,
		title: 'Galaxia Studios',
		category: 'Gaming',
		img: require('@/assets/images/projects/galaxiastudios.png'),
		url: 'https://www.galaxiastudios.com/'
	}
	,
	{
		id: 0,
		title: 'Goal3',
		category: 'Betting',
		img: require('@/assets/images/projects/goal3.png'),
		url: 'https://beta.goal3.xyz/'
	}
	,
	{
		id: 0,
		title: 'Omnisea',
		category: 'NFT Launchpad',
		img: require('@/assets/images/projects/omnisea.png'),
		url: 'https://omnisea.org/'
	}
	,
	{
		id: 0,
		title: 'Maverick Protocol',
		category: 'DEX',
		img: require('@/assets/images/projects/mav.png'),
		url: 'https://app.mav.xyz/?chain=324'
	}
	,
	{
		id: 0,
		title: 'zkSync Name Service',
		category: 'Identity',
		img: require('@/assets/images/projects/zkns.png'),
		url: 'https://app.zkns.domains/'
	}
	,
	{
		id: 0,
		title: 'Dmail Network',
		category: 'Email',
		img: require('@/assets/images/projects/dmail.png'),
		url: 'https://dmail.ai/'
	}
	,
	{
		id: 0,
		title: 'zkBoost',
		category: 'Launchpad',
		img: require('@/assets/images/projects/zkboost.png'),
		url: 'https://zkboost.finance/'
	}
	,
	{
		id: 0,
		title: 'Zomma Protocol',
		category: 'Options',
		img: require('@/assets/images/projects/zomma.png'),
		url: 'https://app.zomma.pro/en/main/trade'
	}
	,
	{
		id: 0,
		title: 'Deri Protocol',
		category: 'Options & Perpetuals',
		img: require('@/assets/images/projects/deri.png'),
		url: 'https://deri.io/#/pro/trade/futures/ETHUSD'
	}
	,
	{
		id: 0,
		title: 'Whisper',
		category: 'DeFi (other)',
		img: require('@/assets/images/projects/whispertools.png'),
		url: 'https://app.whispertools.io/'
	}
	,
	{
		id: 0,
		title: 'Hue',
		category: 'NFT',
		img: require('@/assets/images/projects/huenft.png'),
		url: 'https://huenft.com/'
	}
	,
	{
		id: 0,
		title: 'ZNS',
		category: 'Identity',
		img: require('@/assets/images/projects/zns.png'),
		url: 'https://zns.is/'
	}
	,
	{
		id: 0,
		title: 'Galoswap',
		category: 'DEX',
		img: require('@/assets/images/projects/galoswap.png'),
		url: 'https://app.galoswap.io/'
	}
	,
	{
		id: 0,
		title: 'Mailchain',
		category: 'Email',
		img: require('@/assets/images/projects/mailchain.png'),
		url: 'https://mailchain.com/'
	}
	,
	{
		id: 0,
		title: 'HeartX',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/heartx.png'),
		url: 'https://heartx.art/explore'
	}
	,
	{
		id: 0,
		title: 'Tiny World',
		category: 'Gaming',
		img: require('@/assets/images/projects/tinyworlds.png'),
		url: 'https://tinyworlds.io/'
	}
	,
	{
		id: 0,
		title: 'Galaxyblitz',
		category: 'Gaming',
		img: require('@/assets/images/projects/galaxyblitz.png'),
		url: 'https://galaxyblitz.world/'
	}
	,
	{
		id: 0,
		title: 'zkVeggies',
		category: 'NFT',
		img: require('@/assets/images/projects/zkveggies.png'),
		url: 'https://zkveggies.com/'
	}
	,
	{
		id: 0,
		title: 'zkPengz',
		category: 'NFT',
		img: require('@/assets/images/projects/zkpengz.png'),
		url: 'https://zkpengz.com/'
	}
	,
	{
		id: 0,
		title: 'ZeroLend',
		category: 'Lending',
		img: require('@/assets/images/projects/zerolend.png'),
		url: 'https://app.zerolend.xyz/markets/'
	}
	,
	{
		id: 0,
		title: 'Interport Finance',
		category: 'DEX',
		img: require('@/assets/images/projects/interport.png'),
		url: 'https://app.interport.fi/1/324/ETH/ETH'
	}
	,
	{
		id: 0,
		title: 'zkSwap Finance',
		category: 'DEX',
		img: require('@/assets/images/projects/zkswap.png'),
		url: 'https://zkswap.finance/swap'
	}
	,
	{
		id: 0,
		title: 'zkEra Finance',
		category: 'Perpetuals',
		img: require('@/assets/images/projects/zkera.png'),
		url: 'https://app.zkera.fi/'
	}

];

export default projects;
