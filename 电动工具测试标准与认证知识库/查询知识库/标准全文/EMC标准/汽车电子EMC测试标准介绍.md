# 汽车电子EMC测试标准介绍

> 标准号：`—` ｜ 年份：— ｜ 版本状态：**未纳入核查范围**
> 来源方式：文字层直提 ｜ 原分类：EMC标准 ｜ 页数：58
> 正文可信度：文字层数字缺失，只能定位章节，判定必须回 PDF 原件
> 版本核查：清单只覆盖 50 条安规/EMC 现行标准，本条未逐篇联网核实
> 原始文件：`03_全文/EMC标准/汽车电子EMC测试标准介绍.md` ｜ 整理日期：2026-11-20

---

<!-- 第 1 页 -->
MORLAB
专业、卓越、精准
汽车电子EMC标准介绍
Morlab Group

<!-- 第 2 页 -->

ISO11452-2

ISO11452-4

CISPR 25

CISPR 25
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 3 页 -->
置的电子/电气零部件。目前标准是CISPR25
电骚扰限值和测量方法。该标准适用于车辆和大型装CISPR 25规定了从150KHz到2.5GHz频率范围内的无线规定了从到频率范围内的无线(
) 这个标准与前
版本
年版相比有
(2007 edition3),这个标准与前一版本02年版相比有较大的改动。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 4 页 -->
测试前必需区分EUT是何
种骚扰源类型，以选择相
对应的测试限值
系
种骚扰类型
对应的测试限值。
测试频率
150KHz到2.5GHz
150KHz到1GHz
限值类型
平均值、峰值、准峰值
峰值、准峰值
CISPR 25
2007版
2002版
标准要求骚扰源符合基于两种类型测量检波器的限值要求，而不考虑是何种骚扰类型骚扰源与限值的关系
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
的更加复杂化，所以为了应对高频部分的电磁骚扰源对车载电子造成的干扰。
测试频率范围变更的原因在于当今社会科技的迅猛发展从而导致了电磁环境
## 02 版在测试中也会用到平均值检波器进行平均值的测量，但这仅仅是为了判
定EUT的骚扰源属性。它并没有关于平均值限值的规范。
Shenzhen Morlab Communications Technology Co., Ltd.
所以将测试范围扩展到2.5GHz

<!-- 第 5 页 -->
射传符合
定
CISPR25（2002）辐射/传导骚扰的符合性判定CISPR25 (2002)的传导及骚扰限值是与EUT所属骚扰类型有关，(
)的传导及骚扰限值是与
所属骚扰类型有关
宽带是连续长时间或短时间型的骚扰源有自动的也有手动宽带是连续长时间或短时间型的骚扰源，有自动的，也有手动的。定义为带宽大于特定测试设备或接收机的发射。宽带骚扰源设备比较多，电动的，点火的，主要以电动控制的为多，如骚扰源分为窄带和宽带骚扰。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
备或接收机的发射。主要来自微处理器，数定逻辑电路，振荡电动机油泵燃油喷射的等窄带是带宽小于特定测试设电动机、油泵、燃油喷射的等。窄带，是带宽小于特定测试设
Shenzhen Morlab Communications Technology Co., Ltd.
器和时间等窄带骚扰源。

<!-- 第 6 页 -->
峰值和平均值2个曲线，
峰值比平均值大6dB以
CISPR25（2002）辐射/传导骚扰的骚扰源判定对于未知设备的骚扰类型判定，可以从以下方法得出：当你扫描完产品之后，会有在同频率点上如果于窄带是否在同一频率点上如果上就是宽带，否则就法得你用峰值检用峰值检波器测量数据低于窄带限值？
大于6dB？
开始
确定为窄带
确定为宽带（如需要，用
否否
用与峰值检波器同样带宽
的平均值检波器重新测量
大于6dB？
峰值和平
均值之差
否
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
要看窄带限值。
要看窄带限值
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
准峰值检波器重新测量）
是是是
否
宽带数据
低于宽带
限值？
限值？
通过通过
否
重新设计和测
不通过
量

<!-- 第 7 页 -->
宽带骚扰种类仅用于简化试验要求减少必须使用的检波器数宽带骚扰种类仅用于简化试验要求，减少必须使用的检波器数量。例如如果知道是宽带类型骚扰，诸如直流电刷整流马达，(
)的传导及骚扰限值与
所属骚扰
CISPR25 (2007 edition3)的传导及骚扰限值与EUT所属骚扰符合定CISPR25（2007）骚扰的符合性判定类型无关，但是骚扰源也是分为窄带和宽带骚扰。
就可以去除平均值检波器。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
EUT还应符合峰值或准峰值限值的要求。适合所有频段的符合任何情况下，EUT 都应符合平均值限值的要求。除此之外Shenzhen Morlab Communications Technology Co., Ltd.
性判定如下图所示
性判定如下图所示。

<!-- 第 8 页 -->
值限值吗？
值限值吗？
是测量
峰值检波器
峰值？
峰值数据
峰值数据
峰值数据
峰值数据
低于平均
峰值数据
低于准峰
测量
适用限值：平
均值和准峰值
还是平均值和
开始
峰值检波器
限值吗？
是
值限值吗？
峰值数据
低于峰值
低于平均
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
准峰值数
是是
据低于准
峰值限值
吗？
是
准峰值检波器
否测量
通过
不通过
否
平均值数
否
据低于平
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
平均值检波器
均值限值
测量
吗？
是
平均值检波器
平均值数
据低于平
均值限值
吗？
测量否
否
不通过
不通过

<!-- 第 9 页 -->
图：
三种限
值要要
求
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
1. 一般达到平均值、峰值限值要求或达到平均值、准峰值限值要求的视为符合，除非试验计划写明达到单一适当限值（平均Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
值和峰值/平均值和准峰值）的也视为符合。
值和峰值/平均值和准峰值）的也视为符合。
注：
注：

<!-- 第 10 页 -->
## 2 因为峰值检波器测量值总是高于或等于平均值检波器测量值
2.因为峰值检波器测量值总是高于或等于平均值检波器测量值，并且适用的峰值限值也总是高于或等于适用的平均值限值，因
## 3 此流程图适用于各个单频点
举例来说
只有那些测量值在
3.此流程图适用于各个单频点，举例来说，只有那些测量值在适用限值之上的频点才需要重新使用平均值或准峰值检波器测虽然两个版本的测试频率范围有差异，但是测试方法确是一贯相承。所以下面将以CISPR 25（edition3）为主进行测试方法
此单一检波器测量值可以简化和加快符合性判定进程。
及测试设备等相关测试方面的介绍。
及测试设备等相关测试方面的介绍量。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 11 页 -->
电压方法：电压测量只能用于单一导线的传导发射特性。
故常用于测量电源线的发射，采用人工电源故常用于测量电源线的发射，采用人工电源CISPR25传导骚扰测试方法网络做隔离物
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.
电流探头方法：测量控制/信号线的发射

<!-- 第 12 页 -->
屏蔽效能应足以保证
标准3米法或10米法暗
电波暗室
屏蔽效能应足以保证
标准3米法或10米法暗
接收机
接收
的骚扰信号
接收机
接收EUT的骚扰信号
设备名称
作用推荐
室
达到对环境电磁噪声
CISPR25传导骚扰测试设备传导骚扰测试设备电平的要求。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
1KHz~100MHz
电流探头
耦合骚扰信号
测试频率范围
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
人工电源耦合网络(
在指定频率范围内使
N.A
人
电源耦合网络(
两个)
在指定频率范围内使
待测设备与电源和负
载电气隔离及耦合
EUT骚扰信号

<!-- 第 13 页 -->
0.5mm厚的铜板或镀锌
钢。尺寸越大越好。接
地平板应与屏蔽室地面
或墙面电气搭接，目的
是使它的直流电阻不超
接地平板
提供一个低阻抗连接
接地平板采用至少
试电压。
车载蓄电池
设备名称
作用推荐
设备名称
作用推荐
电源
提供零部件／模块测
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
300mm，接地铜带最大
长宽比应为7 1
长宽比应为7:1。
过
Ω
此外接地铜
过2.5mΩ。此外接地铜
带间的距离不得大于
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 14 页 -->
传导骚扰（电压法）是通过人工电源耦合网络来进行骚扰信号传导骚扰（电压法）是通过人工电源耦合网络来进行骚扰信号注意事项：零部件／模块测试电压：12V系统为13±1V，24V
系统应为26 ±2V。（02版中供电电压要求为12V系统为CISPR25传导骚扰测试（电压方法）13.5±0.5V，24V系统应为27±1V ）详细摆放可见下图：
传
的测量。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 15 页 -->
低相关介电常数支撑物（εr≤1 4）50Ω负载回低相关介电常数支撑物（εr≤1.4）回电EUT
电源线
EUT
人工网络
电源源
接地平板
（电压法）
传导发射
图：
电源线
远
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
模拟负载
如双重屏蔽的高质量同轴电缆（50Ω）Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
测量设备
壁板连接器
屏蔽室
屏蔽室
EUT
端接地
的的

<!-- 第 16 页 -->
（电压法）
传导发射
图：
电源回
线远端
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
EUT
接地的

<!-- 第 17 页 -->
超过1 0
上图是电源回线远端接地的
摆设方法
而电
超过150mm。上图是电源回线远端接地的EUT摆设方法。而电注：若试验计划要求EUT外壳接地，则EUT外壳接地线长度不源回线近端接地的EUT摆放方法与远端相似，不同的是近端接区分近远端接地的方法是看电源回线是否小于200
区分近远端接地的方法是看电源回线是否小于200mm。
地只需一个LISN。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 18 页 -->
传导骚扰（电流探头方法）是通过电流耦合钳来进行骚扰信号划中特殊规定否则这些测试线束应该彼此平行并且彼此靠紧划中特殊规定否则这些测试线束应该彼此平行并且彼此靠紧。
（εr≤1.4）上，位于接地板上方(50± 5)mm处。除非在测试计2.探头应圈住整个线束（包括全部电缆）。在离EUT连接器50mm 和750mm两处测量辐射。（2002版中则为保证在30M
Hz以上的频率点能测到最大电平，测量探头除在EUT连接器Hz以上的频率点能测到最大电平，测量探头除在EUT连接器
## 1 试验线束应该为（1700 2000）mm 长（或试验另有规定）
1.试验线束应该为（1700~2000）mm 长（或试验另有规定）（2002版测试线束长为1500 ± 75）并且放置在绝缘材料CISPR25传导骚扰测试（电流探头方法）传导骚扰测试电流探头方法的测试。测试时需注意以下几点：
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
50mm处外还应在下列位置逐个测量：
a）离EUT连接器500mm处；
c）离人工网络端子50mm处。）b）离EUT连接器1000mm处；
b）离EUT连接器1000mm处；
具体测量布置如下所示：

<!-- 第 19 页 -->
屏蔽体
图：
模拟和监视系统
测量仪器
负载模拟器
电流探头
## 02 版中此处测试距离为100mm
头光缆
电源
接地平板
接地平板
人工网络
（电流法）
人工网络
传导发射
电流探
测
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
低相关介电常数支撑物（εr≤1.4）EUT
量布布
置

<!-- 第 20 页 -->
电波暗室（ALSE）方法：辐射场强测量应在ALSE 内进行，以消除来自电TEM小室方法：辐射场强度的测量应该在屏蔽室中进行，以消除来自电气气设备以及广播台站产生的额外电磁骚扰的影响。
CISPR25辐射骚扰测试方法
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
带状线法方法：带状线是开方式的波导，由一个接地平板和一个主导电体（隔板）构成，有特征阻抗。一般采用的特征阻抗值是50Ω和90Ω 。
设备和广播站的附加干扰。TEM 小室的工作如同屏蔽室一样。
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 21 页 -->
励大家研究和实践这种试验方法，随着知识的增长，将来有机ALSE方法、TEM小室方法。而关于带状线法，目前则还是鼓而TEM小室受电磁环境及场地限制较多，所以基本上都是用目前关于零部件/模块的辐射骚扰测量的常见方法主要是：
目前关于零部件/模块的辐射骚扰测量的常见方法主要是：
会大家达成一致的意见后会把这种方法加入到本标准中。
会大家达成
致的意见后会把这种方法加入到本标准中。
ALSE方法来进行汽车电子的辐射骚扰测量。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 22 页 -->
电波暗室
屏蔽效能应足以保证
标准3米法或10米法暗
电波暗室
蔽效保
接收机
接收EUT的骚扰信号
接收机
接收EUT的骚扰信号
设备名称
作用推荐
电平的要求。
室
达到对环境电磁噪声
CISPR25辐射骚扰测试设备人工电源耦合网络(
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
待测设备与电源和负
N.A
：0.15MHz～30MHz
N.A
两个)
在指定频率范围内使
两个)
待测设备与电源和负
单极线
率
单极子天线
用于测试频率范围为
载电气隔离及耦合
EUT骚扰信号

<!-- 第 23 页 -->
：200MHz～1000MHz
200MHz～3500MHz的对数周天线喇叭天线用于测试频率范围为覆盖该频率范围的喇叭喇叭天线用于测试频率范围为：1000MHz～2500MHz
覆盖该频率范围的喇叭
400MHz~6GHz的喇叭天线或200MHz～
天线或
或对数周期天线。
设备名称
作用推荐
设备名称
作用推荐
：20MHz～300MHz
N.A
双锥天线
用于测试频率范围为
对数周期天线
用于测试频率范围为
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
3500MHz的对数周天线试电压。
车载蓄电池
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
电源
提供零部件／模块测
试电压。

<!-- 第 24 页 -->
从30 MHz到2.5GHz的测量应该分别在垂直和水平极化中进行。
测试注意事项：零部件／模块测试电压：12V系统为13±1V，测试注意事项：零部件／模块测试电压：12V系统为13±1V，24V系统应为26 ±2V。（02版中供电电压要求为12V系统为13.5±0.5V，24V系统应为27±1V ）
从150 kHz 到30 MHz的测量仅在垂直极化状态下进行。
CISPR25辐射骚扰测试（ALSE方法）射测试时
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
针对辐射发射测量，EUT 和测量设备的布置应该与下图所示大Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
具体测试设置如下图所示
具体测试设置如下图所示：
体相同。

<!-- 第 25 页 -->
图：
单极子
天天线
放
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
极置极
子天线
EUT
负载模拟器
单
Shenzhen Morlab Communications Technology Co., Ltd.
绝缘材料支撑（εr≤1.4）图

<!-- 第 26 页 -->
负载模拟器
图：
双锥天
线线放
置
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
双锥锥
天线
Shenzhen Morlab Communications Technology Co., Ltd.
图

<!-- 第 27 页 -->
负载模拟器
对
图：
对数周
期期天
线
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
数周周
期天线
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
放置图

<!-- 第 28 页 -->
图：
喇叭天
线放放
置
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
喇叭天
线
负载模拟器
对数周
周期天
线
Shenzhen Morlab Communications Technology Co., Ltd.
图

<!-- 第 29 页 -->
图：
辐射骚
扰摆放
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
实景图

<!-- 第 30 页 -->
CISPR 是做为一个国际化的测试标准，所以它是非强制性的一测量距离进行标定。另外不允许天线的任何辐射部分距地面小每副天线（鞭状天线除外）都应以到参考点距离为1000mm的--对数周期天线的末端（包括双锥对数复合天线），
对数周期天线的末端（包括双锥对数复合天线），--双锥天线的相位中心（中点）,
--鞭状天线的垂直单极元件，天线的参考点定义如下：
天线的参考点定义如下：
－喇叭天线的前开孔
于250mm。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
个要求，而关于它的相关测试应该具体到各个地区的法规来规最后所用限值等级是经整车生产商和零部件供应商的同意进行定。例如欧盟的EN55025,中国的GB18655来规范。并且测试
Shenzhen Morlab Communications Technology Co., Ltd.
设定的
设定的。

<!-- 第 31 页 -->
Road vehicles — Component test methods for
道路车辆-用窄带发射的电磁能量进行电子干扰.
electrical disturbances from narrowband
radiated electromagnetic energy
ISO 11452: A1:2008
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 32 页 -->
shielded enclosure
18GHz】频带电磁场的抗干扰性能l
d
总则和定义
用于介绍
些基本定义和
Part 1: General and
definitions
总则和定义
用于介绍一些基本定义和
Part 3: Transverse
TEM小室
检验设备对【0.01MHz –
a t 3:
a sve se
200MHz】频带电磁场的抗干扰性能。
Part 2: Absorber-lined
电波暗室法
检验设备对【80MHz –
小室
检验设备对【
标准部分
内容
适用范围
测试条件
electromagnetic mode
(TEM) cell
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
P rt 5
Striplin
带状线法
检验设备对【0 01MHz
Part 5：Stripling
带状线法
检验设备对【0.01MHz –
400MHz】频带电磁场的抗干扰性能200MHz】频带电磁场的抗干扰性能。
Part 4:Bulk current
大电流注入法
检验设备对【1MHz –
Part 4:Bulk current
injection (BCI)
大电流注入法
检验设备对【1MHz
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 33 页 -->
试法
检验设备对【0.01MHz –
法
检验设备对【0.25MHz –
200MHz】频带电磁场的抗干扰性能。
400MHz】频带电磁场的抗干扰性能P
t 6 P
ll l
l t
射频平行板天线测
检验设备对【0 01MH
Part 6: Parallel plate
ISO11452介绍的是用各种不同的测试方法来对车载电子进行标准部分内容适用范围antenna
射频平行板天线测
直接射频功率注入
frequency (RF) power
Part 7: Direct radio
injection
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
抗骚扰类的测试。所以我们将对最常用的两种测试方法进行介绍。分别是电波暗室法（ISO11452-2）和大电流注入法Shenzhen Morlab Communications Technology Co., Ltd.
（ISO11452-4）

<!-- 第 34 页 -->
校准法：使用校准夹具标定的标准电流值，系统记录下发射功率后，再将校准法使用校准夹具标定的标准电流值系统记录下发射功率后再将样品摆放上去开始试验，测试过程中的注入功率不变，但产生的电流可能辐射抗干扰测试方法辐射抗干扰测试方法出现变化
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
闭环法：无需校准，直接测试，系统根据监测钳的数据实时改变输出功率，注：这两种方法产生的结果很可能有较大差别。其效果和产品自身的阻抗特性有关。其中闭环法不常见，而基本都是用校准
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
尽量使电流稳定在测试要求的数值。
法进行测试。
法进行测试。

<!-- 第 35 页 -->
屏蔽效能应足以保证达到对环境电磁噪标准3米法或电波暗室屏蔽效能应足以保证达到对环境电磁噪声电平的要求。
标准3米法或
## 10 米法暗室
设备名称
作用推荐
双锥天线
用于测试频率范围为：20MHz～300MHz
N.A
人工电源耦合网
在指定频率范围内使待测设备与电源和N.A
耦
负载电气隔离及耦合EUT骚扰信号络(两个)
在指定频率范围内使待测设备与ISO11452-2测试设备
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
18000MHz
400MHz~6GH
z
1000MHz
200MHz~3.5
GHz
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
喇叭天线
用于测试频率范围为：1000MHz～
对数周期天线
用于测试频率范围为：200MHz～

<!-- 第 36 页 -->
AP32 L7165:65W, 20MHz~1GHz
功率放大器
放大信号发生器产生的功率
AP32 SV125A:25W,0.8~3GHz
设备名称
作用推荐
功率计
用于监视输出或反馈功率
N.A
场强探头
可监视水平或垂直极化
N A
场强探头
可监视水平或垂直极化
N.A
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
信号发生器
提供一个稳定的信号
SME 02 10MHz~20GHz
信号发生器
提供
个稳定的信号
定向耦合器
用于将输出功率耦合一部分给功率计N.A
能量回流
N.A
Shenzhen Morlab Communications Technology Co., Ltd.
6dB固定衰减器
防止测试过程中天线不匹配，造成的

<!-- 第 37 页 -->
2.测试电压：12V系统为13.5±0.5V，24V系统应为27±1V 。
（由车载蓄电池进行供电）
1.测试温度：(23 ± 5) °C.
ISO11452-2测量条件条件
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 38 页 -->
校准是为了使测试时EUT所在的场强维持在一个固定的状态下。
所以校准过程与实际的测试过程是有一定的相似性的。
ISO11452-2测试校准方法
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 39 页 -->
校准意
ISO11452-2校准示意图
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 40 页 -->
具体测量设置与CISPR25 (edition3)的辐射测试方法一致。如ISO11452-2测量设置下图所示。
下图所示
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 41 页 -->
图：
双极天
线线放
置
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
双锥锥
天线
Shenzhen Morlab Communications Technology Co., Ltd.
图
负载模拟器

<!-- 第 42 页 -->
负载模拟器
对
图：
对数周
期期天
线
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
数周周
期天线
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
放置图

<!-- 第 43 页 -->
图：
喇叭天
线放置
图图
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
喇叭天
线
试频率
负载模拟器
对数周
试频率
周期天
线
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
时采用。
为1GHz
注：测
时采用
以上

<!-- 第 44 页 -->
1.信号的调制
- a) 未调制正弦波信号（可使用范围：0 01 MHz to 18 GHz）- a) 未调制正弦波信号（可使用范围：0.01 MHz to 18 GHz）- b) 1KHz, 80%调制的AM（振幅调制）信号（可使用范围：
0.01 MHz to 800MHz）- c) ton = 577 μs 和period = 4 600 μs的PM（相位调制）- c) ton  577 μs 和period  4 600 μs的PM（相位调制）
信号（可使用范围：800 MHz to 18 GHz）ISO11452-2测试信号信
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 45 页 -->
描速度不应超过1.5×10-3 十倍频程/S，在频率范围内步进递增扫2.  800MHz以下测试信号幅度为80％的1kHz正弦波调制信号。
800MHz以上测试信号为ton = 577 μs 和period = 4 600 μs的相位调制信号调制信号平为幅度80％的干扰信号而800MHz以上为相位调制信号扫平为幅度80％的干扰信号。而800MHz以上为相位调制信号。扫
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
时间。敏感频点（如时钟频率和谐波频率），应单独分析。
4. 应努力在测试过程中充分运行受试设备的各项功能，并尽可能多的测试各个模式Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 46 页 -->
## 2 滞留时间（Dwell time）: 不小于1s
。
2.滞留时间（Dwell time）: 不小于1s。
3.频率步长：
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 47 页 -->
## 4 测试严酷等级
4.测试严酷等级
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 48 页 -->
## 5 测试频率范围
5.测试频率范围
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 49 页 -->
Class C: 一个或者多个功能或性能暂丧失，但在施加干扰之后Class D: 一个或者多个功能或性能暂丧失，但在施加干扰之后Class B: 所有功能或性能在干扰状态下，一个或者多个功能或
者性能偏移指定的容差，但所有功能或性能在干扰移除以后能者性能偏移指定的容差，但所有功能或性能在干扰移除以后能恢复到规定的容差限值以内。并且存储数据不能有任何异常现Class A: EUT功能或性能一直保持正常，无任何异常现象
通过人为的干预能自动恢复到正常模式EUT能自动恢复到正常模式测试结果性能判据测试结果性能判据象
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Class E: 一个或者多个功能或性能暂丧失，并且不能自动恢复Shenzhen Morlab Communications Technology Co., Ltd.
到正常模式

<!-- 第 50 页 -->
道路车辆-用窄带发射的电磁能量进行电子干扰.部件narrowband radiated electromagnetic energy —
ISO11452-4:Road vehicles — Component test
p
methods for electrical disturbances from
P
t 4 B lk
t i j
ti
(BCI)
Part 4:Bulk current injection (BCI)
试验方法-第4部分:大电流注入法试验方法第4部分:大电流注入法
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
该测试目的是检验设备对【1MHz – 400MHz】频带电Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
磁场的抗干扰性能。
场
抗干扰性能

<!-- 第 51 页 -->
标准3米法或10米法暗
设备名称
作用推荐
N.A
室
电波暗室
屏蔽效能应足以保证
达到对环境电磁噪声
两个)
在指定频率范围内使
待测设备与电源和负
载电气隔离及耦合
载电气隔离及耦合
电平的要求。
ISO11452 4测试设备ISO11452-4测试设备人工电源耦合网络(
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
电源
车载蓄电池
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
大电流注入钳
用于场强的输出
N.A
电源
提供一个稳定的直流
EUT骚扰信号

<!-- 第 52 页 -->
信号发生器
提供一个稳定的信号
SME03:5KHz~3GHz
功率放大器
放大信号发生器产生的功率
AP32 DR180:80W,
10KHz~400MHz
设备名称
作用推荐
功率计
用于监视输出或反馈功率
N A
功率计
用于监视输出或反馈功率
N.A
校准夹具
代替EUT进行场强的校准
N.A
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
定向耦合器
用于将输出功率耦合一部分给功率计N.A
量回流
N.A
6dB固定衰减器
防止测试过程中天线不匹配，造成的能Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 53 页 -->
2.测试电压：12V系统为13.5±0.5V，24V系统应为27±1V 。
1.测试温度：(23 ± 5) °C.
ISO11452-4测量条件条件
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 54 页 -->
校准与实际测试过程相似，不同的是用校准夹具代替EUT进行。
校准夹具一端接50欧的负载另一端接监控线路如下图为校校准夹具端接50欧的负载。另端接监控线路。如下图为校校准ISO11452-4测量校准准及测试配置图：
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 55 页 -->
敏感频点（如时钟频率和谐波频率），应单独分析。
敏感频点
如时钟频率和谐波频率
，应单独分析
1. 测试信号幅度为80％的1kHz正弦波调制信号。
ISO11452-4测试设置
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
4. 应努力在测试过程中充分运行受试设备的各项功能，并尽可能多的测试各个模式Shenzhen Morlab Communications Technology Co., Ltd.
5. 测试严酷等级

<!-- 第 56 页 -->
## 6 详细的测试装置如下图所示
6. 详细的测试装置如下图所示。
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
Shenzhen Morlab Communications Technology Co., Ltd.

<!-- 第 57 页 -->
低相关介电常数支撑物（εr≤1.4）图：
监视系统
射频发生器
模拟负载
EUT
电源线
图
模拟负载
电源线
电源人工
电测试
装装置
摆放放
示意
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
源
接地平板
网络
注入探头
Shenzhen Morlab Communications Technology Co., Ltd.
:::CCC┆CE┆FCC┆RoHS┆GCF┆UL┆OTA┆TELEC┆Bluetooth:::
图源
mm和(750 ± 10)
EUT (150 ± 10）mm, (450 ± 10)
位置分别为距
图
注：BCI测试
mm。

<!-- 第 58 页 -->
专业、卓越、精准
谢谢！
谢谢
Electronic Testing Building, Shahe Road, Xili, Nanshan District, Shenzhen, Guangdong Province, P. R. China 518055
专业、卓越、精准
MORLAB与您携手成就未来Shenzhen Morlab Communications Technology Co., Ltd.
