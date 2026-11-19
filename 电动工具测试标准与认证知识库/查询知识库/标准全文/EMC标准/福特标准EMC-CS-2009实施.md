# 福特标准EMC-CS-2009实施

> 标准号：`—` ｜ 年份：2009 ｜ 版本状态：**未纳入核查范围**
> 来源方式：文字层直提 ｜ 原分类：EMC标准 ｜ 页数：50
> 正文可信度：文字层数字缺失，只能定位章节，判定必须回 PDF 原件
> 版本核查：清单只覆盖 50 条安规/EMC 现行标准，本条未逐篇联网核实
> 原始文件：`全文/EMC标准/福特标准EMC-CS-2009实施.md` ｜ 整理日期：2026-11-12

---

<!-- 第 1 页 -->
Ford EMC-CS-2009 标准介绍(传导部分）

<!-- 第 2 页 -->
Introduction
介绍
EMC-CS-2009
Introduction
Ford does a very admirable job publishing its standard: it is the only standard that is available
online.  Other suppliers could learn from this unprecedented openness. The Ford standards are
also arguably the most complete.
Each laboratory must be accepted by Ford as a supplier through an intensive accreditation process.
Ford takes the unusual position of not requiring pulse 3a and 3b, but they cover this with a very
unique inductive transient generator that uses a test circuit similar to what could be found in the
vehicle.
作为供应商, 实验室必须通过福特的密集评审的认证. 福特标准无需作脉冲3A/3B, 但是,使用独特的感性瞬变发生器来模拟汽车会产生的瞬变状况.
Pulse 3a/3b is still required by COMMISSION DIRECTIVE 2004/104/EC (tested in accordance with ISO
7637-2), as is pulse F1 and F2, which is optional in the new Ford standard.  Therefore, any
component supplier must still perform these tests for use in the European Union (EU).
在2004/104/EC中仍然需要做ISO7637-2中的Pulse3a/3b, 对应福特的新标准是可以选择性的作的PulseF1/F2. 然而,所以出口欧盟的零件供应商都必须做这两个脉冲的测试.

<!-- 第 3 页 -->
EMC-CS-2009
Introduction
Introduction
The inductive transient generator is unique in that it is basically random – the repeatability comes
from the fixed design of the test circuit and the components that it consists of.  For this reason, no
substitutions are allowed for critical components.  It is, however, not able to be calibrated and the
relay must be replaced from time to time.
感性瞬态发生器是独特的,因为它基本上是随机的: 组成的零件和固定设计的测试电路带来可重复性能.因为这个原因,关键的零部件不可代替. 但是,它不能校准和使用的继电器必须频繁更换.
Additionally, the simulations used in the standard (CI 230 A-D, for example) are actually more
accurate real-world simulations and much more complete than outlined in ISO 7637.
而且,在新标准中使用的模拟器能比ISO7637标准中的发生器更精确的模拟出现实的状态.
You will see that I’ve tried to make sure that the reader knows what equipment changes are
necessary to perform the test.  This assumes that the user has an NSG 5500, NSG 5600 and PA
5840/5740 which we’ve been offering for many years.  If so, you’ll probably be surprised of how
little additional equipment is needed!
你可以看到,我们尽量解释新标准中测试设备的改变.假设您已经拥有我们的NSG 5500, NSG 5600 和 PA
5840/5740汽车传导抗扰度测试系统,您会惊讶于只需添加如此少的设备就可以完全满足新标准的测试!

<!-- 第 4 页 -->
What Must be Tested:
必须测试的产品:
 Basically anything that connects to the battery
 Any active electronic module
 A motor (brushless or otherwise)
 Any module that contains a motor (any type)
 Any module that contains a relay
 Special cases must be clarified with the
contractor
连接到电池上的所有零部件所有有源电子模块马达(无刷或以其他方式的)
包含有马达(所有类型的)的模块包含有继电器的模块制造商必须澄清的特殊案例EMC-CS-2009
What must be Tested?

<!-- 第 5 页 -->
Brief Overview of
All Requirements
RE 310*: 150kHz-1583MHz, CISPR25 Ed3
(No longer requires testing to Bluetooth and Satellite Digital Radio frequencies)
(不再要求测试蓝牙及卫星数字广播频段)
CE 420*: Conducted RF Emissions 传导射频骚扰150kHz-108MHz, CISPR25 Ed3
CE 421*: Conducted Emissions传导骚扰10 – 150kHz
CE 410: Conducted Transient Emissions传导瞬态骚扰, ISO 7637-2
RI 112*:  BCI 大电流注入1-400MHz, ISO11452-4
(Alternative method in TEM Cell with prior approval 横电波小实方法要得到预先批准)
RI 114*: Radiated Immunity 辐射抗扰度, 400-3100MHz, ISO11452-2
RI 115*: RF Immunity to Hand Portable Transmitters 对手持式发射机辐射抗扰度
RI 140: Magnetic Field Immunity 50Hz – 100kHz 磁场抗扰度, MIL-STD-461E (RS101)
RI 130/150: Coupled Immunity 耦合抗扰度 (Wire-to-Wire Coupled 线对线耦合)
CI 210: Power Line Disturbances 抗电源线干扰CI 220: Pulse A1/A2/B1/B2/C1/C2, Special Inductive Switching Transients 特殊感性脉冲
CI 220: Pulse E/F1/F2/G1/G2, ISO 7637-2
CI 230: Immunity from Power Cycling 抗电源周期变动(Performed after Temperature soak at -40 degrees C)
CI 250: Ground Voltage Offset 地线电压偏移, 2 Parts 两部分CI 260: Waveform 波形A/B/C/D/E/F
CI 270: Voltage Overstress 过压CI 280: Electrostatic Discharge 静电
* While this is primarily a conducted presentation, all tests in the RF frequency range are also
available from Teseq

<!-- 第 6 页 -->
Ford RE310
ES-XW7T-1A278-AC test range 测试范围0.15MHz – 2500MHz
EMC-CS-2009 test range测试范围0.15MHz – 1583MHz, revised test bands table 更改测试频段划分
Basically follow CISPR 25 ed.3ALSE method but more detailed requirement
基本上按 CISPR 25 第三版本的 ALSE 方式 但测试布置要求更精细Antenna Setup 天线布置Test Bench Setup 测试台布置

<!-- 第 7 页 -->
Ford CE420，CE421
CE420 basically follow CISPR 25 ed.3 Voltage method， test range remained
from 0.15MHz – 108MHz
CE420第三版本的 电压测试方式，测试范围维持从0.15MHz – 108MHz
Test setup is slightly different from CISPR25
测试布置跟CISPR25 有差异

<!-- 第 8 页 -->
Ford CE421 低频传导骚扰电压测试Added CE412 conducted emission for covering frequency from 10kHz – 150kHz
增加 CE421 传导发射 覆盖频率从 10kHz – 150kHz
Test setup is slightly different from CISPR25
测试布置跟CISPR25 有差异

<!-- 第 9 页 -->
Ground Plane
Artificial Network
Simulates Wiring Harness
Battery
Source
Ford CE 410
CE 410 is an emissions test using a setup similar to ISO 7637-2.  This emissions test evaluates
transients that are generated during DUT switch off (and also on).  This effect is most prevalent
with DUTs that contain inductance: motors and modules that contain motors, relays and
solenoids.
CE 410 是使用的是类似ISO7637-2的传导骚扰测试的设置. 这个传导测试项目是评估DUT开关时产生的瞬态干扰. 感性DUT的影响更加明显: 马达和包含马达的模块,继电器和螺线管.
Oscilloscope
Impedance
Switch
DUT
200 ± 50 mm
100 ± 25 mm
Insulated Support
Load Simulator

<!-- 第 10 页 -->
Caution Should be Used Selecting Artificial Network (AN)
选择AN时应该注意的地方
Difference AN(LISN) defined in ISO7637-2 & CISPR25
CISPR
ISO 7637

<!-- 第 11 页 -->
Changes in Standard
Limits changed to + 75V / - 100V
限制值变成 + 75V / - 100V
Changes required in Teseq Solution
Teseq对应的解决方案
AES 5501 – No Changes Necessary
AES 5501 – 无需改动!
CE 410 Changes in Standard and Teseq Solution
CE 410 变动和Teseq对应的解决方案

<!-- 第 12 页 -->
RI112 BCI test from 1MHz – 400MHz, basically follows ISO11452-4
RI112 大电流注入 测试频率 1MHz – 400MHz, 基本按ISO11452-4
2 parts: DBCI 1-30MHz, CBCI 30MHz-400MHz
分成两部分： 差模BCI 1-30MHz, 共模BCI 30MHz-400MHz
DBCI grounding setup is slightly changed from old standard
差模BCI 测试接地布置从老标准上有些小更改Injection current varies according to frequency
注入电流按频率而改变
Ford RI112

<!-- 第 13 页 -->
DBCI Setup
差模BCI布置
1MHz-30MHz
CBA400M-100
CIP9136A
电流注入钳
功率放大器
NSG4070
综合系统
Ford RI112
Power Return
电源回路
EUT Case Ground
被测件外壳接地
Insulation Support
绝缘垫
MD4070
电流探头
DCP0100A
定向耦合器

<!-- 第 14 页 -->
CBA400M-100
CIP9136A
电流注入钳
功率放大器
NSG4070
综合系统
Ford RI112
CBCI Setup
共模BCI布置
30MHz-400MHz
EUT Case Ground
Insulation Support
绝缘垫
被测件外壳接地
MD4070
电流探头
DCP0100A
定向耦合器

<!-- 第 15 页 -->
起始电压低于校准电压10dB
A步进电压1dB最大
t 为硬件和软件测试所需的时间B 测试后进入下一个频点时，需下降10dB
FORD RI测试过程

<!-- 第 16 页 -->
RI114 basically follows ISO11452-2 test range 400MHz – 3100MHz
RI114 基本按 ISO11452-2 测试范围400MHz – 3100MHz
1.2-1.4GHz and 2.7-3.1GHz 600V/m radar pulse 雷达波Can use reverberation chamber as alternative method
可选用混响室测试
RI Test System
辐射抗扰度测试系统
RI114
Reverberation Chamber
混响室

<!-- 第 17 页 -->
ITS6006
CBA 1G-70
CBA 3G-25
RI115
Newly added RI115 RF Immunity to hand portable transmitter 新增加 RI115手持式发射机辐射抗扰度
based on the potential risk of modules being exposed to hand portable transmitters (e.g. cell
phones).针对手持式发射装置如移动电话对汽车电子的潜在危险
Shall be performed in an absorber lined shielded enclosure (ALSE), which conforms to ISO 11452-2
应在跟 ISO11452-2 一致的电波暗室进行测试Divided into 6 frequency band, covering from 360-2700MHz
分6个频段测试，覆盖从360-2700MHz
Must use SBA9113 + N420J antenna
指定使用 SBA9113 + N420J 天线

<!-- 第 18 页 -->
Changes in Standard
标准的变动
Test Levels Changed
Frequency Increased 50 Hz – 100 kHz
频率的扩展: 50Hz—100KHz
Changes required in Teseq Solution
特测的解决方案
RI 140 Changes in Standard and Teseq Solution
RI 140 变动和Teseq对应的解决方案NSG 5600 – Our system has always been capable of 100 kHz.  No changes necessary.
AutoStar 5 - Optional Standards Database Update Available
NSG5600 – 我们的系统一直来的频响都在100KHz以上. 无需改动!
AutoStar 5 – 只需做标准库选件的升级.
We recommend the radiated loop solution because it can be conveniently driven by
the PA 5x40 series.  With helmholts coils, much more power is required for large test
volumes.
我们推荐使用辐射环型天线,因为我们的 PA  5x40 系列电池模拟器能很方便地驱动. 使用Helmholts线圈, 测试高等级时,将会需要更高的功率推动.

<!-- 第 19 页 -->
Battery Control
Main Source
Main Source
Battery Lines
Control Unit
Main Output
PA 5840 / PA 5740
RI 140 Magnetic Immunity
RI 140 is a simulation of common low frequency magnetic fields that occur inside, and in the
surroundings of the vehicle.
RI 140 是模拟发生在车内和车外的普遍的低频磁场状况.
GPIB
Main In
Aux In
FG 5620
CT 5610
TC 5650
PA 5640
DS 5630
NSG 5600
Radiating Loop Coil
or Helmholtz Coil

<!-- 第 20 页 -->
Output voltage:       -15V to +15V ±0.1V
Output Current:       -5 to +5A ±0.1A
Impedance:              0.5Ω
Frequency range:     DC-320kHz
RI140 solution- PA5640 module
Coil connector
Loop Sensor
Connector
output port
when use as a D
source/ amplifier

<!-- 第 21 页 -->
Generator
RI 130/150 Coupled Immunity (Wire-to-Wire Coupled)
RI 130/150 耦合抗扰度(线对线耦合)
RI 130 is an immunity test using the special inductive relay chatter fixture, coupled
using a parallel wire coupling method unique to Ford.
RI 130 是使用特殊感性继电器颤振夹具的抗扰度测试, 福特标准的耦合使用独特的并行线耦合方法.
RI 150 uses a similar setup as RI 130 but with a sine wave disturbance (current)
RI 150 使用类似 RI 130 的设置,不过使用的正玄波干扰.
Source Wire
Test Fixture
Test Wire
DUT
Load
Simulator
Remaining Wires in Wiring Harness
(There is a slightly different configuration for twisted pairs)

<!-- 第 22 页 -->
RI 130/150 Changes in Standardand Teseq Solution
RI 130/150 的变动和特测得对应解决方案Changes in Standard 标准的变动
RI 150 – Current Increased to up to 6A/p-p, Frequency increased to 100 kHz
RI 150 – 电流提升到6A/p-p, 频率提升到 100KHz
RI 130 – New Generator Required
RI 130 – 需要新的发生器Fixture Replaced 需要新的测试夹具Changes required in Teseq Solution 特测解决方案的对应变动
NSG 5600 – Our system has always been capable of 100 kHz. No changes.
Careful selection of the amplifier and adjustment of control signal may be necessary.
NSG5600 –我们的系统一直来的频响都在100KHz以上. 无需改动!
需要注意正确选择放大器和控制信号的调整!
NSG 5071 – New Generator for the RI 130 test.
NSG 5071 – 对应 RI 130 测试用的新的发生器.

<!-- 第 23 页 -->
Ford 脉冲抗扰度测试
CI 210: Power Line Disturbances 抗电源线干扰CI 220: Pulse A1/A2/C1/C2, Special Inductive Switching Transients 特殊感性脉冲
CI 220: Pulse E/F1/F2/G1/G2, ISO 7637-2
CI 230: Immunity from Power Cycling 抗电源周期变动(在零下40C进行 )
CI 250: Ground Voltage Offset 地线电压偏移, 2 Parts 分两部分CI 260: Waveform 波形A/B/C/D/E/F
共20个测试波形

<!-- 第 24 页 -->
CI 210抗电源线干扰
目的：测试被测件抵抗电源线上所存在的噪声测试方式：叠加正弦波（模拟噪声）于13.5V + 极电源线。
测试频率：0.05 – 100kHz
施加正弦波电压: 随频率提升 0.2V – 2V
电池模拟器带宽必须有很低的内噪

<!-- 第 25 页 -->
+
NSG5600
-
PA 5840
CI 210 抗电源线干扰US
示波器
UP (13.5V)
DUT
模拟负载

<!-- 第 26 页 -->
TESEQ 汽车电子传导抗扰系统PA5740/ PA5840电源模拟器特点电池模拟器带宽必须能支持 ≥100kHz
电池模拟器带宽必须有很低的内噪其他厂家电源模拟器，电源纹波200mVp/p

<!-- 第 27 页 -->
CI 220 瞬态脉冲抗扰度CI 220: 通过独立的线路设计，产生脉冲A1, A2, C1 和 C2 模拟在供电线及控制线上真实瞬变的脉冲脉冲E, F1, F2, G1, G2 基本上跟 ISO7637-2

<!-- 第 28 页 -->
CI 220瞬态脉冲抗扰度脉冲A1模拟电流在 1-5A 的电路，继电器打开时DUT 被并连感性负载产生的负脉冲冲击。
脉冲A2模拟电流在 <1A 的电路，A2-1 是继电器打开时并连感性负载产生的脉冲群冲击。
A2-2 是继电器打开时并连感性+容性负载(如电机里的滤波电容)产生的衰减震荡脉冲冲击。
脉冲C是模拟电路带感性负载时，继电器打开所时的“电弧 arching” 及接触点震荡所产生的脉冲C1 是模拟电弧所产生的高速衰减震荡脉冲群C2 是模拟触点震荡所产生的衰减震荡脉冲

<!-- 第 29 页 -->
CI 220 瞬态脉冲抗扰度

<!-- 第 30 页 -->
CI 220 瞬态脉冲抗扰度Teseq NSG5071 能实现 脉冲 A1， A2-1， A2-2，C1， C2

<!-- 第 31 页 -->
CI 220 瞬态脉冲抗扰度Teseq NSG5071 脉冲 A1， A2-1， A2-2，C1， C2 典型波形

<!-- 第 32 页 -->
脉冲E, F1, F2, G1, G2 基本上跟 ISO7637-2
Teseq 基本配置 NSG5500/NSG5600/PA5840
脉冲 F1
脉冲 E
脉冲 F2
CI 220 瞬态脉冲抗扰度PA5840
NSG5500
NSG5600

<!-- 第 33 页 -->
CI 220 G1, G2 抛负载测试福特要求，按不同的测试情况 (如被测件本身的设计规格) 测试工程师需要在抛负载脉冲发生器外加电压抑制网络CI 220 瞬态脉冲抗扰度抑制网络的组成，在福特标准也有指引。

<!-- 第 34 页 -->
CI 220 瞬态脉冲抗扰度脉冲G1
加上抑制网络
脉冲G2
验证脉冲 CI220 G1, G2 基本是等同 ISO7637-2 的脉冲 5a,5b (脉宽与内阻不同)
CI220 G1 测试前需要验证开路与带载(0.5Ω)的波形CI220 G2 测试前需要验证带载(0.5Ω)的波形

<!-- 第 35 页 -->
模拟引擎起动时所有可能施加到到DUT的输入电压的状况测试重点：四个波形有时间同步的要求, 在零下40度进行CI 230 电源轮廓
Power & control circuits connected to the battery via the
IGN 1 (RUN) contact of the ignition switch.  (i.e. circuits
active in RUN but not START)
点火
Power & control circuits connected to the battery via
the IGN 2 (RUN/START) contact of the ignition
switch.  (i.e. circuits active during RUN and START).
Also includes connections to battery through a relay
switch.
Power & control circuits connected to the battery via
the START contact of the ignition switch.  (i.e. circuits
active only during engine start).
Power & control circuits connected directly to battery.
(A better simulation of ISO 7637-2 Pulse 4)

<!-- 第 36 页 -->
CI 230 电源轮廓

<!-- 第 37 页 -->
通过 Teseq NSG5600 + 4x PA5840
Teseq  Autostar 软件可完全支持NSG5600
CI 230 电源轮廓
PA5840
DUT

<!-- 第 38 页 -->
CI 250: 测试DUT的供电负极上的纹波与地线之间电压差的各种影响。
分成两部分:
连续(正弦波)
阻尼振荡波
测试难度
对电源模拟器的内噪严格(连续正弦波)
电池模拟器带宽必须能支持 ≥100kHz
非常复杂的测试流程 (阻尼振荡波): 4个测试程序、每个程序包含20个不同段落，(80种脉冲之间的延时变化)
CI250 地线电压错位

<!-- 第 39 页 -->
测试布置
连续正弦波
阻尼振荡波
2:1
FG
PA 5x40
2:1
DDS3005
PA5740
Ground Plane
CI250 地线电压错位
外置隔离变压器
6220-1A
AN
+
DUT
-
Load Simulator
+
Power
Supply
0.5 Ohm
-

<!-- 第 40 页 -->
Teseq 方案
DDS 3005 + PA5840 + 2x 6620-1
CI250 CI250 地线电压错位Teseq Autostar 软件

<!-- 第 41 页 -->
CI260 目的跟ISO 16750-2 Reset behaviour at voltage drop 一样。
测试DUT硬件及软件在瞬间断电后的复位 能力。
测试方式比ISO 16750-2 要求更高。
分 A，B，C，D，E，F，测试样式CI 260 电压跌落跌落或上升时间 10µs

<!-- 第 42 页 -->
CI 260 电压跌落

<!-- 第 43 页 -->
NSG5600
PA 5840
CI 260电压跌落
测试特殊要求：
使用任意波发生器及音频功率放大器产生测试样式不应用开关实现电压跌落

<!-- 第 44 页 -->
CI 260 F 随意弹动FG
PA 5x40
FG
PA 5x40
DUT
PA 5840
NSG5600
CI260电压跌落
NSG 5071
NC
NC

<!-- 第 45 页 -->
CI 270 Voltage Overstress
CI 270 电压过载测试CI 270: A test to check for immunity to potential voltage overstress or reverse
voltages.  Only minor changes were made.
CI 270: 检测可能存在的电压过载和反向电压. 新标准作了小的修改.
Requirement
Duration
Amplitude (V)
-14 (-0.7, +0)
19 (+0.95, -0)
24 (+1.2, -0)
≥ 60 sec.
≥ 60 min.
≥ 60 sec.

<!-- 第 46 页 -->
Changes in Standard  标准的变动Changes required in Teseq Solution
Teseq解决方案的变动
None*
CI 270 Changes in Standard and Teseq Solution
CI 270 标准的变动和Teseq的解决方案Tolerances given for test levels
给出了测试电平的容差范围
Minimum power supply short circuit capacity reduced to 100A (previously 200A)
减低了电源短路电流到100A
* Users of PA 5840-300 (100A constant) can now use their amplifiers for this test.  The user should consider if they
have a power supply available for this test due to cost reasons.  The source voltage doesn’t vary during the test, so a
power amplifier is not strictly needed.

<!-- 第 47 页 -->
~1 Meg bleed-off
Resistor
(used between discharges)
CI280 ESD
CI 280: ESD Testing performed in two phases: powered and unpowered. Setups
differ and are changed. ESD Testing must be performed before any other testing.
CI 280: ESD 测试分为两个阶段: 上电和不上电. 配置已经变更. 在其他所有测试之前必须先作ESD.
Facility Ground
DUT
CI 280 Unpowered Handling Test

<!-- 第 48 页 -->
Changes in Standard 标准的变动Changes required in Teseq Solution
Automatic Bleed-Resistor Accessory Supported
CI 280 Changes in Standard and Teseq Solution
CI 280 标准的变动和Teseq的解决方案Temperature tolerance changed to 23º ±5
Unpowered tests are now performed on a dissipative mat
不上电测试在耗散垫上作
Discharge Sequence 7 is not applicable to device surfaces not accessible to touch
during normal operation
第7个测试步骤将不再需要在正常操作时不接触到的表面上做.
Discharge Sequence 8 is applicable only to devices directly accessible from outside the
vehicle or interior surfaces without touching any portion of the vehicle.
第8个测试步骤只需要对车的外部或者内部不接触到的任意部分.
DUT bleed-off between discharges    每次测试之间都要做DUT的放电动作.
None – but the NSG 438 supports an automatically switched bleed resistor that may be
helpful.
NSG438 – 无需要变动. 而且具备自动开关静电释放电阻的功能.
ESD-
Pulse
t
Charging
level
t
T1
T2
T3
T1
Relais
status

<!-- 第 49 页 -->
INA 4421 tripod
support
CI280 ESD 测试解决方案INA 4416 for contact
discharge to DUT
pin
INA 4430
charge
remover
INA 4415 Flexible
air/contact tip

<!-- 第 50 页 -->
Thank You!
