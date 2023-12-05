import{_ as a,o,c as e,R as r}from"./chunks/framework.rW_MhUre.js";const b=JSON.parse('{"title":"第三章 多链争霸，区块链及其未来","description":"","frontmatter":{"title":"第三章 多链争霸，区块链及其未来","description":"","lead":"","date":"2022-07-01T01:49:31.000Z","lastmod":"2022-07-01T01:49:31.000Z","draft":false,"images":[],"weight":3,"type":"docs","toc":true,"contributors":["数字观察"]},"headers":[],"relativePath":"web3/web3漫游指南/03 第三章 多链争霸.md","filePath":"web3/web3漫游指南/03 第三章 多链争霸.md","lastUpdated":1701762435000}'),l={name:"web3/web3漫游指南/03 第三章 多链争霸.md"},t=r('<h1 id="第三张-多链争霸" tabindex="-1">第三张 多链争霸 <a class="header-anchor" href="#第三张-多链争霸" aria-label="Permalink to &quot;第三张 多链争霸&quot;">​</a></h1><blockquote><ul><li>本文作者 <a href="https://new.qq.com/omn/author/20538613" target="_blank" rel="noreferrer">数字观察</a> ；</li><li>仅做部分排版调整；</li></ul></blockquote><h2 id="一-以太坊还是非以太坊-这是底层问题" tabindex="-1">一. 以太坊还是非以太坊？这是底层问题 <a class="header-anchor" href="#一-以太坊还是非以太坊-这是底层问题" aria-label="Permalink to &quot;一. 以太坊还是非以太坊？这是底层问题&quot;">​</a></h2><p>大多数人都开始相信，我们会生活在一个多链的世界中，而不是仅有以太坊这个第二代区块链开山者（第一代区块链是比特币）独揽天下。那这个多链的世界以什么样的形式展开？会拓展到什么样的境地？这一幅未来世界的画卷——你大可以让自己的想象力驰骋万里！</p><p>首先我们引入一个概念，那就是 EVM（Ethereum Virtual Machine 以太虚拟机）的概念。什么是 EVM 呢？简单来说，以太坊就是一个大型数据结构，它不仅保存所有帐户和余额，而且还保存了一个机器状态，就是我们所说的“EVM 以太虚拟机”。它可以根据预定义的一组规则在不同的区块之间进行更改，并且可以执行任意的机器代码。 <a href="https://ethereum.org/zh/developers/docs/evm/" target="_blank" rel="noreferrer">在区块中更改状态的具体规则由 EVM 定义</a> 。它就是一个由这样的虚拟结构组成的计算机。</p><p>因此，多链格局的底层问题就是：到底在不在以太坊 EVM 上运营？就好比，你选择在什么样的文化土壤上生活和创业一样。这是做任何 Web3 创业前首先要给自己的灵魂拷问。</p><p>首先，以太坊 EVM 肯定会成为未来数十年的重要标准之一（0 层或 1 层的基础标准），但肯定不会是唯一。在接下来的几节中，我将介绍在底层架构的王座争夺战中其他的佼佼者们。</p><p>这种王座的竞争其实也是争夺市场心智的大战。目前的区块链领域还处在“春秋时代”，但不久之后“战国时代”的号角一定会吹响。因此你需要提前了解并判断哪些玩家可能笑到最后。虽然目前有数百或数千个特定场景应用的所谓“二层链”、“平行链”或“Zone”，但最终这个世界是不会留存数百个不同标准的。互联网技术平台的底层格局到最后基本都会是“双寡头垄断”。</p><p>虽然这次也有可能会有所不同，但其实开发者们，尤其是那些新的项目团队，短期内也不太可能选择与前 2–3 名之外的其他 EVM 去集成，除非那些协议拥有极其卓越且更适合他们的技术能力。大家基本都会面临一个选择，要么走以太坊 EVM 的安全路线，要么选择在其他技术堆栈上建立自己的新土地。在目前的熊市里，这还真是一个艰难的决定！</p><h2 id="二-区块链们的-三观-差异" tabindex="-1">二. 区块链们的“三观”差异 <a class="header-anchor" href="#二-区块链们的-三观-差异" aria-label="Permalink to &quot;二. 区块链们的“三观”差异&quot;">​</a></h2><p>你知道么，区块链们也有自己的“三观”哦！不过不是我们平时说的那种，而是由于一个被称之为“不可能三角”（Trilemma）的区块链三难问题而得来的。该问题认为： <a href="https://c.biancheng.net/view/1963.html" target="_blank" rel="noreferrer">区块链只能优先考虑“可扩展性”、“去中心化”和“安全性”这三个优先事项中的两个</a> ，以目前的技术程度而言，没有人能做到三者兼顾。而以哪两个属性为优先，然后某种程度上牺牲第三个属性，就形成了区块链们不同的“三观”。</p><p>以太坊创始人 Vitalik 和其他以太坊核心开发成员已经想清楚了，他们的策略是建立以“Rollup 二层扩展”为核心进行扩容的未来。此路线将以太坊作为 Layer1 底层，设定为优先考虑安全性和去中心化的属性，而扩展性则交给二层的 Layer2 Rollup 来负责，另外两条区块链 Polkadot 和 Cosmos 也选择了类似的路径。而以 Solana 为代表的另一些公链则选择了突出强调更快的速度（可扩展性）而牺牲一定程度的去中心化。他们并不认为“去中心化”是一个需要被极致强调的属性。</p><p>“去中心化”是以太坊曾经被认为无懈可击的优势，而现在却面临着一些不确定性。即使它走过了顺风的一年，但“以太坊太慢、太贵了！”这种抱怨声越来越响，在这一年里以太坊由于容量的有限性，变得异常拥堵、低效且昂贵。每一次交易的手续费从几十美元到几百美元不等，大众苦不堪言。这时，“去中心化”变为了次要的属性，市场选择故意忽视之，很多协议都放弃了坚持这件事情。而像 Solana 这样的非 EVM 选手，带着不一样的“三观”，强化了“可扩展性”的经济效应，使得大家对比下来觉得“交易速度快得多、操作丝滑得多、费用便宜得多”，这也就是为什么 Solana 这个后来者获得了市场的狂热追捧。</p><p>这也开始倒逼以太坊加速其扩容改革的步伐——向 Layer2 二层转移。目前，以太坊在一层公链赛道的市值占比为 60%，且估计将在 2022 年降低至 50% 以下，其二层的 Layer2 Rollup 代币们将吃掉部分增长空间。当然，有更多可能是被其他一层区块链吃掉的。</p><p><img src="https://qnimg.zhaobanxian.top/img/Snipaste_2022-07-02_16-13-16.png" alt="image" title="来源：Ryan Watkins"></p><h2 id="三-区块链扩容的主要技术路径" tabindex="-1">三. 区块链扩容的主要技术路径 <a class="header-anchor" href="#三-区块链扩容的主要技术路径" aria-label="Permalink to &quot;三. 区块链扩容的主要技术路径&quot;">​</a></h2><p>区块链们要在这场“用户心智抢夺战”中占有一席之地，就必须对自身进行扩容，以更好得解决“不可能三角”问题。扩容的技术路径有很多选择，大家都还处在试验阶段。目前没有谁有信心高喊“我找到最正确的方法了”。因此，我为大家介绍的也只是目前所用的几种主要技术路径：</p><h3 id="_3-1-一层-layer1-自身优化" tabindex="-1">3.1 一层 Layer1 自身优化 <a class="header-anchor" href="#_3-1-一层-layer1-自身优化" aria-label="Permalink to &quot;3.1 一层 Layer1 自身优化&quot;">​</a></h3><p>典型的案例是 Solana、Terra 等。它们并不试图往上建立二层，或者平行嫁接侧链和平行链来扩展自身。他们将精力集中在用多种创新方法扩容其一层 Layer1 核心区块链本身。虽然最终连 Solana 和 Terra 这两家桀骜不驯的公链也都决定拥抱以太坊 EVM 了，但它们本身都是在“三难困境”中和以太坊做出了不同选择，很不类似的公链。我们必须清晰得看到，他们和以太坊拥有很不一样的“三观”。</p><h3 id="_3-2-底层-layer0-的建设" tabindex="-1">3.2 底层 Layer0 的建设 <a class="header-anchor" href="#_3-2-底层-layer0-的建设" aria-label="Permalink to &quot;3.2 底层 Layer0 的建设&quot;">​</a></h3><p>以太坊 2.0、Polkadot 和 Cosmos 都做出了类似的假设。他们把自己定位成一个协议传输的底层网络，通过强化“互操作性”和底层传输协议的性能，为嫁接在上面的专注于提升“可扩展性”的区块链提供共享结算和安全支持。大家所热议的分片（Sharding）技术，其实也是在 Layer0 中优化底层数据传输效率的一种方法，分片使用节点来存储单独的数据集，而这些数据集并不将数据存储在整个区块链上。这种做法与节点在区块链上承载所有数据的传统做法无关，而这反过来又保证了所有交易的准确性。因为特定于某个节点的交易将由该节点而不是整个区块链进行验证。这有助于减少整个区块链的整体负载，并有助于增加区块链的吞吐量。</p><h3 id="_3-3-状态-支付-通道" tabindex="-1">3.3 状态（支付）通道 <a class="header-anchor" href="#_3-3-状态-支付-通道" aria-label="Permalink to &quot;3.3 状态（支付）通道&quot;">​</a></h3><p>这是比特币闪电网络所使用的方式，用户将资金锁定在一个打开的通道中，并且可以与采用相同脚本的其他通道一起操作，在一个状态通道内发生的事情仍然保持着非常高的安全性和最终性。如果出现任何问题，仍然可以选择回溯到主链上。比如：A 要给 B 转 1000 笔小额的比特币，其工作方式大概是：首先在 A 和 B 之间打开一个付款通道, 并把通道的开放记录在区块链上。通过这个支付通道, 可以在任何时间、数天、数周或十年内保持开放状态，然后进行 1000 次的交易。在 A 和 B 想要关闭通道的时候，把这个通道上产生的交易的最终状态写在区块链上即可。这些通常是针对支付等特定应用程序的，但对于大多数其他情况来说并不理想。</p><h3 id="_3-4-侧链-sidechain" tabindex="-1">3.4 侧链（Sidechain） <a class="header-anchor" href="#_3-4-侧链-sidechain" aria-label="Permalink to &quot;3.4 侧链（Sidechain）&quot;">​</a></h3><p>侧链是完全独立的区块链，采用自己的共识安全模型。但其能够完全兼容主链，实现“互相操作”的交互，因此通过侧链可以实现不同区块链间资产的互相转移。由于侧链是独立的系统，因此技术与理念上的创新不会受到主链的局限，大大提高系统的处理效率和扩容性。即使出现创新失败或者恶意攻击，所受的损害也只限于侧链本身。xDai 就是一个很好的例子，而 BSC 和 Fantom 这类也可以看成是以太坊的侧链。不过，侧链必须有与主链相当的算力才能保证侧链上对应代币的安全性。因此其算力要求比较高，未来的投入比较大，可以说是“含着金钥匙出生”的扩容方案。</p><h3 id="_3-5-子链-plasma" tabindex="-1">3.5 子链（Plasma） <a class="header-anchor" href="#_3-5-子链-plasma" aria-label="Permalink to &quot;3.5 子链（Plasma）&quot;">​</a></h3><p>子链本质上是以太坊的副本，它们是通过最小化的受信任桥接系统锚定到以太坊的独立区块链。每个子链可以使用自己的机制来验证交易，但仍然必须使用以太坊区块链作为最终裁决者。然而，子链的设计面临着很多用户体验和安全问题，它们不能支持智能合约的开发，也不能独立于以太坊存在。OMG 和 Polygon 已经放弃了 Plasma 这种方案，这使得一些人认为“子链”实际上已经死了。</p><h3 id="_3-6-optimistic-rollups" tabindex="-1">3.6 Optimistic Rollups <a class="header-anchor" href="#_3-6-optimistic-rollups" aria-label="Permalink to &quot;3.6 Optimistic Rollups&quot;">​</a></h3><p>Optimism 和 Arbitrum 使用了这种方案。这种方案将状态存储在二层 Layer2，并将该状态的“指纹”（一种映射标记）推送给一层 Layer1，并乐观地假设这种“数字指纹”代表了二层上的每一笔正确交易，一层的智能合约无需检查每一次的新状态，这使得效率大大提升。这是一种“无罪推定”的模式，但保留了一个“7 天挑战期”。即用户可以在“挑战期”期间标记欺诈性交易，由于一层存储了数字指纹，它可以充当最终仲裁 者，使二层能够获得以太坊本身的安全保证，扣减恶意运营商的押金，并且还原错误的区块。不过，这种“挑战期”的存在意味着跨链交易（比如从 Arbitrum 迁移到以太坊主网）不会立刻最终确认，其时效性存在争议。</p><h3 id="_3-7-zk-rollup-zero-knowledge-零知识证明链" tabindex="-1">3.7 ZK-rollup（Zero Knowledge 零知识证明链） <a class="header-anchor" href="#_3-7-zk-rollup-zero-knowledge-零知识证明链" aria-label="Permalink to &quot;3.7 ZK-rollup（Zero Knowledge 零知识证明链）&quot;">​</a></h3><p>这是另一种二层 Layer2 的 Rollup 扩容方案，Polygon 和 StarkWare 使用了这个方案，而目前最火的去中心化交易所 DYDX 正在使用 StarkWare 技术提供的服务。ZK-rollup 速度极快，因为它们使用了一种叫做“零知识证明”有效性证明的东西，这使得它可以立即验证并消除对“挑战期”的需要。ZK-rollup 在与 EVM 兼容方面也取得了长足的进步，StarkWare 的 StarkNet 和 ZKSync 2.0 都带有内置编译器，以支持用 Solidity 和 Vyper 编写的智能合约，但这些与 EVM 兼容的解决方案尚未上线。迄今为止，ZK-rollup 仅支持一些独立的任务，如直接转账和交易，例如 Loopring。</p><p><img src="https://qnimg.zhaobanxian.top/img/EatTheBlocks.jpg" alt="image" title="来源：EatTheBlocks"> 介绍完上述的区块链扩容发展方向后，大家应该已经很想拿各种“三观不合”的选手们做一个大比武了吧？好的，满足你！下面我就会对市面主要的一些种子选手做分析比较。当衡量这些项目的价值时，我会去思考他们的市值总额、开发者生态、锁仓总额、互操作性、提供的激励、价值捕获机制和蓝筹 Dapp（Decentralized app）们的选择。</p><h2 id="四-以太坊——进击的巨人" tabindex="-1">四. 以太坊——进击的巨人 <a class="header-anchor" href="#四-以太坊——进击的巨人" aria-label="Permalink to &quot;四. 以太坊——进击的巨人&quot;">​</a></h2><p>首先看下以太坊去年 3 季度和前年同比的报表吧。511% 的收入同比增长、398% 的结算价值增长、1242% 的 Drfi 锁仓增长、1400 倍的 NFT 销售，进击的巨人！</p><p><img src="https://qnimg.zhaobanxian.top/img/Bankless.png" alt="image" title="来源：Bankless"></p><p>即使在新的二层 Layer2 扩容背景下（Optimistic Ethereum 于 7 月推出其 Alpha 版本，Arbitrum One 的主网于 8 月份推出），今年的 NFT 狂热依旧将以太坊网络推向了极限。</p><p>目前共有 3.3 亿美元锁定在 Optimism（这要在 Uniswap 和 Synthetix 两个合约）上，27 亿美元锁定在 Arbitrum（UNI、SUSHI、Reddit）上，51 亿美元锁定在 Polygon（Aave、Polymarket、Decentraland）上。Defi 中以太坊生态锁定的价值已经比大多数银行的市值还要多。</p><p>EIP-1559 升级已经销毁了数十亿美元的费用，并通过对每个区块实施 12.5% 的“基本费转移”、降低交易费用波动以及大幅降低矿工赚外快的途径“MEV”（下降 80%），把矿工兜里的部分钱烧掉，只保留区块奖励。大部分矿工并未选择对抗，以太坊的交易成本显著下降。</p><p>总的来说，这一年来以太坊就像一个进击的巨人，无论是因为 Vitalik 的坚持还是市场的鞭策，这家“公链贵族”向 Layer2 扩容转移的步伐总算大起来了。但在 2022 年这个史上最差的开端（暴跌），在避险意识强烈的市场里，如果以太坊 2.0 延迟推出或其二层的启用减速甚至停滞，市场就会用脚投票，流向其竞争对手。</p><h2 id="五-solana——如日中天的新贵" tabindex="-1">五. Solana——如日中天的新贵 <a class="header-anchor" href="#五-solana——如日中天的新贵" aria-label="Permalink to &quot;五. Solana——如日中天的新贵&quot;">​</a></h2><p>在 2021 年或者说 Web3 的历史上，没有任何项目能比 Solana 的快速崛起更炙手可热、令人兴奋的了。他竟然敢公然挑战以太坊的霸权？！Solana 以非以太坊 EVM 的强硬姿态，硬是用 100 多倍的上涨把大家给打服了！它成为了一个爆炸式增长的基础设施堆栈（ <a href="https://twitter.com/chamath/status/1455947316330827779?s=20" target="_blank" rel="noreferrer">其中一个明星基础设施项目 Syndica 云项目，号称 Web3 的 AWS</a> ），其应用生态的丰富性以及快得令人发指的速度，都使其成为了以太坊主导地位的第一个真正意义上的有力挑战者。</p><p>Solana 没有尝试在虚拟机和模块化这方面超越以太坊，而是某种程度上借由牺牲去中心化，强化规模性，用更低的交易成本和更丝滑的处理速度，把各方各面都放进它的主链上，把自己的一层 Layer1 打造成超级平台。这是 Solana 善长而以太坊甚至都没有尝试的。</p><p>该团队正在以极快的速度推进项目，他们的一系列动作，比如：与 Reddit 联合创始人一起为去中心化社交媒体投资 1 亿美元，与 FTX 和光速资本一起投资 1 亿美元用于区块链游戏，知名隐私浏览器 Brave 宣布迁移其浏览器至 Solana 区块链并将其作为 Dapp 的默认区块链，Phantom 钱包作为 Solana 的浏览器钱包最近也达到了 100 万用户量，Solana 在加密游戏和 NFT 方面的快速进展也已经让其成为了如日中天的新贵。</p><p>但 Solana 并不是万能的，该网络一度宕机了 17 个小时（如果你采访 Solana 创始人 Anatoly，他会告诉你这是一个“17 小时的区块”），这种“安全性”的问题是不应该被忽略的。这直接导致其初出茅庐的 DeFi 应用出现了系统性问题，使得其币价出现暴跌。但公平地说，这与比特币和以太坊早期面临的技术挑战没有什么不同。毕竟现在这个市值超过 650 亿美元的区块链网络只是在不到两年前推出的。成长的痛苦是不可避免的，网络在其生命周期的早期阶段发生一些灾难性错误也是难免的。</p><p>但 Multicoin 资本给出的短期论点如下：“唯一可以在未来 24 个月内扩展到千万级用户量的区块链协议是 Solana。并不是说以太坊通过分片或 rollup 扩容行不通，我们实际上相当乐观地认为这两种解决方案都会成功。但是，这两种扩容策略在今天都还没起作用，并且会产生很多衍生问题需要解决。 <a href="https://multicoin.capital/2021/05/25/technical-scalability-creates-social-scalability/" target="_blank" rel="noreferrer">以太坊的扩展确实有太多纠缠的事情要去做了</a> 。”</p><h2 id="六-polkadot——稳、稳、稳" tabindex="-1">六. Polkadot——稳、稳、稳 <a class="header-anchor" href="#六-polkadot——稳、稳、稳" aria-label="Permalink to &quot;六. Polkadot——稳、稳、稳&quot;">​</a></h2><p>Polkadot 创始人 Gavin Wood 说，“以太坊 2.0 看起来确实很像 Polkadot”。Polkadot 将自己标榜为可互操作的“Layer 0”、“Chain of chains”或“Meta Protocal”，它目前计划连接多达 100 条平行链，而这些平行链将竞争与 Polkadot 的核心“中继链”（Relay Chain）对接的名额，以共享其 Layer0 提供的安全性。为此，他们搞了一个叫做“插槽拍卖”的活动，这种听起来很扯淡的拍卖对接资格的活动，竟然搞得还不错，想想也就只有 Polkadot 这么稳的“老狗”能办到了。取得平行链插槽拍卖的第一批前 5 名的平行链协议，都已经在去年 12 月加入到了 Polkadot 的网络。</p><p>Polkadot 之所以有趣是有原因的。其中最重要的是其推进缓慢但稳定，这与 Solana 的步伐相反。而且开发团队似乎正在反转以太坊 2.0 模型，而不是让应用程序抽离 1 层去到更友好的特定链上工作（以太坊的 Layer2 Rollup 模型）,他们有自己的想法。</p><p>Polkadot 从一个执行能力有限但具有通用安全性的底层中继链开始，该协议将大部分功能以固定的周期，通过“插槽拍卖”的形式外包给可定制的执行层平行链。要符合参与资格，参与者需要持续购买和锁定 DOT，再加上质押以及平行链债券衍生品（例如 Acala 上的那些衍生品），只有这样，你才是拥有了入门资格的优秀“韭菜”。</p><p>Polkadot 的推进相比本章中其他项目虽然更慢，插槽拍卖的后续发展效果似乎并不如预期一样那么火爆，以至于 Polkadot 竟然被挤出了市值前 10 的位置。但无论如何，你不会想和一个与 V 神共同创立以太坊、并随后建立第二个价值 500 亿美元网络的人对赌吧。</p><h2 id="七-cosmos——ibc-跨链协议的缔造者" tabindex="-1">七. Cosmos——IBC 跨链协议的缔造者 <a class="header-anchor" href="#七-cosmos——ibc-跨链协议的缔造者" aria-label="Permalink to &quot;七. Cosmos——IBC 跨链协议的缔造者&quot;">​</a></h2><p>Cosmos 是第一个致力于区块链模块化网络的项目，以太坊以 rollup 为中心的扩容计划促成了 Cosmos 的这个模块化网络的项目。“一条链统治世界”的理论行不通了，链间（interchain）理论已经赢了。Cosmos 的链间通信协议（IBC）做了 Polkadot 和以太坊没有做的事，即保持该协议完全开放且独立于 Cosmos Hub 和它代币 ATOM。</p><p>Cosmos Hub 在 Cosmos 生态系统中并没有特殊地位，它与其它寻求在未来充当整个 Cosmos 生态系统核心的区块链平等竞争。CosmosHub 把新的 Cosmos 区块链（也叫 Zone）锚定到“Hub”上去，这个 Hub 类似于 Polkadot 的中继链，或者以太坊的信标链 Beacon Chain，但 Cosmos Hub 只是可选项而已，并不强制。Cosmos 将互操作性视为一个阶梯，Zone 及其用户自己选择连接到其它 Zone 时要承担什么级别的安全风险。完全未耦合的 Zone 可能根本不会连接得上，而完全耦合的 Zone 就完全可以分享同一共识。</p><ul><li>以太坊 ：去中心化，有点慢且非常昂贵；</li><li>BSC：不够去中心化，快速且便宜；</li><li>Solana：较为去中心化，十分快且便宜；</li><li>Cosmos/IBC：去中心化，快速且便宜。</li></ul><p>Paradigm 的 Charlie Noyes 说得更简单一些：如果以太坊是一台大型计算机，那么 Cosmos 就是一个用于连接独立服务器的协议。链的专业化可能是有效扩展链上活动的唯一途径，但 Cosmos 并没有为区块链如何模块化以及哪些市场将成为赢家通吃的问题过早地寻求答案。他们似乎更致力于大家的底层——这就是为什么市值前 10 的两个区块链项目（BSC 和 Terra）是由 Cosmos 提供服务的，未来它们可能还会为其他公链项目服务，甚至以太坊也有可能。</p><h2 id="八-terra——朦胧的月光女神" tabindex="-1">八. Terra——朦胧的月光女神 <a class="header-anchor" href="#八-terra——朦胧的月光女神" aria-label="Permalink to &quot;八. Terra——朦胧的月光女神&quot;">​</a></h2><p>叫他月光女神是因为 Terra 的代币叫做“Luna”，本来就是月亮女神的意思，同时它也具有一定的朦胧性和不清晰性，所以才有了这个称号。它的币价从年初的 0.64 美元，到年末的 90 美元，一年 140 倍的涨幅，对于持有 LUNA 的人来说，她不是女神是什么？</p><p>Terra 这个公链很有趣，一开始并不起眼，但就是起来了！其应用生态系统在今年出现了爆炸式增长。与韩国支付应用程序 Chai 的合作使得 Terra 拥有了 230 万用户，Terra 的算法稳定币 UST 的规模从第一年的 0 美元增加到目前超过 72 亿美元，并且可能很快在市值上超过 Maker 的 Dai，其合成股票应用 Mirror 拥有 15 亿美元的锁仓，仅略低于 Synthetix 的 21 亿美元。而 Terra 的 Anchor 协议锁定的 LUNA 价值达到了 40 亿美元，几乎和 Lido（以太坊 2.0 的质押协议）锁定的 ETH（60 亿美元）一样多了。这些表现都让 Terra 和他的代币 Luna 赚足了眼球。</p><p><img src="https://qnimg.zhaobanxian.top/img/Messari.png" alt="image" title="来源：Messari"></p><p>Terra 可能面临的最大问题是“Known Unknowns”（已知肯定会有但还未明确的不利因素），但目前尚不清楚它们如果发生，对整个 Terra 生态系统来说会是可控的还是灾难性的。</p><p>除了 Do Kwon (Terra 的 CEO) 与 SEC 就 Mirror 及其合成股票代币的斗争之外，还有 UST 的自反性（UST 这类的算法稳定币一旦失去市场信心，会进入死亡螺旋）及其使用 LUNA 作为主要抵押品的担忧。在目前完全避险的环境中，尚不清楚 Terra 和 UST 的韧性如何。LUNA 在去年的大跌期间，由于其价值低于流通中的 UST 总值，几乎让 UST 资不抵债。他们还从 Terraform 实验室获得 7000 万美元的资金注入，以支持 Anchor 的稳定储备。Anchor 这一具有系统重要性的 Terra 借贷协议。它一直充当着“最后贷款人”的模式。这种模式虽然一直在发挥作用，但是它也有可能最终失效。好在 Terra 在今年 3 月又注资 10 亿美元，以维持 Anchor 的偿付能力，并为其未来的模式迭代换取了至少 10 个月的时间。</p><p>另一方面，Terra 的 Columbus-5 升级（其中包括将 Terra 连接到所有其他 Cosmos 区块链）以及 Wormhole v2 集成（将 LUNA 和 UST 引入以太坊、Solana 和 BSC），通过将协议扩展到其他链以及将 UST 的相关性扩展到 Web3 的其他部分来降低自反性。这使得 Terra 的长期潜力还是乐观的，仅 UST 这个稳定币的潜力就会为该项目带来了巨大的市场总量。</p><h2 id="九-cardano——能超越以太坊的-第三代币王-还是" tabindex="-1">九. Cardano——能超越以太坊的“第三代币王”，还是...? <a class="header-anchor" href="#九-cardano——能超越以太坊的-第三代币王-还是" aria-label="Permalink to &quot;九. Cardano——能超越以太坊的“第三代币王”，还是...?&quot;">​</a></h2><p>这个目前市值 350 亿美元，Web3 领域排名第 6 的老牌明星项目，其代币 ADA 在 2020 年涨了超过 5 倍，2021 年顶点时涨了 15 倍，目前还保留有 5 倍的涨幅。可以说是让持币者收益颇丰的一个项目。但奇怪的是，它一直以来都经历着褒贬不一的争论。</p><p>这条创建于 2017 年的老牌公链的创始人 Charles Hoskinson 也是以太坊的最早 8 个创始人之一，与 EOS 创始人 BM 联手创建过比特股，一定程度上算是与 V 神、BM 并肩的明星创业者，而且在官方介绍中，Cardano 的开发团队都是工程师和科学家级别的，可谓全明星团队。其声称通过更好的 Ouroboros 协议构建高度去中心化、足够安全又有很强的可扩展性的 PoS 机制。这不就是大家一直在等的那个能解决“不可能的三角”的强人么？很多人对此坚信，将其奉为第三代的“币王”，认为其一定能够超越以太坊。当然，其币价的不断攀升也一直在支持这种信仰。</p><p>然而，伴随着 Cardano 也一直有另一种尖锐的批评声。“团队技术徒有虚名，项目进度拖沓”、“团队内部腐败，创始人把团队激励资金用来嫖娼，内斗严重”、“日本资方实际为资金盘，是大庄家控盘韭菜局”等等说法不绝于耳。</p><p><img src="https://qnimg.zhaobanxian.top/img/%E9%93%BE.png" alt="image" title="来源：王大树，刊登于《链捕手》"></p><p>不过随着 Cardano 在 2020 年和 2021 年分别部署 Shelley 升级和 Alonzo 硬分叉，部署智能合约和去中心化 Dapp 的阻碍被扫清，100 多个智能合约已经被快速部署，超过 100 个应用即将上线。其向市场释放的信号是：“我们都是来真的，要相信我们科学家除了会玩以外，不耽误拯救银河系”。至于你信不信，DYOR。</p><h2 id="十-avalanche——成色十足" tabindex="-1">十. Avalanche——成色十足 <a class="header-anchor" href="#十-avalanche——成色十足" aria-label="Permalink to &quot;十. Avalanche——成色十足&quot;">​</a></h2><p>170 亿美元市值，市值全网排名第 12，所有智能区块链排名第 5，最高单日交易额达到以太坊 96% 而 <a href="https://u.today/avalanche-avax-about-to-flippen-ethereum-eth-in-transaction-volume" target="_blank" rel="noreferrer">平均交易成本只是以太坊的 0.37%</a> 。Avalanche（雪崩链）已经成为了那些既希望保持以太坊 EVM 又希望大幅降低交易成本的用户们的热门选择。在各大专业人士和媒体眼里，这个 2020 年 9 月才正式推出的公链，踩对了时间点，做对了事情，是一批成色十足的白马。 其代币 AVAX 在 2021 年全年最高增长了 37 倍，到目前还保持有 20 倍左右的增幅。币价的火热可以理解为是对于 Avalanche 独特的共识机制、三链构架、还有积极鼓励生态建设的价值体现。 Avalanche 的“雪人共识协议”将“经典拜占庭共识”和“中本聪共识”相结合，同时解决了“经典拜占庭共识协议”中固有的扩展性弱，鲁棒性（系统强壮度）弱及“中本聪共识”中存在的延迟高，吞吐量低，过度消耗资源的问题。其在去中心化、安全性和可扩展性上有较强的均衡优势。 雪崩链独创的“三链构架”构建出三个可互操作的区块链系统：交易链（Exchange：X-Chain）、合约链（Contract：C-Chain）和平台链（Platform：P-Chain）。P 链是 Avalanche 的核心，负责节点质押和网络验证，是合约链与交易链的基础。任何人都可以通过质押 2000 枚 AVAX 代币成为 Avalanche 的节点。C 链主要被用于智能合约的开发、部署和交互。其兼容多个虚拟机，包括 EVM。开发者可以轻松地将自己在其他链上的协议克隆部署在 C 链上。X 链主要用于处理 Avalanche 中资产的交易和创建，比如用户从交易所进行资产充提等。与其他区块链的跨链也需要 X 链的参与和配合。最后，一条 Cross Chain 将三条连串联起来，使其具有无缝的互操作性,使其每秒能够处理 4500 笔交易，成为全网最快的区块链。</p><p><img src="https://qnimg.zhaobanxian.top/img/Tannhauser.png" alt="image"></p><p>Avalanche 的规模扩张能力非常强，其 2021 年 2 月上线了“雪崩-以太坊”跨链桥后，只有一小部分先锋用户加入。随后它不懈得采取市场推广和用户激励手段，8 月升级的跨链桥和流动性挖矿的推出，使得其第三季度获得了 10000 的 DAU，第四季度飙升到了 70000 个 DAU。</p><p>Avalanche 目前正在押宝 Defi 领域，试图通过在这方面弯道超车，来挑战以太坊。在去年推出的 Avalanche Rush 市场刺激计划中，Aave 和 Curve 这两个在以太坊上领先的明星 Defi 合约落地雪崩链生态。他们的到来吸引了用户们狂热的资金锁仓，其锁仓量 TVL 在第四季度提升了 714%!受此带动，雪崩链上的其他长尾 Defi 合约也贡献了不少的增长，超过 60 个合约获得了超过 100 万美元的 TVL，比预期的数字高 3 倍。Avalanche 目前已经成为了赛道中锁仓量成长最快的项目。除了 Dex（去中心化交易所）、Defi 和 NFT 项目的刺激以外，Avalanche 在去年 Q4 的大幅增长，还缘于其获得主流交易所上架、亮眼的合作项目敲定、流动性挖矿持续推进等原因。</p><p>当然，其成长过程中也伴随着伤痛。最主要的问题就是，随着规模的扩大，其交易成本也越发提高。在第四季度一度升高到 3 美元的价格。 <a href="https://ambcrypto.com/report-avalanche-ends-2021-with-a-triumph-but-heres-the-flip-side/" target="_blank" rel="noreferrer">（虽然以太坊是 62 美元/笔交易）</a> 。但好在 Avalanche 快速推出了补丁，通过限制区块大小和钱包估价等方式，把交易价格控制在了低位。</p><p>随着其规模的持续扩大，彻底解决交易成本上涨的方法，还需要从治理方式（在线治理投票标准）、机制优化（Apricot 优化）、子网开拓（用户定制化 EVM 拓展私人和企业用户场景）等三方面综合优化。同时，Avalanche Rush 的持续推进，大量明星项目的引入也会在未来继续助推雪崩链的增长。</p><h2 id="十一-algorand——真的是加密货币领域的谷歌" tabindex="-1">十一. Algorand——真的是加密货币领域的谷歌？ <a class="header-anchor" href="#十一-algorand——真的是加密货币领域的谷歌" aria-label="Permalink to &quot;十一. Algorand——真的是加密货币领域的谷歌？&quot;">​</a></h2><p>围绕着 Algorand（阿拉贡）这条公链，一直有几个光鲜闪闪的关键词：图灵奖得主创始人、彻底解决不可能三角，甚至被 Anthony Scaramucci（他的外号“卡油者”，上任白宫通讯联络主任十天后即被解职）称之为 Web3 的谷歌等等。这无异于是个具有了各种有利因素的明星项目。但为什么它的币价和市值一直起不来？是不是有什么深层原因？在这里我们也可以推测一下。</p><p>首先，其最大卖点就如同其名字，由 Algorithm（算法）和 Random（随机）组合而成，这也正体现了其核心竞争力就是“算法随机”。其使用了拜占庭共识的创新型纯权益证明机制（PPoS)。用户被随机地、秘密地选择来提议区块，并对区块提议进行投票。所有在线用户都有机会被选中进行提议和投票。用户被选中的可能性，以及提议和投票的权重，都与他质押的代币数量成正比。</p><p>Algorand 的 PPoS 方法将整个经济的安全与大多数经济体的诚信联系在一起，而不是与一小部分经济体的诚信联系在一起。当大部分钱都在诚实的人手中时，这个系统是安全的。使用其他方法，会出现经济的一小部分决定了整个经济的安全性，这意味着仅仅需要有少数用户就可以阻止其他用户进行交易。而理论上 Algorand 使得一小部分资金的所有者不可能损害整个体系，而大部分资金的所有者行为不当的成本很高，将是很不值的，因为这将削弱货币的购买力， <a href="https://www.tuoluo.cn/article/detail-65273.html" target="_blank" rel="noreferrer">并最终使他们自己的资产贬值。</a></p><p>从“不可能三角”的解决方面来看，Algorand 通过加密抽签技术，在持有用户中随机选择共识节点，无法事先预知是哪些人会被选中，从而避免了中心化的倾向。同时，验证委员会成员由 VRF(可验证随机函数）加密抽签随机选择，只有被选人自己知道，并且只有当区块被广播了才会暴露验证者的身份，每一轮的区块提议者都重新使用 VRF 进行加密抽签。将 VRF 引入公链，这是 Algorand 的独特创新，增加了随机性以及不可预测性，从而加强安全性。最后，Algorand 建立了一个加密抽奖形式来决定参与广播区块的委员会成员，每次抽奖只需要大约一微秒，而且所有抽奖独立操作，互不干扰。候选人群组大小的期望值是一个常数，和网络规模与用户数不成正比，从而保证可扩展性。Algorand 首席科学家陈婧此前在接受媒体采访时曾表示，Algorand 的 TPS 性能（每秒交易处理量）在未来将与 VISA 相当。</p><p>有科学家针对上述的特点提出了自己的质疑：Algorand 进入验证阶段后，由于使用了可扩展的拜占庭容错算法，使其验证组规模必须比较大(2000 ～ 4000 人)，这将导致签名数据异常庞大，严重浪费存储和容量，不仅造成存储浪费，而且更影响性能。其次，在实验环境中，Algorand 需要让区块达到 10M 大小，才能达到 125 倍比特币的性能，10M 区块大小意味着要求节点的网络带宽峰值至少需要 80M 才能承载，这对目前一般用户非常困难，影响了系统的效率和去中心化特性。最后，Algorand 不具有强的输出公平性保证。保证公平性(Bias-resistance)能够确保协议的输出不被敌手操纵，然而 Algorand 为了选择提案者使用了一个有些偏向的随机性， <a href="https://www.fxajax.com/20210626073158.html" target="_blank" rel="noreferrer">使得那些需要真正随机均匀分布的应用不适合采用该协议。</a></p><p>技术领域的争论和探讨我们暂且搁置一边。阿拉贡最被人一致诟病的，其实是其表现非常不良的币价还有其资本市场运作的“奇葩”手法。其代币 ALGO 第一期拍卖（采取行业非典型荷兰式拍卖）的价格结束于 2.4 美元，而其私募价则为 0.05 美元，这意味着，私募投资者一开盘就已经获得了 48 倍的回报，赚得盆满钵满。随后，ALGO 就一路下滑，最低时 0.557 美元，单月跌幅 85%,使得其资金盘割韭菜的形象被广为流传。 <img src="https://qnimg.zhaobanxian.top/img/A1.png" alt="image"></p><p>同样奇葩的是,Algorand 为投资者提供了一份看跌期权，还有 90% 保底的退币权。对于拥有退币权的人来说，ALGO 币价大跌反而是他们乐于见到的结果。跌得越惨，他们就可以用更低的价格回收筹码。早期参与私募认购投资者可以在 ALGO 价格较高时抛售手中的代币，将 ALGO 价格砸下去，再以低价回购，到时候利用手中的退币权将低价收购回来的代币高价出售给项目方，实现连环收割。这种明摆着的套利空间吸引了大量的热钱进场，然后在其币价飙升后就狂泻至差点归零。即便目前币价回归到 1 美元左右，但是和发行价的 2.4 美元依然相去甚远。顶级的图灵科学家团队为何无法支撑这个项目像其他公链一样一飞冲天？糟糕的经济制度设计，使这个项目的代币变成了一个漏洞百出的套利工具，最后连累项目本身的成色都受到质疑，这是一个挺悲哀的事，这是一个被投机者活生生变成韭菜局的典型案例。</p><h2 id="十二-near——优雅的分片技术团队" tabindex="-1">十二. Near——优雅的分片技术团队 <a class="header-anchor" href="#十二-near——优雅的分片技术团队" aria-label="Permalink to &quot;十二. Near——优雅的分片技术团队&quot;">​</a></h2><p>Near 是公认的有技术实力的公链，而且其显著特征是“分片技术”，号称其炫酷的“夜影分片”技术（Nightshade）具有最快的速度。因此也被冠以各种美名：“第三代公链的代表”、“最优雅的分片技术团队”、“分片之王”等（为了客观起见，我尽量克制，不再多用<strong>之王</strong>的称谓）。</p><p>这个目前市值 60 多亿美元，全网市值排名第 24 的项目，其币价在 2021 年最多也有近 20 倍的涨幅。其独特之处在于“夜影分片”的快速交易能力。由于每条分片可以做到每秒 1000 笔交易（1000TPS)，且分片可以线性扩容，也就是说 100 个分片就可以达到每秒 10 万笔交易。远超比特币的 7TPS 和以太坊的 15TPS。</p><p>而它的安全性体现在他采用的叫 Doomslug 的 PoS 机制，其独特的两次验证增加了验证的确定性，并且通过大幅提高作恶成本，增强了安全性。规模性方面，NEAR 推出的“Rainbow Bridge”可以链接以太坊 EVM 并且转换资产。</p><p>其生态里长出来的 Aurora 也是明星的以太坊二层扩容方案。Aurora 允许开发人员轻松地从以太坊移植 Solidity 智能合约，并使用 NEAR 更具可扩展性的基础设施启动它们，提供接近 1 秒的区块时间和 0.01 美元的交易费用。该项目由两个主要部分组成——Aurora Engine：一个以太坊虚拟机 (EVM)，允许以太坊智能合约（和许多以太坊开发者工具）在 NEAR 上运行；Aurora Bridge：一种在 Aurora 和以太坊之间传输 ERC20 代币和 ETH 的无需信任协议，作为 NEAR 更广泛的“彩虹桥”的一部分。与此同时，Aurora 还构建了一些附加功能，以进一步简化 NEAR 和以太坊之间的应用程序开发，包括 NFT 转账、价格预言机、数据索引器、AMM（自动化做市商）等。</p><p>强大的技术团队背景开发出的“夜影分片”突破了以太坊的 Beacon Chain、Polkadot 的 Relay Chain、Cosmos 的 Hub 等通行做法，它只需要用一条链给予不同节点下载和储存一小部分信息（称为 Chunks）即可，这大大节省了时间和空间。这一核心技术获得了知名投机机构 A16z 的认可。而其生态内的跨链扩容方案 Aurora 也同样受到了 Dragonfly 等专业 Web3 投资基金的亲赖。</p><p>不过，NEAR 的发展速度相对缓慢，预定的四步走战略，目前为止才推进到第二步，其节点现在只有 70 个，离 200-400 个目标还早，其去中心化程度还不够高。要实现第三、第四步预期的的降低硬件门槛和无限扩容方案，还遥遥无期，这与其规划的节奏差异较大。同时，其锁仓量现在才排名公链里的第 29 位，这与其号称“第三代公链的代表”的身份还有其市值不相符合。人们不禁怀疑，他的需求到底有多少， <a href="https://mp.weixin.qq.com/s/ZhOFQilRfmPoDFLm4daxGQ" target="_blank" rel="noreferrer">是不是以目前的项目推进程度而言，该项目已经被高估了？</a></p><h2 id="十三-polygon——逆袭以太坊的-l2-二层公链" tabindex="-1">十三. Polygon——逆袭以太坊的 L2 二层公链 <a class="header-anchor" href="#十三-polygon——逆袭以太坊的-l2-二层公链" aria-label="Permalink to &quot;十三. Polygon——逆袭以太坊的 L2 二层公链&quot;">​</a></h2><p>Polygon 的崛起也非常引人注目，其币价取得了接近 100 倍的涨幅，但更值得一提的是，该团队在构建通用的扩容协议方面取得了很大进展，该协议甚至还允许用户及应用开发人员在构建以太坊侧链、子链或 L2 二层链之间可自行选择。</p><p>实际上在活跃用户数上，Polygon 已经逆袭超越了以太坊，这也证明了“扩容”确实是以太坊生态的首要任务，因为如果不是作为二层链的 Polygon 在处理 NFT 和游戏交易方面所起到的良好作用，以太坊的用户向 Solana 等对手的迁移流失可能会更快。</p><p>熟知 Web3 历史的老韭菜们会注意到，现在 Polygon 已经比其刚推出时的 Matic 侧链和子链解决方案要大得多，它的核心产品是兼容 EVM 的 Polygon PoS 链和 PoS 桥。它们从以太坊上的 MATIC（Polygon 的代币）质押者那里获得安全性。这条链并不是简单的二层链，因为它有一个单独的验证器，但它也不是侧链，因为 Polygon 验证器会定期将状态提交给以太坊，因此 Polygon 团队将其描述为提交链（Commit Chain）。</p><p>从那时起，Polygon 凭借一系列扩容解决方案和补充工具进入了新领域。在 2021 年 5 月和 7 月之间，该团队推出了 Polygon SDK（Software Development Kit 一个用于启动新区块链的框架，可用于 rollup 二层链或独立链）以及 Avail（Polygon SDK 链的数据可用性解决方案），它还将 ZK(Zero Knowledge 零知识证明) 技术作为 Polygon 生态系统的长期扩容解决方案，8 月，Polygon 与 Hermez（开源 ZK Rollup 扩展解决方案）的合并是将 ZK 技术集成到 Polygon 核心生态系统的一步。该团队还宣布成立了一只 10 亿美元的战略基金来投资 ZK 技术，并透露了即将推出的基于 STARK 的二层项目 Miden，并且将与 EVM（以太坊虚拟机）兼容。</p><p>可以看到，Polygon 在底层机制优化上是下了功夫的，但是如何快速扩大规模，增加应用、合作项目和场景，是其接下来要重点考虑的。</p><p>长期看来，所有加密项目都会采用零知识证明，以太坊向二层转移的趋势也已经注定。Polygon 不仅承载了自身作为 L2 公链头部项目的重任，更是以太坊 2.0 能否成功的关键因素。</p><h2 id="十四-optimism-和-arbitrum——它们是乐观的" tabindex="-1">十四. Optimism 和 Arbitrum——它们是乐观的 <a class="header-anchor" href="#十四-optimism-和-arbitrum——它们是乐观的" aria-label="Permalink to &quot;十四. Optimism 和 Arbitrum——它们是乐观的&quot;">​</a></h2><p>又是以太坊的二层 rollup 扩展方案。这看起来与 Polkadot 和 Cosmos 的设计比较类似，通过建立一系列独立的、EVM 兼容的执行层区块链，将这些区块链汇总到同一个以太坊信标链（Beacon Chain）上以实现扩容。Polygon 和 StarkWare 采用了 ZK Rollup 策略，而 Optimism 和 Arbitrum 采用的是 Optimistic Rollup 策略。</p><p>Optimistic rollup 方案使用了一种无罪推定的模式,即乐观地假设其链上的所有交易默认都是有效的，但为了预防欺诈，在一层链上的交易确认需要经过一个“挑战期”，这就导致在二层链回到一层链的交易会有一些延迟，以允许挑战。但好处是它们与 EVM 兼容，即插即用，这使得开发者可以轻易将现有的 Solidity 合约从以太坊的一层移植到 Optimistic 二层上，不需要经过太多改动。</p><p>我们很可能会在接下来的 12 个月内看到超过 80% 的链上 EVM 交易量从一层转移到二层上，迁移的速度必须快，因为随着其他一层区块链们持续抢占市场份额，时间会是最为关键的因素（2021 年初以太坊的锁仓占到了 98%，现在这一比例已经降到了不到 60%）。正如我之前提到的，Optimistic 这种 Rollup 的优势在于迁移简单，但是劣势就在于挑战期所带来的成交效率的低下以及潜在的黑客攻击风险。因此，它更像一个中短期的过渡性解决方案。</p><p>对于某些应用程序来说，快速迁移到二层可能会更容易一些，因为它们在单个 rollup 链上聚合了大多数的去中心化交易流动性。但对于其他应用来说，会有挑战性。比如以太坊创始人 V 神表示过必须推动 NFT 的跨二层迁移，从而节省交易费用。但这对不同一层公链的二层对二层跨链协议的要求就会更高， <a href="https://twitter.com/VitalikButerin/status/1435413681588736007" target="_blank" rel="noreferrer">如果这个也可以做到的话，那么多链的未来就会更快得到来。</a></p><p>这里我们不多讨论 Optimism 和 Arbitrum 这两条链了，有兴趣的朋友们可以 DYOR。</p><h2 id="十五-rollup-的未来是-zk-还是-optimistic" tabindex="-1">十五. Rollup 的未来是 ZK 还是 Optimistic？ <a class="header-anchor" href="#十五-rollup-的未来是-zk-还是-optimistic" aria-label="Permalink to &quot;十五. Rollup 的未来是 ZK 还是 Optimistic？&quot;">​</a></h2><p>以太坊创始人 V 神认为，长期来看 ZK Rollup 将处理大多数以太坊交易，它们也可能会颠覆那些一层公链的竞争者们。就目前来看，ZK Rollup 这项加密领域最具创新性的技术尚未对市场产生广泛影响，但 StarkEx 和 zkSync 两种协议可能会改变这种情况。ZK 可能是使加密能够扩展到数十亿用户的唯一解决方案，并且它提供了机构需要的隐私保证。</p><p>ZK Rollup 利用零知识证明（也被业内人士称为“魔法豆”），可以达到近乎即时地确认二层到一层的状态。Loopring、Immutable X 和 DYDX 这些明星项目都是这项技术的早期采用者。但不要指望它们的成功会引发 ZK Rollup 的热潮,因为它们现在不完全兼容 EVM，需要项目方进行一些定制才能在以太坊一层和这些二层之间转移。另外，Optimistic Rollup 和 ZK rollup 之间的可编程性差距肯定会缩小（StarkWare 表示其 StarkNet 即将推出），但目前要权衡的是简单性、兼容性 vs 结算速度。Vitalik 提出的关于 ZK Rollup 占主导地位的说法可能是正确的，但这需要大量的时间以及用户教育。</p><p>知名研究机构 Messari 预测，到 2022 年底，以太坊一层的交易份额会小于 20%，到 2023 年，Optimistic Rollup 占二层总使用量的比例会跌到低于 50%，而且这可能会比我们想象地来得更快。</p><h2 id="十六-必须而又脆弱的跨链桥" tabindex="-1">十六. 必须而又脆弱的跨链桥 <a class="header-anchor" href="#十六-必须而又脆弱的跨链桥" aria-label="Permalink to &quot;十六. 必须而又脆弱的跨链桥&quot;">​</a></h2><p>很显然的是，多链世界不仅仅是未来，它已经在当下成为了现实。目前有 15 条链的资产存储规模都超过了 100 亿美元，而比特币和以太坊自身都存储了近 2 万亿美元。这种增长短时间内不会放缓，随着二层 Rollup 扩容方案的推出，未来几年可能会有更多的区块链项目出现。区块链世界已经开始类似于我们今天的物理世界——它们由各个国家定义，每个国家都有自己的经济和语言，由自己的规则所管辖。</p><p>虽然这些国家之间的连通一定是必然的，且往来需求一定会越来越多。但目前而言，区块链生态系统之间仍然是孤立的。它们就像孤立的国家，彼此之间的交通系统或国际贸易吞吐都还有限。今天，仍然没有可扩展的、去中心化的、广泛集成的协议在区块链之间传输而不依赖“受信任第三方”（交易所、托管人等）。所幸的是，有很多团队意识到了这个机会，并从 2014 年以来一直在为这个世界构建像 Cosmos IBC 这样的项目。 <img src="https://qnimg.zhaobanxian.top/img/A2.png" alt="image" title="来源: Dmitriy Berenzon"></p><p>正如以太坊的可组合性使开发人员能够将协议打包在一起并构建新的应用（例如，Yearn 将资产存入 Compound、Aave、Curve 等，以实现自动化收益），一旦跨链桥基础设施准备就绪并能够兼容更多的加密抵押品，我们可能会看到更多的资产在跨链间有效流动。形象来说，我们现在需要完成以下三个任务：</p><ul><li>链间协议：建立更多安全的海运路线（需要打破各链虚拟机之间的不兼容性）；</li><li>跨链桥应用：研发和建造装载量更大且更安全的货轮，（需要防止黑客海盗）</li><li>数字资产打包技术：发明和制造标准性集装箱，确保各种数字资产可被大量标准化运输</li></ul><p>其中，跨链桥的建设非常重要。跨链互操作性围绕少数可信的、广泛集成的协议进行标准化。当今解决方案的不成熟造成了用户和开发者之间的巨大摩擦，但一座可靠的去中心化的、久经考验的、并且集成良好的跨链桥可能会成为跨链流动性的首选。随着多链经济的发展，跨链桥将一定会促进大量的资产和数据传输。</p><p>一个预测：在五年内，主流“L1——L1”或”L1——L2”或“L2——L2”跨链桥的日交易量，将高于最流行的中心化交易所。但无论是 Multichain 还是 Wormhole 这两个目前最大的跨链桥，都有过被黑客攻击，用户遭受惨痛损失的黑历史。如何真正得强化跨链桥自身，解决漏洞，让用户安心、放心、省心得在多链之间操作他们的资产，这是跨链桥建设的本分工作，他们必须要做得更好！</p><h2 id="十七-打包总结一下" tabindex="-1">十七. 打包总结一下 <a class="header-anchor" href="#十七-打包总结一下" aria-label="Permalink to &quot;十七. 打包总结一下&quot;">​</a></h2><p>我在本章花了很多笔墨，为您梳理了区块链的基础、现状和未来发展机会。我通过一一枚举的方式，捋了一捋市面上主要的区块链玩家。也许你会问，有必要说得这么详细么？这个行业瞬息万变，写得再详细也有可能下个月就过时了，比如早期的区块链像 EOS 和 TRON 之类，已经埋入尘土。但我只想说，这一章之所以写得如此之长，其主要目的是告诉你：每一个致力于 Web3 领域的参与者,无论目的是投机、套利还是建设，区块链都是你必须要从底层认知的基础。这个领域的技术发展和前进方向决定了我们未来世界的模样。</p><p>回顾一下若干年前的区块链和 Web3 世界的模样，然后对比现在。加密领域的变化和进步是多么令人难以置信！置身其中，我们应当对基础建设者报以敬畏。是的，我说的就是这些区块链的项目方和建设团队。没有他们的 Web3 才是没有任何价值的骗局或者妄想。</p><p>不过朋友们，可以肯定的是，虽然这个领域的技术创新已经如火如荼，看起来已经“巨头林立”。但实际上我们才刚进入超级周期的 DAY1。五年后再回头，这才哪儿到哪儿啊。（笑）</p>',118),i=[t];function n(p,h,s,m,c,d){return o(),e("div",null,i)}const g=a(l,[["render",n]]);export{b as __pageData,g as default};
