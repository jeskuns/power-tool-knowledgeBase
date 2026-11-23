# CISPR25 车辆船舶

> 标准号：`CISPR25` ｜ 年份：— ｜ 版本状态：**未纳入核查范围**
> 来源方式：文字层直提 ｜ 原分类：EMC标准 ｜ 页数：83
> 正文可信度：文字层数字完整，可检索引用；关键限值仍建议回原件核对
> 版本核查：清单只覆盖 50 条安规/EMC 现行标准，本条未逐篇联网核实
> 原始文件：`03_全文/EMC标准/CISPR25 车辆船舶.md` ｜ 整理日期：2026-11-20

---

<!-- 第 1 页 -->
NORME
INTERNATIONALE
INTERNATIONAL SPECIAL COMMITTEE ON RADIO INTERFERENCE
COMITÉ INTERNATIONAL SPÉCIAL DES PERTURBATIONS RADIOÉ
CISPR 25:2008
CISPR 25
Edition 3.0 2008-03
INTERNATIONAL
STANDARD
Vehicles, boats and internal combustion engines – Radio disturbance
characteristics – Limits and methods of measurement for the protection of
on-board receivers
Véhicules, bateaux et moteurs à combustion interne – Caractéristiques des
perturbations radioélectriques – Limites et méthodes de mesure pour la
protection des récepteurs embarqués

<!-- 第 2 页 -->
THIS PUBLICATION IS COPYRIGHT PROTECTED
Copyright © 2008 IEC, Geneva, Switzerland
All rights reserved. Unless otherwise specified, no part of this publication may be reproduced or utilized in any form or by
any means, electronic or mechanical, including photocopying and microfilm, without permission in writing from either IEC or
IEC's member National Committee in the country of the requester.
If you have any questions about IEC copyright or have an enquiry about obtaining additional rights to this publication,
please contact the address below or your local IEC member National Committee for further information.
Droits de reproduction réservés. Sauf indication contraire, aucune partie de cette publication ne peut être reproduite
ni utilisée sous quelque forme que ce soit et par aucun procédé, électronique ou mécanique, y compris la photocopie
et les microfilms, sans l'accord écrit de la CEI ou du Comité national de la CEI du pays du demandeur.
Si vous avez des questions sur le copyright de la CEI ou si vous désirez obtenir des droits supplémentaires sur cette
publication, utilisez les coordonnées ci-après ou contactez le Comité national de la CEI de votre pays de résidence.
IEC Central Office
3, rue de Varembé
CH-1211 Geneva 20
Switzerland
Email: inmail@iec.ch
Web: www.iec.ch
About the IEC
The International Electrotechnical Commission (IEC) is the leading global organization that prepares and publishes
International Standards for all electrical, electronic and related technologies.
About IEC publications
The technical content of IEC publications is kept under constant review by the IEC. Please make sure that you have the
latest edition, a corrigenda or an amendment might have been published.
 Catalogue of IEC publications: www.iec.ch/searchpub
The IEC on-line Catalogue enables you to search by a variety of criteria (reference number, text, technical committee,…).
It also gives information on projects, withdrawn and replaced publications.
 IEC Just Published: www.iec.ch/online_news/justpub
Stay up to date on all new IEC publications. Just Published details twice a month all new publications released. Available
on-line and also by email.
The world's leading online dictionary of electronic and electrical terms containing more than 20 000 terms and definitions
in English and French, with equivalent terms in additional languages. Also known as the International Electrotechnical
Vocabulary online.
 Customer Service Centre: www.iec.ch/webstore/custserv
If you wish to give us your feedback on this publication or need further assistance, please visit the Customer Service
Centre FAQ or contact us:
Email: csc@iec.ch
Tel.: +41 22 919 02 11
Fax: +41 22 919 03 00
A propos de la CEI
La Commission Electrotechnique Internationale (CEI) est la première organisation mondiale qui élabore et publie des
normes internationales pour tout ce qui a trait à l'électricité, à l'électronique et aux technologies apparentées.
A propos des publications CEI
Le contenu technique des publications de la CEI est constamment revu. Veuillez vous assurer que vous possédez
l’édition la plus récente, un corrigendum ou amendement peut avoir été publié.
 Catalogue des publications de la CEI: www.iec.ch/searchpub/cur_fut-f.htm
Le Catalogue en-ligne de la CEI vous permet d’effectuer des recherches en utilisant différents critères (numéro de référence,
texte, comité d’études,…). Il donne aussi des informations sur les projets et les publications retirées ou remplacées.
 Just Published CEI: www.iec.ch/online_news/justpub
Restez informé sur les nouvelles publications de la CEI. Just Published détaille deux fois par mois les nouvelles
publications parues. Disponible en-ligne et aussi par email.
Le premier dictionnaire en ligne au monde de termes électroniques et électriques. Il contient plus de 20 000 termes et
définitions en anglais et en français, ainsi que les termes équivalents dans les langues additionnelles. Egalement appelé
Vocabulaire Electrotechnique International en ligne.
 Service Clients: www.iec.ch/webstore/custserv/custserv_entry-f.htm
Si vous désirez nous donner des commentaires sur cette publication ou si vous avez des questions, visitez le FAQ du
Service clients ou contactez-nous:
Email: csc@iec.ch
Tél.: +41 22 919 02 11
Fax: +41 22 919 03 00

<!-- 第 3 页 -->
Edition 3.0 2008-03
INTERNATIONAL
STANDARD
NORME
INTERNATIONALE
INTERNATIONAL SPECIAL COMMITTEE ON RADIO INTERFERENCE
COMITÉ INTERNATIONAL SPÉCIAL DES PERTURBATIONS RADIOÉ
Vehicles, boats and internal combustion engines – Radio disturbance
characteristics – Limits and methods of measurement for the protection of
on-board receivers
Véhicules, bateaux et moteurs à combustion interne – Caractéristiques des
perturbations radioélectriques – Limites et méthodes de mesure pour la
protection des récepteurs embarqués
INTERNATIONAL
ELECTROTECHNICAL
COMMISSION
COMMISSION
ELECTROTECHNIQUE
INTERNATIONALE
XC
ICS 33.100.10; 33.100.20
CISPR 25
PRICE CODE
CODE PRIX
ISBN 2-8318-9664-9

<!-- 第 4 页 -->
CONTENTS
FOREWORD
INTRODUCTION
Scope
Normative references
Terms and definitions
Requirements common to vehicle and component/module emissions measurement
4.1
General test requirements and test plan
4.1.1
Categories of disturbance sources (as applied in the test plan)
4.1.2
Test plan
4.1.3
Determination of conformance of EUT with limits
4.1.4
Operating conditions
4.1.5
Test report
4.2
Shielded enclosure
4.3
Absorber-lined shielded enclosure (ALSE)
4.3.1
Reflection characteristics
4.3.2
Size
4.3.3
Objects in ALSE
4.4
Measuring instrument
4.4.1
Spectrum analyser parameters
4.4.2
Scanning receiver parameters
4.5
Power supply
Measurement of emissions received by an antenna on the same vehicle
5.1
Antenna measuring system
5.1.1
Type of antenna
5.1.2
Measuring system requirements
5.2
Method of measurement
5.3
Examples of limits for vehicle radiated disturbances
Measurement of components and modules
6.1
Test equipment
6.1.1
Ground plane
6.1.2
Power supply and AN
6.1.3
Load Simulator
6.1.4
Signal/control line filters
6.2
Conducted emissions from components/modules – Voltage method
6.2.1
General
6.2.2
Ground plane arrangement
6.2.3
Limits for conducted disturbances from components/modules –
Voltage method
6.3
Conducted emissions from components/modules – current probe method
6.3.1
Test set-up
6.3.2
Test procedure
6.3.3
Limits for conducted disturbances from components/modules –
Current probe method
6.4
Radiated emissions from components/modules - ALSE method
6.4.1
General
6.4.2
Test set-up

<!-- 第 5 页 -->
6.4.3
Test procedure
6.4.4
Limits for radiated disturbances from components/modules – ALSE
method
6.5
Radiated emissions from components/modules – TEM cell method
6.5.1
General
6.5.2
Test set-up
6.5.3
Test procedure
6.5.4
Limits for radiated disturbances from components/modules – TEM
cell method
6.6
Radiated emissions from components/modules – Stripline method
Annex A (informative)  Flow chart for checking the applicability of CISPR 25
Annex B (normative)  Antenna matching unit – Vehicle test
Annex C (informative)  Sheath-current suppressor
Annex D (informative)  Guidance for the determination of the noise floor of active
vehicle antennas in the AM and FM Range
Annex E (normative)  Artificial network
Annex F (informative)  TEM cell dimensions
Annex G (informative)  Radiated emissions from components/modules – Stripline
method
Annex H (informative)  Interference to mobile radio communication in the presence of
impulsive noise – Methods of judging degradation
Annex I (informative)  Items Under Consideration
Bibliography
Figure 1 – Method of determination of conformance for all frequency bands
Figure 2 – Example of gain curve
Figure 3 – Vehicle-radiated emissions – Example for test layout  (end view with
monopole antenna)
Figure 4 – Average limit for radiated disturbances from vehicles GPS band 1 567,42 to
1 583,42 MHz
Figure 5 – Example for the required minimum attenuation of the signal / control line
filters
Figure 6 – Conducted emissions – EUT with power return line remotely grounded.
Figure 7 – Conducted emissions – EUT with power return line locally grounded
Figure 8 – Conducted emissions – Test layout for alternators and generators
Figure 9 – Conducted emissions – Test layout for ignition system components
Figure 10 – Conducted emissions – Example of test layout  for current probe
measurements
Figure 11 – Test harness bending requirements
Figure 12 – Example of test set-up – rod antenna
Figure 13 – Example of test set-up – biconical antenna
Figure 14 – Example of test set-up – log-periodic antenna
Figure 15 – Example of test set-up – above 1 GHz
Figure 16 – Example of average limit for radiated disturbances from components GPS
band 1 567,42 to 1 583,42 MHz – Class 5
Figure 17 – TEM cell (example)

<!-- 第 6 页 -->
Figure 18 – Example of arrangement of leads in the TEM cell  and to the connector
panel
Figure 19 – Example of the arrangement of the connectors,  the lead frame and the
dielectric support
Figure 20 – Example of the TEM cell method test layout
Figure B.1 –Verification set-up
Figure C.1 – Attenuation vs. frequency
Figure D.1 – Vehicle test set up for equipment noise measurement in the AM/FM range
Figure D.2 – Vehicle test set up for antenna noise measurement in the AM/FM range
Figure E.1 – Characteristics of the AN impedance
Figure E.2 – Example of 5 μH AN schematic
Figure F.1 – TEM cell
Figure G.1 – Example of a basic stripline test setup in a shielded enclosure
Figure G.2 – Example for a 50 Ω stripline
Figure G.3 – Example for a 90 Ω stripline
Table 1 – Spectrum analyser parameters
Table 2 – Scanning receiver parameters
Table 3 – Antenna types
Table 4 – Example for limits of disturbance – Complete vehicle
Table 5 – Examples of quasi-peak or peak limits for conducted disturbances – Voltage
Method
Table 6 – Examples of average limits for conducted disturbances – Voltage Method
Table 7 – Examples of quasi-peak and peak limits for conducted disturbances -
control/signal lines – Current probe method
Table 8 – Examples of average limits for conducted disturbances  - control/signal lines
– Current probe method
Table 9 – Examples of quasi-peak or peak limits for radiated disturbances – ALSE
Table 10 – Examples of average limits for radiated disturbances – ALSE
Table 11 – Examples of quasi-peak or peak limits for radiated disturbances – TEM cell
Table 12 – Examples of average limits for radiated disturbances – TEM Cell
Table F.1 – Dimensions for TEM cells
Table G.1 – Examples of quasi-peak or peak limits for radiated disturbances –
Stripline
Table G.2 – Examples of average limits for radiated disturbances – Stripline

<!-- 第 7 页 -->
INTERNATIONAL ELECTROTECHNICAL COMMISSION
INTERNATIONAL SPECIAL COMMITTEE ON RADIO INTERFERENCE
____________
VEHICLES, BOATS AND INTERNAL COMBUSTION ENGINES –
RADIO DISTURBANCE CHARACTERISTICS –
LIMITS AND METHODS OF MEASUREMENT FOR
THE PROTECTION OF ON-BOARD RECEIVERS
FOREWORD
1) The International Electrotechnical Commission (IEC) is a worldwide organization for standardization comprising
all national electrotechnical committees (IEC National Committees). The object of IEC is to promote
international co-operation on all questions concerning standardization in the electrical and electronic fields. To
this end and in addition to other activities, IEC publishes International Standards, Technical Specifications,
Technical Reports, Publicly Available Specifications (PAS) and Guides (hereafter referred to as “IEC
Publication(s)”). Their preparation is entrusted to technical committees; any IEC National Committee interested
in the subject dealt with may participate in this preparatory work. International, governmental and non-
governmental organizations liaising with the IEC also participate in this preparation. IEC collaborates closely
with the International Organization for Standardization (ISO) in accordance with conditions determined by
agreement between the two organizations.
2) The formal decisions or agreements of IEC on technical matters express, as nearly as possible, an international
consensus of opinion on the relevant subjects since each technical committee has representation from all
interested IEC National Committees.
3) IEC Publications have the form of recommendations for international use and are accepted by IEC National
Committees in that sense. While all reasonable efforts are made to ensure that the technical content of IEC
Publications is accurate, IEC cannot be held responsible for the way in which they are used or for any
misinterpretation by any end user.
4) In order to promote international uniformity, IEC National Committees undertake to apply IEC Publications
transparently to the maximum extent possible in their national and regional publications. Any divergence
between any IEC Publication and the corresponding national or regional publication shall be clearly indicated in
the latter.
5) IEC provides no marking procedure to indicate its approval and cannot be rendered responsible for any
equipment declared to be in conformity with an IEC Publication.
6) All users should ensure that they have the latest edition of this publication.
7) No liability shall attach to IEC or its directors, employees, servants or agents including individual experts and
members of its technical committees and IEC National Committees for any personal injury, property damage or
other damage of any nature whatsoever, whether direct or indirect, or for costs (including legal fees) and
expenses arising out of the publication, use of, or reliance upon, this IEC Publication or any other IEC
Publications.
8) Attention is drawn to the Normative references cited in this publication. Use of the referenced publications is
indispensable for the correct application of this publication.
9) Attention is drawn to the possibility that some of the elements of this IEC Publication may be the subject of
patent rights. IEC shall not be held responsible for identifying any or all such patent rights.
International Standard CISPR 25 has been prepared by CISPR subcommittee D:
Electromagnetic disturbances related to electric/electronic equipment on vehicles and internal
combustion engine powered devices.
This third edition cancels and replaces the second edition published in 2002. This edition
constitutes a technical revision.
The following significant changes were made with respect to the previous edition:
–
addition of required measurements with both an average detector and a peak or quasi-
peak detector;
–
addition of methods and limits for the protection of new analogue and digital radio
services, which cover the frequency range up to 2 500 MHz;
–
addition of a new measurement method for components (stripline) as an informative
Annex G;

<!-- 第 8 页 -->
–
addition of the contents of CISPR 21 as Annex H; CISPR 21 in its entirety now becomes
obsolete.
–
deletion of narrowband / broadband determination;
–
deletion of the Annex on rod antenna characterisation (this is now covered by
CISPR 16-1-4);
–
deletion of the Annex on characterisation of shielded enclosure (CISPR 25 will be
amended when the CISPR/D / CISPR/A Joint Task Force on chamber validation finishes
its work).
The text of this standard is based on the following documents:
Enquiry draft
Report on voting
CISPR/D/344/CDV
CISPR/D/352/RVC
Full information on the voting for the approval of this standard can be found in the report on
voting indicated in the above Table.
This publication has been drafted in accordance with the ISO/IEC Directives, Part 2.
The committee has decided that the contents of this publication will remain unchanged until
the maintenance result date indicated on the IEC web site under "http://webstore.iec.ch" in
the data related to the specific publication. At this date, the publication will be
- •
reconfirmed,
- •
withdrawn,
- •
replaced by a revised edition, or
- •
amended.

<!-- 第 9 页 -->
INTRODUCTION
This International Standard is designed to protect on-board receivers from disturbances
produced by conducted and radiated emissions arising in a vehicle.
Test procedures and limits given are intended to provide provisional control of vehicle
radiated emissions, as well as component/module conducted/radiated emissions of long and
short duration.
To accomplish this end, this standard:
–
establishes a test method for measuring the electromagnetic emissions from the
electrical system of a vehicle;
–
sets limits for the electromagnetic emissions from the electrical system of a vehicle;
–
establishes test methods for testing on-board components and modules independent
from the vehicle;
–
sets limits for electromagnetic emissions from components to prevent objectionable
disturbance to on-board receivers;
–
classifies automotive components by disturbance duration to establish a range of
limits.
NOTE Component tests are not intended to replace vehicle tests. Exact correlation between component and vehicle test
performance is dependent on component mounting location, harness length, routing and grounding, as well as antenna location.
Component testing, however, permits components to be evaluated prior to actual vehicle availability.

<!-- 第 10 页 -->
VEHICLES, BOATS AND INTERNAL COMBUSTION ENGINES –
RADIO DISTURBANCE CHARACTERISTICS –
LIMITS AND METHODS OF MEASUREMENT FOR
THE PROTECTION OF ON-BOARD RECEIVERS
Scope
This International Standard contains limits and procedures for the measurement of radio
disturbances in the frequency range of 150 kHz to 2 500 MHz. The standard applies to any
electronic/electrical component intended for use in vehicles, trailers and devices. Refer to
International Telecommunications Union (ITU) publications for details of frequency
allocations. The limits are intended to provide protection for receivers installed in a vehicle
from disturbances produced by components/modules in the same vehicle. The method and
limits for a complete vehicle are in Clause 5 and the methods and limits for
components/modules are in Clause 6. Only a complete vehicle test can be used to determine
the component compatibility with respect to a vehicle’s limit.
The receiver types to be protected are, for example, broadcast receivers (sound and
television), land mobile radio, radio telephone, amateur, citizens' radio, Satellite Navigation
(GPS, etc.) and Bluetooth. For the purpose of this standard, a vehicle is a machine, which is
self-propelled. Vehicles include (but are not limited to) passenger cars, trucks, agricultural
tractors and snowmobiles. Annex A provides guidance in determining whether this standard is
applicable to particular equipment.
The limits in this standard are recommended and subject to modification as agreed between
the vehicle manufacturer and the component supplier. This standard is also intended to be
applied by manufacturers and suppliers of components and equipment which are to be added
and connected to the vehicle harness or to an on-board power connector after delivery of the
vehicle.
This International Standard does not include protection of electronic control systems from
radio frequency (RF) emissions, or from transient or pulse-type voltage fluctuations. These
subjects are included in ISO publications.
Since the mounting location, vehicle body construction and harness design can affect the
coupling of radio disturbances to the on-board radio, Clause 6 of this standard defines
multiple limit levels. The level class to be used (as a function of frequency band) is agreed
upon between the vehicle manufacturer and the component supplier.
CISPR 25 defines test methods for use by vehicle manufacturers and suppliers, to assist in
the design of vehicles and components and ensure controlled levels of on-board radio
frequency emissions.
Vehicle test limits are provided for guidance and are based on a typical radio receiver using
the antenna provided as part of the vehicle, or a test antenna if a unique antenna is not
specified. The frequency bands that are defined are not applicable to all regions or countries
of the world. For economic reasons, the vehicle manufacturer must be free to identify what
frequency bands are applicable in the countries in which a vehicle will be marketed and which
radio services are likely to be used in that vehicle.

<!-- 第 11 页 -->
As an example, many vehicle models will probably not have a television receiver installed; yet
the television bands occupy a significant portion of the radio spectrum. Testing and mitigating
noise sources in such vehicles is not economically justified.
The vehicle manufacturer should define the countries in which the vehicle is to be marketed,
then choose the applicable frequency bands and limits. Component test parameters can then
be selected from CISPR 25 to support the chosen marketing plan.
The World Administrative Radio communications Conference (WARC) lower frequency limit in
region 1 was reduced to 148,5 kHz in 1979. For vehicular purposes, tests at 150 kHz are
considered adequate. For the purposes of this standard, test frequency ranges have been
generalized to cover radio services in various parts of the world. Protection of radio reception
at adjacent frequencies can be expected in most cases.
Annex H defines a qualitative method of judging the degradation of radio communication in
the presence of impulsive noise.
Annex I lists work being considered for future revisions.
Normative references
The following referenced documents are indispensable for the application of this document.
For dated references, only the edition cited applies. For undated references, the latest edition
of the referenced document (including any amendments) applies.
IEC 60050-161:1990, International Electrotechnical Vocabulary (IEV) – Chapter 161:
Electromagnetic compatibility
Amendment 1:1997
Amendment 2:1998
CISPR 12:2007, Vehicles, motorboats, and internal combustion engine-driven devices – Radio
disturbance characteristics – Limits and methods of measurement for the protection of
receivers
except
those
installed
in
the
vehicle/boat/device
itself
or
in
adjacent
vehicles/boats/devices.
CISPR 16-1-1:2006, Specification for radio disturbance and immunity measuring apparatus
and methods – Part 1-1: Radio disturbance and immunity measuring apparatus – Measuring
apparatus
Amendment 1:2006
Amendment 2:2007
CISPR 16-1-2:2003, Specification for radio disturbance and immunity measuring apparatus
and methods – Part 1-2: Radio disturbance and immunity measuring apparatus – Ancillary
equipment – Conducted disturbances
Amendment 1:2004
Amendment 2:2006
CISPR 16-1-4:2007, Specification for radio disturbance and immunity measuring apparatus
and methods – Part 1-4: Radio disturbance and immunity measuring apparatus – Ancillary
equipment – Radiated disturbances
Amendment 1:2007
CISPR 16-2-3:2006, Specification for radio disturbance and immunity measuring apparatus
and methods – Part 2-3: Methods of measurement of disturbances and immunity – Radiated
disturbance measurements

<!-- 第 12 页 -->
ISO 11452-4:2005 - Road vehicles – Component test methods for electrical disturbances from
narrowband radiated electromagnetic energy – Part 4: Bulk current injection (BCI)
SAE ARP 958.1 Rev D:2003-02 – Electromagnetic Interference Measurement Antennas;
Standard Calibration Method
Terms and definitions
For the purposes of this document, the following terms and definitions apply.
3.1
absorber lined shielded enclosure (ALSE)
shielded enclosure/screened room with radio frequency-absorbing material on its internal
ceiling and walls
3.2
antenna factor
the factor which is applied to the voltage measured at the input connector of the measuring
instrument to give the field strength at the antenna
3.3
antenna matching unit
a unit for matching the impedance of an antenna to that of the 50 Ω measuring instrument
over the antenna measuring frequency range
3.4
class
a performance level agreed upon by the purchaser and the supplier and documented in the
test plan
3.5
component continuous conducted emissions
the noise voltages/currents of a steady-state nature existing on the supply or other leads of a
component/module which may cause disturbance to reception in an on-board receiver.
3.6
compression point
the input signal level at which the gain of the measuring system becomes non-linear such that
the indicated output deviates from an ideal linear receiving system's output by the specified
increment in dB
3.7
device
a machine driven by an internal combustion engine which is not primarily intended to carry
persons or goods.
NOTE Devices include, but are not limited to, chainsaws, irrigation pumps, snow blowers, air compressors, and
landscaping equipment.
3.8
receiver terminal voltage (antenna voltage)
the voltage generated by a source of radio disturbance and measured in dB (μV) by a radio
disturbance measuring instrument conforming to the requirements of CISPR 16

<!-- 第 13 页 -->
[IEV 161-04-05, modified]
NOTE The average value must be taken over a specified time interval.
[IEV 161-04-26]
3.12
bandwidth
[IEV 161-06-09, modified]
[IEV 161-06-10]
[IEV 161-06-11, modified]
3.14
disturbance suppression
action which reduces or eliminates electromagnetic disturbance
[IEV 161-03-22]
- —————————
1 USA
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
3.9
RF boundary
an element of an EMC test set-up that determines what part of the harness and/or peripherals
are included in the RF environment and what is excluded.  It may consist of, for example,
ANs, filter feed-through pins, RF absorber coated wire, and/or RF shielding
3.10
artificial network (AN) ; line impedance stabilization network (LISN 1)
a network inserted in the supply lead or signal/load lead of apparatus to be tested which
provides, in a given frequency range, a specified load impedance for the measurement of
disturbance voltages and which may isolate the apparatus from the supply or signal
sources/loads in that frequency range
3.11
average detector
a detector, the output voltage of which is the average value of the envelope of an applied
signal
3.12.1
bandwidth (of an equipment)
the width of a frequency band over which a given characteristic of an equipment or
transmission channel does not differ from its reference value by more than a specified amount
or ratio
NOTE The given characteristic may be, for example, the amplitude/frequency characteristic, the phase/frequency
characteristic or the delay/frequency characteristic.
3.12.2
bandwidth (of an emission or signal)
the width of the frequency band outside which the level of any spectral component does not
exceed a specified percentage of a reference level
3.13
broadband emission
an emission which has a bandwidth greater than that of a particular measuring apparatus or
receiver
NOTE An emission which has a pulse repetition rate (in Hz) less than the bandwidth of a particular measuring
instrument can also be considered as a broadband emission.

<!-- 第 14 页 -->
3.15
disturbance voltage; interference voltage (deprecated in this sense)
voltage produced between two points on two separate conductors by an electromagnetic
disturbance, measured under specified conditions
[IEV 161-04-01]
3.16
electromagnetic environment
the totality of electromagnetic phenomena existing at a given location
[IEV 161-01-01]
3.17
ground (reference) plane
a flat conductive surface whose potential is used as a common reference.
[IEV 161-04-36]
3.18
narrowband emission
an emission which has a bandwidth less than that of a particular measuring apparatus or
receiver
[IEV 161-06-13]
NOTE An emission which has a pulse repetition rate (in Hz) greater than the bandwidth of a particular measuring
instrument can also be considered as a narrowband emission.
3.19
peak detector
a detector, the output voltage of which is the peak value of an applied signal
[IEV 161-04-24]
3.20
quasi-peak detector
a detector having specified electrical time constants which, when regularly repeated identical
pulses are applied to it, delivers an output voltage which is a fraction of the peak value of the
pulses, the fraction increasing towards unity as the pulse repetition rate is increased
[IEV 161-04-21]
3.21
shielded enclosure; screened room
a mesh or sheet metallic housing designed expressly for the purpose of separating
electromagnetically the internal and the external environment
[IEV 161-04-37]
Requirements common to vehicle and component/module emissions
measurement
4.1
General test requirements and test plan
4.1.1
Categories of disturbance sources (as applied in the test plan)
Electromagnetic disturbance sources can be divided into two main types:

<!-- 第 15 页 -->
- •
Narrowband sources (examples of narrowband disturbance sources are vehicle electronic
components which include clocks, oscillators, digital logic from microprocessors and
displays).
- •
Broadband sources (examples of broadband disturbance sources are electrical motors
and ignition system).
NOTE 1 While most vehicle or electrical/electronic components are a source of both narrowband and broadband
disturbances, some may be a source of only one type of disturbance.
NOTE 2 Broadband sources can be classified in short-duration broadband (examples are washer pump, door
mirror, electrical windows) and long-duration broadband (examples are front wiper motor, heater blower, engine
cooling).
For the purposes of this standard, categorization of the disturbance type is used only in
simplifying the testing demands by potentially reducing the number of detectors that shall be
used (i.e. eliminating the average detector if the device is known to be broadband-type of
source, such as a d.c. brush commutated motor). Otherwise, this standard requires that
sources comply with limits based upon both types of measurement detectors and not the type
of disturbance.
4.1.2
Test plan
A test plan shall be established for each item to be tested. The test plan shall specify the
- •
frequency range to be tested,
- •
the emissions limits,
- •
antenna types and locations,
- •
test report requirements,
- •
supply voltage and other relevant parameters.
The test plan shall define for each frequency band whether the conformance can be obtained
with average and peak limits or with average and quasi-peak limits.
4.1.3
Determination of conformance of EUT with limits
In all cases the EUT shall conform with the average limit.
The EUT shall also conform with either peak or quasi-peaks limits as follows.
- •
For frequencies where both peak and quasi-peak limits are defined, the EUT shall conform
with either the peak or the quasi-peak limits (as defined in the test plan).
- •
For frequencies where only peak limits are defined, the EUT shall conform with the peak
limit.
The general procedure applicable for all frequency bands is described in Figure 1.
The limits given in this standard take into account uncertainties.

<!-- 第 16 页 -->
Start
Average and peak
Applicable limits    :
average and peak or
average and quasi-peak?
- (1)
Measurement with
peak detector
Yes  (2)
Yes (2)
Are the peak
data below the
average limit?
No
No
Yes
Yes
Are the peak
data below the
peak limit?
No
No
Measurement with
average detector (3)
No
No
Are the average
Yes
Yes
data below the
average limit?
Fail
Pass
Fail
NOTE 1 The conformance should normally be obtained by compliance to both average and peak limits or both
average and quasi-peak limits unless the test plan defines that conformance can be obtained by compliance to the
single appropriate limit) (depending on the case, peak, or average, or quasi-peak).
NOTE 2 Because measurement with peak detector is always higher or equal to measurement with average
detector and applicable peak limit is always higher or equal to applicable average limit, this single detector
measurement can lead to a simplified and quicker conformance process.
NOTE 3 This flow-chart is applicable for each individual frequency, e.g. only frequencies that are above the
applicable limit need be remeasured with average or quasi-peak detector.
Figure 1 – Method of determination of conformance for all frequency bands
Average and quasi-peak
Measurement with
peak detector
Are the peak
data below the
average limit?
Are the peak
data below the
quasi-peak limit?
Measurement with
quasi-peak detector (3)
Are the peak
data below the
quasi-peak limit?
Yes
No
Measurement with
average detector (3)
Are the average
data below the
average limit?
IEC   363/08

<!-- 第 17 页 -->
4.1.4
Operating conditions
4.1.5
Test report
- •
sample identification,
- •
date and time of test,
- •
bandwidth,
- •
step size,
- •
required test limit,
- •
ambient data
- •
test data.
4.2
Shielded enclosure
4.3
Absorber-lined shielded enclosure (ALSE)
4.3.1
Reflection characteristics
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
Different operating conditions of the EUT can influence emission measurement results. When
performing component/module tests, the EUT shall be made to operate under typical loading
and other conditions as in the vehicle such that the maximum emission state occurs. The
operating conditions shall be specified in the test plan.
To ensure correct operation of components/modules during test, a peripheral interface unit
shall be used which simulates the vehicle installation. Depending on the intended operating
modes, all significant sensor and actuator leads of the EUT shall be connected to a peripheral
interface unit. The peripheral interface unit shall be capable of controlling the EUT in
accordance with the test plan.
The peripheral interface unit may be located internal or external to the shielded enclosure. If
located in the shielded enclosure, the disturbance levels generated by the peripheral interface
unit shall be at least 6 dB below the test limits specified in the test plan.
The report shall contain the information agreed upon by the customer and the supplier, e.g.
The ambient electromagnetic noise levels shall be at least 6 dB below the limits specified in
the test plan for each test to be performed. The shielding effectiveness of the shielded
enclosure shall be sufficient to ensure that the required ambient electromagnetic noise level
requirement is met.
NOTE Although there will be reflected energy from the interior surfaces of the shielded enclosure, this is of
minimal concern for the measurement of conducted disturbances because of the direct coupling of the measuring
instrument to the leads of the EUT. The shielded enclosure may be as simple as a suitably grounded bench-top
screened cage.
For radiated emission measurements, however, the reflected energy can cause errors of as
much as 20 dB. Therefore, it is necessary to apply RF absorber material to the walls and
ceiling of a shielded enclosure that is to be used for radiated emissions measurements. No
absorber material shall be placed on the floor for vehicle or component level tests. The
following ALSE requirements shall also be met for performing radiated RF emissions
measurements.
Performance of the absorption material shall be greater than or equal to 6 dB in the 70 MHz to
2 500 MHz frequency range.
NOTE A test method is described in IEEE STD 1128-1998: IEEE recommended practice for radio frequency (RF)
absorber – Evaluation in the range of 30 MHz to 5 GHz.

<!-- 第 18 页 -->
4.3.2
Size
For radiated emissions tests, the shielded enclosure shall be of sufficient size to ensure that
neither the vehicle/EUT nor the test antenna shall be closer than 1 m from the walls or ceiling,
or to the nearest surface of the absorber material used thereon.
4.3.3
Objects in ALSE
For radiated emissions measurements in particular, the ALSE shall be cleared of all items not
pertinent to the tests. This is required in order to reduce any effect they may have on the
measurement. Included are unnecessary equipment, cable racks, storage cabinets, desks,
chairs, etc. Personnel not actively involved in the test shall be excluded from the ALSE.
4.4
Measuring instrument
The measuring instrument shall comply with the requirements of CISPR 16-1-1. Either manual
or automatic frequency scanning may be used. However Annex D of CISPR 16-2-3 explains
the differences between the CISPR AV detector and an AV detector (complying with
CISPR 16-1:1999). For the purpose of this standard either detector may be used, since the
pulse repetition rate for internal combustion engines is above 10 Hz.
NOTE 1 Spectrum analysers and scanning receivers are particularly useful for disturbance measurements. The
peak detection mode of spectrum analysers and scanning receivers provides a display indication which is never
less than the quasi-peak indication for the same bandwidth. It may be convenient to measure emissions using peak
detection because of the faster scan possible than with quasi-peak detection.
NOTE 2 A preamplifier may be used between the antenna and measuring instrument in order to achieve the 6 dB
noise floor requirements. If a preamplifier is used to achieve the 6 dB noise floor requirement, the laboratory
should establish a procedure to avoid overload of the preamplifier, such as using a step attenuator.
NOTE 3 In particular cases, because of very low average detector limits and/or instrumentation limitations, the
6 dB noise floor requirements may not be fulfilled. In this case and if an appropriate preamplifier has been used,
alternatives such as RBW/BW reduction with appropriate step size changes may be used. These measures should
be documented in the test report.
4.4.1
Spectrum analyser parameters
The scan rate of the spectrum analyser shall be adjusted for the CISPR frequency band and
detection mode used.
Spectrum analysers may be used for performing compliance measurements to this standard
providing the precautions cited in CISPR 16-1-1 on the use of spectrum analysers are adhered
to and that the broadband emissions from the product being tested have a repetition frequency greater
than 20 Hz.
The minimum scan time and recommended bandwidth are listed in Table 1.
The bandwidth of the spectrum analyser shall be chosen such that the noise floor is at least
6 dB lower than the applicable limits.
NOTE See 4.4, Notes 2 and 3.

<!-- 第 19 页 -->
AM broadcast
and mobile
services
FM broadcast
76 - 108
Mobile services
30 - 1 000
TV Band I
41- 88
TV Band III
174 - 230
TV Band IV/V
470- 890
DAB
171- 245
DTTV
470 - 770
100/120  kHz
100 ms
/ MHz
Does not apply
Does not
Mobile service
1 000 - 2 500
100/120 kHz
100 ms
/ MHz
Does not apply
Does not
GPS L1 civil
1 567 – 1 583
Does not
apply
4.4.2
Scanning receiver parameters
NOTE See 4.4, Notes 2 and 3.
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
Table 1 – Spectrum analyser parameters
Peak detection
Quasi-peak detection
Average detection
Service / Frequency  range
MHz
RBW
at -3 dB
Scan time
RBW
at -6 dB
Scan time
RBW
at -3 dB
Scan time
0,15 - 30
9/10 kHz
10 s / MHz
9 kHz
200 s / MHz
9/10 kHz
10 s / MHz
100/120 kHz
100 ms
/ MHz
120 kHz
20 s / MHz
100/120 kHz
100 ms
/ MHz
apply
100/120  kHz
100 ms
/ MHz
apply
100/120  kHz
100 ms
/ MHz
Does not
apply
Does not apply
Does not
apply
9/10  kHz
1 s / MHz
When a spectrum analyser is used for measurements, the video bandwidth shall be at least
three times the resolution bandwidth (RBW).
The dwell time of the scanning receiver shall be adjusted for the CISPR frequency band and
detection mode used. The minimum dwell time, maximum step size and recommended
bandwidth (BW) are listed in Table 2.
The bandwidth of the scanning receiver shall be chosen such that the noise floor is at least
6 dB lower than the applicable limits.

<!-- 第 20 页 -->
Table 2 – Scanning receiver parameters
Peak detection
Quasi-peak detection
Average detection
Service / Frequency  range
MHz
BW
at -6 dB
Step
Dwell
size
time
AM broadcast
and mobile
services
FM broadcast
76 - 108
Mobile
services
30 to 1 000
TV Band I
41 – 88
TV Band III
174 – 230
TV Band IV/V
470 – 890
DAB
171 - 245
DTTV
470 - 770
120 kHz
50 kHz
5 ms
Does not
Mobile
service
1 000 -
2 500
120 kHz
50 kHz
5 ms
Does not
GPS L1 civil
Does
Does
1 567 – 1 583
Does not
not
apply
not
apply
apply
4.5
Power supply
The power supply shall have adequate regulation to maintain the supply voltage Us within the
ranges specified:
Vehicle tests: Ignition on, engine off
⎞
⎜⎜
⎝
⎛
−
+
Us =
⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
−
+
Us =
⎟⎟
⎠
Vehicle tests: Engine running
⎞
⎜⎜
⎝
⎛
−
+
Us =
⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
−
+
Us =
⎟⎟
⎠
NOTE Most of the vehicle tests will be performed without the engine running, but with the ignition switched on,
therefore care must be taken to ensure that the battery is sufficiently well charged.
Component/module tests:
BW
at -6 dB
Step
Dwell
BW
at -6 dB
Step
Dwell
size
size
time
time
0,15 - 30
9 kHz
5 kHz
50 ms
9 kHz
5 kHz
1 s
9 kHz
5 kHz
50 ms
120 kHz
50 kHz
5 ms
120 kHz
50 kHz
1 s
120 kHz
50 kHz
5 ms
Does not
Does not
apply
120 kHz
50 kHz
5 ms
apply
apply
Does not
Does not
apply
120 kHz
50 kHz
5 ms
apply
apply
Does not
Does not
Does not
apply
9 kHz
5 kHz
5 ms
apply
apply
NOTE For emissions generated by brush commutator motors without an electronic control unit, the maximum step
size may be increased up to 5 times the bandwidth.
V for systems with 12 V nominal supply voltage
V for systems with 24 V nominal supply voltage
V for systems with 12 V nominal supply voltage
V for systems with 24 V nominal supply voltage

<!-- 第 21 页 -->
Unless otherwise stated in the test plan the values below shall be used.
⎞
⎜⎜
⎝
⎛
−
+
Us =
⎟⎟
⎠
⎞
⎜⎜
⎝
⎛
−
+
Us =
⎟⎟
⎠
Measurement of emissions received by an antenna on the same vehicle
5.1
Antenna measuring system
5.1.1
Type of antenna
Frequency
MHz
5.1.2
Measuring system requirements
5.1.2.1
Broadcast bands
5.1.2.1.1
AM broadcast:
Long wave (0,15 MHz to 0,3 MHz)
Medium wave (0,53 MHz to 1,8 MHz)
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
V for systems with 12 V nominal supply voltage
V for systems with 24 V nominal supply voltage
power supply is at least 6 dB lower than the limits specified in the test plan.
When specified in the test plan, a vehicle battery shall be connected in parallel with the power
supply.
An antenna of the type to be supplied with the vehicle shall be used as the measurement
antenna for the bands for which it is designed to be used for radio reception.
If no antenna is to be furnished with the vehicle (as is often the case with a mobile radio
system), the antenna types in Table 3 shall be used for the test. The antenna type and
location shall be included in the test plan.
If an active antenna is used, the noise floor of the measured signal at the radio antenna
connector may increase (see also the note in 5.3).
Table 3 – Antenna types
Antenna type
0,15 to 6,2
1 m monopole
26 to 54
Loaded quarter-wave monopole
68 to 1 000
Quarter-wave monopole
1 000 to 2 500
As recommended by the vehicle
manufacturer
For each band, the measurement shall be made with instrumentation which has the following
specified characteristics.

<!-- 第 22 页 -->
Short wave (5,9 MHz to 6,2 MHz)
The measuring system shall have the following characteristics:
–
output impedance of impedance matching equipment: 50 Ω resistive;
Gain   (dB)
fLow
fHigh
–
dynamic range: from the noise floor to the 1 dB compression point;
5.1.2.1.2
FM broadcast (76 MHz to 108 MHz) and TV broadcast
5.1.2.2
Mobile services (26 MHz to 2 500 MHz)
5.2
Method of measurement
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
–
gain: The gain (or attenuation) of the measurement antenna system shall be known
with an accuracy of ± 0,5 dB. The gain of the equipment shall remain within a 6 dB
envelope for each frequency band as shown in Figure 2. Verification shall be
performed in accordance with Annex B;
6 dB
envelope
IEC   364/08
Figure 2 – Example of gain curve
–
compression point: The 1 dB compression point shall occur at a sine wave voltage
level greater than 60 dB(μV);
–
measurement system noise floor: The noise floor of the combined equipment including
measuring instrument, impedance matching  equipment, and preamplifier (if used)
shall be at least 6 dB lower than the applicable limits;
–
input impedance: the impedance at the input of the matching network shall have a
resistance of at least 100 kΩ in parallel with a maximum capacitance of 10 pF.
Measurements shall be taken with a measuring instrument which has an input impedance of
50 Ω. If the standing wave ratio (SWR) is greater than 2:1 an input matching network shall be
used. Appropriate correction shall be made for any attenuation/gain of the matching unit.
The test procedure assumes a 50 Ω measuring instrument and a 50 Ω antenna in the
frequency range 26 MHz to 2 500 MHz. If a measuring instrument and an antenna with
differing impedances are used, an appropriate network and correction factor shall be used.
The disturbance voltage shall be measured at the receiver end of the antenna coaxial cable
using the ground contact of the connector as reference. The antenna connector shall be
grounded to the housing of the on-board radio. The radio housing shall be grounded to the

<!-- 第 23 页 -->
vehicle body using the production harness. A coaxial bulkhead connector shall be used for
connection to the measuring instrument outside the shielded room. See Figure 3. In the case
of an active vehicle antenna, which is fed by the radio via the antenna cable (phantom
network), a decoupling network similar to that used in the radio shall be installed at the
antenna connector to feed the active antenna from the vehicle supply voltage.
When making measurements in the AM broadcast bands (LW, MW, SW), the vehicle/matching
such as an isolation transformer, sheath-current suppressor, battery-powered measurement
instrumentation, fiber optics, etc. Appropriate correction shall be made for the insertion loss of
any isolation network. (See Annex C for an example of a sheath-current suppressor.)
NOTE The use of a high-quality coaxial cable e.g. double-shielded cable for connection to the measuring
instrument is recommended as well as the use of ferrite rings on the cable for suppression of surface currents.
Some vehicles may allow a receiver to be mounted in several locations (e.g. under the
instrument panel, under the seat, etc.). In these cases a test shall be carried out as specified
in the test plan for each receiver location.
When vehicle measurements are made without the engine running, the power supply of 4.5
shall be used, when needed, to maintain the system voltage within its required range.

<!-- 第 24 页 -->
1 000 min.
1 000 min.
1 000 min.
or
Detail view of
antenna interconnect
Key
Measuring instrument
ALSE
Bulkhead connector
Antenna (see 5.1)
Vehicle
Typical absorber material
Antenna coaxial cable
High-quality coaxial cable e.g. double-shielded (50 Ω)
Housing of on-board radio
Impedance matching unit (when required)
Modified coaxial "T" connector
AM broadcast band ground isolation network (when required)
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Dimensions in millimetres
1 000 min.
IEC   365/08
Figure 3 – Vehicle-radiated emissions – Example for test layout
(end view with monopole antenna)

<!-- 第 25 页 -->
5.3
Examples of limits for vehicle radiated disturbances
It is recommended for acceptable radio reception in a vehicle using typical radio receivers,
that the disturbance voltage at the end of the antenna cable should not exceed the values
shown in Table 4. Where different receivers are used or different coupling models for the
propagation of disturbances are valid, the limits may be changed and detailed in the vehicle
manufacturer’s own specification.
Table 4 – Example for limits of disturbance – Complete vehicle
Terminal disturbance voltage at receiver antenna terminal in dB (μV)
Service / Band a
Frequency
MHz
Peak
Quasi-peak
Average
BROADCAST
b
0,15 - 0,30
LW
b
0,53 - 1,8
MW
b
5,9 - 6,2
SW
b
76 - 108
FM
c
41 - 88
-
TV Band I
c
174 - 230
-
TV Band III
DAB III
171 - 245
-
c
468 -  944
-
TV Band IV/V
d
-
d
DTTV
470 - 770
DAB L band
1 447 – 1 494
-
SDARS
2 320 – 2 345
-
MOBILE SERVICES
CB  b
26 - 28
b
30 - 54
VHF
b
68 - 87
VHF
b
142 -175
VHF
b
380 - 512
Analogue UHF
f
300 - 330
-
RKE
f
420 - 450
-
RKE
b
820 - 960
Analogue UHF
GSM 800
860 - 895
-
EGSM/GSM 900
925 - 960
-
GPS L1 civil e
1 567 – 1 583
-
-
GSM 1800 (PCN)
1 803 – 1 882
-
GSM 1900
1 850 – 1 990
-
3G / IMT 2000
1 900 – 1 992
-
3G / IMT 2000
2 010 – 2 025
-
3G / IMT 2000
2 108 – 2 172
-
Bluetooth/802.11
2 400 – 2 500
-

<!-- 第 26 页 -->
a
LW: Long wave, MW: Medium wave, SW: Short wave (amplitude modulation, AM)
VHF: Very high frequency, UHF: Ultra high frequency (frequency modulation, FM)
DAB: Digital audio broadcasting, TV: Television, DTTV: Digital Terrestrial Television
RKE: Remote keyless entry, GPS: Global positioning system, GSM: Global system mobile
3G: Third generation
b
In this analogue service the peak and quasi-peak limits can be relaxed by 6 dB for short duration disturbances
(e.g. short duration PK (or QPK) limit =  PK (or QPK) limit + 6 dB).
c  Analogue TV only.
d
This limit is less stringent than the analogue limit and should only be applied where analogue TV is no longer in
use.
e
The bandwidth and frequency steps to be used for the GPS L1 civil band are respectively 9 kHz and 5 kHz
rather than the bandwidth and frequency steps defined in Table 1 and Table 2 for services above 30 MHz.
f
RKE limits are defined over a large frequency band. Any modification of the average limit around the operating
frequency due to sensitivity of RKE systems should be defined in the test plan.
NOTE 1 Stereo signals may be more susceptible to disturbance than monaural signals in the FM broadcast band.
This phenomenon has been factored into the FM (76 MHz to 108 MHz) limits.
NOTE 2 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements,
then applicable limits should be defined in the test plan.
Level dB   (μV/m)
1 567,42
1 568,42
1 569,42
1 570,42
1 571,42
1 572,42
1 573,42
1 574,42
Figure 4 – Average limit for radiated disturbances from vehicles GPS band
1 567,42 to 1 583,42 MHz
NOTE If an active antenna is used, the noise floor may increase. The additional noise floor depends on the type
of antenna and must be subtracted from the measured value to determine the real value of the disturbance using
the following formula (all terms in μV):
noise
Antenna
Measured
e
Disturbanc
real
U
U
U
−
=
- (1)
A relaxation of the limit because of the active antenna noise floor does not guarantee compliance. Subsequent
changes to the active antenna design may result in non-compliance. This topic remains under study.  Annex D
describes a method to determine the noise floor of an active antenna.
1 575,42
1 576,42
1 577,42
1 578,42
1 579,42
1 580,42
1 581,42
1 582,42
1 583,42
Frequency   (MHz)
IEC   366/08

<!-- 第 27 页 -->
Measurement of components and modules
6.1
Test equipment
6.1.1
Ground plane
The ground plane shall be defined as the top metallic surface of the test bench/table.
The ground plane shall be made of 0,5 mm thick (minimum) copper, brass, bronze or
galvanized steel.
The minimum size of the ground plane for conducted emissions shall be 1 000 mm × 400 mm.
The minimum width of the ground plane for radiated emissions shall be 1 000 mm. The
minimum length of the ground plane for radiated emissions shall be 2 000 mm, or underneath
the entire equipment plus 200 mm, whichever is larger.
The height of the ground plane (test bench) shall be (900 ± 100) mm above the floor.
The ground plane shall be bonded to the walls or the floor of the shielded enclosure such that
the d.c. resistance shall not exceed 2,5 mΩ. The distance from the edge of the ground strap
to the edge of the next strap shall not be greater than 300 mm. The maximum length to width
ratio for the ground straps shall be 7:1.
NOTE Because of resonances of the ground plane the location, width and length of the bond straps may influence
the measurement results. A sufficient number of low inductive bond straps are necessary to ensure a low
impedance connection to the shielded room.
6.1.2
Power supply and AN
For the tests defined in 6.2, 6.3, 6.4, 6.5 and 6.6, each EUT power supply lead shall be
connected to the power supply through an artificial network. For the TEM cell emissions tests
of 6.5, an AN with a coaxial connector will facilitate connection to the TEM cell EUT power
connector. The AN shall have a nominal 5 μH inductance. The impedance characteristics and
a suggested schematic are shown in Annex E.
Power supply is assumed to be negative ground. If the EUT utilizes a positive ground then the
test set-ups shown in the Figures need to be adapted accordingly. Depending on the intended
EUT installation in the vehicle:
–
EUT remotely grounded (vehicle power return line longer than 200 mm): two artificial
networks are required, one for the positive supply line and one for the power return line.
–
EUT locally grounded (vehicle power return line 200 mm or shorter): one artificial network
is required, for the positive supply.
The AN(s) shall be mounted directly on the ground plane. The case(s) of the AN(s) shall be
bonded to the ground plane.
The power supply return shall be connected to the ground plane (between the power supply
and the AN(s)).
The measuring port of the AN not connected to the measuring instrument shall be terminated with a
50 Ω load.
6.1.3
Load simulator
The load simulator includes sensors and actuators, and terminates the test harness
connected to the EUT.

<!-- 第 28 页 -->
6.1.4
Signal/control line filters
Attenuation   (dB)
6.2
Conducted emissions from components/modules – Voltage method
6.2.1
General
6.2.2
Ground plane arrangement
6.2.2.1
Test set-up
6.2.2.1.1
Location of the EUT
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
To ensure sufficient reproducibility the same termination must be used for each measurement
either by using special termination equipment (e.g. artificial networks, filters) – located at the
RF boundary – or by using the same load simulator.
In the TEM cell test method using the coaxial connectors for EUT leads each lead shall pass
through a filter which has impedance characteristics similar to that of the AN defined above.
The attenuation of the filters shall be specified for the whole frequency range of the intended
component/module test (see 6.2 to 6.6) according to the requirements shown in Figure 5. The
minimum attenuation shall be more than 40 dB from 30 MHz up to the upper cut-off frequency
(fc), which depends on the intended test method. Figure 5 shows e.g. an upper cut-off
frequency (fc) of the chosen test method of 400 MHz.
NOTE Other low pass RF filter configurations may be used if the filter characteristics are not applicable to special
wanted signals of the EUT's inputs or outputs (e.g. high speed network data interfaces). The filters shall be
specified in the test plan.
1 000
Frequency fc  (MHz)
IEC   367/08
Figure 5 – Example for the required minimum attenuation
of the signal / control line filters
Voltage measurements are able to characterize the emissions on single leads only. The test
antenna structures on the printed board of electronic components or to characterize the
efficiency of shielding. Therefore, voltage measurements are not able to characterize the
complete EUT emission. At lower frequencies (e.g. in the AM-bands) voltage measurements
usually ensure more dynamic range than radiated measurements.
The EUT shall be placed on a non-conductive, low relative permittivity material (εr ≤ 1,4), at
(50 ± 5) mm above the ground plane.

<!-- 第 29 页 -->
The case of the EUT shall not be grounded to the ground plane unless it is intended to
simulate the actual vehicle configuration.
All sides of the EUT shall be at least 100 mm from the edge of the ground plane. In the case
of a grounded EUT, the ground connection point shall also have a minimum distance of
100 mm from the edge of the ground plane.
6.2.2.1.2
Location of the test harness
The power supply line(s) between the connector of the AN(s) and the connector(s) of the EUT
(lp) shall have a standard length of (
)
200 +
mm.
The harness shall be placed in a straight line on a non-conductive, low relative permittivity
material (εr ≤ 1,4), at (50 ± 5) mm above the ground plane.
If, for particular EUTs (multi-connectors, special connectors, etc.), this standard length for the
power supply line(s) cannot be met, the minimum necessary length to be used shall be
defined in the test plan. This minimum length shall satisfy the requirement of fc ≥ 108 MHz, or
the measurements shall be limited to fc.
The following equation defines fc :
fc ≈ 30 / lP
- (2)
where
fc is the frequency in MHz
lp is the length in m
(This equation is based on lp ≤ λmin / 10).
To minimize the coupling between power and input/output leads, the space between those
lead types shall be maximized (≥ 200 mm from or perpendicular to the power supply lines
connecting the AN(s) and the EUT).
The total length of the test harness (excluding power lines) shall not exceed 2 m. The wiring
type is defined by the actual system application and requirement.
All leads and cables shall be located at a minimum distance of 100 mm from the edge of the
ground plane.
6.2.2.1.3
Location of the load simulator
Preferably, the load simulator shall be placed directly on the ground plane. If the load
simulator has a metallic case, this case shall be bonded to the ground plane.
NOTE Alternatively, the load simulator may be located adjacent to the ground plane (with the case of the load
simulator bonded to the ground plane) or outside of the test chamber, provided the test harness from the EUT
passes through an RF boundary bonded to the ground plane.
When the load simulator is located on the ground plane, the d.c. power supply lines of the
load simulator shall be connected directly to the power supply and not through the AN(s).
6.2.2.2
Test procedure
The general arrangement of the disturbance source (EUT), connecting harnesses, etc.
represents a standardised test condition. Any deviations from the standard test harness
length, etc. shall be agreed upon prior to testing and recorded in the test report.

<!-- 第 30 页 -->
The EUT shall be made to operate under typical loading and other conditions as in the vehicle
such that the maximum emission state occurs. These operating conditions must be clearly
defined in the test plan to ensure supplier and customer perform identical tests.
–
For EUT remotely grounded (vehicle power return line longer than 200 mm), the voltage
measurements shall be made on each lead (supply and return) relative to the ground
plane.
–
For EUT locally grounded (vehicle power return line 200 mm or shorter), voltage measure-
ments on power supply leads shall be made relative to the ground plane.
–
Generators/alternators shall be loaded with a battery and parallel resistor combination,
and connected to the artificial network in the manner shown in Figure 8. The load current,
operating speed, harness length and other conditions shall be defined in the test plan.
The conducted emissions on power lines are measured successively on positive power supply
and power return by connecting the measuring instrument on the measuring port of the
related AN, the measuring port of the AN in the other supply lines being terminated with a
50 Ω load.
NOTE For EUT's with multiple positive power supply connections and/or multiple power return connections, the
measurements (on power supply and on power return) may be performed with all power supply connections tied
together at the AN and all power return connections tied together at the other AN.
The configuration shall be defined in the test plan.
For voltage measurements, the arrangement of the EUT and measuring equipment shall be as
shown in Figures , 6, 7 8 and 9 depending on the intended EUT installation in the vehicle.

<!-- 第 31 页 -->
Side view
+
–
Top view
+
_
Key
Power supply (may be placed on the ground plane)
Artificial network
EUT (housing grounded if required in test plan)
Load simulator (metallic casing grounded if required in test
plan)
Ground plane
Power supply lines
NOTE The EUT housing ground lead, when required in the test plan, should not be longer than 150 mm.
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
Dimensions in millimetres – not to scale
50 ± 5
+200
100 min.
IEC   368/08
Low relative permittivity support (εr≤ 1,4)
High-quality coaxial cable e.g. double-shielded (50 Ω)
Measuring instrument
10 Shielded enclosure
11 50 Ω load
12 Bulkhead connector
Figure 6 – Conducted emissions – EUT with power return line remotely grounded.

<!-- 第 32 页 -->
Side view
+
_
Top view
+
_
Key
Power supply (may be placed on the ground plane)
Artificial network
EUT (housing grounded if required in test plan)
Load simulator (metallic casing grounded if required
in test plan)
Ground plane
Power supply line
NOTE The EUT housing ground lead, when required in the test plan, should not be longer than 150 mm.
Figure 7 – Conducted emissions – EUT with power return line locally grounded
Dimensions in millimetres – not to scale
50 ± 5
+200
100 min.
IEC   369/08
Low relative permittivity support (εr  ≤ 1,4)
High-quality coaxial cable e.g. double-shielded (50 Ω)
Measuring instrument
10 Shielded enclosure
12 Bulkhead connector

<!-- 第 33 页 -->
Dimensions in millimetres – not to scale
Side view
+
–
Top view
+
–
Key
Battery (may be placed on the ground plane)
Artificial network
EUT
Load simulator (metallic casing grounded if
required in test plan)
Ground plane
Power supply lines
Low relative permittivity support (εr  ≤ 1,4) –
typically not installed
NOTE The EUT housing ground lead, when required in the test plan, should not be longer than 150 mm.
Figure 8 – Conducted emissions – Test layout for alternators and generators
50 ± 5
+200
100 min.
IEC   370/08
High-quality coaxial cable e.g. double-shielded (50 Ω)
9  Measuring instrument
10  Shielded enclosure
11  50 Ω load
12  Bulkhead connector
13 Indicator lamp/control resistor (if applicable)
14 Motor (Air/Low Emissions)
15 Non-conductive belt/coupler
16 Load resistor

<!-- 第 34 页 -->
–
+
+
–
+
Key
Power supply (may be placed on the ground plane)
Artificial network
Pencil coil
ECU simulator (metallic casing grounded if required
in test plan)
Ground plane
Low relative permittivity support (εr  ≤ 1,4)
High-quality coaxial cable e.g. double-shielded (50 Ω)
9  Measuring instrument
10  Shielded enclosure
NOTE The pencil coil housing ground lead, when required in the test plan, should not be longer than 150 mm.
Figure 9 – Conducted emissions – Test layout for ignition system components
Dimensions in millimetres – not to scale
200 ± 10
–
100 min.
IEC   371/08
11  50 Ω load
12  Bulkhead connector
15 Optical fibre converter
16 1 000 µF capacitor
17 Engine simulator
18  Battery
19 Signal line

<!-- 第 35 页 -->
6.2.3
Limits for conducted disturbances from components/modules – Voltage method
The level class to be used (as a function of the frequency band) shall be agreed upon
between the vehicle manufacturer and the component supplier. When using the provided
limits, no correction factors for the AN shall be used.
NOTE It is recommended for acceptable radio reception in a vehicle that the conducted noise should not exceed
the values shown in Tables 5 and 6,  peak and average or quasi-peak and average, respectively. Since the
mounting location, vehicle body construction and harness design can affect the coupling of radio disturbances to
the on-board radio, multiple limit levels are defined.
Table 5 – Examples of quasi-peak or peak
limits for conducted disturbances –
Voltage method
Frequency
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
MHz
Peak
Quasi-
peak
Peak
Quasi-
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
-
-
-
-
-
TV Band III
174 - 230
DAB III
171 - 245
TV Band IV/V
468 -  944
DTTV
470 - 770
DAB L band
1447 - 1494
SDARS
2320 - 2345
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
RKE
420 - 450
Analogue UHF
820 - 960
GSM 800
860 - 895
EGSM/GSM 900
925 - 960
GPS L1 civil
1567 - 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
3G / IMT 2000
1900 - 1992
3G / IMT 2000
2010 - 2025
3G / IMT 2000
2108 - 2172
Bluetooth/802.11
2400 - 2500
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.
Levels in dB(μV)
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Conducted emission – Voltage method
Not applicable
Conducted emission – Voltage method
Not applicable

<!-- 第 36 页 -->
Frequency
MHz
TV Band III
174 - 230
DAB III
171 - 245
TV Band IV/V
468 -  944
DTTV
470 - 770
DAB L band
1447 - 1494
SDARS
2320 - 2345
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
RKE
420 - 450
Analogue UHF
820 - 960
GSM 800
860 - 895
EGSM/GSM 900
925 - 960
GPS L1 civil
1567 - 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
3G / IMT 2000
1900 - 1992
3G / IMT 2000
2010 - 2025
3G / IMT 2000
2108 - 2172
Bluetooth/802.11
2400 - 2500
6.3
Conducted emissions from components/modules – current probe method
6.3.1
Test set-up
6.3.1.1
Location of the EUT
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Table 6 – Examples of average limits for conducted disturbances – Voltage method
Levels in dB(μV)
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
AVG
AVG
AVG
AVG
AVG
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
Conducted emission – Voltage method
Not applicable
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
Conducted emission – Voltage method
Not applicable
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.
The EUT shall be placed on a non-conductive, low relative permittivity material (εr ≤ 1,4), at
(50 ± 5) mm above the ground plane.

<!-- 第 37 页 -->
The case of the EUT shall not be grounded to the ground plane unless it is intended to
simulate the actual vehicle configuration.
The EUT shall be at least 100 mm from the edge of the ground plane. The test plan shall
simulate the actual vehicle configuration and shall specify: remote versus local grounding, the
use of an insulating spacer, and the electrical connection of the EUT case to the ground
plane.
The measuring equipment shall be as shown in Figure 10.
6.3.1.2
Location of the test harness
The test harness shall be (
)
+
mm long (or as agreed upon in the test plan), and shall
be placed on a non-conductive, low relative permittivity material (εr ≤ 1,4), positioned
(50 ± 5) mm above the ground plane. The test harness wires shall be nominally parallel and
adjacent unless otherwise defined in the test plan.
6.3.2
Test procedure
The probe (see CISPR 16-1-2) shall be mounted around the complete harness (including all
wires).
Measure the emissions with the probe positioned 50 mm and 750 mm from the EUT.
In most cases, the position of maximum emission will be as close to the EUT connector as
possible. Where the EUT is equipped with a metal shell connector, the probe shall be
clamped to the cable immediately adjacent to the connector shell, but not around the
connector shell itself. The EUT and all parts of the test set-up shall be a minimum of 100 mm
from the edge of the ground plane.
NOTE Some additional measurements may be defined in the test plan with only the positive supply wire in the
probe and/or only the negative supply wire in the probe. For these test configurations limits should be defined in
the test plan.

<!-- 第 38 页 -->
+
-
20 min.
2 500 min.
Power supply
Artificial network
EUT (connected to ground if specified in the test plan)
Load simulator (placement and ground connection
according to ISO 11452-4)
Ground plane
Wiring harness
Low relative permittivity support (εr  ≤ 1,4)
High-quality coaxial cable e.g. double-shielded (50 Ω)
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Dimensions in millimetres – not to scale
500 min.
min.
1 700 +300
50 ± 5
d
900 ± 100
IEC   372/08
Key
9  Measuring instrument
10  Shielded enclosure
12  Bulkhead connector
13 Optical fibers
14 Current probe (represented at 2 positions)
15 Stimulation and monitoring system
d
The distance from the EUT to the closest probe position
Figure 10 – Conducted emissions – Example of test layout
for current probe measurements

<!-- 第 39 页 -->
6.3.3
Limits for conducted disturbances from components/modules – Current probe
method
The level class to be used (as a function of the frequency band) shall be agreed upon
between the vehicle manufacturer and the component supplier.
NOTE It is recommended for acceptable radio reception in a vehicle that the conducted noise should not exceed
the values shown in Tables 7 and 8, peak and average or quasi-peak and average limits, respectively. Since the
mounting location, vehicle body construction and harness design can affect the coupling of radio disturbances to
the on-board radio, multiple limit levels are defined.
Table 7 – Examples of quasi-peak and peak limits for conducted disturbances –
Control/signal lines – Current probe method
Frequency
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
MHz
Peak
Quasi-
peak
Peak
Quasi
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
-
-
-
-
-
TV Band III
174 - 230
DAB III
171 - 245
TV Band IV/V
468 -  944
DTTV
470 - 770
DAB L band
1447 - 1494
SDARS
2320 - 2345
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
RKE
420 - 450
Analogue UHF
820 - 960
GSM 800
860 - 895
EGSM/GSM 900
925 - 960
GPS L1 civil
1567 - 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
3G / IMT 2000
1900 - 1992
3G / IMT 2000
2010 - 2025
3G / IMT 2000
2108 - 2172
Bluetooth/802.11
2400 - 2500
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.
Levels in dB(μA)
-peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Conducted emission – control/signal lines
Not applicable
Conducted emission – control/signal lines
Not applicable

<!-- 第 40 页 -->
Service / Band
Frequency
MHz
TV Band III
174 - 230
DAB III
171 - 245
TV Band IV/V
468 -  944
DTTV
470 - 770
DAB L band
1447 - 1494
SDARS
2320 - 2345
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
RKE
420 - 450
Analogue UHF
820 - 960
GSM 800
860 - 895
EGSM/GSM 900
925 - 960
GPS L1 civil
1567 – 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
3G
1900 - 1992
3G
2010 - 2025
3G
2108 - 2172
Bluetooth/802.11
2400 - 2500
6.4
Radiated emissions from components/modules - ALSE method
6.4.1
General
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Table 8 – Examples of average limits for conducted disturbances –
Control/signal lines – Current probe method
Levels in dB(μA)
Class 1
Class 2
Class 3
Class 4
Class 5
AVG
AVG
AVG
AVG
AVG
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
Conducted emission –  control/signal lines
Not applicable
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
Conducted emission – control/signal lines
Not applicable
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.
Measurements of radiated field strength shall be made in an ALSE to eliminate the high levels
of extraneous disturbance from electrical equipment and broadcasting stations.
NOTE 1 Conducted emissions will contribute to the radiated emissions measurements because of radiation from
the wiring in the test set-up. Therefore, it is advisable to establish conformance with the conducted emissions
requirements before performing the radiated emissions test.

<!-- 第 41 页 -->
NOTE 2 Disturbance to the vehicle on-board receiver can be caused by direct radiation from one or more leads in
the vehicle wiring harness. This coupling mode to the vehicle receiver affects both the type of testing and the
means of reducing the disturbance at the source.
NOTE 3 Vehicle components which are not effectively grounded to the vehicle by short ground leads, or which
have several harness leads carrying the disturbance voltage, will have radiated emissions that do not correlate well
with its conducted emissions. This has been shown to give better correlation with the complete vehicle test for
components installed in this way.
Examples of component installations for which this test is applicable include, but are not
limited to:
–
electronic control systems containing microprocessors;
–
two speed wiper motors with negative supply switching;
–
suspension control systems with strut-mounted actuator motors;
–
engine cooling and heater blower motors mounted in plastic or other insulated housings.
6.4.2
Test set-up
For radiated emissions measurements, the arrangement of the EUT, test harness, load
simulator and measuring equipment shall be equivalent to the examples shown in Figures 12
to 15.
6.4.2.1
Antenna systems
Measurements shall be made using linearly polarised electric field antennas that have a
nominal 50 Ω output impedance.
NOTE 1 To improve consistency of results between laboratories, the following antennas are recommended:
- a)
0,15 MHz to 30 MHz
1 m vertical monopole (where this is not 50 Ω, a suitable antenna matching
unit must be used);
- b)
30 MHz to 300 MHz
a biconical antenna;
- c)
200 MHz to 1 000 MHz
a log-periodic antenna;
- d)
1 000 MHz to 2 500 MHz
a horn or log-periodic antenna.
The method to be used for characterization of the vertical monopole (rod) antenna is given in
CISPR 16-1-4.
NOTE 2 Use the 1 m method in SAE ARP 958.1 Rev D February 2003 for determining biconical, log-periodic and
horn antenna factors.
NOTE 3 Biconical antennas usually have a SWR of up to 10:1 in the frequency range of 30 MHz to 80 MHz.
Therefore an additional measurement error may occur when the receiver input impedance differs from 50 Ω. The
use of an attenuator (3 dB minimum) at the receiver's input or the input of an additional preamplifier (if possible)
will keep this additional error low.
6.4.2.2
Antenna matching unit for monopole antenna
Correct impedance matching between the antenna and the measuring instrument of 50 Ω
shall be maintained in the frequency ranges selected for the test. There shall be a maximum
SWR of 2:1 at the output port of the matching unit. Appropriate correction shall be made for
any attenuation/gain of the antenna system from the antenna to the receiver.
NOTE Care should be taken to ensure that input voltages do not exceed the pulse input rating of the unit or
overloading may occur. This is particularly important when active matching units are used.
6.4.2.3
Location of the EUT
The EUT shall be placed on a non-conductive, low relative permittivity material (εr ≤ 1,4), at
(50 ± 5) mm above the ground plane.

<!-- 第 42 页 -->
The case of the EUT shall not be grounded to the ground plane unless it is intended to
simulate the actual vehicle configuration.
The side of the EUT, which is nearest to the front edge of the ground plane, shall be located
at a distance of (200 ± 10) mm from the front edge of the ground plane.
6.4.2.4
Test harness and location
The total length of the test harness between the EUT and the load simulator (or the
RF boundary) shall not exceed 2 000 mm (or as defined in the test plan). The wiring type is
defined by the actual system application and requirement.
The test harness shall be placed on a non-conductive, low relative permittivity material
(εr ≤ 1,4), at (50 ± 5) mm above the ground plane.
The length of test harness parallel to the front of the ground plane shall be (1 500 ± 75) mm.
The long segment of test harness shall be located parallel to the edge of the ground plane
facing the antenna at a distance of (100 ± 10) mm from the edge. Location of the EUT and
load simulator requires that the harness bend angle shall be (
)
+
degrees as shown in
Figure 11.
IEC   373/08
Key
EUT
Test harness
Load simulator
Angle (
)
+
degrees
Figure 11 – Test harness bending requirements
6.4.2.5
Location of the load simulator
Preferably, the load simulator shall be placed directly on the ground plane. If the load
simulator has a metallic case, this case shall be bonded to the ground plane.
Alternatively, the load simulator may be located adjacent to the ground plane (with the case of
the load simulator bonded to the ground plane) or outside of the test chamber, provided the
test harness from the EUT passes through an RF boundary bonded to the ground plane.
When the load simulator is located on the ground plane, the d.c. power supply lines of the
load simulator shall be connected through the AN(s).

<!-- 第 43 页 -->
6.4.2.6
Location of the measuring antenna
The phase centre of the measuring antenna shall be (100 ± 10) mm above the ground plane
for the biconical, log-periodic and horn antennas.
The height of the counterpoise of the rod antenna shall be (+10 / –20) mm relative to the
ground plane and shall be bonded to the ground plane.
For radiated emissions tests, the shielded enclosure shall be of sufficient size to ensure that
neither the EUT nor the test antenna shall be closer than 1 m from the walls or ceiling, or to
the nearest surface of the absorber material used thereon. No part of any antenna radiating
element shall be closer than 250 mm to the floor.
The distance between the longitudinal part (1 500 mm length) of the wiring harness and the
reference point of the antenna shall be (1 000 ± 10) mm.
The reference point of the antenna is defined as:
–
the vertical monopole element for rod antennas,
–
the phase centre (mid-point) for biconical antennas,
–
the tip for antennas with log-periodic elements (including biconilog antennas),
–
the front aperture for horn antennas.
Each antenna (excluding the rod antenna) shall be calibrated for this reference point for a
1 000 mm measuring distance.
NOTE 1 The rod antenna is excluded because calibration is achieved by using the method defined in
CISPR 16-1-4.
The phase centre of the antenna shall be in line with the centre of the longitudinal part of the
wiring harness for frequencies up to 1 000 MHz.
The phase center of the antenna for frequencies above 1 000 MHz shall be in line with the
EUT.
NOTE 2 The users of this standard should be aware that antenna manufacturers may give:
–
Independent antenna factors for horizontal and vertical polarisations: in this case the appropriate antenna
factor should be used for measurement in each polarisation.
–
A single antenna factor: in this case this antenna factor should be used for measurements in both polarisations.
6.4.3
Test procedure
The general arrangement of the disturbance source and connecting harnesses, etc.
represents a standardised test condition. Any deviations from the standard test harness
length, etc. shall be agreed upon prior to testing and recorded in the test report.
The EUT shall be made to operate under typical loading and other conditions as in the vehicle
such that the maximum emission state occurs. These operating conditions shall be clearly
defined in the test plan to ensure supplier and customer can perform identical tests. The
orientation(s) of the EUT for radiated emission measurements shall be defined in the test
plan.
From 150 kHz to 30 MHz measurements shall be performed in vertical polarisation only.
From 30 MHz to 2 500 MHz measurements shall be performed in vertical and horizontal
polarisations.

<!-- 第 44 页 -->
For radiated emission measurements, the arrangement of the EUT and measuring equipment
shall be functionally equivalent to the examples shown in Figures 12 to 15.

<!-- 第 45 页 -->
Dimensions in millimetres – not to scale
Top view
(vertical polarisation)
1 000 min.
+
–
h
Front view
Side view
Key
EUT (grounded locally if required in test plan)
Test harness
Load simulator (placement and ground connection
according to 6.4.2.5)
Power supply (location optional)
Artificial network (AN)
Ground plane (bonded to shielded enclosure)
Low relative permittivity support (εr ≤ 1,4)
Rod antenna with counterpoise
(dimensions: 600 mm by 600 mm typical)
h
= (900 ± 100) mm
hcp = h + (+10 / -20) mm
Figure 12 – Example of test set-up – rod antenna
200 ± 10
1 000 min.
1 500 ± 75
1 000 ± 10
100 ± 10
See 6.1.1
Vertical
polarisation
50 ± 5
hcp
IEC   374/08
9  Grounding connection (full width bond between
counterpoise and ground plane)
10 High-quality coaxial cable e.g. double-shielded (50 Ω)
11 Bulkhead connector
12 Measuring instrument
13 RF absorber material
14 Antenna matching unit (the preferred location is
below the counterpoise; if above the counterpoise
then the base of the antenna rod shall be at the
height of the ground plane)
15  Stimulation and monitoring system

<!-- 第 46 页 -->
Top view
(horizontal polarisation)
1 000 min.
+
–
Front view
Side view
EUT (grounded locally if required in test plan)
Test harness
Load simulator (placement and ground connection
according to 6.4.2.5)
Power supply (location optional)
Artificial network (AN)
Ground plane (bonded to shielded enclosure)
Low relative permittivity support (εr  ≤ 1,4)
Figure 13 – Example of test set-up – biconical antenna
Dimensions in millimetres – not to scale
200 ± 10
1 500 ± 75
1 000 min.
1 000 ± 10
100 ± 10
See 6.1.1
Vertical
polarisation
100 ± 10
50 ± 5
900 ± 100
250 min.
IEC   375/08
Key
Biconical antenna
10 High-quality coaxial cable e.g. double-shielded (50 Ω)
11 Bulkhead connector
12  Measuring instrument
13 RF absorber material
14  Stimulation and monitoring system

<!-- 第 47 页 -->
Dimensions in millimetres – not to scale
Top view
(horizontal polarisation)
1 000 min.
+
−
See 6.1.1
EUT (grounded locally if required in test plan)
Test harness
3  Load simulator (placement and ground connection
according to 6.4.2.5)
Power supply (location optional)
Artificial network (AN)
Ground plane (bonded to shielded enclosure)
Low relative permittivity support (εr  ≤ 1,4)
Figure 14 – Example of test set-up – log-periodic antenna
200 ± 10
1 500 ± 75
1 000 min.
1 000 ± 10
100 ± 10
Vertical
polarisation
100 ± 10
50 ± 5
900 ± 100
250 min.
Front view
Side view
IEC   376/08
Key
Log-periodic antenna
10 High-quality coaxial cable e.g. double-shielded (50 Ω)
11 Bulkhead connector
12  Measuring instrument
13 RF absorber material
14  Stimulation and monitoring system

<!-- 第 48 页 -->
Top view
(horizontal polarisation)
1 000 min.
+
−
See 6.1.1
Key
EUT (grounded locally if required in test plan)
Test harness
3  Load simulator (placement and ground connection
according to 6.4.2.5)
Power supply (location optional)
Artificial network (AN)
Ground plane (bonded to shielded enclosure)
Low relative permittivity support (εr  ≤ 1,4)
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Dimensions in millimetres – not to scale
200 ± 10
1 000 min.
1 500 ± 75
1 000 ± 10
100 ± 10
Vertical
polarisation
100 ± 10
50 ± 5
900 ± 100
250 min.
Front view
Side view
IEC   377/08
Horn antenna
10 High-quality coaxial cable e.g. double-shielded (50 Ω)
11 Bulkhead connector
12  Measuring instrument
13 RF absorber material
14  Stimulation and monitoring system
Figure 15 – Example of test set-up – above 1 GHz

<!-- 第 49 页 -->
6.4.4
Limits for radiated disturbances from components/modules – ALSE method
The level class to be used (as a function of the frequency band) shall be agreed upon
between the vehicle manufacturer and the component supplier.
NOTE It is recommended for acceptable radio reception in a vehicle that the radiated noise should not exceed the
values shown in Tables 9 and 10, peak and average or quasi-peak and average limits, respectively. Since the
mounting location, vehicle body construction and harness design can affect the coupling of radio disturbances to
the on-board radio, multiple limit levels are defined. For the GPS band a specific limit characteristic is
recommended. This is shown in Figure 16.
Table 9 – Examples of quasi-peak or peak limits for radiated disturbances – ALSE
Levels in dB(μV/m)
Frequency
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
MHz
Peak
Quasi-
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
-
-
-
-
-
TV Band III
174 - 230
-
-
-
-
-
DAB III
171 - 245
-
-
-
-
-
TV Band IV/
468 -  944
-
-
-
-
-
DTTV
470 - 770
-
-
-
-
-
DAB L band
1447 - 1494
-
-
-
-
-
SDARS
2320 - 2345
-
-
-
-
-
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
-
-
-
-
-
RKE
420 - 450
-
-
-
-
-
Analogue UHF
820 - 960
GSM 800
860 - 895
-
-
-
-
-
EGSM/GSM 900
925 - 960
-
-
-
-
-
GPS L1 civil
1567 - 1583
-
-
-
-
-
-
-
-
-
-
GSM 1800 (PCN)
1803 - 1882
-
-
-
-
-
GSM 1900
1850 - 1990
-
-
-
-
-
3G / IMT 2000
1900 - 1992
-
-
-
-
-
3G / IMT 2000
2010 - 2025
-
-
-
-
-
3G / IMT 2000
2108 - 2172
-
-
-
-
-
Bluetooth/802.11
2400 - 2500
-
-
-
-
-
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2.  If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.

<!-- 第 50 页 -->
Table 10 – Examples of average limits for radiated disturbances – ALSE
Levels in dB(μV/m)
Frequency
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
MHz
AVG
AVG
AVG
AVG
AVG
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
TV Band III
174 - 230
DAB III
171 - 245
TV Band IV/V
468 -  944
DTTV
470 - 770
DAB L band
1447 - 1494
SDARS
2320 - 2345
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
RKE
420 - 450
Analogue UHF
820 - 960
GSM 800
860 - 895
EGSM/GSM 900
925 - 960
GPS L1 civil
1567 - 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
3G / IMT 2000
1900 - 1992
3G / IMT 2000
2010 - 2025
3G / IMT 2000
2108 - 2172
Bluetooth/802.11
2400 - 2500
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.

<!-- 第 51 页 -->
Level dB   (μV/m)
1 567,42
1 568,42
1 569,42
1 570,42
1 571,42
1 572,42
1 573,42
1 574,42
Figure 16 – Example of average limit for radiated disturbances from components GPS
band 1 567,42 to 1 583,42 MHz – Class 5
6.5
Radiated emissions from components/modules – TEM cell method
6.5.1
General
Measurements of radiated field strength shall be made in a shielded enclosure to eliminate
the high levels of extraneous disturbance from electrical equipment and radiated fields from
nearby broadcast and other radio transmitters. The TEM cell works as a shielded enclosure.
An example of a TEM cell is shown in Figure 17. Information relating to the size and
construction of a TEM cell for component measurement is given in Annex F.
1 575,42
1 576,42
1 577,42
1 578,42
1 579,42
1 580,42
1 581,42
1 582,42
1 583,42
Frequency   (MHz)
IEC   378/08

<!-- 第 52 页 -->
Key
Outer shield
Septum (inner conductor)
Access door
Connector panel (optional)
Coaxial connectors
EUT
Low relative permittivity support (εr ≤ 1,4)
Artificial harness
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
IEC   379/08
NOTE The connectors on the connector panel should be coaxial RF connectors if the RF boundary extends
outside of the TEM cell.
Figure 17 – TEM cell (example)
The upper frequency limit of this test method is a direct function of the TEM cell dimensions,
the dimensions of the components/module (arrangement included), and the RF filter
characteristic. Measurements shall not be made near the TEM cell resonance frequencies.
A TEM cell is recommended for testing automotive electronic systems in the frequency range
from 150 kHz to 200 MHz. The TEM cells boxed in Annex F, Table F.1, are typical of those
used in automotive work.
In order to achieve reproducible test results the EUT and the test harness shall be placed in
the TEM cell in the same position for each repeated measurement.
For the purpose of this test, the septum of the TEM cell functions in a similar way to a
receiving antenna.

<!-- 第 53 页 -->
6.5.2
Test set-up
6.5.2.1
Set-up with major field coupling to the wiring harness
Key
EUT
Low relative permittivity support (εr ≤ 1,4)
3  Printed circuit board or wiring harness
Connector
5  Coaxial connectors
Connector panel (optional)
TEM cell wall
RF coaxial cables
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
The TEM cell shall have a connector panel connected as close as possible to a plug
connector (see Figures 18 and 19).
IEC   380/08
NOTE All leads to the EUT shall pass through an RF boundary. The RF boundary is either at the wall of the TEM
cell or extended through RF coaxial cable (8) and coaxial connectors (5). The boundary is terminated by RF-filters
which can be connected inside the connector panel (6) or directly outside to the coaxial connectors (5). The cables
in the connector panel should be coaxial if the RF-filters are connected to the coaxial connectors (5).
Figure 18 – Example of arrangement of leads in the TEM cell
and to the connector panel

<!-- 第 54 页 -->
IEC   381/08
Key
EUT
Low relative permittivity support (εr ≤ 1,4)
Printed circuit board (no ground plane) or wiring harness, not shielded
Connector
Coaxial connectors
Connector panel (optional)
TEM cell wall
Cables
Septum
b
is the TEM cell height (see Annex F)
6.5.2.2
Set-up with major field coupling to the EUT
6.5.3
Test procedure
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
b/6 min.
b/6 max.
b/6
b/24
NOTE The connectors on the connector panel should be coaxial RF connectors if the RF boundary extends
outside of the TEM cell.
Figure 19 – Example of the arrangement of the connectors,
the lead frame and the dielectric support
All supply and signal leads from the EUT are directly connected to the artificial harness
(e.g. a lead frame). The plugs at the connector panel which are not required shall be sealed
so that they are RF-tight.
The connection of the positive power lead shall be through the AN (see 6.1.2), direct at the
connector panel.
It is not permitted to ground the EUT directly to the TEM cell floor. The grounding shall be
done at the connector panel.
The test set-up is similar to the method shown above, except that the leads to the EUT are
positioned and shielded to minimise electromagnetic radiation from the leads. This is
accomplished by positioning the leads flat across the bottom of the TEM cell and bringing
them vertically to the EUT. The use of a sealed battery and shielded wiring in the TEM cell
will further reduce the electromagnetic radiation from power and signal leads. To minimise the
radiation from the wiring further, shielding foil tape can be applied over the leads.
An example of the TEM cell method test layout is given in Figure 20. The general
arrangement of the EUT, the harness, the filter system at the TEM cell's wall, etc., represent a

<!-- 第 55 页 -->
Measuring instrument
TEM cell
EUT
AN (see 6.1.2)
Power supply
50 Ω termination resistor
Low relative permittivity support (εr ≤ 1,4)
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
standardised test condition. Any deviations from the standard test configuration shall be
agreed upon prior to testing and recorded in the test report.
IEC   382/08
Key
Figure 20 – Example of the TEM cell method test layout
The EUT shall be supported b/6 (see Figure 19) above the TEM cell floor by non-conductive,
low relative permittivity material (εr ≤ 1,4) in the allowed working region. The length of the
artificial harness (e.g. a lead frame) shall be 450 +/– 45 mm and positioned as shown in
Figures 18 and 19.
The wiring arrangement of the artificial harness, the design and the overall height of the
EUT’s connector constitute electrical coupling loops and dipoles which have influence on the
test results. All connections between the plug and contacts of the EUT’s (multipole) connector
and the artificial harness shall be as short as possible. Repeat measurements shall be
performed using the same arrangement of the artificial harness, the same overall height of the
EUT’s connector and the same pin assignment on both connectors. Care shall be taken, if the
size of the EUT and the allowed working region is nearly the same. In such a case, special
care should be taken to define and document the test layout in the test plan.
The EUT shall be installed to operate under typical loading and other conditions in the vehicle
in such a way that the maximum emission state occurs. These operating conditions must be
defined in the test plan to ensure supplier and customer can perform identical tests.
NOTE Different orthogonal orientations of the EUT could lead to different levels of measured electromagnetic
energy.
The positive supply line shall have an RF filter at the TEM cell input. The artificial network
(AN) of 6.1.2 shall be used as this filter. The AN shall be connected directly to the TEM cell

<!-- 第 56 页 -->
and shall be screened, so that the negative supply line is grounded at the connector panel.
The RF sampling port of the AN shall be terminated with a 50 Ω load.
All sensor and actuator leads of the EUT shall be connected to a peripheral interface, which
simulates the operation in the vehicle.
To minimise influences of the wiring outside the TEM cell, low pass filters shall be used,
which shall be connected directly to the BNC panel. The performance of the filters depends
on the frequency range of the EUT’s wanted signals. If no other configuration is specified in
the test plan the filters shall perform like the artificial network with a 50 Ω impedance as
described in Annex E.
To eliminate influences of its length and arrangement the wiring inside the connector panel
shall be as short as possible via 50 Ω coaxial cables if a BNC connector panel is used. The
shielding (outer conductor) of the cables shall be grounded at both ends.
Repeat measurements shall be performed using the same RF port of the TEM cell, with the
opposite port terminated by a 50 Ω impedance.
6.5.4
Limits for radiated disturbances from components/modules – TEM cell method
The level class to be used (as a function of the frequency band) shall be agreed upon
between the vehicle manufacturer and the component supplier.
NOTE Recommended limits for radiated disturbances from components (both the set-up with major field coupling
to the wiring harness (6.5.2.1) and the set-up with major coupling to the EUT (6.5.2.2)) are given in Tables 11 and
12. Since the mounting location, vehicle body construction and harness design can affect the coupling of radio
disturbances to the on-board radio, multiple limit levels are defined.

<!-- 第 57 页 -->
Table 11 – Examples of quasi-peak or peak limits for radiated disturbances – TEM cell
Frequency
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
MHz
Peak
Quasi-
peak
Peak
Quasi-
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
-
-
-
-
-
TV Band III
174 - 230
-
-
-
-
-
DAB III
171 - 245
-
-
-
-
-
TV Band IV/V
468 -  944
DTTV
470 - 770
DAB L band
1447 - 1494
SDARS
2320 - 2345
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
RKE
420 - 450
Analogue UHF
820 - 960
GSM 800
860 - 895
EGSM/GSM 900
925 - 960
GPS L1 civil
1567 - 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
3G / IMT 2000
1900 - 1992
3G / IMT 2000
2010 - 2025
3G / IMT 2000
2108 - 2172
Bluetooth/802.11
2400 - 2500
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.
Levels in dB(μV)
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Radiated emission – TEM cell
Not applicable
Radiated emission – TEM cell
Not applicable

<!-- 第 58 页 -->
Frequency
MHz
TV Band IV/V
468 -  944
DTTV
470 - 770
DAB L band
1447 - 1494
SDARS
2320 - 2345
Analogue UHF
380 - 512
RKE
300 - 330
RKE
420 - 450
Analogue UHF
820 - 960
GSM 800
860 - 895
EGSM/GSM 900
925 - 960
GPS L1 civil
1567 - 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
3G / IMT 2000
1900 - 1992
3G / IMT 2000
2010 - 2025
3G / IMT 2000
2108 - 2172
Bluetooth/802.11
2400 - 2500
6.6
Radiated emissions from components/modules – Stripline method
Refer to Annex G.
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Table 12 – Examples of average limits for radiated disturbances – TEM cell
Levels in dB(μV)
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
AVG
AVG
AVG
AVG
AVG
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
TV Band III
174 - 230
DAB III
171 - 245
Radiated emission – TEM cell
Not applicable
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
VHF
142 -175
Radiated emission – TEM cell
Not applicable
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.

<!-- 第 59 页 -->
Annex A
(informative)
Flow chart for checking the applicability of CISPR 25
Road vehicle, or boat or
machine with an internal
combustion engine
or electric motor
YES
NO
Is it a road
vehicle except
for a trolley bus?
NO
YES
Does it
operate on land or
surface of
water?
CISPR 25
does noi
apply
Is it a
train, electric
trolley bus    , medical
YES
NO
(May be
covered by
other CISPR
publications)
- (1)
device, boat longer
than 15 m?
YES
NO
- (2)
Is it powered from
electrical mains
(excpt for battery
charging)?
- (1) In the case of a dual-mode trolley bus (e.g. propelled by power from either a.c./d.c. mains or an internal
combustion engine), the a.c./d.c. mains portion of the vehicle propulsion system shall be excluded from this
standard.
- (2) Connection to the electrical mains is the work of another CISPR subcommittee.
This chart is intended to assist with determining whether a particular product is covered by
this publication. In case of conflict between this chart and Clause 1, Scope, Clause 1 shall
take precedence.
CISPR 25
applies
Vehicles,
boat and
devices
YES
NO
Is it powered by
an internal
combustion
engine?
NO
YES
Is it self-propelled?
IEC   383/08

<!-- 第 60 页 -->
Annex B
(normative)
Antenna matching unit – Vehicle test
B.1
Antenna matching unit parameters (150 kHz to 6,2 MHz)
The requirements for the measurement equipment are defined in 5.1.2.1.
B.2
Antenna matching unit – verification
The 10 pF and 60 pF values for the artificial antenna network of Figure B.1 are used to
represent a conventional antenna, e.g., 1 m rod, 2 m coax. The 60 pF capacitor represents
the capacitance of the coaxial cable between the vehicle antenna and the input of the vehicle
radio.
NOTE Actual values with on-glass antennas and diversity systems may vary greatly.
B.2.1
Gain measurement
The antenna matching unit shall be measured to determine whether its gain meets the
requirements of 5.1.2.1 using the test arrangement shown in Figure B.1.
B.2.2
Test procedure
- a) Set the signal generator 40 dB(μV) output level.
- b) Plot the gain curve for each frequency segment.
NOTE For more precise calibration, the actual values of the components used in the artificial antenna network
(AAN) and the input parameters of the matching network may be measured. The actual attenuation for the specific
measuring equipment can be calculated and used to obtain the matching network gain with greater precision.
B.3
Impedance measurement
Measurement
of
the
output
impedance
of
the
antenna
matching
unit
with the antenna attached shall be made with a vector impedance meter (or equivalent test
equipment). The output impedance shall lie within a circle on a Smith chart crossing
(100 + j0) Ω, having its centre at (50 + j0) Ω (e.g. SWR less than 2:1).

<!-- 第 61 页 -->
12 Ω
10 pF
50 Ω
60 pF*
39 Ω
Key
Signal generator
Artificial antenna network
Antenna matching unit
Measuring instrument
* Includes connector capacitance and, if used, cable capacitance
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
50 Ω
50 Ω
IEC   384/08
Figure B.1 –Verification set-up

<!-- 第 62 页 -->
Annex C
(informative)
Sheath-current suppressor
C.1
General
This Annex provides information on a proposed performance and verification of a sheath-
current suppressor recommended for use when measuring vehicle antenna terminal voltage in
the AM broadcast bands (LW, MW, SW). This suppressor electrically-isolates the ALSE from
the vehicle ground.
C.2
Suppressor construction
The performance curve below (Figure C.1) shows the attenuation of the sheath currents using
20 turns of a coaxial cable around a ferrite toroidal core:
Material:
N30; Al = 5 400 nH
Size:
Toroidal core 58 mm × 40 mm × 17 mm
Manufacturer:
Siemens Order No.: B64290-A40-X830
Number of turns:
20 (coaxial cable)
NOTE To increase the attenuation, two sheath-current suppressors may be placed in series or more turns may be
added to the single core.
Attenuation   (dB)
Figure C.1 – Attenuation vs. frequency
0,1
Frequency   (MHz)
IEC   385/08

<!-- 第 63 页 -->
Annex D
(informative)
Guidance for the determination of the noise floor of active vehicle
antennas in the AM and FM range
Three steps are necessary to determine the noise floor of an active antenna installed in the
vehicle:
1) Measurement of the noise floor of the test equipment (measuring receiver plus
impedance converter) with coaxial cable impedance termination at the impedance
converter RF-input in the AM- and FM-range. (U Equipment noise) (Test set-up see
Figure D.1).
2) Measurement of the noise floor of the active vehicle antenna including the noise floor
of the test equipment. (U Equipment noise plus antenna noise)(Test set-up see Figure D.2).
3) Calculation of the active antenna noise floor with formula (D.1) (all terms in μV):
noise
Equipment
noise
antenna
plus
noise
Equipment
noise
Antenna
U
U
U
−
=
(D.1)

<!-- 第 64 页 -->
Key
Measuring instrument
ALSE
Bulkhead connector
Resistor according to coaxial cable impedance
Vehicle antenna amplifier
-
Antenna coaxial cable
High-quality double-shielded coaxial cable (50 Ω)
-
Impedance matching unit
Short connection to the housing of the on-board radio
Housing of on-board radio
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
IEC   386/08
Figure D.1 – Vehicle test set up for equipment noise measurement in the AM/FM range

<!-- 第 65 页 -->
or
Key
Measuring instrument
ALSE
Bulkhead connector
-
Vehicle antenna amplifier
Antenna amplifier power plug
Antenna coaxial cable
High-quality coaxial cable e.g. double-shielded (50 Ω)
External 12V battery
Impedance matching unit
Modified coaxial "T" connector or short connection to the housing of the on-board radio
Housing of on-board radio
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
IEC   387/08
Figure D.2 – Vehicle test set up for antenna noise measurement in the AM/FM range

<!-- 第 66 页 -->
Impedance   (Ω)
Annex E
(normative)
Artificial network
The AN impedance ZPB (tolerance ± 20 %) in the measurement frequency range of 0,1 MHz to
100 MHz is shown in Figure E.1. It is measured between the terminals P and B (of Figure E.2)
with a 50 Ω load on the measurement port with terminals A and B (of Figure E.2) short-
circuited.
0,1
1,0
10,0
100,0
Frequency    (MHz)
IEC   388/08
Figure E.1 – Characteristics of the AN impedance

<!-- 第 67 页 -->
5 μH
A
Power
supply
1 μF
B
B
IEC   389/08
Figure E.2 – Example of 5 μH AN schematic
P
0,1 μF
EUT
Measurement
50 Ω
1 000 Ω
port
See 6.1.2

<!-- 第 68 页 -->
The dimensions of a TEM cell are shown in the Figure F.1 and given in Table F.1.
Figure F.1a – Horizontal section view at septum
b
L
L
Key
Allowed working region: 0,33 W, 0,60 L
Access door
Dielectric supports
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Annex F
(informative)
TEM cell dimensions
Dimensions in millimetres
Drawing not to scale
s
w
0,95 L
IEC   390/08
L
IEC   391/08
Figure F.1b – Vertical section view at septum
Figure F.1 – TEM cell

<!-- 第 69 页 -->
Table F.1 shows the dimensions for constructing TEM cells with specific upper frequency
limits.
Table F.1 – Dimensions for TEM cells
Upper frequency
Cell form factor
MHz
W/b
1,69
1,00
1,67
1,50
Cell form
TEM cell height
Septum width
factor
b
S
L/W
mm
mm
1,00
1,00
1 200
1 000
0,66
1,00
1,00
1,00
NOTE The TEM cells in the box are typical for automotive component testing. For integrated circuit
testing, even smaller TEM cells may be applicable for testing up to and above 1 GHz.

<!-- 第 70 页 -->
Annex G
(informative)
Radiated emissions from components/modules –
Stripline method
G.1
General
The stripline is an open waveguide, which consists of a ground plane and an active conductor
(septum) and has characteristic impedance. Commonly used values for characteristic
impedances are 50 Ω and 90 Ω. Information relating to the size and construction of a stripline
is given in Figure G.2 and Figure G.3.
Users are encouraged to study and experiment with the test method to increase the body of
knowledge with the aim of reaching consensus on including it in the main body of this
standard at a future date.
The stripline may be used in the frequency range from 150 kHz to 400 MHz where the
harness is the primary radiating/coupling element.
The limits of the frequency range can be extended up to 1 000 MHz, if:
–
the dominance of TEM mode can be shown 1);
–
and the EUT is located under the septum;
–
and the height of the EUT is limited to 1/3 of the septum height.
Measurements shall be made in a shielded enclosure to eliminate high levels of external
disturbances. For further details see Figure G.1.
NOTE The influence of the shielded enclosure on the measured impedance (i.e. reflection coefficient as
measured with a network analyser) of the stripline should be less than 6 dB compared with an open field test site.
To realize this it might be necessary to equip the shielded enclosure partially with absorbers. An example is shown
in Figure G.1.
G.2
Test set-up
For radiated emissions measurements, the arrangement of the EUT, test harness, load
simulator and measuring equipment shall be equivalent to the example shown in Clause G.1.
Deviations of the location and length of the test harness (e.g. the original vehicle harness)
and the location of the EUT have to be agreed between customer and supplier.
In order to achieve reproducible test results the EUT and the test arrangement shall be
located at the same position in the stripline for each repeated measurement.
G.2.1
Stripline impedance matching
Correct impedance matching between the stripline and the measuring instrument of 50 Ω shall
be maintained for all frequencies. This can be achieved by using lossless transmission line
transformers (non-linear shape of the septum tapers or an additional external waveguide) or
lumped passive network.
- —————————
1) For the design shown in figure G.2 it is presumed that the TEM mode is dominant up to 400 MHz.  For the
design shown in figure G.3 it is presumed that the TEM mode is dominant up to 1 000 MHz.

<!-- 第 71 页 -->
If the matching unit is a lumped passive network, appropriate correction of measurement
results shall be made for any insertion loss.
G.2.2
Location of the EUT
The EUT shall be placed (50 ± 5) mm above the ground plane on a non-conductive, low
relative permittivity material (εr ≤ 1,4) and shall be located on the same side as the 50 Ω load
of the stripline as shown in Figure G.1. The case of the EUT shall not be grounded to the
ground plane unless it is intended to simulate the real vehicle configuration. In the case that
the EUT is not located under the septum, the EUT shall be located at a distance of
(
)
200 +
mm from the edge of the septum.
G.2.3
Location and length of the test harness
The length of test harness parallel to the septum shall be (1 000 ± 50) mm.
The total length of the test harness between the EUT and the load simulator (or the RF
boundary) is typical 1 700 mm and shall not exceed 2 000 mm. The same test harness can
be used as with the ALSE test method (see 6.4).
The long segment of the test harness shall be within the inner one-third of the width of the
septum. Ideally, it is placed under the centreline of the septum.
The wiring type is defined by the intended system application and requirement. The test
harness shall be placed on a non-conductive, low relative permittivity material (εr  ≤ 1,4),
(50 ± 5) mm above the ground plane. The locations of the EUT and load simulator require a
harness bend angle of (90 ± 15) degrees.
G.2.4
Location of the load simulator
The load simulator should be located at a distance of (
)
200 +
mm from the edge of the
septum. If this cannot be met, the actual location of the load simulator shall be documented in
the test report.
The load simulator shall be placed directly on the ground plane. If the load simulator has a
metallic case, this case shall be bonded to the ground plane. Alternatively, the load simulator
may be located adjacent to the ground plane (with the case of the load simulator bonded to
the ground plane) or outside of the test chamber, provided the test harness from the EUT
passes through an RF boundary bonded to the ground plane. When the load simulator is
located on the ground plane, the d.c. power supply lines of the load simulator shall be
connected through the AN(s) (see 6.1.2).
G.3
Test procedure
The general arrangement of the EUT, the harness and the peripherals, represents a
standardized test condition. Any deviations from the standard test configuration shall be
agreed between customer and supplier prior to testing and recorded in the test report.
The EUT shall be installed to operate under typical loading and operating conditions in the
vehicle in such a way that the maximum emission state occurs. These operating conditions
have to be defined in the test plan to ensure that customer and supplier are performing
identical tests.
The arrangement of the EUT as well as the measuring equipment shall be functionally
equivalent to the example shown in Figure G.1 and shall be defined in the test plan.

<!-- 第 72 页 -->
Top view
200 +50
50 ± 5
Side view
Front view
Key
EUT
Ground plane
Test harness
Matching unit (if necessary)
Load simulator
10 Wall of shielded room
50 Ω load (location optional)
11 Bulkhead connector
Low relative permittivity support (εr ≤ 1,4)
12 Measuring instrument
Artificial network (AN)
13 Absorbers (if necessary)
Septum
14 Power supply (location optional)
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Dimensions in millimetres
1 000 ± 50
200 +50
1 5
IEC   392/08
Figure G.1 – Example of a basic stripline test setup in a shielded enclosure

<!-- 第 73 页 -->
G.4
Limits for radiated emissions from components/modules – Stripline
method
Some disturbance sources are continuous emitters and require a lower limit than a
disturbance source which operates only periodically or for short intervals.
The limits of the radiated electromagnetic energy may be different for each disturbance
source and arrangement (coupling between antenna and electronic equipment in the vehicle).
For evaluation of radiated emissions from components/modules the RF voltage at the stripline
output is to be measured.
Table G.1 – Examples of quasi-peak or peak limits for radiated disturbances –
Stripline
Frequency
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
MHz
Peak
Quasi-
peak
Peak
Quasi-
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
-
-
-
-
-
TV Band III
174 - 230
-
-
-
-
-
DAB III
171 - 245
-
-
-
-
-
TV Band IV/V
468 -  944
-
-
-
-
-
DTTV
470 - 770
-
-
-
-
-
DAB L band
1447 - 1494
SDARS
2320 - 2345
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
-
-
-
-
-
RKE
420 - 450
-
-
-
-
-
Analogue UHF
820 - 960
GSM 800
860 - 895
-
-
-
-
-
EGSM/GSM 900
925 - 960
-
-
-
-
-
GPS L1 civil
1567 - 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
3G / IMT 2000
1900 - 1992
3G / IMT 2000
2010 - 2025
3G / IMT 2000
2108 - 2172
Bluetooth/802.11
2400 - 2500
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test. When the test plan
includes bands that overlap the test plan shall define the applicable limit.
Levels in dB(μV)
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Peak
Quasi-
peak
Radiated emission – Stripline
Not applicable
Radiated emission – Stripline
Not applicable

<!-- 第 74 页 -->
Table G.2 – Examples of average limits for radiated disturbances –
Stripline
Levels in dB(μV)
Frequency
Class 1
Class 2
Class 3
Class 4
Class 5
Service / Band
MHz
AVG
AVG
AVG
AVG
AVG
BROADCAST
LW
0,15 - 0,30
MW
0,53 - 1,8
SW
5,9 - 6,2
FM
76 - 108
TV Band I
41 - 88
TV Band III
174 - 230
DAB III
171 - 245
TV Band IV/V
468 -  944
DTTV
470 - 770
DAB L band
1447 - 1494
Radiated emission – Stripline
SDARS
2320 - 2345
Not applicable
MOBILE SERVICES
CB
26 - 28
VHF
30 - 54
VHF
68 - 87
VHF
142 -175
Analogue UHF
380 - 512
RKE
300 - 330
RKE
420 - 450
Analogue UHF
820 - 960
GSM 800
860 - 895
EGSM/GSM 900
925 - 960
GPS L1 civil
1567 - 1583
GSM 1800 (PCN)
1803 - 1882
GSM 1900
1850 - 1990
Radiated emission – Stripline
3G / IMT 2000
1900 - 1992
Not applicable
3G / IMT 2000
2010 - 2025
3G / IMT 2000
2108 - 2172
Bluetooth/802.11
2400 - 2500
NOTE 1 All values listed in this table are valid for the bandwidths in Tables 1 and 2. If measurements have to be
performed with different bandwidths than those specified in Tables 1 and 2 because of noise floor requirements, then
applicable limits should be defined in the test plan.
NOTE 2 Where multiple bands use the same limits the user shall select the appropriate bands over which to test.  When the test
plan includes bands that overlap the test plan shall define the applicable limit.
These limits have been established for a 90 Ω stripline design as shown in Figure G.3. In
case of using other stripline impedance characteristics than 90 Ω, the limits have to be
adapted in accordance with the following formula G.1:
dB
lg
Ω
=
Ω
(G.1)
Z
K
Z
Example for a stripline with 50 Ω characteristic impedance:

<!-- 第 75 页 -->
dB
,2
lg
=
Ω
Ω
=
Limits Z 50Ω = Limits Z 90Ω – K 90Ω/50Ω = Limits Z 90Ω - 2,54 dB
where
K  is the correction factor for limits in dB;
Z is the characteristic impedance of stripline in Ω.
G.5
Stripline design
An example of a 50 Ω stripline construction is shown in Figure G.2 and for a 90 Ω stripline in
Figure G.3. The ratio of b/h determines the characteristic impedance. If dimension b is greater
than h, the following equation G.3 applies:
×
=
b
h
b
h
h
b
Z
π
where
Z is the characteristic impedance of the stripline in Ω;
b is the stripline septum width in mm;
h is the stripline septum height above the ground plane in mm;
π = 3,14159.
NOTE Typical striplines are constructed to have an impedance of either 50 Ω or 90 Ω with b/h equal to 5 and
1,83, respectively. The termination may be either a resistive load or a tapered matching section terminated in a
50 Ω coaxial resistive load. A resistive load may be constructed of carbon resistors, conductive strips, thick film on
a ceramic substrate, etc., in such a way that it matches the characteristic impedance of the stripline and minimizes
the standing waves ratio.
Ω
Ω
K
(G.2)
,0
,2
⎥⎦
⎤
⎢⎣
⎡−
+
×
−
+
(G.3)

<!-- 第 76 页 -->
4 300
Key
Septum
Ground plane
Figure G.2 – Example for a 50 Ω stripline
Dimensions in millimetres
2 500
1 500
IEC   393/08

<!-- 第 77 页 -->
3 200
2 000
90 Ω
90 Ω
50 Ω
50 Ω
Key
50 Ω load
Septum
Ground plane
Matching unit
Measuring instrument
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
Dimensions in millimetres
1 500
IEC   394/08
Figure G.3 – Example for a 90 Ω stripline

<!-- 第 78 页 -->
H.1
Introduction
H.2
Survey of methods of judging degradation to radio channel
H.2.1
Subjective tests
H.2.1.1
Subjective tests of annoyance
Grade
Interfering effect was
almost nil
noticeable
annoying
very annoying
so bad the presence of speech was barely discernible
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Annex H
(informative)
Interference to mobile radio communication
in the presence of impulsive noise –
Methods of judging degradation
This annex provides methods of judging the degradation of radio communication in the
presence of impulsive noise.
Test programs have been conducted in the United States of America by the Federal
Communications Commission (FCC) and the Motor Vehicle Manufacturers Association
(MVMA, later the American Automobile Manufacturers Association, AAMA, now disbanded).
These test programs were directed toward providing a better understanding of the effects of
motor vehicles on mobile communications reception.
The tests measured the degradation to communications systems subjectively and objectively
at numerous receiver frequencies using several classes of automotive ignition noise sources
such as a traffic stream and a controlled matrix of vehicles. Correlation between various
objective and subjective measures of degradation was studied using rating scales employed
by the FCC and MVMA for grading communication quality.
Subjective degradation tests were conducted by the FCC using a single vehicle and groups of
vehicles simulating traffic patterns. The FCC proposed and used a subjective jury rating scale
based upon annoyance which had been used traditionally to determine the effects of ambient
noise on job performance, accident rate, and fatigue of personnel.

<!-- 第 79 页 -->
This grade system is very nearly the same as that given in ITU-R Recommendation ITU-R
BS.1284 which should be used for future work if annoyance testing is conducted.
Quality
Impairment
excellent
imperceptible
good
perceptible, but not annoying
fair
slightly annoying
poor
annoying
bad
very annoying
Annoyance is a highly subjective psychological reaction. The degree of annoyance caused by
audible noise has been found to be influenced by a large number of variable physical and
psychological factors (including illness, fatigue, status of interpersonal relations, and family
problems).
H.2.1.2
Subjective tests of intelligibility
H.2.1.2.1
General
Since land mobile communication systems are used primarily to transmit voice messages, the
performance of such systems should be based primarily on the intelligibility of the received
signal in the presence of ignition noise.
The most common procedure for determining the intelligibility of a voice channel is a
subjective method involving trained speakers and listener jury panels that directly score the
percentage of speech that is intelligible. These schemes have the merit of producing
repeatable results. Unfortunately, subjective scoring methods are expensive and time-
consuming. As a result, they are not widely used.
The subjective scale for intelligibility proposed by the MVMA is:
Grade Description
could understand the message extremely well
could understand the message fairly well
think I understood, but had to guess at some words
could barely discern the message
could not detect speech at all
H.2.1.2.2
Intelligibility test method
Beginning at 20 dB quieting with the vehicle ignition noise source off, the radio frequency
input level was reduced by 1 dB decrements and scored at each decrement by the jury until
the jury reached Grade 1 (worst). Then the radio frequency input level was increased by 1 dB
increments until the 20 dB quieting level was again reached.

<!-- 第 80 页 -->
The radio frequency input level was then increased by 3 dB increments until the jury rated the
quality Grade 5 (best). The radio frequency input level was then decreased by 3 dB
decrements until the 20 dB quieting level was reached.
The entire process was repeated with the vehicle noise source in operation.
The results of the two tests (noise source off / noise source on) were then compared and the
difference in radio frequency level for a particular quality grade (in decibels) was reported as
the subjective degradation.
H.2.2
Objective tests
H.2.2.1
General
Uncertainty in subjective measurements arises from ambiguity of the rating scale definition,
factors. Objective measurements should have uncertainties less than those obtained from
subjective tests.
A study carried out by the Institute for Telecommunication Sciences [1] develops a method of
obtaining an objective intelligibility measure giving good results for speech sent through both
analogue and digital noise-corrupted communication channels. The distortion measure is
obtained using Linear Predictive Coding (LPC), a mathematical technique widely known for its
application to the analysis and synthesis of speech.
H.2.2.2
Objective test method
To develop an objective intelligibility measure for corrupted speech, a comparison must be
performed between the distorted speech and the original noise-free speech. A subjective
intelligibility measure of the distorted speech must also be available in order to judge the
making a noise-free master tape of preselected speech, then sending it through the voice
communication channels to be tested and making a recording of the speech at the channel
outputs. The latter recording can be subjectively scored for intelligibility, and also compared
with the original speech by a mathematical technique to obtain an objective score.
The preselected speech to be sent over a voice channel for intelligibility scoring consists of
phonetically balanced groups of isolated words, as opposed to complete sentences or
nonsense syllables. These phonetically balanced words were used because subjective scores
have been shown to be repeatable, which is a necessary criterion for this study. (During tests
employing vehicles as a noise source, subjective scoring by listener panels was conducted
and compared to the objective scores, resulting in good correlation.)
H.2.3
Conclusions relating to judgement of degradation
Numerous studies have been conducted over the years to develop a simple, inexpensive,
objective method of measuring land mobile receiver degradation in the presence of ignition
noise. Linear Predictive Coding (LPC) is neither simple nor inexpensive (when compared to
the equipment used for CISPR 12 and CISPR 25 measurements), but it is technically a good
objective method for measuring receiver degradation.
Subjective tests have proved to be effective in rating mobile receiver degradation. Of the two
subjective rating methods in use, intelligibility was determined to be superior to annoyance in
characterizing the effect of radio noise on a communication link. Most objective
measurements taken during the subjective testing, however, showed poor correlation. The
Linear Predictive Coding (LPC) method showed good correlation with the subjective
intelligibility test method. Subjective tests are preferred, however, because of their reduced
complexity and resulting lesser cost.

<!-- 第 81 页 -->
Considering only the subjective test methods, and as a result of the numerous tests
conducted, it is recommended that intelligibility be used as the index of communications
system performance rather than annoyance.
H.3
Reference document
[1]
GAMAUF K. J. and HARTMAN W. J., Objective Measurement of Voice Channel
Intelligibility, October 1977; available from the National Technical Information Service,
Springfield, Virginia 22151, USA, reference number FAA-RD-77-153.

<!-- 第 82 页 -->
I.1
Introduction
This annex contains future work items that are under consideration.
I.1.1
Peak, average, quasi-peak and CISPR average measurements and limits
I.1.2
Measurement uncertainty
This topic will be considered for future revisions of this standard.
I.1.3
Attenuation measurement method
The method of measuring the attenuation defined in Figure 5 needs to be defined.
I.1.4
Average measurements
I.1.5
Chamber characterisation
Lizenziert VDO Automotive AG. Alle Rechte vorbehalten.
CISPR 25 © IEC:2008
Annex I
(informative)
Items under consideration
As further work progresses in subcommittees CISPR A and CISPR H this will be reviewed and
CISPR 25 updated accordingly.
Further precision is required when using a spectrum analyser to make average measurements
i.e. small video bandwidth.
A JTF has been initiated to study chamber characterization and correlation. The results of the
study will be considered for a future edition.

<!-- 第 83 页 -->
INTERNATIONAL
ELECTROTECHNICAL
COMMISSION
3, rue de Varembé
P.O. Box 131
CH-1211 Geneva 20
Switzerland
Tel: + 41 22 919 02 11
Fax: + 41 22 919 03 00
info@iec.ch
www.iec.ch
