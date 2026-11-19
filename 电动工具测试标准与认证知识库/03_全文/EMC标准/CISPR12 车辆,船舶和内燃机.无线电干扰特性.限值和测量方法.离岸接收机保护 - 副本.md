# CISPR12 车辆,船舶和内燃机.无线电干扰特性.限值和测量方法.离岸接收机保护 - 副本

- 标准号：CISPR12　年份：2009　文件名状态：—
- 来源 PDF：`EMC标准\汽车电子\CISPR12-2009 车辆,船舶和内燃机.无线电干扰特性.限值和测量方法.离岸接收机保护 - 副本.pdf`
- 页数：56　提取字符：81,509　页眉页脚过滤：1 条
- 文字层完整性：full（每页数字中位数 33.0）　语种：英文　小数：完整 163 / 疑似残缺 0
- 提取时间：2026-11-03　方式：文字层直提（未 OCR）
- 正文可疑：否

> 本页眉之后是原文，按页排列。**表格线、图样、尺寸标注在纯文本里会走形，判定试验参数时以 PDF 原件为准。**


<!-- 第 1 页 -->
AS/NZS CISPR 12:2009
AS/NZS CISPR 12:2009 
CISPR 12, Ed.6.0 (2007)
Australian/New Zealand Standard™
Vehicles, boats and internal combustion 
engines—Radio disturbance 
characteristics—Limits and methods of 
measurement for the protection of off-
board receivers

<!-- 第 2 页 -->
AS/NZS CISPR 12:2009 
This Joint Australian/New Zealand Standard was prepared by Joint Technical 
Committee TE-003, Electromagnetic Interference. It was approved on behalf of the 
Council of Standards Australia on 05 May 2009 and on behalf of the Council of 
Standards New Zealand on 15 May 2009.  
This Standard was published on 22 June 2009.
The following are represented on Committee TE-003:
Association of Consulting Engineers Australia 
Australian Broadcasting Corporation 
Australian Chamber of Commerce and Industry 
Australian Communications and Media Authority 
Australian Industry Group 
Australian Information Industry Association 
Australian Subscription Television and Radio Association 
Consumer Electronics Suppliers Association 
Department of Defence (Australia) 
Electrical Compliance Testing Association 
Energy Networks Association 
Engineers Australia 
Free TV Australia 
Ministry of Economic Development (New Zealand) 
National Measurement Institute 
SingTel Optus Pty  
Society of Automotive Engineers Australasia 
Telstra Corporation  
University of Western Australia 
Wireless Institute Australia
Keeping Standards up-to-date 
Standards are living documents which reflect progress in science, technology and 
systems. To maintain their currency, all Standards are periodically reviewed, and 
new editions are published. Between editions, amendments may be issued. 
Standards may also be withdrawn. It is important that readers assure themselves 
they are using a current Standard, which should include any amendments which 
may have been published since the Standard was purchased. 
Detailed information about joint Australian/New Zealand Standards can be found by 
Zealand web site at www.standards.co.nz and looking up the relevant Standard in 
the on-line catalogue. 
Alternatively, both organizations publish an annual printed Catalogue with full 
details of all current Standards. For more frequent listings or notification of 
revisions, amendments and withdrawals, Standards Australia and Standards New 
Zealand offer a number of update options. For information about these services, 
users should contact their respective national Standards organization. 
We also welcome suggestions for improvement in our Standards, and especially 
encourage readers to notify us immediately of any apparent inaccuracies or 
ambiguities. Please address your comments to the Chief Executive of either 
Standards Australia or Standards New Zealand at the address shown on the back 
cover.
This Standard was issued in draft form for comment as DR 08183.

<!-- 第 3 页 -->
AS/NZS CISPR 12:2009
Australian/New Zealand Standard™
Vehicles, boats and internal combustion 
engines—Radio disturbance 
characteristics—Limits and methods of 
measurement for the protection of off-
board receivers
Originated as AS 2557—1982. 
Previous edition AS/NZS CISPR 12:2006. 
Third edition 2009.
COPYRIGHT
© Standards Australia/Standards New Zealand
All rights are reserved. No part of this work may be reproduced or copied in any form or by 
any means, electronic or mechanical, including photocopying, without the written 
permission of the publisher.
Jointly published by Standards Australia, GPO Box 476, Sydney, NSW 2001 and Standards 
New Zealand, Private Bag 2439, Wellington 6020
ISBN 0 7337 9171 9

<!-- 第 4 页 -->
ii
PREFACE
This Standard was prepared by the Joint Standards Australia/Standards New Zealand Committee 
TE-003, Electromagnetic Interference, to supersede AS/NZS CISPR 12:2006.
The objective of this Standard is to provide limits of protection for broadcast receivers in the 
frequency range of 30 MHz to 1 000 MHz when used in the residential environment.
This Standard is identical with, and has been reproduced from CISPR 12, Ed.6.0 (2007), 
Vehicles, boats and internal combustion engines—Radio disturbance characteristics—Limits 
and methods of measurement for the protection of off-board receivers.
As this Standard is reproduced from an International Standard, the following applies:
(a) 
Its number does not appear on each page of text and its identity is shown only on the 
cover and title page.
(b) 
In the source text ‘this International Standard’ should read ‘this Australian/New Zealand 
Standard’.
(c) 
A full point should be substituted for a comma when referring to a decimal marker.
The terms ‘normative’ and ‘informative’ are used to define the application of the annex to 
which they apply. A normative annex is an integral part of a standard, whereas an informative 
annex is only for information and guidance.

<!-- 第 5 页 -->
iii
CONTENTS
Page
INTRODUCTION ................................................................................................................... iv
Scope .............................................................................................................................. 1
Normative references....................................................................................................... 2
Terms and definitions....................................................................................................... 2
Limits of disturbance ........................................................................................................ 4
4.1 
Determination of conformance of vehicle/boat/device with limits ............................. 4 
4.2 
Peak and quasi-peak detector limits........................................................................ 6 
4.3 
Average detector limit ............................................................................................. 6 
Methods of measurement ................................................................................................. 7
5.1 
Measuring instrument.............................................................................................. 7 
5.2 
Measuring location requirements ............................................................................ 9 
5.3 
Test object conditions ........................................................................................... 15 
5.4 
Data collection ...................................................................................................... 16 
Methods of checking for compliance with CISPR requirements....................................... 17
6.1 
General................................................................................................................. 17 
6.2 
Application of limit curves ..................................................................................... 17 
6.3 
Evaluation (general).............................................................................................. 17 
6.4 
Type approval test ................................................................................................ 17 
6.5 
Surveillance (quality audit) of series production .................................................... 18 
6.6 
Quick prototype check for development testing (optional, quasi-peak detector 
emissions only) ..................................................................................................... 18 
Annex A (normative)  Statistical analysis of the results of measurements ............................. 19
Annex B (normative)  Procedure to determine an alternative emission limit for
measurements at 3 m antenna distance ......................................................................... 21
Annex C (informative)  Antenna and transmission line maintenance and
characterization ............................................................................................................. 23
Annex D (informative)  Construction features of motor vehicles  affecting the emission
of ignition noise.............................................................................................................. 28
Annex E (informative)  Measurement of the insertion loss of ignition noise suppressors ....... 29
Annex F (informative)  Methods of measurement to determine the attenuation
characteristics of ignition noise suppressors for high voltage ignition systems ............... 35
Annex G (informative)  Flow chart for checking the applicability of CISPR 12 ........................ 44
Annex H (informative)  Items under consideration................................................................. 45
Bibliography ......................................................................................................................... 46

<!-- 第 6 页 -->
iv
INTRODUCTION
There is a specific need for standards to define acceptable radio frequency performance of all 
electrical/electronic products. CISPR 12 has been developed to serve the road vehicle and 
related industries with test methods and limits that provide satisfactory protection for radio 
reception.
CISPR 12 has been used for many years as a regulatory requirement in numerous countries, 
to provide protection for radio receivers in the residential environment. It has been extremely 
effective in protecting the radio environment outside the vehicle.

<!-- 第 7 页 -->
STANDARDS AUSTRALIA/STANDARDS NEW ZEALAND
Australian/New Zealand Standard
Vehicles, boats and internal combustion engines—Radio disturbance 
characteristics—Limits and methods of measurement for the protection of
off-board receivers
Scope
The limits in this International Standard are 
designed to provide protection for broadcast 
receivers in the frequency range of 30 MHz to 
1 000 MHz when used in the residential 
environment. Compliance with this standard 
may not provide adequate protection for new 
types of radio transmissions or receivers 
used in the residential environment nearer 
than 10 m to the vehicle, boat or device.
Residential Environment
NOTE 1 Experience has shown that compliance with 
this standard may provide satisfactory protection for 
receivers of other types of transmissions when used in 
the 
residential 
environment, 
including 
radio 
transmissions in frequency ranges other than that 
specified.
This standard applies to the emission of electromagnetic energy which may cause 
interference to radio reception and which is emitted from
vehicles propelled by an internal combustion engine, electrical means or both (see 3.1);
boats propelled by an internal combustion engine, electrical means or both (see 3.2). Boats
are to be tested in the same manner as vehicles except where they have unique 
characteristics as explicitly stated in this standard;
devices equipped with internal combustion engines (see 3.3).
See Annex G for a flow chart to help determine the applicability of CISPR 12.
This standard does not apply to aircraft, traction systems (railway, tramway and electric trolley 
bus), or to incomplete vehicles. In the case of a dual-mode trolley bus (e.g. propelled by 
power from either a.c./d.c. mains or an internal combustion engine), the internal combustion 
propulsion system must be included, but the a.c./d.c. mains portion of the vehicle propulsion 
system is excluded from this standard.
NOTE 2 Protection of receivers used on board the same vehicle as the disturbance source(s) are covered by 
CISPR 25.
The measurement of electromagnetic disturbances while the vehicle is connected to power 
mains for charging is not covered in this standard. The user is referred to appropriate IEC and 
CISPR standards which define measurement techniques and limits for this condition.
Annex H lists work being considered for future revisions.

<!-- 第 8 页 -->
Normative references
The following referenced documents are indispensable for the application of this document. 
For dated references, only the edition cited applies. For undated references, the latest edition 
of the referenced document (including any amendments) applies.
References to international standards that are struck through in this clause are replaced by 
references to Australian or Australian/New Zealand Standards that are listed immediately 
thereafter and identified by shading. Any Australian or Australian/New Zealand Standard that 
is identical to the International Standard it replaces is identified as such.
IEC 60050-161, 
International 
Electrotechnical 
Vocabulary 
(IEV) 
– 
Chapter 
161: 
Electromagnetic compatibility
CISPR 16-1-1:2006, Specification for radio disturbance and immunity measuring apparatus 
and methods – Part 1-1: Radio disturbance and immunity measuring apparatus – Measuring 
apparatus
AS/NZS CISPR 16.1.1, Specification for radio disturbance and immunity measuring apparatus 
and methods—Radio disturbance and immunity measuring apparatus—Measuring apparatus
CISPR 16-1-3:2004, Specification for radio disturbance and immunity measuring apparatus 
and methods – Part 1-3: Radio disturbance and immunity measuring apparatus – Ancillary 
equipment – Disturbance power
AS/NZS CISPR 16.1.3, Specification for radio disturbance and immunity measuring apparatus 
and methods—Radio disturbance and immunity measuring apparatus—Ancillary equipment—
Disturbance power
CISPR 16-1-4:2007, Specification for radio disturbance and immunity measuring apparatus 
and methods – Part 1-4: Radio disturbance and immunity measuring apparatus – Ancillary 
equipment – Radiated disturbances
CISPR 16-2-3:2006, Specification for radio disturbance and immunity measuring apparatus 
and methods – Part 2-3: Methods of measurement of disturbances and immunity – Radiated 
disturbance measurements
CISPR 25, Radio disturbance characteristics for the protection of receivers used on board 
vehicles, boats, and on devices – Limits and methods of measurement
AS/NZS CISPR 25, Radio disturbance characteristics for the protection of receivers used on 
board vehicles, boasts, and on devices—Limits and methods of measurement
Terms and definitions
For the purpose of this document, the terms and definitions contained in IEC 60050-161 as 
well as the following apply.
3.1 
vehicle 
machine operating on land which is intended to carry persons or goods
NOTE Vehicles include, but are not limited to, cars, trucks, buses, mopeds, agricultural machinery, earth-moving 
machinery, material-handling equipment, mining equipment and snowmobiles.

<!-- 第 9 页 -->
3.2 
boat 
vessel intended to be used on the surface of water, its length being no greater than 15 m
3.3 
device 
machine driven by an internal combustion engine which is not primarily intended to carry 
persons or goods
NOTE Devices include, but are not limited to, chainsaws, irrigation pumps, snow blowers, air compressors, and 
landscaping equipment
3.4 
impulsive ignition noise 
unwanted emission of electromagnetic energy, predominantly impulsive in content, arising 
from the ignition system within a vehicle, boat or device
3.5 
ignition noise suppressor 
that portion of a high-voltage ignition circuit intended to limit the emission of impulsive ignition 
noise
3.6 
outdoor test site (OTS) 
measurement site similar to an open area test site as specified in CISPR 16, however a 
ground plane is not required and there are dimensional changes
NOTE Specific requirements are defined in this document.
3.7 
resistive distributor brush 
resistive pick-up brush in an ignition distributor cap
3.8 
frequency sub-band 
segment of the frequency spectrum (30 MHz to 1 000 MHz) defined to enable statistical 
evaluation of the test data acquired by swept frequency testing
3.9 
representative frequency 
assigned frequency of a frequency sub-band to be used for comparison of the data to the limit
3.10 
characteristic level 
controlling (or dominant) emission level experienced in each frequency sub-band. The 
characteristic level is the maximum measurement obtained for both antenna polarizations and 
for all the specified measurement positions of the vehicle, boat or device. Known ambient 
signals are not considered part of the characteristic level.
3.11 
tracking generator 
test signal oscillator (continuous wave, cw) that is frequency locked to the receive frequency 
of a measuring instrument
3.12 
RF disturbance power 
RF power measured with a current transformer of an absorbing clamp and an RF measuring 
instrument. It may be measured – as the RF disturbance voltage – in a peak or quasi-peak 
mode

<!-- 第 10 页 -->
3.13 
spark discharge 
in this document, the discharge of energy stored in the ignition coil, in an arc across the 
electrodes of a measuring spark-plug
3.14 
resistive high-voltage (HV) ignition cable 
ignition cable whose conductor has a high resistance (attenuation)
3.15 
residential environment 
environment having a 10 m protection distance between the source and the point of radio 
reception and where the source uses the public low voltage power system or battery power
NOTE Examples of a residential environment include rooming houses, private dwellings, entertainment halls, 
theatres, schools, public streets, etc.
Limits of disturbance
4.1 
Determination of conformance of vehicle/boat/device with limits
In the 30 MHz – 1 GHz frequency range, the vehicle/boat/device shall comply with both:
• 
average limits when the vehicle/boat/device is in “Key-On, Engine-Off” mode (see 5.3.2.1), 
and
• 
peak or quasi-peak limits when the vehicle/boat/device is in “Engine-Running” mode (see 
5.3.2.2)
The limits given in this standard take into account uncertainties.
Figure 1 defines the method for determination of conformance.

<!-- 第 11 页 -->
Start
"Key - On, Engine - Off" operating
conditions
Measurement with
peak detector
Are the peak            
data below the        
average limit ?
(a)
Yes
No
Measurement with    
average detector
(b)
Are the average
data below the        
average limit ?
Yes
No
Pass for "Key-On,
Engine-Off"
"Key-On, Engine-Off"
pass AND "Engine-
Running” mode pass ?
Fail
Pass
a 
Because measurement with peak detector is always higher than or equal to measurement with quasi-peak
b 
This flow-chart is applicable for each individual frequency, e.g only frequencies that are above the
applicable limit need to be remeasured with quasi-peak detector (and average detector respectively).
Figure 1 – Method of determination of conformance
COPYRIGHT
"Engine - Running mode"
operating conditions
Measu rement with
peak detector
Are the peak            
data below the        
quasi - peak limit ?
(a)
Yes
No
Are the peak            
data below the
peak limit ?
Yes
No
Measurement with     
quasi - peak d etector
(b)
Are the quasi - peak
data below the        
quasi - peak limit ?
Yes
No
Pass for "Engine -
Running mode"
No
Yes
Fail
IEC   706/07
detector (and average detector respectively) and applicable peak limit is always higher than or equal to 
applicable quasi-peak limit (and average limit respectively), this single detector measurement can lead 
to a simplified and quicker conformance process.

<!-- 第 12 页 -->
4.2 
Peak and quasi-peak detector limits
The limit for emissions measured with peak or quasi-peak detector at 10 m antenna distance 
is given in the table of Figure 2 and is shown graphically in Figure 2. Only one of the 
bandwidths listed needs to be chosen for testing. For more accurate determination, the 
equations given in Figure 2 shall be used. For measurements at 3 m antenna distance, 10 dB 
shall be added to the limit.
Limit Lbw in dB (µV/m) as a function of bandwidth, detector and frequency f in MHz
Measurement type 
400-1000 
MHz 
75-400 
MHz 
30-75 
MHz 
Lbw
L120 kHz  
L120 kHz
34 + 15,13 lg (f/75) 
 54 + 15,13 lg (f/75) 
 72 + 15,13 lg (f/75)
L1 MHz
Linear when plotted 
dB versus log frequency
Quasi-peak
L120 kHz
Linear plot  
 dB (µV/m) 
Linear plot  
dB (µV/m)
Logarithmic
plot µV/m
1 000 
Frequency in MHz - logarithmic plot
NOTE 1 For vehicles equipped with electric propulsion motors, see 5.3.2.
NOTE 2 For peak measurements, see 5.5.
NOTE 3 The correlation factor between quasi-peak and peak measurements is +20 dB at 120 kHz bandwidth, 
based on experimental data accumulated in many countries.
Figure 2 – Limit of disturbance (peak and quasi-peak detector)
at 10 m antenna distance
4.3 
Average detector limit
The limit for emissions measured with the average detector at 10 m antenna distance is 
shown in Figure 3. Vehicles/boats/devices not including electronic oscillators with an 
operating frequency greater than 9 kHz shall be deemed to be in compliance with the average 
requirements of this clause without performing tests for emissions with average detector. 
Vehicles/boats/devices which meet the average emissions requirements of CISPR 25, 
Clause 5 shall also be deemed to be in compliance with the average requirements of this 
subclause and no further testing is necessary.
For measurements at 3 m antenna distance, 10 dB shall be added to the limit.
COPYRIGHT
Quasi-peak
Peak 
Peak
Peak
L120 kHz 
L1 MHz
Linear plot  
dB (µV/m)
IEC   707/07

<!-- 第 13 页 -->
Field strength in   µV/m
Methods of measurement
5.1 
Measuring instrument
5.1.1 
Spectrum analyser parameters
Annex D of CISPR 16-2-3 explains the differences between the CISPR AV detector and an AV 
detector (complying with CISPR 16-1:1999). For the purpose of this standard either detector 
may be used, since the pulse repetition rate for internal combustion engines is above 10 Hz.
NOTE For type-approval testing per 6.4, use of an alternative test method based upon other regulatory standards 
is permitted as detailed herein. This alternate type-approval test applies to those vehicles/boats/devices for which 
on-board receivers can be installed. If, when measured in accordance with the vehicle test methodology of 
CISPR 25 for emissions using an average detector, the signal strength at the vehicle/boat/device broadcast radio 
antenna is less than 20 dB (µV) (10 µV) over the frequency range 76 MHz to 108 MHz, then the vehicle/boat/device 
can be deemed to comply with the limits for average emissions and no further testing must be required.
Field Strength in   dB (µV/m)
1 000
Frequency in   MHz
IEC   708/07
Figure 3 – Limits of disturbance (average detector) at 10 m antenna distance
The measuring instrument shall comply with the requirements of CISPR 16-1-1. Either manual 
or automatic frequency scanning may be used.
NOTE Spectrum analysers and scanning receivers are particularly useful for disturbance measurements. The 
peak detection mode of spectrum analysers and scanning receivers provides a display indication which is never 
less than the quasi-peak indication for the same bandwidth. It may be convenient to measure emissions using peak 
detection because of the faster scan possible than with quasi-peak detection.
When quasi-peak limits are being used, and a peak detector is used for time efficiency, any 
peak measurements with results at or above the test limit shall be re-measured using the 
quasi-peak detector.
The scan rate of the spectrum analyser shall be adjusted for the CISPR frequency band and 
detection mode used. The maximum scan rate shall comply with the requirements of 
CISPR 16-2-3.
The bandwidth of the spectrum analyser shall be chosen such that the noise floor is at least 
6 dB lower than the limit curve.
NOTE A preamplifier may be used between the antenna and the spectrum analyser in order to achieve the 6 dB 
noise floor requirement.

<!-- 第 14 页 -->
The recommended scan time and bandwidth are listed in Table 1:
Table 1 – Spectrum analyser parameters
Peak detector 
Quasi-peak detector 
Average detector 
Frequency
range
30 to 1 000 
100 kHz / 120 kHz 
100 ms / MHz
120 kHz 
20 s / MHz
100 kHz / 120 kHz 
100 ms /MHz
a) RBW is defined at –3 dB.
b) BW is defined at –6 dB.
If a spectrum analyser is used for peak measurements, the video bandwidth shall be at least 
three times the resolution bandwidth (RBW).
5.1.2 
Scanning receiver parameters
The dwell time of the scanning receiver shall be adjusted for the CISPR frequency band and 
detection mode used. The minimum dwell time shall comply with the requirements of 
CISPR 16-2-3.
The bandwidth of the scanning receiver shall be chosen such that the noise floor is at least 
6 dB lower than the limit curve.
NOTE A preamplifier may be used between the antenna and the scanning receiver in order to achieve the 6 dB 
noise floor requirement.
The recommended dwell time, maximum step size and bandwidth are listed in Table 2:
Table 2 – Scanning receiver parameters
Peak detector 
Quasi-peak detector 
Average detector 
Frequency
range
Step 
size a
MHz 
Band-
Dwell
Band-
width
time
width
30 to 1 000 
120 kHz 
50 kHz 
5 ms 
120 kHz 
50 kHz 
1 s 
120 kHz 
50 kHz 
5 ms
a 
For purely broadband disturbances, the maximum frequency step size may be increased up to a value not 
greater than the bandwidth value.
5.1.3 
Antenna types
5.1.3.1 Reference antenna
The antenna shall be a balanced dipole (see CISPR 16-1-4). Free-space antenna factors are 
to be used. For frequencies of 80 MHz or above, the antenna shall be resonant in length, and 
for frequencies below 80 MHz it shall be the length equal to the 80 MHz resonant length. It 
shall be matched to the feeder by a suitable symmetric-asymmetric transformer device.
5.1.3.2 Broadband antennas
Any linearly polarized receiving antenna is permitted, provided that it can be normalized to the 
reference antenna.
A broadband antenna shall be used when making measurements with an automated receiving 
system using a scanning measuring instrument. Such a broadband antenna is usable for 
measuring emission levels (over the frequency spectrum covered by this standard), provided 
that its output can be normalized to the output of the reference antenna in the actual test 
environment at the actual test site.
COPYRIGHT
MHz 
RBWa)  
Scan time 
BWb)  
Scan time
RBWa) 
Scan time
Step 
size a
Step 
size a
Dwell
Band-
Dwell
time
width
time

<!-- 第 15 页 -->
When broadband antennas are used, they shall meet the requirements for complex antennas 
given in CISPR 16-1-4. Examples of factors to be considered include:
a) 
the effective aperture area of the antenna, including its polar response (horizontal and 
vertical planes).
b) 
the effect of a phase centre which moves with frequency.
c) 
the effect of ground reflection characteristics (including multiple ray reflections which 
may arise at specific frequencies at about 500 MHz vertical polarization and 900 MHz 
horizontal polarization).
See Annex C for alternate antenna characterization.
5.1.4 
Accuracy
The measurement system consisting of the antenna, transmission line and the measuring 
instrument, but excluding the source and the measuring site, shall measure electric field 
strength over the frequency range of 30 MHz to 1 000 MHz with an accuracy of ±3 dB. See 
Clause 4 of CISPR 16-1-4. The frequency accuracy shall be better than ±1 %.
NOTE 1 To ensure that the measurements defined in this standard are within the stated tolerances, consideration 
should be given to all pertinent characteristics of measuring equipment (for example, frequency and amplitude 
stability, image rejection, cross-modulation, overload levels, selectivity, time constants, and signal/noise ratio), as 
well as those affecting the antenna and transmission line.
NOTE 2 It is reasonable to expect additional variations in measurements made of an electric field (see C.13) 
within the range of 30 MHz to 1 000 MHz. These are caused by variations in ground conductivity and other factors 
influencing repeatability.
5.2 
Measuring location requirements
5.2.1 
Outdoor test site (OTS) requirements
5.2.1.1 OTS for vehicles and devices
The test site shall be a clear area, free from electromagnetic reflecting surfaces within a circle 
of minimum radius 30 m measured from a point midway between the vehicle or device and the 
antenna. As an exception, the measuring equipment, and test hut or vehicle in which the 
measuring equipment is located (when used) may be within the test site, but only in the 
permitted region indicated by the crosshatched area of Figure 4.
NOTE The site requirements defined in 5.2.1.1 and Figure 4 are the application of CISPR 16-1-4 to large 
automotive objects.
Vehicles and devices smaller than 2 m in length and width may be tested on an OTS with 
dimensions corresponding to CISPR 16-1-4, Figures 2 or 3.
5.2.1.2 OTS for boats
The test site shall be a clear area free from electromagnetic reflecting surfaces within a circle 
of minimum radius 30 m measured from a point midway between the engine under test and 
the antenna. Exceptions for the measuring equipment are specified in 5.2.1.2.1 and also in 
5.2.1.2.2. As an exception, the measuring equipment may be within the test site, but only in 
the permitted region indicated by the crosshatched area of Figure 5. The test hut or vehicle or 
non-metallic boat of test fixture in/on which the measuring equipment is located may be within 
the test site.
Boats or engines/motors for boats tested separately shall be tested in salt or fresh water at a 
measuring site as shown in Figure 5.

<!-- 第 16 页 -->
5.2.1.2.1 
Land-based measuring equipment
When the measuring equipment is on land, the test hut or vehicle in which the measuring 
equipment is located may be within the test site, but only in the permitted region indicated by 
the cross-hatched area of Figure 5.
5.2.1.2.2 
Water-based measuring equipment
The measuring equipment shall be installed in a non-metallic boat or non-metallic test fixture 
which may be within the test site, but only within the permitted region indicated by the cross-
hatched area of Figure 5.
Engine midpoint 
positioned on normal 
from antenna midpoint
(10,0 ± 0,2) m
15 m min radius
NOTE The 10,0 m ± 0,2 m dimension may be changed to 3,00 m ± 0,05 m in accordance with 5.2.3.2 and 5.2.3.4.
Figure 4 – Measuring site (OTS) for vehicles and devices
COPYRIGHT
Centre of 30 m radius clear area 
at midpoint between reference 
antenna and EUT
Reference antenna
Permitted region for         
measuring equipment (in 
hut or vehicle)
IEC   709/07

<!-- 第 17 页 -->
5.2.1.3 Ambient requirements
To ensure that there is no extraneous noise or signals of sufficient magnitude or density to 
affect materially the vehicle measurement, ambient measurements shall be taken before and 
after the main test, but without the vehicle/boat/device under test running. In both of these 
measurements, the ambient noise shall be at least 6 dB below the limits of disturbance given 
in Clause 4, excluding intentional radiators. When assessing compliance in accordance with 
Clause 6 any emission exceeding the limits shall require investigation to ensure that they are 
not attributable to the vehicle/boat/device in order to be excluded.
NOTE For further guidance, see 5.4 of CISPR 16-1-4.
Non-metallic boat or non-metallic 
test platform (for testing engines 
separately)
(10,0 ± 0,2) m
Figure 5 – Measuring site (OTS) for boats
COPYRIGHT
Engine midpoint positioned on 
normal from antenna midpoint
Outboard installation
Inboard installation
Note - The horizontal distance is from the centre of the reference 
antenna to the nearest peripheral part of the marine installation (or 
engine if tested separately)
Centre of 30 m radius clear area 
at midpoint between reference 
antenna and EUT
Reference 
antenna 
Non-metallic boat or  
non-metallic test platform (water-
based test site)
15 m radius
15 m min radius
Permitted region for 
measuring equipment (in hut 
or vehicle)
IEC   710/07

<!-- 第 18 页 -->
5.2.2 
Absorber lined shielded enclosure (ALSE) requirements
5.2.2.1 Correlation
Absorber lined shielded enclosures may be used provided that the results obtained can be 
correlated with those obtained using the OTS described in 5.2.1.
NOTE Such chambers have the advantages of all weather testing, controlled environment and improved 
repeatability because of stable chamber electrical characteristics.
5.2.2.2 Ambient requirements
The ambient noise level shall be at least 6 dB below the limits of disturbance given in 
Clause 4. The ambient level shall be verified periodically or when test results indicate the 
possibility of non-compliance.
5.2.3 
Antenna requirements
At each measurement frequency (including the end frequencies), measurements shall be 
taken for horizontal and vertical polarization (see Figures 6 and 7).
Electrical interaction between the antenna elements and the antenna support/guy system 
shall be avoided.
Theoretical considerations of antenna and transmission line geometry demand that the 
transmission line does not interact electrically with the antenna elements.
NOTE One acceptable transmission line geometry for a dipole antenna routes the transmission line horizontally 
rearward for a distance of 6 m at a height of 3 m (or 1,8 m for the 3 m antenna distance) before descending to 
ground level or below. Other geometries are acceptable if they can be shown not to affect the measurements, or if 
the effects can be included in equipment calibration.
5.2.3.1 Height
For an antenna distance of 10 m, the centre of the antenna shall be 3,00 m ± 0,05 m above 
the ground/floor or water surface. For an antenna distance of 3 m, the height shall be 1,80 m 
± 0,05 m.

<!-- 第 19 页 -->
10,0 m ± 0,2 m
Key
1 Equipment under test
10,0 m ± 0,2 m
( 3,00 m ± 0,05 m ) 
(3,00 m ± 0,05 m)
3,00 m ± 0,05 m
(1,80 m ± 0,05 m)
IEC   711/07
(Dimensions in brackets for 3 m antenna distance testing) 
Drawing not to scale
Figure 6 – Antenna position to measure emissions – Vertical polarization

<!-- 第 20 页 -->
10,0 m ± 0,2 m 
(3,0 m ± 0,05 m)
(Dimensions in brackets for 3 m antenna distance testing) 
Drawing not to scale
Key
Equipment under test
Engine midpoint positioned on normal from antenna midpoint
5.2.3.2 Distance
5.2.3.3 Auxiliary (multiple) antennas
5.2.3.4 Multiple antenna positions (3 m antenna distance only)
10,0 m ± 0,2 m 
(3,0 m ± 0,05 m)
IEC   712/07
Figure 7 – Antenna position to measure emissions – Horizontal polarization
The preferred horizontal distance between the reference point of the antenna and to the 
nearest metal part of the vehicle/boat/device shall be 10,0 m ± 0,2 m; as an alternative 
measurements may be made at a distance of 3,00 m ± 0,05 m, provided that the requirements 
of 5.2.3.4 are met.
Auxiliary antennas are permitted, but if two antennas are facing each other, one shall be 
vertically polarized while the other is horizontally polarized.
The test site clear area requirement of 5.2.1.1 shall be applied also to the point midway 
between the vehicle/boat/device and the auxiliary antenna(s).
Multiple antenna positions are required if the length of the vehicle or device is greater than 
the 3 dB beamwidth of the antenna. The same positions shall be used for both horizontal and 
vertical polarization measurements.
Multiple antenna positions can be avoided in the case where the measured emissions are 
lower than the original limit values minus a gain reduction calculated from the geometric 
dimensions of the test set-up and the antenna gain data (see Annex B).
NOTE A typical log periodic antenna has a 3 dB beamwidth of approximately 60°. This results in about 3,5 m of 
illumination at 3 m antenna distance, e.g. 1,75 m either side of the antenna centreline. Thus, a vehicle 8 m long 
requires three antenna positions on each side to quantify the radiation signature of that vehicle.

<!-- 第 21 页 -->
5.3 
Test object conditions
5.3.1 
General
Measurements made while the vehicle/boat/device is dry or made more than 10 min after 
precipitation has stopped falling are preferred. For outboard engines or propulsion motors and 
devices, all surfaces normally in contact with water while in use shall be exempt from the 
dryness criteria.
NOTE Dew or light moisture may seriously affect readings obtained on test objects having plastic enclosures.
For methods of evaluating compliance based on test object dryness see Clause 6.
5.3.2 
Vehicles and boats
Measurements shall be made on the left and right sides of the vehicle or boat (see Figures 6 
and 7).
All equipment which is automatically switched on together with the propulsion system shall be 
measured while operating in a manner which is as representative of normal operation as 
possible. The engine shall be at normal operating temperature.
For vehicles or boats with independent electric and internal combustion propulsion systems in 
the same vehicle or boat, the propulsion systems shall be tested separately.
Auxiliary engines shall be operated in their normal intended manner and tested separately 
from the main engine, if possible.
Depending upon the location of auxiliary engines, this requirement may dictate multiple tests 
of the vehicle or boat with the several engines successively positioned in front of the antenna 
during successive tests.
When tested separately, inboard, stern drive, and outboard engines or propulsion motors for 
boats shall be attached to a non-metallic board or non-metallic test fixture and tested in a way 
similar to that specified for boats with inboard engines/motors.
Measurements shall be made for two different operating conditions of vehicles and boats.
– 
"Key-On, Engine-Off” mode, and
– 
"Engine-Running” mode
These two operating conditions are applicable for vehicles/boats with an internal combustion 
engine and/or equipped with an electric propulsion motor (including hybrid propulsion 
systems)
5.3.2.1 "Key-On, Engine-Off” mode operating conditions
The “Key-On, Engine-Off” mode operating conditions are
• 
The ignition switch shall be switched on.
• 
The engine shall not be operating.
• 
The vehicle's electronic systems shall all be in their normal operating mode.
All equipment with internal oscillators >9 kHz or repetitive signals, which can be operated 
continuously, should be in normal operation.

<!-- 第 22 页 -->
5.3.2.2 "Engine-Running” mode operating conditions
Vehicles/boats with an internal combustion engine, shall be tested with the engine operated 
as shown in Table 3. The specified engine speed is the same for quasi-peak or peak 
measurements.
Table 3 – Internal combustion engine operating speeds
Number of cylinders 
Engine speed
min-1  ± 10 %
2 500 r/min
>1
1 500 r/min
Vehicles/boats equipped with an electric propulsion motor shall be tested with the vehicle 
driven on a dynamometer without a load, or on non-conductive axle stands, with a constant 
speed of 40 km/h, or the maximum speed, if this is less than 40 km/h
Vehicles with hybrid propulsion systems shall be tested with both the electrical and the 
internal combustion propulsion systems functioning to operate the vehicle at 40 km/h. If this is 
not possible, the vehicle shall be tested with the internal combustion engine operating at the 
speed defined in Table 3 and the electric propulsion system operating the vehicle at 40 km/h 
or the maximum speed if this is less than 40 km/h.
5.3.3 
Devices
Measurements shall be made in normal operation position(s) and height(s), under normal full 
load and without load at idle speed, and in the direction of the maximum disturbance 
emission. Where practical, the device under test shall be measured in three orthogonal 
planes.
The operating conditions for devices ("Key-On, Engine-Off” mode and "Engine-Running” 
mode) shall be defined in the test plan.
Depending on the situation, the following conditions shall also be taken into account:
• 
if the operating position and height are variable, the device to be tested shall be so 
positioned that the spark-plug is 1,0 m ± 0,2 m above the ground;
• 
no operator shall be present, but, if necessary, a mechanical arrangement shall be made, 
using non-metallic material as far as possible, to keep the device in normal position(s) and 
at the specified engine speed.
5.4 
Data collection
The entire required frequency range shall be measured. Spot frequency testing is only 
acceptable as used in 6.6, or for type approval purposes if the results of prior measurements 
covering the entire frequency range are available and prove compliance.
The results of average, quasi-peak and peak measurements shall be expressed in terms of 
dB (μV/m) for statistical evaluation.
The results of peak measurements shall be expressed in accordance with one of the 
bandwidths shown in Figure 2.
For peak detector measurements, the limits given in Figure 2 may be related to bandwidths 
other than 120 kHz or 1 MHz by adding a correction factor of 20 lg [bandwidth (kHz)/120 kHz] 
or 20 lg [bandwidth (MHz)/1 MHz].

<!-- 第 23 页 -->
Methods of checking for compliance with CISPR requirements
6.1 
General
Some differences in the construction of vehicles/boats/devices are unlikely to have a 
significant effect on ignition noise emissions. For road vehicles, examples of such differences 
are given in Annex D.
6.2 
Application of limit curves
6.2.1 
Measurements under dry conditions
Certification measurements made while the vehicle/boat/device is dry (see 5.3.1), or made 
more than 10 min after the precipitation has stopped falling shall use the limit curves shown in 
Figures 2 and 3.
6.2.2 
Measurements under wet conditions
If circumstances dictate that type approval measurements be made while precipitation is 
falling, or within 10 min after it has stopped, the vehicle/boat/device shall be deemed to 
comply with the requirements of this standard if the measured levels do not exceed a level of 
10 dB below that shown in Figures 2 and 3.
In the event of any dispute concerning compliance, it shall be resolved by carrying out 
measurements under dry conditions.
Compliance based on good-faith wet measurements (and with the performance penalty 
mentioned above) shall remain valid until such time as it may be contested and dry 
measurements prove non-compliance. In such cases retrofitting of vehicles/boats/devices sold 
during the period when there was deemed compliance shall not be required.
When compliance is deemed on the basis of wet measurements, particular attention shall be 
paid to the surveillance of series production.
6.3 
Evaluation (general)
For evaluation of a vehicle/boat/device the data from a complete scan shall be used.
For statistical analysis of multiple vehicles/boats/devices, the characteristic levels and 
calculation process of Annex A shall be used. The levels shall be compared to the limit at the 
representative frequency for the appropriate sub-band.
Statistical analysis of peak data from multiple vehicles/boats/devices shall be performed using 
data related to the same measurement bandwidth.
6.4 
Type approval test
Compliance with the requirements given in Clause 4 shall be checked as follows:
6.4.1 
Single sample
Measurements may be made on a prototype vehicle/boat/device of a later production series. 
The results shall be at least 2 dB below the limits specified in Clause 4.

<!-- 第 24 页 -->
6.4.2 
Multiple samples (optional)
If optional multiple samples are tested, five or more additional vehicles/boats/devices shall be 
tested and the results combined with the data from the first test in 6.4.1. The result for each 
frequency sub-band shall be below the specified limits of Clause 4 at the representative 
frequency for that sub-band (see 6.3).
6.5 
Surveillance (quality audit) of series production
6.5.1 
Single sample
The results of the measurements on one vehicle/boat/device shall be a maximum of 2 dB 
above the specified limits of Clause 4.
6.5.2 
Multiple samples (optional)
If optional multiple samples are tested, five or more additional vehicles/boats/devices shall be 
tested and the results combined with the data from the first test in 6.5.1. The results for each 
frequency sub-band shall be evaluated statistically, as described in Annex A; the result for 
each frequency sub-band shall be a maximum of 2 dB above the specified limit of Clause 4 at 
the representative frequency for that sub-band (see 6.3).
6.6 
Quick prototype check for development testing (optional, quasi-peak detector 
emissions only)
An optional test using spot frequencies may be made to evaluate the approximate levels of 
emission of the vehicle/boat/device to determine whether the levels are likely to meet the limit 
of Clause 4. The spot frequencies to be used for specific measurements are the 
representative frequencies given in Annex A.

<!-- 第 25 页 -->
A.1 
Number of vehicles/boats/devices
where
where
xi  
is the individual result
k  
is the statistical factor dependent on n, as given by Table A.1
Sn 
 is the standard deviation of results on n assembly line units.
A.2 
Frequency sub-bands for analysis
Annex A  
(normative)
Statistical analysis of the results of measurements
The following condition shall be fulfilled in order to ensure, with an 80 % degree of 
confidence, that 80 % of mass-produced vehicles/boats/devices conform to a specified limit L:
x + kSn ≤ L 
(A.1)
x is the arithmetical mean of the results on n vehicles/boats/devices.
⎛
=
∑
⎞
n
(A.2)
⎜⎜
⎜
⎟⎟
⎟
ix
n
x
=
i
⎝
⎠
Table A.1 – Statistical factors
n 
k 
1,42 
1,35 
1,30 
1,27 
1,24 
1,21 
1,20
n
)
(
(A.3)
∑
−
−
=
i
n
x
x
n
S
i
=
Sn, xi, x and L are expressed in identical logarithmic units (e.g. dB (μV/m), dB (μV), etc.).
If a first sample of n vehicles/boats/devices does not meet the specifications, a second 
sample of N vehicles/boats/devices shall be tested and all results assessed as coming from a 
sample of n + N vehicles/boats/devices.
NOTE See CISPR 16-3 for a more comprehensive discussion of statistical theory and application.
For analysis, the frequency range of 30 MHz to 1 000 MHz shall be divided into a minimum of 
14 bands with approximately three bands in each octave (2:1 frequency ratio). For the regions 
where the limit is not constant (i.e. slopes), the ratio of the highest frequency to lowest 
frequency in each band shall be no greater than 1,34. See Table A.2 for an example of sub-
bands.

<!-- 第 26 页 -->
A.3 
Data collection
Frequency sub-band
MHz
30 to 34
34 to 45
45 to 60
60 to 80
80 to 100
100 to 130
130 to 170
170 to 225
225 to 300
300 to 400
400 to 525
525 to 700
700 to 850
850 to 1 000
Each sub-band shall be scanned to determine its maximum emission level (i.e. the 
characteristic level). The characteristic levels for each sub-band shall be compared to the limit 
at the representative frequency for that sub-band, as determined by the methods of Clause 6.
Table A.2 – Example of frequency sub-bands
Representative frequency
MHz

<!-- 第 27 页 -->
Annex B  
(normative)
Procedure to determine an alternative emission limit
for measurements at 3 m antenna distance
B.1 Calculate the maximum antenna angle αmax.= maximum (αright; αleft) from the vehicle 
dimensions, the antenna distance (vehicle surface – antenna reference point), and the 
antenna position (see Figure B.1).
Example: d = 3 m, vehicle length = 5 m, antenna centre line 1 m behind the front bumper,  
αmax. = 53°.
Antenna reference point
αleft
αright
Antenna distance d
Figure B.1 – Determination of the maximum antenna angle
B.2 Read from the antenna directional pattern the gain reduction amax at the maximum 
antenna angle αmax  (see Figure B.2).
Because antennas have a frequency dependent gain, either the maximum gain reduction over 
the whole frequency range (typically at the highest frequency) has to be used or the gain 
attenuation shall be determined for a  number of frequency steps. In each of those frequency 
sub-bands the local maximum gain reduction shall be used.
Example: for a log-periodic antenna (80 MHz to 1 000 MHz) and αmax = 53° this leads to 
amax = 7 dB.
NOTE 1 Reference for the gain is the reference antenna (see 5.1.3.1)
NOTE 2 The radiation pattern provided from the manufacturer can be used unless visible damage of the antenna 
can be observed.
COPYRIGHT
Engine midpoint 
positioned on 
normal from 
antenna midpoint
IEC   713/07

<!-- 第 28 页 -->
0 dB
-a dB
amax
αmax
Antenna gain
IEC   714/07
Figure B.2 – Calculation of the resulting gain reduction a
B.3 Calculate the alternative emission limit by subtracting from the original limit line the 
absolute value of the maximum gain reduction amax calculated according to B.2.

<!-- 第 29 页 -->
Annex C  
(informative)
Antenna and transmission line maintenance and  characterization
C.1 
Introduction
This annex contains, for guidance, an example of an antenna and transmission line  
characterization procedure that complies with the intent of 5.1.2. Proper antenna and 
transmission line characterization is essential to account for transmission line loss and 
mismatch errors, and to define the antenna factor for a broadband antenna, if used. Because 
coaxial cables used for transmission lines are subject to much wear and possible abuse, a 
suggested procedure is included to be used when cables require replacement.
This report is intended to be tutorial in nature, as an aid for those who may not be familiar 
with antenna and transmission line characterization. Other methods, such as those using 
tracking generators, network analysers, or narrowband signal sources may be equally 
satisfactory and nothing in this annex should be interpreted as precluding their use.
C.2 
Maintenance
Characterization of antennas and cables as a combination or individually is at the option of 
the user. It is highly recommended, however, that they be characterized separately because:
• 
frequently, antennas are supplied without cables;
• 
any cable may be used with any antenna without need for characterization of the 
combination;
• 
cables are easier to characterize than antennas and almost any test facility can  
characterize them. Some laboratories may not be able to characterize complex antennas 
with their associated transmission lines easily;
• 
either the antenna or cable can be modified or replaced without need to characterize the 
other.
C.2.1 
Periodic checks required
C.2.1.1 
Cables
Checks should be made monthly, contingent upon whether the cables are handled or flexed 
frequently, or if they are exposed to sun and weather for long periods.
NOTE Even cables in conduits can develop problems, if temperature and humidity are uncontrolled.
C.2.1.2 
Antennas
Because they are subject to less wear than cables, antennas may be checked less frequently, 
possibly only once or twice per year.
C.2.1.3 
Physical examination
C.2.1.3.1 
Cables
Serious kinks (very sharp bends), flat spots, abrasions, stretched spots, damaged 
connectors/braid, contamination of the inner insulation, or ageing of the cable shall require 
replacement and characterization.

<!-- 第 30 页 -->
C.2.1.3.2 
Antennas
Broken elements or other obvious mechanical problems shall be corrected or parts replaced. 
Characterization is required.
C.2.1.4 
Electrical examination
Antennas and cables shall be checked for higher loss and other problems periodically. If a 
characteristic such as loss has changed, the antenna, the cable, or the combination shall be 
characterized. 
Severe 
changes 
in 
characteristics 
may 
require 
replacement 
and  
characterization.
C.2.2 
Cable and antenna characterization
The following requirements apply when the transmission line cable or antenna is replaced:
C.2.2.1 If the antenna factor data contains the loss and other characteristics of a specific 
cable in combination with the antenna, they shall be considered a matched pair. If either is 
replaced, the combination shall be characterized.
C.2.2.2 If the antenna and cable have been characterized separately with separate losses, 
etc. replacement of either shall require characterization only of that portion replaced.
C.3 
Antenna characterization
Electric field strength shall be expressed in units of dB (μV/m). The relationship expressing 
electric field strength to the measurement system is:
F = R + AF + T 
(C.1)
where
F 
 is the electric field strength in dB (µV/m);
R  
is the instrument reading in dB (µV);
AF  
is the antenna factor in dB (1/m), defined in Clauses C.5 or C.6.;
T  
is the transmission line factor in dB, defined in Clause C.7.
For broadband measurements, F and R are a function of the measuring instrument bandwidth.
C.4 
Reference antenna
See 5.1.3.1.
C.5 
Antenna factor
The factor relating the field strength at the reference point of the antenna to the loaded 
antenna terminal voltage (see Note 1) is called the antenna factor, designated AF, expressed 
in dB (1/m). The antenna factor shall include the effects of baluns, impedance matching 
devices, any mismatch losses, and operation outside the resonant frequency of the antenna.
NOTE 1 As this is a voltage ratio, the calculations to convert to decibels should be made using the factor of 20 lg 
of the ratio of the parameters.
NOTE 2 This factor is a function of frequency and is usually provided by manufacturers of resonant dipoles. 
Knowledge of the antenna factor for free space operation for resonant dipoles is sufficiently accurate for purposes 
of this international standard. Greater accuracy can be obtained by knowing the antenna factor for the particular 
resonant dipole being used in the test environment. A method for determining antenna factor is described in ANSI 
C63.5 (see C.14).

<!-- 第 31 页 -->
C.6 
Alternate antennas
The antenna factor for the alternate antenna is the antenna factor for the reference antenna 
(resonant dipole) minus the gain (dB) of the alternate antenna relative to the reference 
antenna.
C.7 
Transmission line
The transmission line factor (loss) shall be measured over the test frequency range. The 
factor is designated T and is:
voltage
input
T
(C.2)
⎞
⎜⎜
⎝
⎛
dB
lg
 =
⎟⎟
⎠
voltage
output
NOTE It is recommended that the transmission line be double braided or solid shielded coaxial cable to achieve 
proper shielding. It is permissible that transmission line loss and mismatch errors be accounted for by including the 
cable in the measuring instrument calibration. When this is done, T is dropped from equation (C.1) for F.
C.8 
Alternate antenna characterization instrumentation
The prime function of the characterization instrumentation is to provide a repeatable RF field 
for the comparison of an alternate antenna to the reference dipole antenna.
C.8.1 
Characterization signal generator
A measuring instrument with a built-in tracking generator or a network analyser or a signal 
generator together with a measuring instrument shall be used for alternate antenna 
characterization.
The output of the characterization signal generator shall be known to within ±1,0 dB. The 
characterization signal generator shall be capable of creating an electric field at least 6 dB 
above the least measurable field strength of the measuring instrument. A value of at least 
10 dB is preferred.
A less accurate characterization signal generator is the impulse generator.
NOTE 1 If a broadband impulse generator is used, it should be capable of producing an uniform spectrum to 
within ±3,0 dB in the frequency range 30 MHz to 1 000 MHz.
NOTE 2 Experience indicates that an impulse generator that has a nominal 100 dB (µV/kHz) level can produce a 
field of approximately 10 dB (µV/m/kHz) at the receiving antenna when a 10 dB impedance matching attenuator is 
used at the output of the generator. This field strength varies depending on transmitting antenna losses and radiation 
characteristics and on propagation anomalies. This approximate value is provided so that the antenna factor 
determination can be performed. It is then possible to estimate the required sensitivities and the tolerable losses in 
the measuring system.
C.8.2 
Transmitting antenna
adjustment, it is recommended that broadband antennas be used. Typical antennas are the 
biconical for 30 MHz to 200 MHz, and the log periodic for 200 MHz to 1 000 MHz.

<!-- 第 32 页 -->
C.9 
Alternate antenna factor determination
substitution technique in the intended test environment. The reference shall be the dipole (see 
Clause C.4). The radiated field to be measured for the substitution technique is generated by 
the transmitting antenna and the characterization signal generator as specified in Clause C.8.
NOTE Error factors associated with this procedure include non-linearity of the measuring instrument, influence of 
the surroundings on the reference antenna and possible change in location of the alternate antenna phase centre 
relative to that of the reference antenna.
C.10 Test geometry
The alternate antenna shall be located at its intended test position. When substitution occurs, 
the dipole shall be placed so that its reference point is placed at the precise place that the 
reference point for the alternate antenna normally occupies. The reference point of the 
antenna is defined as:
– 
the phase centre (mid-point) for a dipole antenna,
– 
the phase centre (mid-point) for a biconical antenna,
– 
the tip or any specific point along the longitudinal axis for an antenna with log-periodic 
elements (including biconilog antennas).
C.10.1 The transmitting antenna shall be 10 m in horizontal distance from the alternate 
antenna reference point in Figure C.1 (taking the place of the nearest vehicle periphery) and 
shall be 1 m high.
C.10.2 For the 3 m antenna distance, the transmitting antenna shall be 3 m in horizontal 
distance from the alternate antenna, as in Figure C.1.
C.11 Test procedure
The procedure to be used is to measure the reference field with the reference antenna 
positioned as in Clause C.10 to obtain a meter reading (usually voltage). Then the alternate 
antenna is substituted and a second reading is taken.
The antenna factor for the alternate antenna is calculated as discussed in Clause C.6. This 
procedure should be conducted for both horizontal and vertical polarizations to determine 
whether different antenna factors are required for each of the two cases.
NOTE The antenna factor of the reference antenna may be assumed to be the same for both polarizations.
C.12 Frequencies
The number of frequencies at which antenna factor values are required depends on the 
alternate antenna being evaluated. A sufficiently large number of frequencies shall be 
considered to describe the function adequately.
C.13 Complete system verification
The complete measurement system comprised of antenna, transmission cable, measuring 
instrument and readout devices shall be verified by measuring an electric field established 
with the characterization signal generator and antenna(s) described in C.8. This verification 
shall be made on a periodic basis so that any change in system performance can be detected 
(see Figure C.1).

<!-- 第 33 页 -->
(10,0 ± 0,2) m
Reference 
or alternate antenna
(3,00 ± 0,05) m
Ground level
NOTE For 3 m antenna distance the 10,0 m ± 0,2 m horizontal dimension changes to 3,00 m ± 0,05 m; the 3,00  ± 
0,05 m vertical dimension changes to 1,80 m ± 0,05 m.
Figure C.1 – Alternate antenna factor determination (10 m antenna distance)
C.14 Reference document
ANSI C63.5, American National Standard for Electromagnetic Compatibility – Radiated 
Emission Measurements in Electromagnetic Interference (EMI) Control – Calibration of 
Antennas (9 kHz to 40 GHz). American National Standards Institute, 11 West 42nd Street, 
New York, NY 10036, USA.
COPYRIGHT
Transmitting  antenna 
(See C.8.2)
(1,00 ±  0,05) m
IEC   715/07
Drawing not to scale

<!-- 第 34 页 -->
Annex D  
(informative)
Construction features of motor vehicles
affecting the emission of ignition noise
D.1 
Introduction
For guidance in testing and approval, it should be noted that some differences in vehicle 
construction are unlikely to have a significant effect on the ignition noise emission. For this 
reason, measurements on one variant may be considered as being typical and such a variant 
may be used as the basis for the assessment of the design characteristics of road vehicles 
insofar as they affect the ignition noise emission.
D.2 The following construction differences have little effect on ignition noise emission.
NOTE This is not all-inclusive, it is a set of examples only.
a) Two-door or four-door vehicles or station-wagons of similar overall length.
b) Differences in radiator grille construction provided that grilles are of metal, offer
approximately the same proportion of clear opening and have approximately the same 
mounting.
c) Shape of fenders or contour of hood/bonnet.
d) Different size wheels or tires.
e) Ordinary non-resistive spark-plugs of different makes, provided they have equivalent
electrical characteristics (capacitance, inductance, resistance).
f) 
Coils and distributors of different makes, provided they have equivalent electrical 
characteristics (capacitance, inductance, resistance).
g) Decorative ornamentation, heaters or air conditioners, occupying the same location.
h) Ordinary resistive spark-plugs of different heat ranges, provided they have equivalent
electrical characteristics (capacitance, inductance, resistance).
i) 
Size, shape, and location of the ancillary electrical equipment (including its harness), 
which is needed to run the engine.
D.3 The following construction differences can be expected to have a significant effect on 
ignition noise emission.
NOTE This is not all-inclusive, it is a set of examples only.
a) 
Significant differences in compression ratio.
b) 
Use of plastic or metallic fenders, roofs or body panels.
c) 
Size, shape, and location of metallic air cleaners and use of plastic rather than metallic 
air cleaners or vice-versa.
d) 
Location of ignition components on the engine or in the engine compartment.
e) 
Size and shape of the engine compartment and location of the high-voltage harness.
f) 
Significant differences in the clear opening of engine compartment around the wheels.
g) 
Right or left hand steering as it may affect the position of the other components or parts.
h) 
Vehicles having auxiliary engine(s) for purposes other than propulsion.

<!-- 第 35 页 -->
Annex E  
(informative)
Measurement of the insertion loss of ignition noise suppressors
E.1 
Introduction
Two methods of measurement of the insertion loss of ignition noise suppressors are used.
E.1.1 
CISPR box method (50/75 Ω laboratory method)
This method is described in Clause E.3.
E.1.2 
Field comparison method
In this method, the insertion loss of the suppressor (or set of suppressors) is determined from 
the measurement of interference field strength caused by the vehicle/boat/device on the open 
test site. It is evaluated according to the formula:
A = E1 – E2 
(E.1)
where:
E1 
is the field strength caused by the ignition system without suppressors, expressed in 
dB (µV/m);
E2 
is the field strength caused by the same ignition system but with suppressors (or set of 
suppressors) expressed in dB (µV/m).
NOTE Field strength is to be measured in accordance with Clause 5.
E.2 
Comparison of test methods
E.2.1.1 
CISPR box method
With the help of the CISPR box method, it is possible to compare only the characteristics of 
single suppressors of the same kind under standard laboratory conditions. At present, this 
method is used in the frequency range from 30 MHz to 300 MHz. Results obtained have no 
significant correlation with the efficiency of suppressors observed in practice. This method 
does not allow measurement of a set of suppressors consisting, for example, of four resistors 
and five cables with distributed attenuation. Nevertheless, it provides a means of quick 
control, for instance of suppressors during manufacture after previous verification of their 
effectiveness in actual conditions.
E.2.2 
Field comparison method
The field comparison method may be considered the reference method since the results 
obtained give the insertion loss of suppressors observed in practice. It automatically takes 
into account all the factors influencing the insertion loss and it has no limitations in frequency 
range. Its main disadvantage is the need to perform measurements on an open test-site (or in 
an absorber lined shielded enclosure as specified in 5.2.2) and the need to test the complete 
vehicle/boat/device.

<!-- 第 36 页 -->
E.3 
CISPR box method (50/75 Ω laboratory method of measurement of 
insertion loss of ignition noise suppressors)
E.3.1 
General conditions and limitations of measurement
The insertion loss of an ignition noise suppressor is measured with the test circuit shown in 
Figure E.1. This method is intended to be used only as a comparative method for suppression 
devices of the same type and is not intended to give direct correlation with emission 
measurements.
E.3.2 
Test procedure
In Figure E.1, the coaxial switches (2) are adjusted so that the signal from the signal 
generator (1) is passed through the test box (4) and the specimen under test (5) giving an 
indication on the output indicator of the measuring instrument (7). Fixed "T" attenuators (3) 
have a loss of 10 dB.
The coaxial switches (2) are then turned so that the signal passes through the calibrated 
variable attenuator (6), which is adjusted to give the same indication on the output indicator of 
the measuring instrument (7). The insertion loss of the ignition noise suppressor is then given 
by the attenuation read on the calibrated variable attenuator (6) minus the attenuation of the 
fixed attenuators (3).
E.3.3 
Test box construction
Details of the usual test box are shown in Figures E.2 to E.4. For the majority of applications, 
this box is applicable: however, hole positions and box size may require modification for some 
applications. The arrangement of the suppressors in the test box is shown in Figures E.5 to 
E.11. All non-coaxial connecting leads within the CISPR box to the suppressors under 
measurement shall be kept as short as possible, or of specified length where shown. In all 
arrangements the spark-plug is modified to accept a coaxial input and is constructed from a 
standard spark-plug assembly having a direct connection between the spark-plug terminal and 
the central electrode.
E.3.4 
Results
For ignition noise suppressors having a high impedance, the insertion loss a1 in a circuit 
having a characteristic impedance z1 can be converted to the insertion loss a2 in a circuit 
having a characteristic impedance z2; the following formula applies:
a2 = a1 + 20 lg (z1/z2). 
(E.2)

<!-- 第 37 页 -->
Key
 
Signal generator
 
Coaxial switch
 
Fixed ”T” attenuator (10 dB)
 
Test box
Items , , ,  and  shall have the same characteristic impedance.
Figure E.1 – Test circuit
Spring metal strip slotted at intervals of about 
10 mm, fixed to all four edges of the piston
10 dB Attenuator  
(for example lumped)
Adaptor
Modified spark plug
Test box
Figure E.2 – General arrangement of the test
COPYRIGHT
IEC   716/07
 
Specimen under test
 
Calibrated variable attenuator
 
Measuring instrument
Lid
Movable piston
Coaxial or sliding tube
Coaxial cable
Coaxial boss fixed to test box
IEC   717/07

<!-- 第 38 页 -->
Dimensions in millimetres
NOTE Lid made to give U-shaped overlapping push fit onto upper face of the test box.
Figure E.3 – Details of the test box lid
Holes for the modified spark plug
150 internal
450 internal
Dimensions in millimetres
Figure E.4 – Details of the test box
COPYRIGHT
Finish: silver-plate
IEC   718/07
Hole for sliding tube
150 internal
IEC   719/07

<!-- 第 39 页 -->
∗
10 dB
10 dB
Figure E.5 – Straight spark-plug ignition
noise suppressor (screened
or unscreened)
∗
10 dB
10 dB
10 dB
Figure E.7 – Noise suppression spark-plug 
Figure E.8 – Resistive distributor brush
* All connecting leads to noise suppressors under measurement to be kept as short as 
possible or of specified length where shown.
COPYRIGHT
∗
10 dB
10 dB
IEC   721/07 
IEC   720/07
Figure E.6 – Right-angle spark-plug 
ignition noise suppressor (screened
or unscreened)
∗
∗
10 dB
IEC   723/07 
IEC   722/07

<!-- 第 40 页 -->
∗
10 dB
10 dB
Figure E.9 – Noise suppressor in
distributor cap
250 mm
∗
10 dB
5 mm
5 mm
Metal caps
Figure E.11 – Noise suppression ignition cable (resistive or reactive)
* All connecting leads to suppressors under measurement to be kept as short as possible or 
of specified length where shown.
COPYRIGHT
∗
∗
∗ 
10 dB
10 dB
IEC   725/07
IEC   724/07
Figure E.10 – Noise suppression
distributor rotor
∗
10 dB
IEC   726/07

<!-- 第 41 页 -->
Annex F  
(informative)
Methods of measurement to determine the attenuation characteristics
of ignition noise suppressors for high voltage ignition systems
F.1 
Introduction
This annex specifies test methods for the evaluation of the efficiency of ignition noise 
suppressors used in the high-voltage part of ignition systems of internal combustion engines, 
such as suppressive HV connectors, resistive spark-plugs.
The frequency range is 30 MHz to 1 000 MHz.
F.2 
Recommended requirements for ignition noise suppressors
The required limit class(es) for noise suppressors shall be defined by the users of this 
standard based on the values in Table F.1.
NOTE At the transition frequencies the higher attenuation should be considered as a limit.
Table F.1 – Limits
Class 
Range I 
30 MHz – 70 MHz 
Range II 
70 MHz – 200 MHz 
Range III 
200 MHz - 500 MHz 
Range IV 
500 MHz - 1 000 MHz
Attenuation
dB
F.3 
Test set-up
The test set-up is shown in Figures F.1 and F.2.
The measurement is performed with a measuring instrument and an absorbing clamp 
according to CISPR 16-1-3.
The RF measuring instrument is set to quasi-peak measurement.
NOTE 1 Since the ignition disturbance is of a broadband nature and the system resonances have been minimized 
by use of the absorbing clamp, the frequency range need not be scanned continuously – it may be stepped (e.g. 
logarithmically) instead.
The peak voltage, measured at the ignition coil output, shall be set to 10 kV by adjusting the 
inert gas pressure in the pressure chamber. The amplitude for the pulses shall be as constant 
as possible. The pulse frequency shall be 50 Hz. The measuring distance a shall be 150 mm 
if no other values are specified in the examples of Clause F.5.
NOTE 2 Protection against high voltages – The energy of modern transistorized ignition systems is so high that 
touching the low-voltage side may create dangerous currents in a human body. Protection against high-voltage 
hazards is necessary.

<!-- 第 42 页 -->
NOTE 3 Protection of the absorbing clamp – The insulation of the ignition cable through the absorbing clamp may 
not be sufficient for this application. The ignition cable must therefore be housed within the absorbing clamp in 
insulating pipes.
In order to stabilize the spark discharge and thus the RF spectrum it is recommended to 
ventilate the pressure chamber (refer to Figure F.3).
A lateral minimum distance to metallic parts (e.g. walls) of 400 mm shall be maintained.
If the set-up is constructed using different parts of sheet metal, good electrical connection 
between the different parts shall be ensured.
The ground strap shall have a minimum cross-sectional area of 5 mm2, a minimum width of 
8 mm and a maximum length of 1 200 mm.
The connections of the EUT to the measuring equipment shall be as close to reality as 
possible.
F.4 
Test procedure
Install a measuring spark-plug as defined in Clause F.5.
The RF disturbance power is first measured without ignition noise suppressors, then the 
measurement is repeated with the ignition noise suppressors inserted.
NOTE Overload protection of the measuring instrument input – During recording the situation without ignition 
noise suppression, pulses of about 1 kV reach the measuring instrument input. This may destroy the measuring 
instrument. The use of a 20 dB attenuator with sufficient voltage/pulse resistance avoids this problem.
The difference between both measurements is the insertion loss of the ignition noise 
suppression device.

<!-- 第 43 页 -->
Key
Spark-gap provided by a measuring spark-plug according to F.5
Connection to the spark-plug
EUT
HV ignition cable, not shielded and without suppressive elements
Absorbing clamp
Wall and floor sheet metal
Table and supports, non-metallic
HV probe
10 Peak-voltage measuring instrument (e.g. oscilloscope)
11 Ground strap
12 Pressure chamber with ventilation according to F.3
13 Measuring cable
14 RF disturbance measuring instrument
a 
is the measuring distance (see F.3).
1 500
a
2 000
1 000
IEC   727/07 
Dimensions in millimetres
Transistorized ignition coil system with power supply and pulse frequency generator (negative terminal 
connected to ground)
Figure F.1 – Test set-up, side view

<!-- 第 44 页 -->
1 500
Key
Spark-gap provided by a measuring spark-plug according to F.5
Connection to the spark-plug
EUT
HV ignition cable, not shielded and without suppressive elements
Absorbing clamp
Wall and floor sheet metal
Table and supports, non-metallic
HV probe
10 Peak-voltage measuring instrument (e.g. oscilloscope)
11 Ground strap
12 Pressure chamber with ventilation according to F.3
13 Measuring cable
14 RF disturbance measuring instrument
a 
is the measuring distance (see F.3).
1 000
a
IEC   728/07 
Dimensions in millimetres
Transistorized ignition coil system with power supply and pulse frequency generator (negative terminal 
connected to ground)
Figure F.2 – Test set-up, top view

<!-- 第 45 页 -->
Key
Pressure chamber
Throttle valve with attenuator (ventilation requirements to be evaluated empirically)
Measuring spark-plug
Connection for oil- and waterfree pressurized inert gas
R 1/8 
b = M10 × 1, M12 × 1,25, or M14 × 1,25
Values not specified may be selected by the manufacturer
Material: metal
IEC   729/07
Figure F.3a – General view
b
M18 × 1,5
∅16,5
IEC   730/07
Dimensions in millimetres
Figure F.3b – Cross-sectional view
Figure F.3 – Pressure chamber with ventilation

<!-- 第 46 页 -->
F.5 
Measuring spark-plugs without suppression elements
F.6 
Test set-up examples
F.6.1 
Connection of a right-angle spark-plug ignition noise suppressor
a
Key
Spark-gap provided by a measuring spark-plug according to F.5
Connection
EUT
Absorbing clamp
Wall sheet metal
a 
is the measuring distance (see F.3)
NOTE The HV ignition cable to the absorbing clamp must be as short as possible.
A measuring spark-plug shall be used to evaluate ignition noise suppressors, designed as 
part of the spark-plug assembly or by some other technique (for example, resistive ignition 
cables).
All spark-plugs without ignition noise suppression according to the relevant standards 
ISO 1919, ISO 2344, ISO 2704 and ISO 2705 may be used. The electrode gap shall be 
adjusted to 0,7 mm ± 0,1 mm.
Because of the high variety of different geometrical dimensions of suppression elements, the 
connection (see item 2 in Figure F.4, for example) shall be agreed between manufacturer and 
user.
IEC   731/07
Dimensions in millimetres
Figure F.4 – Top view of the set-up of a right-angle ignition
noise suppressor for distributors

<!-- 第 47 页 -->
F.6.2 
Connection of a distributor rotor
Key
Spark-gap provided by a measuring spark-plug according to F.5
Connection
EUT
HV ignition cable, not shielded and without suppressive elements
Absorbing clamp
Wall sheet metal
15 Metallic ground plane
18 Original shaft end
19 Adaptor part
a 
is the measuring distance (see F.3)
a
30 min.
IEC   732/07
Dimensions in millimetres
16 Wall sheet metal (7), ground plane sheet metal (15), adaptor part (19) and original shaft end (18) well 
connected electrically and in terms of RF
Figure F.5 – Location of high voltage ignition components

<!-- 第 48 页 -->
Key
Spark-gap provided by a measuring spark-plug according to F.5
Connection
EUT
Wall sheet metal
15 Metallic ground plane
F.6.4 
Connection of resistive ignition cables
F.6.4.1 
Ready-to-use resistive ignition cables
10 max.
IEC   733/07
Dimensions in millimetres
Figure F.6 – Top view of the test set-up for distributor rotors
F.6.3 
Connection of distributor caps with integrated ignition noise suppressors
Because of the high variety of different geometrical dimensions of distributor caps, the 
complete test set-up shall be agreed upon between manufacturer and user.
Ready-to-use ignition cables shall be measured with their original length l; the measuring 
distance shall be chosen as a = l + 120 mm. The connection between the EUT and the non-
suppressive HV ignition cable shall be protected by insulating material against touching. Its 
minimum distance to the absorbing clamp shall be 50 mm.

<!-- 第 49 页 -->
a
Key
Spark-gap provided by a measuring spark-plug according to F.5
Connection
EUT
HV ignition cable, not shielded and without suppressive elements
Absorbing clamp
Wall sheet metal
Table and supports, non-metallic
Protective insulation and ready-to-use protective cap
a  
is the measuring distance (see F.6.4.1)
l  
is the length of the ready-to-use resistive ignition cable
F.6.4.2 
Resistive ignition cables not ready-to-use
These cables shall be measured preferably with a measuring distance of a = 0,5 m.
F.7 
Reference documents
I 
50 min.
IEC   734/07
Dimensions in millimetres
Figure F.7 – Side view of the test set-up for ready-to-use resistive ignition cables
The length of the EUT is measured from the connection (item 2 in Figure F.1) to the ignition 
system (item 6 in Figure F.1).
ISO 1919:1998, Road vehicles – M14 × 1,25 spark-plugs with flat seating and their cylinder 
head housings
ISO 2344:1998, Road vehicles – M14 × 1,25 spark-plugs with conical seating and their 
cylinder head housings
ISO 2704:1998, Road vehicles – M10 × 1 spark-plugs with flat seating and their cylinder head 
housings
ISO 2705:2006, Road vehicles – M12 × 1,25 spark-plugs with flat seating and their cylinder 
head housings

<!-- 第 50 页 -->
Annex G  
(informative)
Flow chart for checking the applicability of CISPR 12
This chart is intended to assist with determining whether a particular product is covered by 
this international standard. In case of conflict between this chart and Clause 1, Clause 1 shall 
take precedence.
Machine with internal 
combustion engine or
electric motor
Does it 
operate on 
land or surface of
NO 
YES
water?
Is it 
a train, electric 
trolley bus(1), medical
YES 
NO
device, boat longer
CISPR 12
does not
apply
(May be 
covered 
CISPR 
standards)
YES 
NO
NO
(1) In the case of a dual-mode trolley bus (e.g. propelled by power from either a.c./d.c. mains or an internal 
combustion engine), the internal combustion propulsion system shall be included, but the a.c./d.c. mains portion of 
the vehicle propulsion system shall be excluded from this standard.
COPYRIGHT
Is it  
powered by
YES
NO
an Internal  
combustion
engine?
CISPR  12 
applies 
Vehicles, 
boats and 
devices
Is it 
powered from
electrical
mains?
Is  
it intended  
primarily for 
transport of goods
YES
and/or 
people?
IEC   735/07

<!-- 第 51 页 -->
Annex H  
(informative)
Items under consideration
H.1 
Introduction
This annex contains future work items that are under consideration.
H.2 
Frequency range
As further work progresses in CISPR A and CISPR H, this will be reviewed and CISPR 12 
updated accordingly.
H.3 
Measurement uncertainty
This topic will be considered for future revisions of this standard.
H.4 
Operation conditions for electrically driven boats
As sufficient experience is available on this topic, it will be included in CISPR 12.
H.5 
Necessity of Annexes E and F
For the next edition of CISPR 12, consideration will be given to removing Annexes E and F if 
there is no further need for them within the industry.
H.6 
Correlation between OTS and ALSE measurements
A method needs to be defined for future editions of this document.

<!-- 第 52 页 -->
Bibliography
CISPR 16-1:1999, Specification for radio disturbance and immunity measuring apparatus and 
methods – Part 1: Radio disturbance and immunity measuring apparatus 1)
CISPR 16-3, 2003: Specification for radio disturbance and immunity measuring apparatus and 
methods – Part 3: CISPR technical reports 
Amendment 1 (2005) 
Amendment 2 (2006)
1) Withdrawn in 2003 and replaced by documents CISPR 16-1-1 to CISPR 16-1-5.

<!-- 第 53 页 -->
NOTES

<!-- 第 54 页 -->
NOTES

<!-- 第 55 页 -->
Standards Australia
Standards Australia is an independent company, limited by guarantee, which prepares and publishes
most of the voluntary technical and commercial standards used in Australia. These standards are
developed through an open process of consultation and consensus, in which all interested parties are
invited to participate. Through a Memorandum of Understanding with the Commonwealth
government, Standards Australia is recognized as Australia’s peak national standards body.
Standards New Zealand
The first national Standards organization was created in New Zealand in 1932. The Standards
Council of New Zealand is the national authority responsible for the production of Standards.
Standards New Zealand is the trading arm of the Standards Council established under the Standards
Act 1988.
Australian/New Zealand Standards
Under a Memorandum of Understanding between Standards Australia and Standards New Zealand,
Australian/New Zealand Standards are prepared by committees of experts from industry,
governments, consumers and other sectors. The requirements or recommendations contained
in published Standards are a consensus of the views of representative interests and also take
account of comments received from other sources. They reflect the latest scientific and industry
experience. Australian/New Zealand Standards are kept under continuous review after publication
and are updated regularly to take account of changing technology.
International Involvement
Standards Australia and Standards New Zealand are responsible for ensuring that the Australian
and New Zealand viewpoints are considered in the formulation of international Standards and that
the latest international experience is incorporated in national and Joint Standards. This role is vital
in assisting local industry to compete in international markets. Both organizations are the national
members of ISO (the International Organization for Standardization) and IEC (the International
Electrotechnical Commission).
Visit our web sites
www.standards.co.nz

<!-- 第 56 页 -->
GPO Box 476 Sydney  NSW  2001
Phone (02) 9237 6000
Fax (02) 9237 6010
Email mail@standards.org.au
SAI Global Customer Service
Phone 13 12 42
Fax 1300 65 49 49
Email sales@sai-global.com
ISBN 0 7337 9171 9 
Printed in Australia
Level 10 Radio New Zealand House
155 The Terrace Wellington 6001
(Private Bag 2439 Wellington 6020)
Phone (04) 498 5990
Fax (04) 498 5994
Customer Services (04) 498 5991
Information Service (04) 498 5992
Email snz@standards.co.nz
Internet www.standards.co.nz
