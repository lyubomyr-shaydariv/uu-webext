module.exports = [
    {
        name: 'audible.com',
        match: /www.audible.com/i,
        rules: ['qid', 'sr', 'pf_rd_p', 'pf_rd_r', 'plink', 'ref']
    },
    {
        name: 'amazon.com',
        match: /amazon\.[a-z0-9]{0,3}/i,
        replace: [/(\/ref|&ref_)=[^\/?]*/i]
    },
    {
        name: 'twitch.tv-email',
        match_href: true,
        match: /www.twitch.tv\/r\/e/i,
        decode: { handler: 'twitch.tv-email', targetPath: true }
    },
    {
        name: 'pixiv.net',
        match: /www.pixiv.net/i,
        rules: ['p', 'i', 'g']
    },
    {
        name: 'greenmangaming.com',
        match: /www.greenmangaming.com/i,
        rules: ['CJEVENT', 'cjevent', 'irclickid', 'irgwc', 'pdpgatetoken']
    },
    {
        name: 'fanatical.com',
        match: /www.fanatical.com/i,
        rules: ['cj_pid', 'cj_aid', 'aff_track', 'CJEVENT', 'cjevent']
    },
    {
        name: 'newsweek.com',
        match: /www.newsweek.com/i,
        rules: ['subref', 'amp']
    },
    {
        name: 'plex.tv',
        match: /.*.plex.tv/i,
        rules: ['origin', 'plex_utm', 'sl', 'ckhid']
    },
    {
        name: 'gog.com',
        match: /www.gog.com/i,
        rules: [
            'at_gd', 'rec_scenario_id', 'rec_sub_source_id', 'rec_item_id',
            'vds_id', 'prod_id', 'rec_source'
        ]
    },
    {
        name: 'store.steampowered.com',
        match: /store.steampowered.com/i,
        rules: ['snr']
    },
    {
        name: 'findojobs.co.nz',
        match: /www.findojobs.co.nz/i,
        rules: ['source']
    },
    {
        name: 'indeed.com',
        match: /.*.indeed.com/i,
        rules: ['from', 'attributionid']
    },
    {
        name: 'voidu.com',
        match: /voidu.com/i,
        rules: ['affiliate']
    },
    {
        name: 'wingamestore.com',
        match: /wingamestore.com/i,
        rules: ['ars']
    },
    {
        name: 'gamebillet.com',
        match: /gamebillet.com/i,
        rules: ['affiliate']
    },
    {
        name: 'gamesload.com',
        match: /^www.gamesload.com/i,
        rules: ['affil'],
        allow: ['REF']
    },
    {
        name: 'mightyape',
        match: /mightyape.(co.nz|com.au)/i,
        rules: ['m']
    },
    {
        name: 'adtraction.com',
        match: /adtraction.com/i,
        redirect: 'url'
    },
    {
        name: 'dpbolvw.net',
        match: /dpbolvw.net/i,
        redirect: 'url'
    },
    {
        name: 'lenovo.com',
        match: /.*.lenovo.com/i,
        rules: ['PID', 'clickid', 'irgwc', 'cid', 'acid', 'linkTrack']
    },
    {
        name: 'steamcommunity.com',
        match: /steamcommunity.com/i,
        redirect: 'url'
    },
    {
        name: 'steamcommunity.com/linkfilter',
        match: /steamcommunity.com\/linkfilter/i,
        redirect: 'u',
        match_href: true
    },
    {
        name: 'berrybase.de',
        match: /berrybase.de/i,
        rules: ['sPartner']
    },
    {
        name: 'nuuvem.com',
        match: /www.nuuvem.com/i,
        rules: ['ranMID', 'ranEAID', 'ranSiteID']
    },
    {
        name: 'sjv.io',
        match: /.*.sjv.io/i,
        redirect: 'u'
    },
    {
        name: 'linksynergy.com',
        match: /.*.linksynergy.com/i,
        rules: ['id', 'mid'],
        redirect: 'murl'
    },
    {
        name: 'cnbc.com',
        match: /www.cnbc.com/i,
        rules: ['__source']
    },
    {
        name: 'ticketmaster.co.nz',
        match: /ticketmaster.co.nz/i,
        rules: ['tm_link']
    },
    {
        name: 'bostonglobe.com',
        match: /bostonglobe.com/i,
        rules: ['p1']
    },
    {
        name: 'ampproject.org',
        match: /cdn.ampproject.org/i,
        rules: ['amp_gsa', 'amp_js_v', 'usqp', 'outputType'],
        amp: {
            regex: /cdn\.ampproject\.org\/v\/s\/(.*)\#(aoh|csi|referrer|amp)/gim
        }
    },
    {
        name: 'nbcnews.com',
        match: /nbcnews.com/i,
        rules: ['fbclid'],
        amp: {
            replace: {
                text: 'www.nbcnews.com/news/amp/',
                with: 'www.nbcnews.com/news/'
            }
        }
    },
    {
        name: 'countdown.co.nz',
        match: /www.countdown.co.nz/i,
        rules: ['promo_name', 'promo_creative', 'promo_position', 'itemID']
    },
    {
        name: 'wattpad.com',
        match: /www.wattpad.com/i,
        rules: ['wp_page', 'wp_uname', 'wp_originator']
    },
    {
        name: 'redirect.viglink.com',
        match: /redirect.viglink.com/i,
        redirect: 'u'
    },
    {
        name: 'noctre.com',
        match: /www.noctre.com/i,
        rules: ['aff']
    },
    {
        name: 'dreamgame.com',
        match: /www.dreamgame.com/i,
        rules: ['affiliate']
    },
    {
        name: 'startpage.com',
        match: /.*.startpage.com/i,
        rules: ['source']
    },
    {
        name: '2game.com',
        match: /^2game.com/i,
        rules: ['ref']
    },
    {
        name: 'jdoqocy.com',
        match: /^www.jdoqocy.com/i,
        redirect: 'url'
    },
    {
        name: 'gamesplanet.com',
        match: /^(?:.*\.|)gamesplanet\.com/i,
        rules: ['ref']
    },
    {
        name: 'gamersgate.com',
        match: /www.gamersgate.com/i,
        rules: ['aff']
    },
    {
        name: 'gate.sc',
        match: /gate.sc/i,
        redirect: 'url'
    },
    {
        name: 'getmusicbee.com',
        match: /^getmusicbee.com/i,
        redirect: 'r'
    },
    {
        name: 'imp.i305175.net',
        match: /^imp.i305175.net/i,
        redirect: 'u'
    },
    {
        name: 'qflm.net',
        match: /.*.qflm.net/i,
        redirect: 'u'
    },
    {
        name: 'anrdoezrs.net',
        match: /anrdoezrs.net/i,
        amp: {
            regex: /(?:.*)\/links\/(?:.*)\/type\/dlg\/sid\/\[subid_value\]\/(.*)/gi
        }
    },
    {
        name: 'emjcd.com',
        match: /^www.emjcd.com/i,
        decode: {
            param: 'd',
            lookFor: 'destinationUrl'
        }
    },
    {
        name: 'go2cloud.org',
        match: /^.*.go2cloud.org/i,
        redirect: 'aff_unique1'
    },
    {
        name: 'bn5x.net',
        match: /^.*.bn5x.net/i,
        redirect: 'u'
    },
    {
        name: 'tvguide.com',
        match: /^www.tvguide.com/i,
        amp: { regex: /(.*)\#link=/i }
    },
    {
        name: 'ranker.com',
        match: /^(www|blog).ranker.com/i,
        rules: ['ref', 'rlf', 'l', 'li_source', 'li_medium']
    },
    {
        name: 'tkqlhce.com',
        match: /^www.tkqlhce.com/i,
        redirect: 'url'
    },
    {
        name: 'flexlinkspro.com',
        match: /^track.flexlinkspro.com/i,
        redirect: 'url'
    },
    {
        name: 'watchworthy.app',
        match: /^watchworthy.app/i,
        rules: ['ref']
    },
    {
        name: 'hbomax.com',
        match: /^trk.hbomax.com/i,
        redirect: 'url'
    },
    {
        name: 'squarespace.com',
        match: /^.*.squarespace.com/i,
        rules: ['subchannel', 'source', 'subcampaign', 'campaign', 'channel', '_ga']
    },
    {
        name: 'primevideo.com',
        match: /^www.primevideo.com/i,
        rules: ['dclid'],
        replace: [/\/ref=[^\/?]*/i]
    },
    {
        name: 'threadless.com',
        match: /^www.threadless.com/i,
        rules: ['itm_source_s', 'itm_medium_s', 'itm_campaign_s'],
    },
    {
        name: 'thewarehouse.co.nz',
        match: /^www.thewarehouse.co.nz/i,
        rules: ['sfmc_j', 'sfmc_id', 'sfmc_mid', 'sfmc_uid', 'sfmc_id', 'sfmc_activityid'],
    },
    {
        name: 'awstrack.me',
        match: /^.*awstrack.me/i,
        amp: { regex: /awstrack.me\/L0\/(.*)/ }
    },
    {
        name: 'express.co.uk',
        match: /^www.express.co.uk/i,
        replace: [/\/amp$/i]
    },
    {
        name: 'ko-fi.com',
        match: /^ko-fi.com/i,
        rules: ['ref', 'src']
    },
    {
        name: 'indiegala.com',
        match: /^www.indiegala.com/i,
        rules: ['ref']
    },
    {
        name: 'l.messenger.com',
        match: /^l.messenger.com/i,
        redirect: 'u'
    },
    {
        name: 'transparency.fb.com',
        match: /^transparency.fb.com/i,
        rules: ['source']
    },
    {
        name: 'manymorestores.com',
        match: /^www.manymorestores.com/i,
        rules: ['ref']
    },
    {
        name: 'macgamestore.com',
        match: /^www.macgamestore.com/i,
        rules: ['ars']
    },
    {
        name: 'blizzardgearstore.com',
        match: /^www.blizzardgearstore.com/i,
        rules: ['_s']
    },
    {
        name: 'playbook.com',
        match: /^www.playbook.com/i,
        rules: ['p']
    },
    {
        name: 'cookiepro.com',
        match: /^.*.cookiepro.com/i,
        rules: ['source', 'referral']
    },
    {
        name: 'jf79.net',
        match: /^jf79\.net/i,
        rules: ['li', 'wi', 'ws', 'ws2']
    },
    {
        name: 'frankenergie.nl',
        match: /^www\.frankenergie\.nl/i,
        rules: ['aff_id']
    },
    {
        name: 'nova.cz',
        match: /^.*\.nova\.cz/i,
        rules: ['sznclid'],
    },
    {
        name: 'cnn.com',
        match: /.*.cnn.com/i,
        rules: ['hpt', 'iid'],
        amp: {
            replace: {
                text: 'amp.cnn.com/cnn/',
                with: 'www.cnn.com/'
            }
        },
        exclude: [
            /e.newsletters.cnn.com/gi,
        ]
    },
    {
        name: 'amp.scmp.com',
        match: /amp\.scmp\.com/i,
        amp: {
            replace: {
                text: 'amp.scmp.com',
                with: 'scmp.com'
            }
        }
    },
    {
        name: 'justwatch.com',
        match: /click\.justwatch\.com/i,
        rules: ['cx','uct_country', 'uct_buybox', 'sid'],
        redirect: 'r'
    },
    {
        name: 'psychologytoday.com',
        match: /www\.psychologytoday\.com/i,
        rules: ['amp']
    },
    {
        name: 'mouser.com',
        match: /www\.mouser\.com/i,
        rules: ['qs']
    },
    {
        name: 'awin1.com',
        match: /www\.awin1\.com/i,
        redirect: 'ued',
        rules: ['awinmid', 'awinaffid', 'clickref']
    },
    {
        name: 'syteapi.com',
        match: /syteapi\.com/i,
        decode: { param: 'url', encoding: 'base64' }
    },
    {
        name: 'castorama.fr',
        match: /www\.castorama\.fr/i,
        rules: ['syte_ref']
    },
    {
        name: 'quizlet.com',
        match: /quizlet\.com/i,
        rules: ['funnelUUID', 'source']
    },
    {
        name: 'pbtech.co.nz',
        match: /www\.pbtech\.co\.nz/i,
        rules: ['qr']
    },
    {
        name: 'eufy.com',
        match: /eufy\.com/i,
        rules: ['ref']
    },
    {
        name: 'newsflare.com',
        match: /www\.newsflare\.com/i,
        rules: ['jwsource']
    },
    {
        name: 'wish.com',
        match: /www\.wish\.com/i,
        rules: ['share']
    },
    {
        name: 'lowes.com',
        match: /www\.lowes\.com/i,
        rules: ['cm_mmc', 'ds_rl', 'gbraid']
    },
    {
        name: 'stacks.wellcomecollection.org',
        match: /stacks\.wellcomecollection\.org/i,
        rules: ['source']
    },
    {
        name: 'redbubble.com',
        match: /.*\.redbubble\.com/i,
        rules: ['ref']
    },
    {
        name: 'inyourarea.co.uk',
        match: /inyourarea.co.uk/i,
        rules: ['from_reach_primary_nav', 'from_reach_footer_nav', 'branding']
    },
    {
        name: 'fiverr.com',
        match: /.*\.fiverr\.com/i,
        rules: [
            'source', 'context_referrer', 'referrer_gig_slug',
            'ref_ctx_id', 'funnel', 'imp_id'
        ]
    },
    {
        name: 'kqzyfj.com',
        match: /www\.kqzyfj\.com/i,
        redirect: 'url',
        rules: ['cjsku', 'pubdata']
    },
    {
        name: 'marca.com',
        match: /.*\.marca\.com/i,
        rules: ['intcmp', 's_kw', 'emk']
    },
    {
        name: 'marcaentradas.com',
        match: /.*\.marcaentradas\.com/i,
        rules: ['intcmp', 's_kw']
    },
    {
        name: 'honeycode.aws',
        match: /.*\.honeycode\.aws/i,
        rules: [
            'trackingId', 'sc_icampaign', 'sc_icontent', 'sc_ichannel',
            'sc_iplace', 'sc_country', 'sc_outcome', 'sc_geo',
            'sc_campaign', 'sc_channel', 'trkCampaign', 'trk'
        ]
    },
    {
        name: 'news.artnet.com',
        match: /news\.artnet\.com/i,
        replace: [/\/amp-page$/i]
    },
    {
        name: 'studentbeans.com',
        match: /www\.studentbeans\.com/i,
        rules: ['source']
    },
    {
        name: 'boxofficemojo.com',
        match: /boxofficemojo.com/i,
        rules: ['ref_']
    },
    {
        name: 'solodeportes.com.ar',
        match: /www.solodeportes.com.ar/i,
        rules: ['nosto', 'refSrc']
    },
    {
        name: 'amp.dw.com',
        match: /amp.dw.com/i,
        amp: {
            replace: {
                text: 'amp.dw.com',
                with: 'dw.com'
            }
        }
    },
    {
        name: 'joybuggy.com',
        match: /joybuggy.com/i,
        rules: ['ref']
    },
    {
        name: 'etail.market',
        match: /etail.market/i,
        rules: ['tracking']
    },
    {
        name: 'myanimelist.net',
        match: /myanimelist.net/i,
        rules: ['_location', 'click_type', 'click_param']
    },
    {
        name: 'support-dev.discord.com',
        match: /support-dev.discord.com/i,
        rules: ['ref']
    },
    {
        name: 'dlgamer.com',
        match: /dlgamer.com/i,
        rules: ['affil']
    },
    {
        name: 'newsletter.manor.ch',
        match: /newsletter.manor.ch/i,
        rules: ['user_id_1'],
        rev: true
    },
    {
        name: 'knowyourmeme.com',
        match: /amp.knowyourmeme.com/i,
        amp: {
            replace: {
                text: 'amp.knowyourmeme.com',
                with: 'knowyourmeme.com'
            }
        }
    },
    {
        name: 'ojrq.net',
        match: /ojrq.net/i,
        redirect: 'return'
    },
    {
        name: 'click.pstmrk.it',
        match: /click.pstmrk.it/i,
        amp: { regex: /click\.pstmrk\.it\/(?:[a-zA-Z0-9]){1,2}\/(.*?)\//gim }
    },
    {
        name: 'track.roeye.co.nz',
        match: /track.roeye.co.nz/i,
        redirect: 'path'
    },
    {
        name: 'producthunt.com',
        match: /producthunt.com/i,
        rules: ['ref']
    },
    {
        name: 'cbsnews.com',
        match: /www.cbsnews.com/i,
        rules: ['ftag', 'intcid'],
        amp: {
            replace: {
                text: 'cbsnews.com/amp/',
                with: 'cbsnews.com/'
            }
        }
    },
    {
        name: 'jobs.venturebeat.com',
        match: /jobs.venturebeat.com/i,
        rules: ['source']
    },
    {
        name: 'api.ffm.to',
        match: /api.ffm.to/i,
        decode: {
            param: 'cd',
            lookFor: 'destUrl'
        }
    },
    {
        name: 'wfaa.com',
        match: /www.wfaa.com/i,
        rules: ['ref']
    },
    {
        name: 'buyatoyota.com',
        match: /www.buyatoyota.com/i,
        rules: ['siteid']
    },
    {
        name: 'independent.co.uk',
        match: /www.independent.co.uk/i,
        rules: ['amp', 'regSourceMethod']
    },
    {
        name: 'lenovo.vzew.net',
        match: /lenovo.vzew.net/i,
        redirect: 'u'
    },
    {
        name: 'stats.newswire.com',
        match: /stats.newswire.com/i,
        decode: { param: 'final' }
    },
    {
        name: 'optigruen.com',
        match: /www\.optigruen\.[a-z0-9]{0,3}/i,
        rules: ['cHash', 'chash', 'mdrv']
    },
    {
        name: 'osi.rosenberger.com',
        match: /osi.rosenberger.com/i,
        rules: ['cHash', 'chash']
    },
    {
        name: 'cbc.ca',
        match: /cbc.ca/i,
        rules: ['__vfz', 'cmp', 'referrer']
    },
    {
        name: 'local12.com',
        match: /local12.com/i,
        rules: ['_gl']
    },
    {
        name: 'eufylife.com',
        match: /eufylife.com/i,
        rules: ['ref']
    },
    {
        name: 'walmart.com',
        match: /walmart.com/i,
        redirect: 'rd'
    },
    {
        name: 'adclick.g.doubleclick.net',
        match: /adclick.g.doubleclick.net/i,
        redirect: 'adurl'
    },
    {
        name: 'dyno.gg',
        match: /dyno.gg/i,
        rules: ['ref']
    },
    {
        name: 'eufylife.com',
        match: /eufylife.com/i,
        rules: ['ref']
    },
    {
        name: 'connect.studentbeans.com',
        match: /connect.studentbeans.com/i,
        rules: ['ref']
    },
    {
        name: 'urldefense.proofpoint.com',
        match: /urldefense.proofpoint.com/i,
        decode: {
            param: 'u',
            handler: 'urldefense.proofpoint.com'
        }
    },
    {
        name: 'curseforge.com',
        match: /www.curseforge.com/i,
        redirect: 'remoteurl'
    },
    {
        name: 's.pemsrv.com',
        match: /s.pemsrv.com/i,
        rules: [
            'cat', 'idzone', 'type', 'sub', 'block',
            'el', 'tags', 'cookieconsent', 'scr_info'
        ],
        redirect: 'p'
    },
    {
        name: 'chess.com',
        match: /www.chess.com/i,
        rules: ['c']
    },
    {
        name: 'porndude.link',
        match: /porndude.link/i,
        rules: ['ref']
    },
    {
        name: 'patchbot.io',
        match: /patchbot.io/i,
        decode: {
            targetPath: true,
            handler: 'patchbot.io'
        }
    },
    {
        name: 'milkrun.com',
        match: /milkrun.com/i,
        rules: [
            '_branch_match_id',
            '_branch_referrer'
        ]
    },
    {
        name: 'gog.salesmanago.com',
        match: /gog.salesmanago.com/i,
        rules: [
            'smclient', 'smconv', 'smlid'
        ],
        redirect: 'url'
    },
    {
        name: 'dailymail.co.uk',
        match: /dailymail.co.uk/i,
        rules: ['reg_source', 'ito']
    },
    {
        name: 'stardockentertainment.info',
        match: /www.stardockentertainment.info/i,
        decode: {
            targetPath: true,
            handler: 'stardockentertainment.info',
        }
    },
    {
        name: 'steam.gs',
        match: /steam.gs/i,
        decode: {
            targetPath: true,
            handler: 'steam.gs'
        }
    },
    {
        name: '0yxjo.mjt.lu',
        match: /0yxjo.mjt.lu/i,
        decode: {
            targetPath: true,
            handler: '0yxjo.mjt.lu',
        }
    },
    {
        name: 'click.redditmail.com',
        match: /click.redditmail.com/i,
        decode: {
            targetPath: true,
            handler: 'click.redditmail.com',
        }
    },
    {
        name: 'deals.dominos.co.nz',
        match: /deals.dominos.co.nz/i,
        decode:{
            targetPath: true,
            handler: 'deals.dominos.co.nz'
        }
    },
    {
        name: 'hashnode.com',
        match: /(?:.*\.)?hashnode\.com/i,
        rules: ['source']
    },
    {
        name: 's.amazon-adsystem.com',
        match: /s.amazon-adsystem.com/i,
        rules: ['dsig', 'd', 'ex-fch', 'ex-fargs', 'cb'],
        redirect: 'rd'
    },
    {
        name: 'hypable.com',
        match: /www.hypable.com/i,
        amp: { replace: { text: /amp\/$/gi } }
    },
    {
        name: 'theguardian.com',
        match: /theguardian.com/i,
        amp: {
            replace: {
                text: 'amp.theguardian.com',
                with: 'theguardian.com'
            }
        }
    },
    {
        name: 'indiatoday.in',
        match: /www.indiatoday.in/i,
        amp: {
            replace: {
                text: 'www.indiatoday.in/amp/',
                with: 'www.indiatoday.in/'
            }
        }
    },
    {
        name: 'seek.co.nz',
        match: /www.seek.co.nz/i,
        rules: ['tracking', 'sc_trk']
    },
    {
        name: 'seekvolunteer.co.nz',
        match: /seekvolunteer.co.nz/i,
        rules: ['tracking', 'sc_trk']
    },
    {
        name: 'seekbusiness.com.au',
        match: /www.seekbusiness.com.au/i,
        rules: ['tracking', 'cid']
    },
    {
        name: 'garageclothing.com',
        match: /www.garageclothing.com/i,
        rules: ['syte_ref', 'site_ref']
    },
    {
        name: 'urbandictionary.com',
        match: /urbandictionary.com/i,
        rules: ['amp']
    },
    {
        name: 'norml.org',
        match: /norml.org/i,
        rules: ['amp']
    },
    {
        name: 'nbcconnecticut.com',
        match: /www.nbcconnecticut.com/i,
        rules: ['amp']
    },
    {
        name: 'pbs.org',
        match: /www.pbs.org/i,
        amp: {
            replace: {
                text: 'pbs.org/newshour/amp/',
                with: 'pbs.org/newshour/'
            }
        }
    },
    {
        name: 'm.thewire.in',
        match: /m.thewire.in/i,
        amp: {
            replace: {
                text: 'm.thewire.in/article/',
                with: 'thewire.in/'
            },
            sliceTrailing: '/amp'
        }
    },
    {
        name: 'ladysmithchronicle.com',
        match: /www.ladysmithchronicle.com/i,
        rules: ['ref']
    },
    {
        name: 'businesstoday.in',
        match: /www.businesstoday.in/i,
        amp: {
            replace: {
                text: 'www.businesstoday.in/amp/markets/',
                with: 'www.businesstoday.in/markets/'
            }
        }
    },
    {
        name: 'turnto10.com',
        match: /turnto10.com/i,
        amp: {
            replace: {
                text: 'turnto10.com/amp/',
                with: 'turnto10.com/'
            }
        }
    },
    {
        name: 'gadgets360.com',
        match: /www.gadgets360.com/i,
        amp: {
            sliceTrailing: '/amp'
        }
    },
    {
        name: 'm10news.com',
        match: /m10news.com/i,
        rules: ['amp']
    },
    {
        name: 'elprogreso.es',
        match: /www.elprogreso.es/i,
        amp: {
            replace: {
                text: '.amp.html',
                with: '.html'
            }
        }
    },
    {
        name: 'thenewsminute.com',
        match: /www.thenewsminute.com/i,
        amp: {
            replace: {
                text: 'www.thenewsminute.com/amp/story/',
                with: 'www.thenewsminute.com/'
            }
        }
    },
    {
        name: 'mirror.co.uk',
        match: /www.mirror.co.uk/i,
        amp: {
            sliceTrailing: '.amp'
        }
    },
    {
        name: 'libretro.com',
        match: /www.libretro.com/i,
        rules: ['amp']
    },
    {
        name: 'the-sun.com',
        match: /www.the-sun.com/i,
        amp: {
            sliceTrailing: 'amp/'
        }
    },
    {
        name: 'bostonherald.com',
        match: /bostonherald.com/i,
        rules: ['g2i_source', 'g2i_medium', 'g2i_campaign'],
        amp: {
            sliceTrailing: 'amp/'
        }
    },
    {
        name: 'playshoptitans.com',
        match: /playshoptitans.com/i,
        rules: ['af_ad', 'pid', 'source_caller', 'shortlink', 'c']
    },
    {
        name: 'news.com.au',
        match: /www.news.com.au/i,
        rules: ['sourceCode']
    },
    {
        name: 'wvva.com',
        match: /www.wvva.com/i,
        rules: ['outputType']
    },
    {
        name: 'realestate.com.au',
        match: /www.realestate.com.au/i,
        rules: [
            'campaignType', 'campaignChannel', 'campaignName',
            'campaignContent', 'campaignSource', 'campaignPlacement',
            'sourcePage', 'sourceElement', 'cid'
        ]
    },
    {
        name: 'redirectingat.com',
        match: /redirectingat.com/i,
        redirect: 'url',
        rules: ['id', 'xcust', 'xs'],
        decode: { handler: 'redirectingat.com', targetPath: true }
    },
    {
        name: 'map.sewoon.org',
        match: /map.sewoon.org/i,
        rules: ['cid']
    },
    {
        name: 'vi-control.net',
        match: /[&?]source=https:\/\/vi-control\.net\/community$/,
        match_href: true,
        rules: ['source']
    },
    {
        name: 'rosequake.com',
        match: /www.rosequake.com/i,
        rules: ['edmID', 'linkID', 'userID', 'em', 'taskItemID'],
        redirect: 'to'
    },
    {
        name: 'rekrute.com',
        match: /www.rekrute.com/i,
        rules: ['clear'],
        // Malicious domain. This rule will bypass the XSS attempt
        redirect: 'keyword'
    },
    {
        name: 'go.skimresources.com',
        match: /go.skimresources.com/i,
        rules: ['id', 'xs', 'xcust'],
        redirect: 'url'
    },
    {
        name: 'khnum-ezi.com',
        match: /khnum-ezi.com/i,
        rules: [
            'browserWidth', 'browserHeight', 'iframeDetected',
            'webdriverDetected', 'gpu', 'timezone', 'visitid',
            'type', 'timezoneName'
        ]
    },
    {
        name: 'theatlantic.com',
        match: /(?:www|accounts)\.theatlantic\.com/i,
        rules: ['source', 'referral']
    },
    {
        name: 'rumble.com',
        match: /rumble.com/i,
        rules: ['e9s']
    },
    {
        name: 'cointiply.com',
        match: /cointiply.com/i,
        rules: ['source_cta']
    },
    {
        name: 'dev.to',
        match: /dev.to/,
        rules: ['t', 's', 'u'],
        redirect: 'u'
    },
    {
        name: 'milda-clq.com',
        // Linked to (khnum-ezi.com) as they are the same
        match: /milda-clq.com/,
        rules: [
            'visitid', 'type', 'browserWidth',
            'browserHeight', 'webdriverDetected',
            'timezone', 'gpu', 'iframeDetected',
            'timezoneName'
        ]
    }
]
