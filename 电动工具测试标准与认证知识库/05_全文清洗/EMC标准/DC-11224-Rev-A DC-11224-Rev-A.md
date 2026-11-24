# DC-11224-Rev-A DC-11224-Rev-A

- 标准号：DC-11224-Rev-A　年份：—　文件名状态：—
- 来源 PDF：`EMC标准\汽车电子\DC-11224-Rev-A.pdf`
- 页数：67　提取字符：118,349　页眉页脚过滤：1 条
- 文字层完整性：full（每页数字中位数 48.0）　语种：英文　小数：完整 318 / 疑似残缺 0
- 提取时间：2026-11-03　方式：文字层直提（未 OCR）
- 正文可疑：否

> 本页眉之后是原文，按页排列。**表格线、图样、尺寸标注在纯文本里会走形，判定试验参数时以 PDF 原件为准。**


<!-- 第 1 页 -->
Foreword
Changes
DaimlerChrysler
DC-11224
Joint Engineering Standard
Date Published:  2007-07
Chrysler Category:  L-2
Total No. of Pages (Including Annex): 67
Mercedes-Benz Category:  22
ADRESS Change Level:  A
Chrysler Author:  Michael A. Fornatoro
Dept:  E/E Systems Validation/6960
Phone:  + 1 248 576 5889
Mercedes-Benz Author:  Dr. Martin Aidam
Dept: GR/EEB
Phone:  + 49 7031 4389 495
EMC Performance Requirements --- Components
This joint engineering standard is an acceptance specification for the electromagnetic compatibility (EMC)
requirements of electrical and electronic components and systems for DaimlerChrysler (DC) vehicles that
reference this standard.  This standard shall be used in combination with DC-11223, EMC
Performance Requirements – Vehicle, with DC-11225, EMC Supplemental Information and
Alternative Component Requirements and with DC-10615, Electrical System Performance
Requirements for Electrical and Electronic Components.  These requirements have been developed
to assure compliance with present and anticipated domestic and foreign regulations and customer
satisfaction regarding the EMC of vehicle E/E systems.
See Annex C for a list of changes in this standard relative to DC-11224 and DC-10614, which are the
previous joint engineering standards for EMC Performance Requirements – Component.
NOTE:  The English version of this jointly developed engineering standard is the official
document.  The German version of this jointly developed engineering standard is the official
translation of this document.  The official German translation can be found on the DocMaster
website.  For all other translations, no guarantee can be made as to the accuracy of the technical
information.

<!-- 第 2 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 2
Contents
Scope......................................................................................................................................... 3
1.1
Purpose of the Standard ............................................................................................................. 3
1.2
Use of this Standard ................................................................................................................... 3
1.3
Requirements for Applying this Generic Standard to a Specific Component................................. 4
References................................................................................................................................. 5
2.1
General ...................................................................................................................................... 5
2.2
International Documents ............................................................................................................. 5
2.3
SAE Documents ......................................................................................................................... 5
2.4
Military Standards....................................................................................................................... 5
2.5
DaimlerChrysler Standards......................................................................................................... 6
2.6
Other Documents........................................................................................................................ 6
Terms and Definitions................................................................................................................. 6
Regulated Substances and Recyclability................................................................................... 11
Test Requirements and Functional Status Classification ........................................................... 11
5.1
General .................................................................................................................................... 11
5.2
Test Conditions......................................................................................................................... 11
5.3
Test Plan .................................................................................................................................. 11
5.4
Function Performance Status Classification .............................................................................. 12
5.5
Test Report and Statement....................................................................................................... 12
Emissions (Emitted Disturbances)............................................................................................. 12
6.1
General .................................................................................................................................... 12
6.2
CISPR 25 Conducted RF Emissions - (Voltage on Supply Lines) .............................................. 14
6.3
CISPR 25 Conducted RF Emissions - (Current on all Lines in Harness) .................................... 16
6.4
CISPR 25 Radiated Emissions.................................................................................................. 20
6.5
Conducted Transient Emissions................................................................................................ 23
RF Immunity............................................................................................................................. 23
7.1
General .................................................................................................................................... 23
7.2
Bulk Current Injection (BCI) Test............................................................................................... 26
7.3
ALSE with a Ground Plane ....................................................................................................... 32
7.4
ALSE without Ground Plane...................................................................................................... 33
7.5
TEM Cell Test........................................................................................................................... 35
Magnetic Field Immunity ........................................................................................................... 37
8.1
Requirements ........................................................................................................................... 38
8.2
Test.......................................................................................................................................... 39
Transient Immunity ................................................................................................................... 40
9.1
Transient Disturbances Conducted along Supply Lines............................................................. 40
9.2
Transient Disturbances Conducted along I/O or Sensor Lines................................................... 47
Electrostatic Discharge (ESD)................................................................................................... 53
10.1
ESD Handling Test ................................................................................................................... 53
10.2
ESD Operating Tests................................................................................................................ 55
Annex A (informative) FUNCTIONAL STATUS CLASSIFICATION EXAMPLES .................................................... 62
Annex B (informative) LIST OF CHANGES ................................................................................................. 65
B.1
List of Changes from DC-11224 to DC-11224 Rev. A................................................................ 65
B.2
List of Changes from DC-10614 Rev. A to DC-11224................................................................ 66

<!-- 第 3 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 3
Scope
This joint engineering standard defines the electromagnetic compatibility performance requirements for
the qualification of components and subassemblies that contain electrical or electronic components for
DaimlerChrysler vehicles.  This standard applies to all electrical and electronic components that
reference this standard.  Any vehicle component which does not specify an EMC performance
requirement will be evaluated to this standard and the results will be reviewed with product engineering.
1.1
Purpose of the Standard
The purpose of this joint engineering standard is to ensure electromagnetic compatibility within the
vehicle and between the vehicle and its electromagnetic environment.  To support this, bench tests of the
components not installed in a vehicle are described and the permissible emitted disturbances and the
immunity requirements are defined in this standard.
The purpose of component testing is qualification of components from the supplier and should be
completed prior to vehicle validation to DC-11223.
1.2
Use of this Standard
The requirements and test methods in this joint engineering standard are based on the international
standards referenced in paragraph 2.2, wherever possible.  Refer to the definitions in this standard and in
the references for clarification of terms.
Should a conflict exist between this standard and any of the referenced documents, the requirements of
this standard shall prevail, except for regulatory requirements.
DaimlerChrysler may change the specific requirements for a given component or module, as a result of
testing to this standard.  The components are referred to in this standard as the component, module,
motor or the generic term DUT (device(s) under test).
If explicitly agreed in the product specification and/or test plan deviations from the requirements contained
in this standard are allowed.
In addition to meeting the requirements for a module or component as specified in this standard, the
module or component must comply with DaimlerChrysler Standard DC-11223, EMC Performance
Requirements - Vehicle when installed in a representative vehicle.
The required procedure for assuring EMC compliance for an electronic module, electrical component or
motor is to:
- 
The DC EMC team develops the EMC requirements for the component product specification(s)
(Lastenheft) based on this joint engineering standard and DC-11223 but adapted to the
component and to the vehicles in which it will be used (including classification of the component or
system functions).
- 
The supplier develops a test plan based on the product specification(s) and the DC EMC team
approves this test plan.
- 
Confirm that required testing is completed according to the test plan at a DC approved EMC
laboratory and that the specified requirements for the DUT are met per DaimlerChrysler timing and
prior to vehicle validation.
Questions concerning this standard should be directed to the E/E Systems Validation, Department (6960)
at Chrysler Group or to the EMC team at Mercedes Car Group (MCG).  Questions concerning lab
procedures and test methods should be directed to Scientific Laboratories, E/E Systems Compatibility
Department (5140) at Chrysler Group or to the EMC team at Mercedes Car Group.
1.2.1
Additional Information
Component testing to the requirements of this standard represents an empirical risk analysis of
component performance versus derived approximations to known environmental threats and customer
satisfaction requirements.  The development of this standard is based on extensive experience in

<!-- 第 4 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 4
achieving correlation to expected vehicle performance with a high level of predictability.  However, EMC
testing, by its nature, is subject to more variation than mechanical testing.  Because of coupling variability
and measurement uncertainty, correlation between component level performance and final performance
in the complete vehicle cannot be exact.  In order to maintain a competitive and quality product, vehicle
EMC testing will be performed to evaluate overall integrated system performance.  Vehicle level analysis
is not a substitute for component conformance to this standard.
1.3
Requirements for Applying this Generic Standard to a Specific Component
The releasing department, in cooperation with the appropriate product team EMC engineer, shall define
the following information when referencing this EMC joint engineering standard in the product
specification(s):
- 
Category (and subcategory, if applicable) of the electronic component or module (see definitions)
- 
DUT Functions and their Functional Group (affects test levels, see definitions and Annex A)
- 
Acceptable Performance Limits for these functions (to establish criteria for Function Performance)
- 
DUT Location, Internal Signals or Other Factors that may affect the appropriate requirements.
Note: Alternators, starters and certain other high current motors should have their own electrical
requirements document.  These devices should reference this standard for their EMC requirements as
appropriate. Electroexplosive devices (EEDs) or initiators are not covered by this standard; refer to PF-
9607 or the USCAR Initiator Technical Requirements and Validation Standard.
Not all tests are applicable to all electrical or electronic components; the applicable tests shall be
specified in the DUT product specification.  For default requirements refer to Table 1, EMC Test Selection
Matrix.
Table 1:  EMC Test Selection Matrix
ELECTRONIC COMPONENTS
MOTORS
Inductive
Devices
Category
Subcategory
(in addition to Category)
Category
Category
TEST
B
C
M
B
C
M
E
C
M
P 
A 
B 
HV 
C 
S 
MS 
Y
R 
IP
L
S
EMISSIONS
CISPR 25 CE (V & I)
X 
I 
V 
V* 
X 
V
CISPR 25 RE (0.15 - 76 MHz)
X
CISPR 25 RE (76 – 2500 MHz)
X 
X 
X
Transient CE
X 
X 
X 
X 
X 
X
IMMUNITY
BCI
X 
X 
X
TEM  
X 
ALSE: ISO or SAE (with or
without Ground Plane)
X 
X 
X 
X
Magnetic Field
X
TRANSIENTS
Power Lines
X 
X 
X 
X 
X
I/O: fast transients (a+b)
X 
X
I/O: slow transients ( #2)
X
ESD
X 
X 
X 
X 
X
Note: X – requirement, V – CISPR Voltage emission test only, I – CISPR current emission test only, V* –
short duration motors, if they are configured to accommodate a drop in part for RF suppression (i.e. no
retooling) are only required to meet the RF emissions basic limits if agreed upon between DC and the
supplier, otherwise the full CISPR 25 voltage testing is required, refer to Section 3 for definitions of the
categories, sub-categories and abbreviations.

<!-- 第 5 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 5
References
2.1
General
QS-9000, 3rd Edition Chrysler, Ford, and General Motors manual, “Quality System Requirements”
2.2
International Documents
CISPR 16-1-1 2006-03 Specification for radio disturbance and immunity measuring apparatus and
methods Part 1-1: Radio disturbances and immunity measuring apparatus – Measuring apparatus
CISPR 25 2002-08, Corrigendum 1 2004-03 Radio disturbance characteristics for the protection of
receivers used on-board vehicles, boats and on devices – Limits and methods of measurement
IEC 60050-161 1990-08, Amendment 1 1997-10, Amendment 2 1998-04 International electrotechnical
vocabulary, Chapter 161: Electromagnetic compatibility
IEC 61000-4-2 2001-04 Electromagnetic compatibility (EMC) - Part 4-2: Testing and measurement
techniques - Electrostatic discharge immunity test (Edition 1.2)
ISO 10605 2001-12 Road vehicles – Test methods for electrical disturbances from electrostatic discharge
ISO 7637-1 2002-03 Road vehicles, Electrical disturbance by conduction and coupling Part 1 –
Definitions and general considerations
ISO 7637-2 2004-06 Road vehicles, Electrical disturbance by conduction and coupling Part 2 - Vehicles
with nominal 12 V or 24 V supply voltage - Electrical transient transmission by capacitive and inductive
coupling via supply lines
ISO 7637-3 1995-07, Technical Corrigendum 1 1995-11 Road vehicles, Electrical disturbance by
conduction and coupling Part 3 - Vehicles with nominal 12 V or 24 V supply voltage - Electrical transient
transmission by capacitive and inductive coupling via lines other than supply lines
ISO 11452-1 2005-02 Road vehicles – Component test methods for electrical disturbances from
narrowband radiated electromagnetic energy – Part 1: General and definitions
ISO 11452-2 2004-11 Road vehicles, Electrical disturbances by narrowband radiated electromagnetic
energy - Component test methods Part 2 - Absorber-lined shielded enclosure
ISO 11452-3 2001-03 Road vehicles – Component test methods for electrical disturbances from
narrowband radiated electromagnetic energy – Part 3: Transverse electromagnetic (TEM) cell
ISO 11452-4 2005-04 Road vehicles – Component test methods for electrical disturbances from
narrowband radiated electromagnetic energy – Part 4: Bulk current injection (BCI)
ISO/IEC 17011 2004-09 Conformity assessment – General requirements for accreditation bodies
accrediting conformity assessment bodies
ISO/IEC 17025 2005-5 General requirements for the competence of testing and calibration laboratories
2.3
SAE Documents
SAE J1113-21, 1998-01 Electromagnetic Compatibility Measurement Procedure for Vehicle Components
– Part 21: Immunity to Electromagnetic Fields, 10 kHz to 18 GHz, Absorber-Lined Shielded enclosure
2.4
Military Standards
MIL-STD-1576 (USAF), 1992-09 Military Standard - Electroexplosive Subsystem Safety Requirements
and Test Methods for Space Systems
MIL-STD-461E, 1999-08 Department of Defense Interface Standard, Requirements for the Control of
Electromagnetic Interference Characteristics of Subsystems and Equipment

<!-- 第 6 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 6
2.5
DaimlerChrysler Standards
DC-11223, EMC Performance Requirements – Vehicle
DC-11225, EMC Supplemental Information and Alternative Component Requirements
DC-10615, Electrical System Performance Requirements for Electrical and Electronic Components
PF-9607, Airbag Initiator Assembly
2.6
Other Documents
USCAR Initiator Technical Requirements and Validation Standard
EMC - Evaluation of CAN - Transceivers, FTZ Zwickau (FH) University of Applied Science
Terms and Definitions
Refer to IEC 60050-161, ISO 11452-1 and ISO 7637-1 for additional definitions.
ADRESS. An acronym for Automated Document Retrieval & Engineering Standards System.
ALSE.  Absorber-lined shielded enclosure (also known as anechoic or semi-anechoic chamber). Used in
this document, together with ISO, to designate the test itself with reference to the method described in
ISO 11452-1.
Anomaly.  An effect that represents a deviation from performance as specified in the DUT PF and
described in the DUT test plan (see effect).
Car Group and Chrysler Group through accreditation to ISO-17025.  The basic test methods as defined in
the international standards that are referenced in this standard, e.g. ISO 7637-2, -3, ISO 11452-2 and
nationally recognized accrediting body operating in accordance with ISO/IEC 17011.  DC reserves the
right to arrange for follow-up correlation tests and/or on site visits to evaluate the DC test methods not
included in the ISO-17025 requirements and to further review and discuss the tests defined in the DC
EMC Specification(s).  A laboratory which refuses such follow-up activities or for which significant
discrepancies are found is subject to having its approval/recognition withdrawn.  Questions regarding this
policy should be addressed to the E/E Systems Compatibility Department (5140) at Chrysler Group or to
the EMC team at Mercedes Car Group.
BAN.  Broadband Artificial Network (refer to DC-11225, Annex F).
Bulk Current Injection (BCI).  Method for coupling common-mode RF current into a harness.
Category and subcategory.  In this document, electronic modules, electric motors and inductive devices
are classified into categories and subcategories, which determine the appropriate test requirements.
Electronic module categories:
- 
P:  A passive electrical component or module.  Examples: resistor, capacitor, blocking or clamping
diode
- 
A:  A component or module that contains active electronic devices.  Examples: an analog op amp
circuit, switching power supply or microprocessor controller.
- 
B:  An electronic component that operates without a wiring connection to the vehicle (e.g. tire
pressure monitor).
- 
HV:  Components that operate at high voltage (greater than 60 V) for electric vehicle power
systems.

<!-- 第 7 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 7
Electronic module subcategories, if they apply, are in addition to the basic category designation.
- 
C:  An electronic component that is subject to direct radiation to and from the circuit board below
200 MHz.  This is usually an unshielded component that has at least one dimension greater than
200 mm (e.g. instrument cluster, displays utilizing HV technologies).
- 
S:  An electronic component or module operated from a regulated power source in another
module.  This is usually a sensor providing input to a controller.
- 
MS:  An electronic component or module that contains magnetically sensitive elements.
- 
Y:  An electronic module that contains an electric or electronically controlled motor or a
magnetically operated relay within its package.
Electric motor categories:
- 
BCML:  A long operating duration or auto cycle brush commutated dc electric motor.
- 
BCMS:  A short operating duration brush commutated dc electric motor.
- 
ECM:  An electronically controlled or commutated dc electric motor.
Inductive device categories:
- 
R:  Relays and solenoids pulsed at a rate less than 100 Hz.
- 
IP:  Inductive devices pulsed at a rate of 100 Hz or greater
CE.  Conducted emission test.
CG.  Chrysler Group (DaimlerChrysler Corp., DaimlerChrysler Canada, DaimlerChrysler de Mexico, etc.).
CISPR.  An acronym for “Comité International Spécial des Perturbations Radioeléctriques” (Special
International Committee on Radio Interference).
Component.  Device that contains passive or active electrical or electronic elements, also referred to as
a module.
Controlled Manner.  Refers to the response of the DUT to an applied stimulus.  A response is
considered controlled when the operation of the DUT and its system returns to normal after the stimulus
is removed (see function performance status, status II).
Coupling Clamp.  A coupling clamp is a device with defined dimensions and characteristics for the
common-mode coupling of a disturbance with a test circuit without electrical connection to it.
Damage.  A DUT is considered damaged when it no longer performs as specified in the DUT product
specification or shows visual evidence (such as discoloration) of electrical or electronic components that
have exceeded their ratings.
dBc.  The ratio of the amplitude of the harmonics of the RF carrier to the RF carrier fundamental
frequency amplitude, in dB.
dBpT.  dB picotesla (160 dBpT or 10-4 tesla = 1 gauss).
DC.  DaimlerChrysler.
Dedicated Lines.  Lines connecting the DUT to a sensor, load or similar input or output without a
conductive path, other than ground, to any other module or the vehicle electrical power system.
Diagnostic Indication.  An output from the DUT that indicates system status and predefined failure
conditions.  This output might be an indicator light or a data link to a diagnostic readout.

<!-- 第 8 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 8
Disturbance.  Any electrical transient or electromagnetic phenomenon that may affect the proper
operation of an electrical or electronic device (see stimulus).
DUT.  An acronym for Device(s) Under Test.  Any electrical or electronic component, module, motor, filter,
etc.  Also referred to as EUT or equipment under test.
DUT PF.  The DaimlerChrysler Corporation Performance Standard for the DUT (see product
specification).
DV.  Design Verification (parts not from production tooling, A or B samples for MCG).
E/E.  Electrical and/or Electronic.
Effect.  A detectable change in DUT performance due to an applied stimulus.
Effect Threshold.  A repeatable transition of the DUT from normal to affected operation occurring at a
value or over a range of values of an electrical test parameter.
Electronically Controlled Motor.  A motor that has active electronic devices as part of the motor
package.
Engineering Standard.  An Engineering Standard contains information that would be too voluminous or
repetitive to include in the CAD model or Engineering Graphic Overview.  It is a written normative
specification that describes material, process, performance, reliability, quality, and/or design requirements
for a production part, family of parts, or system.  Standards contain common requirements, procedures,
processes, acceptance criteria, and/or guidelines.  Standards are documented agreements containing
technical specifications or other precise criteria to be used consistently as rules, requirements,
procedures, processes or definitions of characteristics, to ensure that materials, products, processes, and
services are fit for their purpose.
ESD.  Electrostatic discharge.
ESD - Air Discharge.  Test method whereby the electrode of the test generator is brought near the DUT
and discharge is accomplished through an arc to the DUT.
ESD - Contact Discharge.  Test method whereby the electrode of the test generator is brought into
contact with the DUT and the discharge is triggered by the discharge switch located on the generator.
ESD - Indirect Discharge (Field Coupled).  A discharge onto a coupling plane or strip in the vicinity of
the DUT or its wiring harness simulating an ESD discharge to objects in the vicinity of the component as
installed in the vehicle.
Fail-safe Mode.  A predictable operating mode intended to minimize adverse effects by restricting or
shutting down operation when a significant stimulus has made operation unreliable.  Operation shall be
recoverable after the stimulus is removed without permanent loss of function or corruption of stored data
or diagnostic information.
Function.  The intended operation of an electrical or electronic module for a specific purpose.  The
module can provide many different functions, which are, defined (functional group and acceptable
performance) by the module specification.
Functional Group.  Component or module functions are divided into four groups based on criticality of
function.  Immunity requirements are appropriate for the functional group - refer to Annex A for functional
group classification examples:
- 
Group A:  Any function that provides a convenience.
- 
Group B:  Any function that enhances, but is not essential to, the operation and/or control of the
vehicle.
- 
Group C:  Any function that controls or affects the essential operation of the vehicle.
-

<!-- 第 9 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 9
- 
Group D:  Any function that electronically controls the deployment of an electro explosive device
(EED) actuated passive restraint system with the potential for inadvertent deployment.
[Refer to definitions and background in MIL-STD-1576 (USAF)]
Function Performance Status.  The performance of DUT functions, when subjected to a disturbance, is
described by four performance status levels:
- 
Status I:   The function operates as designed during and after exposure to a disturbance.
- 
Status II:  The function may deviate from designed performance, to a specified level, during
exposure to a disturbance or revert to a fail-safe mode of operation, but shall return to
normal operation after the disturbance is removed (see fail-safe mode).  Performance
deviations from the DUT shall not inhibit other DUT or systems causing them to exhibit a
Status III (e.g. through loss of critical communications).
- 
Status III: The function may deviate from designed performance during exposure to a disturbance.
Operator action may be required to return the function to normal operation after the
disturbance is removed (e.g. ignition off/on).
- 
Status IV: The device/function shall not sustain any permanent damage as a result of exposure to a
disturbance.  Dealer action may be required to return the function to normal operation
after the disturbance is removed (e.g. battery reset, replace fuse, disconnect module).
Function Status Classification.  The required operation of vehicle electronic systems, when subjected
to a stimulus, defined in terms of functional group (criticality of function) and function performance status.
HIRF.  High Intensity Radiated Field.
Inductive Device.  An electromechanical device that stores energy in a magnetic field.  Examples are
solenoids, relays, buzzers and electromechanical horns.
Informative.  Additional (not normative) information intended to assist the understanding or use of the
standard.
Insulating Spacer.  Non conductive material with a relative permittivity r < 2.5 and a relative permeability
µr < 2.
I/O.  Input and output.  Also used in this document to designate the transient pulse testing on I/O-lines.
MCG.  Mercedes Car Group.
Motor - Auto Cycle.  A motor that cycles automatically, without direct operator input.  These motors are
considered to be the same as long operating duration motors for EMC performance.  Examples are
radiator fan or ABS pump motors.
Motor - Long Operating Duration.  A motor that is expected to be in operation for extended periods of
time.  (Also applies for other broadband sources.)  Examples are blower and wiper motors.
Motor - Short Operating Duration.  A motor that operates for short periods of time under operator
control.  (Also applies for other broadband sources.)  Examples are power window, seat or mirror motors.
Motor - Very Short Cycle.  A motor that operates a single cycle of less than one second duration under
operator control (e.g. a power door lock actuator).
NIST.  An acronym for National Institute of Science and Technology.
Normative.  Provisions that are necessary to meet requirements.
PCB.  Printed Circuit Board.
PCE.  Pin-conducted emission test.
PF.  Performance Standard.

<!-- 第 10 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 10
Powered-down State.  A DUT connected in its operating configuration with battery power applied but
ignition or switched power turned off and all active functions timed out (eg. sleep state).
PRF.  Pulse repetition frequency.
Product Specification.  A DaimlerChrysler Performance Standard (PF), Lastenheft (final specification),
Pflichtenheft (performance specification), CATIA model or other document used to specify the EMC
requirements for a vehicle component or system.
PTB.  Physikalisch-Technische Bundesanstalt (German National Institute of Natural and Engineering
Sciences)
PV.  Production Validation (parts from production tooling, C and D samples for MCG).
PWM.  Pulse Width Modulated or Modulation.
Qualification:  The process of confirming that a product design meets its technical requirements.  This
process applies to new designed electrical components, components specifying validation or with any
component modifications, alterations, internal component changes, hardware or software changes.
RE.  Radiated emission test.
RF Boundary.  An element of an EMC test setup that determines what part of the harness and/or
peripherals is included in the RF environment and what is excluded.  It may consist of, for example, ANs,
BANs, filter feed-through pins, RF absorber coated wire and/or RF shielding.  Also: An RF-test-system
implementation within which circulating RF currents are confined to the intended path between the DUT
port under test and the RF-generator output port, in the case of immunity measurements, and to the
intended path between the DUT port(s) under test and the measuring apparatus input port, in the case of
emissions measurement, and outside of which stray RF fields are minimized.  The boundary is
maintained by insertion of BANs, shielded enclosures, and/or decoupling or filter circuits.
Section.  Refers to a major subdivision of this standard or a Laboratory Procedure.
Shall.  Denotes a requirement.
Should.  Denotes a recommendation.
SIS.  Standards Information System
Stability.  The condition where the DUT maintains control (Status I), within defined limits, of a specific
function in the presence of an applied stimulus.
Stimulus.  A change induced in the electrical environment of the DUT by any system perturbation.  This
change may include, but not limited to applied voltage level, transient, ac signal or RF field.
Substitution Method.  The substitution method is a technique for mapping out the power required to
produce a target RF field intensity in an empty test chamber at a designated reference position.  When
the test object is introduced into the test chamber, this previously determined reference power is then
used to produce the exposure field.
Supply Voltage.  The voltage that will be available in the vehicle or as simulated on the bench to power
the DUT.  This voltage is applied to the battery and ignition lines and any DUT inputs or outputs sourced
from battery or ignition voltage as configured in a DUT's complete system including circuit protection.
This includes lines such as voltage sense, illumination and loads sourced from supply voltage and
switched to ground in the DUT.
System Nominal Voltage.  The nominal voltage of the onboard power system, which may be: 12, 24 or
42 V.
TEM.  Transverse electromagnetic.  Used in this document also as an abbreviation for “TEM cell test”.
TEM Cell.  An enclosed system, often a rectangular coaxial line, in which a wave is propagated in the
transverse electromagnetic mode to produce a specified field for testing purposes.

<!-- 第 11 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 11
Regulated Substances and Recyclability
All materials, procedures, processes, components, or systems must conform to the current regulatory
(governmental) requirements regarding regulated substances and recyclability.
Test Requirements and Functional Status Classification
5.1
General
All test equipment used for measurement shall be calibrated in accordance with ISO 17025. Attention
shall be directed to control of the RF boundary in both emission and immunity tests to reduce undesired
interaction between the device under test, the test apparatus and the electromagnetic environment.  The
test equipment, test setups and test procedures shall be documented in lab procedures.  DaimlerChrysler
reserves the right to inspect the lab procedures.  The DUT test plan shall specify the number of samples
to be tested.  A DUT is expected to pass all tests, regardless of the order of testing.
A test fixture, or DUT exerciser, provided by the supplier shall be used to electrically simulate the DUT
vehicle system and to exercise all of the required functions of the DUT.  This system exerciser shall
operate during the DUT testing without adverse effect.  The system exerciser shall be able to simulate the
appropriate load characteristics, i.e., equivalent resistance, capacitance and inductance as expected in a
production vehicle.  Production intent components should be used for the loads where ever possible. This
is particularly critical for inductive and pulse width modulated (PWM) circuits (e.g. motors).  Refer to DC-
11225, EMC Supplemental Information and Alternative Component Requirements, Annex D for
termination information for CAN and LIN bus.
For emission and immunity tests that require a shielded enclosure, connections to the DUT support
equipment shall not compromise the shielded enclosure.  This may be accomplished by either having the
DUT support equipment located in the shielded enclosure or, for remotely located support equipment, by
using feedthrough filters inline or optical links between the DUT and the support equipment.  The inline
filters shall be in a shielded box with a shielded cable from this box to the enclosure wall. Take care that
the emissions of optical links is at least 6 dB below the limits and that the immunity is higher than the
required test level.
Additional information for CG testing is available in DC-11225, EMC Supplemental Information and
Alternative Component Requirements, Annex E.
5.2
Test Conditions
All dimensions in this document are in millimeters unless otherwise specified. The default tolerances, test
voltages are stated in ISO 11452-1 with the tolerance on ambient temperature understood to be a normal
target range and not a controlled range.
5.3
Test Plan
A test plan developed by the supplier and approved by the DC EMC Engineer should be completed prior
to component EMC testing. Test plan templates are available.
The test plan shall provide any additional information that was not included in the product specification
and that is needed for the proper testing of the component.  Any additions or deviations after test plan
approval shall be approved by the DC EMC team prior to testing.
The test plan for the DUT shall include:
 
The DUT identification (manufacturer, model, serial number, hardware and software version, etc.)
 
The voltage, current and appropriate impedance information for each pin
 
The number of samples to be tested
 
The test modes identified and functional groups defined.

<!-- 第 12 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 12
 
The tests to be performed specifying any available options (for alternative tests, if both are performed,
a failure of either test is a failure of the overall requirement)
 
The DUT setup information (measuring equipment involved, cabling including lengths, etc.)
 
Failure criteria (to determine functional status and monitoring)
 
All loading requirements defined (CAN or LIN bus, motor, etc.)
 
Critical timing or operating parameters that may affect the testing of the DUT
5.4
Function Performance Status Classification
For immunity testing, the required operation of vehicle electronic systems, when subjected to an
electromagnetic stimulus, is described by criticality of function (group) and function performance status.
Refer to definitions for function, functional group and function performance status and Annex A for
examples.
5.5
Test Report and Statement
On completion of the test, the results shall be submitted to the responsible releasing engineer. In addition,
a copy of the test report, test setup and all data results shall be supplied to the DC EMC team within
DaimlerChrysler prior to vehicle validation. Electronic data submission is preferred.
The test report shall include:
- 
A reference to the test plan and/or product specification of the component
- 
A statement certifying the execution of the tests in accordance with this standard and compliance with
its requirements
- 
Documentation of the test setup and any loading used including photographs
- 
Equipment list
- 
Thresholding information for any immunity anomalies observed
Use the test report template provided by the DC EMC team or provide the same information contained or
requested by the template.
Emissions (Emitted Disturbances)
6.1
General
Active devices and electronically controlled motors (categories A and ECM) shall be tested from 150 kHz
to 2.5 GHz. Refer to Table 1 to determine which emissions tests are required for the category (and
subcategory) that applies to the DUT.
- 
For categories A and ECM:
CISPR 25 voltage on supply lines and CISPR 25 current measurement on all lines shall be performed in
the frequency range from 150 kHz to 110 MHz.  For high voltage (HV) electric vehicle (EV) or hybrid
electric vehicle (HEV) components using shielded power supply lines, the CISPR 25 voltage
measurement is not required.   For components without a wiring harness, the CISPR 25 voltage and
current measurements are not required.
CISPR 25 radiated emissions shall be performed from 76 MHz to 2.5 GHz, as specified. For subcategory
C modules the CISPR25 radiated emission test shall additionally be performed between 150 kHz and 76
MHz.
- 
For (category BCM) and pulsed inductive devices (category IP)
RF link systems will have emissions at their operating frequency and these emissions may exceed the
emission limits specified for that band.  Typically, these emission requirements are to control the

<!-- 第 13 页 -->
BCM and IP
Categories
Categories
CISPR 25 (voltage only)
CISPR 25 (voltage+current)
A and ECM
(subcategory C only)
6.1.1
Measuring Instruments and Settings
Minimum receiver measurement times are in Table 2.
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 13
emissions from unintended radiators in order to protect the operation of RF link devices and are not
intended to inhibit the range or operation of these RF link systems themselves.  The EMC test plan
should take this into account.
Long operating duration or auto cycle brush commutated electric motors shall be tested for RF emissions
over the frequency range from 150 kHz to 200 MHz using the CISPR 25 voltage method.  For categories
BCM and IP the average measurement may be omitted since the emissions of these categories are
purely broadband in nature.  Short duration motors, if they are configured to accommodate a drop in part
for RF suppression (i.e. no retooling) are only required to meet the RF emissions basic limits if agreed
upon between DCX and the supplier, otherwise the full CISPR 25 voltage testing is required.
Passive devices (category P) or very short cycle motors are not tested for RF emissions.  See Figure 1.
CISPR 25 (radiated)
f
150kHz
76MHz 110MHz
200MHz
2.5GHz
1GHz
Figure 1:  Test Methods versus Frequency
The limits are defined for average, peak and quasi-peak detectors. The limit tables of each method
specify which detectors to use in which frequency band and give the measurement bandwidth of the
receiver.
For the protection of on-board receivers, limits are specified for the receiver bands. Both basic and on-
board receiver limits shall be met (Average and Peak or Average and QP).
E/E subcategory Y, motors and inductive devices and systems shall fulfill the requirements for transient
emissions as specified in paragraph 6.5.
Action shall be taken to ensure that the DUT emits its maximum disturbance power (occurring during
normal operation) during the measurement, e.g. proper mechanical loading of electric motors
corresponding to their vehicle application or for PWM 50% duty cycle.
For receivers, frequency step sizes shall be  50% of the measurement bandwidth for P and AV detectors
unless otherwise specified in the product specification and/or test plan.  When a QP detector is used, or
for broadband emission testing of category BCM or IP components, the frequency step size shall be  5
times the measurement bandwidth.

<!-- 第 14 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 14
Table 2:  Minimum Receiver Measurement Time
Detector Type
Minimum Measurement Time
[ms]
Peak (P) or Average (AV)
Quasi-peak (QP)
Fast emission measurement methods incorporating FFT (fast Fourier transform) may be used to reduce
test time.  It shall be demonstrated that, for the software used, the detectors and resolution bandwidths
implemented work correctly according to the CISPR 16-1-1 requirements.  For the verification of the
detector response to pulses with different repetition rates (e.g. section 4.4.2 in CISPR 16-1-1 for quasi-
peak detector), higher detector readings for repetition rates of the test pulses below 20 Hz are allowed.  If
measurements using FFT methods exceed the specified emission limits and if these limits are required for
compliance with regulatory requirements, then these measurements shall be verified using another
CISPR 16-1-1 compliant measuring instrument.
6.2
CISPR 25 Conducted RF Emissions - (Voltage on Supply Lines)
Radio disturbance emissions conducted along supply lines shall be measured in accordance with
CISPR 25 within the frequency range of 150 kHz to 110/200 MHz (see Figure 1) using one or several
artificial networks (ANs) allowing the decoupling of the disturbance voltage.
6.2.1
Requirement
The measurement settings and limit values are defined in Tables 3, 4, and 5. Table 3 contains the basic
region are given in Table 4 (on-board receiver bands). All bands from Table 3 and those from Table 5
called out in the DUT product specification shall be measured and the limits met.
Table 3: Basic Limit Levels. CISPR 25 Voltage Method.
Peak
Quasi-Peak
Average
Level
BW 
Level
BW 
Level
BW 
Test No.
Frequency Range
(MHz)
dB (µV)
kHz
dB (µV)
kHz
dB (µV)
kHz
CE V 1 1)
0.15 – 0.5
104-45.9*lg(f/0.15) 2)
9/10
- 
- 
- 
- 
CE V 2 1)
0.5 – 6.3
9/10
- 
- 
- 
- 
CE V 3 1)
6.3 – 30
9/10
- 
- 
- 
- 
CE V 4
30 – 110
1000 3)
- 
- 
1000 4)
CE V 5
110 – 200
1000 3)
- 
- 
1000 4)
Notes: 1)   required only for category BCM and IP
2)   In the formulas, f is in MHz and lg denotes the logarithm to base 10

<!-- 第 15 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 15
Table 4:  Required Emission Test Bands by Marketing Region
Markets
Required test bands for broadcast and mobile services – test numbers from Table
All vehicles: 1, 2, 14, (20)
Opt. 1 (if TV available for car line): 17, 18, (19)
Opt. 2 (fleet vehicles): 31, (32), 45, (47, 48, 49)
Opt. 3 (heavy trucks): 5 - 9, 25
Opt. 4 (add. SW broadcast): 3  5-13
ECE
All vehicles: 2, 14, 26, 32
Opt. 1 (fleet vehicles): 44, (46)
Opt. 2 (if weather band avail.): (15)
JP 
2, 14, 18, (19)
RoW
(Rest of World)
NA
2, 14, 32
Note: The test numbers in parentheses required only for BCM and IP.
Table 5:  On-board Receiver Limits. CISPR 25 Voltage Method.
Peak
Quasi-Peak
Average
Level
BW 
Level
BW 
Level
BW 
Test No.
Service or
Frequency
Band
(MHz)
dB (µV)
kHz
dB (µV)
kHz
dB (µV)
kHz
Broadcast
LW 
0.15 – 0.28
- 
- 
9/10
9/10
MW (AM)
0.52 – 1.73
- 
- 
9/10
9/10
SW 75m
3.85 – 4.0
- 
- 
9/10
9/10
SW 49m
5.8 – 6.3
- 
- 
9/10
9/10
SW 41m
7.1 – 7.6
- 
- 
9/10
9/10
SW 31m
9.3 – 10.0
- 
- 
9/10
9/10
SW 25m
11.5 – 12.1
- 
- 
9/10
9/10
SW 22m
13.5 – 13.9
- 
- 
9/10
9/10
SW 19m
15.0 – 15.8
- 
- 
9/10
9/10
SW 16m
17.4 – 17.9
- 
- 
9/10
9/10
SW 15m
18.9 – 19.1
- 
- 
9/10
9/10
SW 13m
21.4 – 21.9
- 
- 
9/10
9/10
SW 11m
25.6 – 26.1
- 
- 
9/10
9/10
VHF (FM)
76 – 108
- 
- 
100/120
100/120
WB 
162.4 –
162.55
- 
- 
100/120
100/120
TV I
41 – 88
1000 1)
- 
- 
1000 2)
TV II
90 – 108
1000 1)
- 
- 
1000 2)
TV III
174 – 200
1000 1)
- 
- 
1000 2)
DAB
174 – 200
1000 1)
- 
- 
1000 2)
Mobile
Services
Communication 26.5 – 29.7
47 3)
9/10
34 3)
9/10
9/10
Communication
30 – 54
100/120
- 
- 
9/10
4m 
65 – 88
43 3)
100/120
30 3)
100/120
100/120

<!-- 第 16 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 16
Peak
Quasi-Peak
Average
Level
BW 
Level
BW 
Level
BW 
Test No.
Service or
Frequency
Band
(MHz)
dB (µV)
kHz
dB (µV)
kHz
dB (µV)
kHz
2m 
140 – 180
43 3)
100/120
30 3)
100/120
100/120
Fleet Mobile
Services
Fleet (US)
40 – 44
- 
- 
- 
- 
9/10
Fleet (EU)
84.015 –
87.255
- 
- 
- 
- 
9/10
Fleet (US)
140 – 180
- 
- 
- 
- 
9/10
Fleet (EU)
147 – 164
- 
- 
- 
- 
9/10
Fleet (EU)
167.56 –
169.38
- 
- 
- 
- 
9/10
Fleet (EU)
172.16 –
173.98
- 
- 
- 
- 
9/10
Notes:
3)   for test no. 24, 30 and 31 choose either Peak or QuasiPeak detector
Shaded frequency bands are the corresponding numbered bands in parentheses from Table 4
6.2.2
Test setup
Test setup is described in detail in CISPR 25. The test setups for devices under test with several supply
voltages shall be implemented using the appropriate number of ANs.  The RF emissions for each power
line must be measured independently.
6.3
CISPR 25 Conducted RF Emissions - (Current on all Lines in Harness)
The emitted radio disturbance currents shall be measured on the wiring harness in accordance with
CISPR 25 using a current probe within the frequency range of 150 kHz to 110 MHz including the power
leads in the current probe. The power supply shall be connected via an artificial network (AN) in
accordance with CISPR 25.
6.3.1
Requirements
The measurement settings and limit values are defined in Table 6, 7, and 8. Table 6 contains the basic
region are given in Table 7 (on-board receiver bands). All bands called out in the DUT product
specification shall be measured and the limits met.
Table 6: Basic Limit Levels. CISPR 25 Current Method.
Peak
Quasi-Peak
Average
Level
BW 
Level
BW 
Level
BW 
Test No.
Frequency Range
(MHz)
dB (µA)
kHz
dB (µA)
kHz
dB (µA)
kHz
CE A 1
30 – 110
1000 1)
- 
- 
1000 2)

<!-- 第 17 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 17
Table 7:  Required Emission Test Bands by Marketing Region
Markets
Required test bands for broadcast and mobile services – test numbers from Table
All vehicles: 1, 2, 14
Opt. 1 (if TV available for car line): 17, 18
Opt. 2 (fleet vehicles): 31, 45
Opt. 3 (heavy trucks): 5 - 9, 25
Opt. 4 (add. SW broadcast): 3  5 - 13
ECE
NA 
All vehicles: 2, 14, 26
Opt. 1 (fleet vehicles): 44
JP 
2, 14, 18
RoW
(Rest of World)
2, 14
Table 8:  On-board Receiver Limits. CISPR 25 Current Method.
Peak
Quasi-Peak
Average
Level
BW 
Level
BW 
Level
BW 
Test No.
Service or
Frequency
Band
(MHz)
dB (µA)
kHz
dB (µA)
kHz
dB (µA)
kHz
Broadcast
LW 
0.15 – 0.28
- 
- 
9/10
9/10
MW (AM)
0.52 – 1.73
- 
- 
9/10
9/10
SW 75m
3.85 – 4.0
- 
- 
9/10
9/10
SW 49m
5.8 – 6.3
- 
- 
9/10
9/10
SW 41m
7.1 – 7.6
- 
- 
9/10
9/10
SW 31m
9.3 – 10.0
- 
- 
9/10
9/10
SW 25m
11.5 – 12.1
- 
- 
9/10
9/10
SW 22m
13.5 – 13.9
- 
- 
9/10
9/10
SW 19m
15.0 – 15.8
- 
- 
9/10
9/10
SW 16m
17.4 – 17.9
- 
- 
9/10
9/10
SW 15m
18.9 – 19.1
- 
- 
9/10
9/10
SW 13m
21.4 – 21.9
- 
- 
9/10
9/10
SW 11m
25.6 – 26.1
- 
- 
9/10
9/10
VHF (FM)
76 – 108
- 
- 
100/120
100/120
TV I
41 – 88
1000 1)
- 
- 
1000 2)
TV II
90 – 108
1000 1)
- 
- 
1000 2)
Mobile
Services
Communication 26.5 – 29.7
13 3)
9/10
0 3)
9/10
9/10
Communication
30 – 54
100/120
- 
- 
9/10
4m 
65 – 88
9 3)
100/120
-4 3)
100/120
100/120
Fleet Mobile
Services
Fleet (US)
40 – 44
- 
- 
- 
- 
9/10
Fleet (EU)
84.015 –
- 
- 
- 
- 
9/10

<!-- 第 18 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 18
Peak
Quasi-Peak
Average
Level
BW 
Level
BW 
Level
BW 
Test No.
Service or
Frequency
Band
(MHz)
dB (µA)
kHz
dB (µA)
kHz
dB (µA)
kHz
87.255
3)   for test no. 24 and 30 choose either Peak or QuasiPeak detector
6.3.2
Test setup
CISPR 25 applies with the following exceptions:
- 
The test harness shall be 1700 (+ 300, - 0) mm long and routed 50 mm above the ground plane (this harness can also be used for BCI or ALSE testing);
harness can also be used for BCI or ALSE testing);
- 
Ground leads that are shorter than 1m, or not included in the wiring harness, shall be taken out of the
current probe.
- 
Measurements shall be taken at the following points;
- 
at a distance of 50 ± 10 mm from the DUT connector or case over all frequencies;
- 
at a distance of 750 ± 50 mm from the DUT connector or case for frequencies above 30 MHz;
For a schematic diagram of the measuring setup, refer to Figure 2.

<!-- 第 19 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 19
-
+
200 min.
2500 min
1700 +300 / - 0
Key:
Device under test (connected to ground if specified
in the test plan)
Wiring harness
Load simulator (placement and ground connection
according to ISO 11452-4)
Stimulation and monitoring system
Power supply
AN
Figure 2: Measurement of Radio Disturbance Currents Conducted along the Wiring Harness
Copyright DaimlerChrysler
500 min
100 min


Optical fibers
Measurement equipment
Current probe (represented at 2 positions)
10.    The distance from the DUT to the closest probe
position
Ground plane (connected to the shielded room)
Insulating support
13.    Shielded room

<!-- 第 20 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 20
6.4
CISPR 25 Radiated Emissions
The emission of components shall be measured in accordance with CISPR 25 in an absorber-lined
shielded enclosure (ALSE) with an antenna or antennas in the frequency range of 75 MHz to 1000/2500
MHz as specified in the product specification. For subcategory C modules, the frequency range is
extended down to 150 kHz.
6.4.1
Requirements
The measurement settings and limit values are defined in Tables 9, 10, and 11. Table 9 contains the
basic limits for the continuous frequency range. The required frequency bands from Table 11 by
marketing region are given in Table 10 (on-board receiver bands).  All basic limit level requirements and
bands defined by marketing region or product specification shall be met..
Table 9: Basic Limit Levels. CISPR 25 ALSE Method.
Peak
Average
Level
BW 
Level
BW 
Test No.
Frequency Range
(MHz)
dB (µV/m)
kHz
dB (µV/m)
kHz
CE R 1 4)
30 – 75
68 - 25.13 lg(f/30) 1)
1000 2)
58 - 25.13 lg(f/30) 1)
1000 3)
CE R 2
75 – 400
58 + 15.13 lg(f/75) 1)
1000 2)
48 + 15.13 lg(f/75) 1)
1000 3)
CE R 3
400 - 1000
1000 2)
1000 3)
Notes: 1)   In the formulas, f is in MHz and lg denotes the logarithm to base 10
3)   if using 100/120 kHz instead of 1000 kHz, lower limit level by 4dB.
4)    required only for subcategory C components
Table 10:  Required Emission Test Bands by Marketing Region
Markets
Required test bands for broadcast and mobile services – test numbers from Table
All vehicles: (1, 2), 14, 16, 20, 23, 30, 36, 38, 40-43
Opt. 1 (if TV available for car line): (17), 19, 22
Opt. 2 (fleet vehicles): (31), 32, 33, 45, 47, 48, 49
Opt. 3 (heavy trucks): (5 - 9, 25)
Opt. 4 (add. SW broadcast): (3  5 -13)
ECE
All vehicles: (2), 14, 16, 28, 30, 35, 39, 42
Opt. 1 (fleet vehicles): (26), 29, 32 and 44, 46, 50 if specified in test plan
Opt. 2 (if weather band available): (15)
Opt. 3 (If SDARS available): 24
Opt. 4 (if Bluetooth or WLAN available): 43
JP 
(2), 14, 16, (17), 18, 19, 21, 27, 34, 37, 43
RoW
(Rest of World) (2), 14, 16, 36, 38
NA
Note: The test numbers in parentheses required only for subcategory C components.

<!-- 第 21 页 -->
Frequency
Range
Band
Broadcast
Mobile
Services
ISM (JP)
(Immobilizer,
PEM, RKE,
TPM)
ISM (US)
(Immobilizer,
TPM)
316 – 3205)
100/120
- 
-
PEM, RKE,
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 21
Table 11:  On-board Receiver Limits. CISPR 25 ALSE Method.
Peak
Quasi-Peak
Average
Level
BW 
Level
BW 
Level
BW 
Test No.
Service or
(MHz)
dB 
(µV/m)
kHz
dB 
(µV/m)
kHz
dB 
(µV/m)
kHz
1 4)
LW 
0.15 – 0.28
- 
- 
9/10
9/10
2 4)
MW (AM)
0.52 – 1.73
- 
- 
9/10
9/10
3 4)
SW 75m
3.85 – 4.0
- 
- 
9/10
9/10
4 4)
SW 49m
5.8 – 6.3
- 
- 
9/10
9/10
5 4)
SW 41m
7.1 – 7.6
- 
- 
9/10
9/10
6 4)
SW 31m
9.3 – 10.0
- 
- 
9/10
9/10
7 4)
SW 25m
11.5 – 12.1
- 
- 
9/10
9/10
8 4)
SW 22m
13.5 – 13.9
- 
- 
9/10
9/10
9 4)
SW 19m
15.0 – 15.8
- 
- 
9/10
9/10
10 4)
SW 16m
17.4 – 17.9
- 
- 
9/10
9/10
11 4)
SW 15m
18.9 – 19.1
- 
- 
9/10
9/10
12 4)
SW 13m
21.4 – 21.9
- 
- 
9/10
9/10
SW 11m
25.6 – 26.1
- 
- 
9/10
9/10
VHF (FM)
76 – 108
- 
- 
100/120
100/120
WB 
162.4 –
162.55
- 
- 
100/120
100/120
16 4)
GPS
- 
- 
- 
- 
100/120
TV I
41 – 88
1000 1)
- 
- 
1000 2)
TV II
90 – 108
1000 1)
- 
- 
1000 2)
TV III
174 – 230
1000 1)
- 
- 
1000 2)
DAB
174 – 241
1000 1)
- 
- 
1000 2)
TV IV/V (JP)
470 – 770
1000 1)
- 
- 
1000 2)
TV IV/V
470 – 862
1000 1)
- 
- 
1000 2)
DAB (L-Band)
1000 1)
- 
- 
1000 2)
SDARS
1000 1)
- 
- 
1000 2)
25 4)
Communication 26.5 – 29.7
34 3)
9/10
21 3)
9/10
9/10
26 4)
Communication
30 – 54
100/120
- 
- 
9/10
311 – 3175)
100/120
- 
- 
9/10
310 – 3145)
9/10
314 – 3165)
9/10
9/10
Communication
420 – 520
100/120
- 
- 
9/10
ISM
430 – 4335)
100/120
- 
- 
9/10

<!-- 第 22 页 -->
Frequency
Range
Band
TPM)
435 – 4385)
PEM, RKE,
Cell Phone
Cell Phone (D-
Cell Phone
(PDC)
Cell Phone
(GSM-1800)
Cell Phone
(GSM-1900)
Cell Phone
(UMTS)
Cell Phone
(UMTS)
Cell Phone
(UMTS,
WCDMA)
Bluetooth,
WLAN
Fleet Mobile
Services
3)   for test no. 24, 30 and 31 choose either Peak or QuasiPeak detector
4)   required only for subcategory C components
5)   if the component is packaged in vehicle within 0.5 meter next to Immobilizer/TPM
     receiver/RKE
     antenna/Remote Start antenna, lower limit level by 4 dB
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 22
Peak
Quasi-Peak
Average
Level
BW 
Level
BW 
Level
BW 
Test No.
Service or
(MHz)
dB 
(µV/m)
kHz
dB 
(µV/m)
kHz
dB 
(µV/m)
kHz
433 – 4355)
9/10
(Immobilizer,
9/10
31 4)
4m 
65 – 88
31 3)
100/120
18 3)
100/120
100/120
2m 
140 – 180
31 3)
100/120
18 3)
100/120
100/120
TETRA/Trunking
380 – 430
100/120
- 
- 
100/120
(PDC)
860 – 885
100/120
- 
- 
100/120
AMPS)
851 – 894
100/120
- 
- 
100/120
Cell Phone
(GSM-900)
925 – 960
100/120
- 
- 
100/120
100/120
- 
- 
100/120
100/120
- 
- 
100/120
100/120
- 
- 
100/120
1000 1)
- 
- 
1000 2)
1000 1)
- 
- 
1000 2)
1000 1)
- 
- 
1000 2)
1000 1)
- 
- 
1000 2)
44 4)
Fleet (US)
40 – 44
- 
- 
- 
- 
9/10
Fleet (EU)
84.015 –
87.255
- 
- 
- 
- 
9/10
Fleet (US)
140 – 180
- 
- 
- 
- 
9/10
Fleet (EU)
147 – 164
- 
- 
- 
- 
9/10
Fleet (EU)
167.56 –
169.38
- 
- 
- 
- 
9/10
Fleet (EU)
172.16 –
173.98
- 
- 
- 
- 
9/10
Fleet (US)
420 – 520
- 
- 
- 
- 
9/10
Shaded frequency bands are the corresponding numbered bands in parentheses from Table 10

<!-- 第 23 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 23
6.4.2
Test setup
The test setup is given in detail in CISPR 25. The outer surface of the DUT with the greatest disturbance
emission shall be facing the antenna. For frequencies above 1 GHz the phase center of the antenna
should be in line with the DUT (i.e. in front of the DUT instead of in front of the middle of the harness).
6.5
Conducted Transient Emissions
Motors and inductive devices (Category R or IP) are to be tested.  If the subsystem containing the motor
or inductive device has a suppression component remotely located at a driver in a module, the inductive
device must be tested as a system with the module or with the suppression simulated across the
inductive device.  Conducted transient emissions shall be measured in accordance with ISO 7637-2, fast
transient setup.
6.5.1
Requirement
The DUT, when tested under operating load typical for its intended application, shall conform to the
following restrictions on switching transients.  The DUT shall be tested with the fast transient setup from
ISO 7637-2. The measured transients are limited to +100/-150 volts when the pulse duration (measured
at the 10%-amplitude) is smaller than 100 µs. If it is greater than or equal to 100 µs, the limit is +80 volts
for 12 V and 42 V systems, and +80/-150 volts for 24 V systems.
6.5.2
Test
For details on the test setup, refer to ISO 7637-2, fast transient setup.
Measure the transient voltages generated by the DUT (motor, inductive device or module) with a storage
scope (sampling rate of 1 giga samples per second minimum) while exercising the DUT functions and
while turning the DUT on and off ten times using the appropriate vehicle system switch or relay or a
switch or relay specified in the test plan.  Use an AN between the power supply and the DUT.  The
conducted transient is measured across the DUT with the power switched on the load (DUT) side of the
AN.  The rise time, peak voltage and pulse width shall be captured and recorded.
All motors shall be tested in both directions (if applicable), on to off, off to on, stall and during a directional
change.
RF Immunity
7.1
General
RF Immunity testing shall be performed over the frequency range of 1 MHz to 3.2 GHz.  Refer to Table 1
to determine which immunity tests are required for the category (and subcategory) that applies to the
DUT.
- 
RF immunity testing is performed from 1 to 400 MHz using a conducted test method and from 200
MHz to 3.2 GHz using a radiated test method.
- 
Use BCI (refer to 7.2) for conducted immunity testing from 1 MHz to 400 MHz.
- 
Select either ALSE with a ground plane (refer to 7.3) or without ground plane (refer 7.4) for radiated
immunity testing from 200 MHz to 3.2 GHz.
- 
Determine if TEM cell testing (refer to 7.5) is also required (subcategory C only).
Figure 3 gives an overview of the standard test methods.

<!-- 第 24 页 -->
Conducted
Tests
Radiated
Tests
TEM cell
(subcategory C only)
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 24
BCI
ALSE
f
1MHz
200MHz
400MHz
3.2GHz
Figure 3:  RF Immunity Testing
Normally, testing is done at the level of the highest immunity requirement for the most critical functional
group for the DUT.  A quick scan at the specified test level, noting the frequency range of any effects,
followed by a thresholding scan over these identified effect frequency ranges is the preferred test
procedure.  Thresholding is done to determine the actual immunity level for other functional groups and
status levels.  For the thresholding scan, the test level is incremented up to the required level at each test
frequency.  For transition frequency points between basic and HIRF (High Intensity Radiated Field) test
levels, the higher level shall be applied.
Bus modules and systems shall be evaluated for increased ignition off current draw (IOD) resulting from
inadvertent wake up from standby or power-down modes during RF exposure.
Vehicle systems that use a low power RF link (i.e., RF remote keyless entry), require a low RF
environment near their operating frequency to realize their normal operating range.  In the presence of RF
sources within this "window of vulnerability", devices such as RF RKE will exhibit reduced range or
inhibited remote operation.  This immunity window can be reduced by improved filtering in the receive
module and should not exceed ± 5% of the system operating frequency.  The product specification should
define the acceptable performance limits for the system in the vicinity of its operating frequency range
and the EMC test plan should take this into account.
CW and Amplitude modulation (AM, 1 kHz 80%) are required below 30 MHz.  Amplitude modulation is
constant peak relative to CW.  The default modulation between 30 and 400 MHz is continuous wave
(CW).  CW and/or pulse modulation is applicable from 400 MHz to 3.2 GHz; pulse modulation is
required in the cell phone and radar bands. The default pulse modulation is rectangular at
217 Hz (±10%) PRF with a duration of 577 µs for the cell phone bands, and 300 Hz (±10%) PRF with a
duration of 3µs for the radar bands.   For testing to meet regulatory requirements, these frequency
ranges and modulation types are modified.  Refer to Tables 12 and 13.
Other modulation techniques may be appropriate if the known DUT characteristics indicate a potential
for reduced immunity to modulated signals.  This information, if known, shall be incorporated in the
product specification and/or test plan.
The harmonics of the immunity test signal shall be at least -12 dBc. Care shall be taken to avoid
equipment switching transients.  If equipment switching transients occur, threshold effects to determine if
effects are caused by equipment or DUT.

<!-- 第 25 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 25
Table 12:  Default Modulation for RF Immunity Testing
Frequency Range
[MHz]
Modulation
1 to 30
CW and AM
(1kHz, 80%, constant peak)
30 to 400
CW
CW and/or Pulse – Pulse required in cell phone and radar bands
above 400
Cell phone pulse:  577 µs duration, 217 Hz PRF
Radar pulse: 3 µs duration, 300 Hz PRF
Table 13:  Typical Modulation for Regulatory RF Immunity Testing
Frequency Range
[MHz]
Modulation
20 to 800
AM (1 kHz, 80%, constant peak)
800 to 2 000
Pulse (577 µs duration, 217 Hz PRF)
The minimum dwell time for the immunity tests is 2 seconds.  If the DUT or its software requires a longer
dwell time for comprehensive testing, this shall be incorporated in the DUT EMC test plan.  For all the
immunity requirements, the components shall be evaluated for functional performance as specified in
paragraph 5.4 and the referenced definitions.
All immunity tests shall be conducted with frequency steps not greater than the logarithmically distributed
steps specified in Table 14.
Table 14:  RF Immunity Test Frequency Resolution
Frequency Range
Logarithmic Steps
[MHz]
[%]
1 to 10
10 to 100
100 to 1 000
1 000 to 3 200
0.5
The severe environment frequency ranges for HIRF testing are defined in Table 15.
Table 15:  Severe Environment Simulation – Frequency Ranges where HIRF Test Level Applies
Frequency Range
[MHz]
Usage
1 – 30
AM Broadcast

<!-- 第 26 页 -->
Frequency Range
7.2
Bulk Current Injection (BCI) Test
7.2.1
Requirement



f
f
I
lg
L


)
(
I
f
I
L



f
I



lg

DC-11224, EMC Performance Requirements – Components, 2007-07, Page 26
[MHz]
Usage
30 – 54
Communications (North America)
65 – 88
Communications (Europe)
140 – 180
Communications
380 – 520
Communications
806 – 915
Cell phone
1 200 – 1 400
Radar
1 710 – 1 980
Cell phone
2 700 – 3 200
Radar
This test exposes the test harness to which the DUT is connected to radiation using the BCI method in
accordance with ISO 11452-4 as modified below.  This test applies in the frequency range from 1 to 400
MHz.
The immunity requirements are based on environmental data and are adapted to BCI through correlation
with vehicle data.
The basic shape of the needed currents in the calibration jig in dBµA is given by eq. (1)


f
f
MHz
for
for
for
L



                              (1)
MHz
f
f


MHz
f
MHz
where
1I is also given in dBµA and f ,
Lf are given in MHz. Figure 4 illustrates this basic shape of the
frequency-dependent behavior.

<!-- 第 27 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 27
I 1
I / dB(µA) in Calibration Jig
        30                             100                              400
      f        
L
f / MHz
Ff L
Figure 4:  Basic Shape of the Needed Current in the Calibration Jig
In the following Figures 5, 6, 7 and 8, only the currents at the constant sections
1I are specified.  For the
non-constant sections the frequency-dependent values can be calculated with the given formula above.
For passenger cars, vans and light commercial vehicles, the lower corner frequency
Lf is 15 MHz and for
large heavy trucks and buses the frequency
Lf is 5 MHz. The upper corner frequency is 30 MHz for all
vehicles.
For Group A, B and C evaluation, the HIRF (Table 15) test level in the constant section (
1I in eq. (1)) is
111 dBµA.  For Group D evaluation, the HIRF test level in the constant section (
1I in eq. (1)) is
114 dBµA.  The basic test levels (non-HIRF) are 6 dB lower than the HIRF test levels.  All components
shall meet both the basic test levels and the HIRF test levels.
Figures 5 and 6 for passenger cars, vans and light commercial vehicles and Figures 7 and 8 for large
heavy trucks illustrate the test level over frequency ranges.

<!-- 第 28 页 -->
120,00
115,00
110,00
105,00
A.2
100,00
dB(µA)
95,00
90,00
85,00
80,00
75,00
70,00
120,00
115,00
110,00
A.2
105,00
100,00
dB(µA)
95,00
90,00
85,00
80,00
75,00
70,00
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 28
Systems including Group A/B/C functions
A.3
A.4
A.1
100                               400
MHz
Figure 5:  Test Levels and Areas of Status Levels (A.1 to A.4, Table 16) for BCI Testing, passenger
cars, vans and light commercial vehicles, Group A, B and C
Systems including Group D functions
A.5
A.3
A.4
A.1
100                              400
MHz
Figure 6:  Test Levels and Areas of Status Levels (A.1 to A.5, Table 16) for BCI Testing, passenger
cars, vans and light commercial vehicles, Systems including Group D functions

<!-- 第 29 页 -->
120,00
115,00
A.3
110,00
A.2
105,00
100,00
dB(µA)
95,00
90,00
85,00
80,00
75,00
70,00
120,00
A.3
115,00
A.2
110,00
105,00
100,00
dB(µA)
95,00
90,00
85,00
80,00
75,00
70,00
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 29
Systems including Group A/B/C functions
A.4
A.1
100                               400
MHz
Figure 7:  Test Levels and Areas of Status Levels (A.1 to A.4, Table 16) for BCI Testing, large
heavy trucks and buses, Group A, B and C
Systems including Group D functions
A.5
A.4
A.1
100                               400
MHz
Figure 8:  Test Levels and Areas of Status Levels (A.1 to A.5, Table 16) for BCI Testing, large
heavy trucks and buses, Systems including Group D functions

<!-- 第 30 页 -->
Figures 5, 6, 7 and 8 provide the reference levels used for defining the component’s required Status.
Users shall first define the appropriate reference level(s) based on the component’s application (e.g., car
or truck).  Table 16 shall then be used to determine the required Status level ranges (I, II, III, etc) to
threshold between functional statuses for different Function Groups.
The top level of Table 16 shaded gray, is only evaluated if the DUT has a Group D function.
Test Level (I1 in
Area of
Approximate Test
eq.(1)) in the
Constant Range
Status
Levels
Level [mA]
[dB(µA)]
A.5
> 111 to ≤ 114
> 350 to ≤ 500
IV 
IV 
III 1)
II 1)
A.4
> 108 to  111
> 250 to  350
III
III
II
A.3
> 105 to  108
> 180 to  250
II
A.2
> 99 to  105
> 90 to  180
A.1
≤ 99
≤ 90
I
Note:
1) The squib activation does not need to be recoverable.
Use equation (1) with the test levels specified in column 1 of Table 16 for evaluation of the non-constant
ranges.
7.2.2
Test Setup
Refer to Figure 9 for a schematic diagram of the test setup.
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 30
Table 16:  BCI Immunity Performance Requirements in the Constant Range (e.g. 20 MHz) for
Group A, B, C and D
Group A
Group B
Group C
Group D
Status
Status
Status
Status
II
I
I
I

<!-- 第 31 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 31
-
+
200 min.
2500 min
1700 +300 / - 0
Key:
Device under test (connected to ground if specified
in the test plan)
Wiring harness
Load simulator (placement and ground connection
according to ISO 11452-4)
Stimulation and monitoring system
Power supply
AN
7.      Optical fibers
High frequency equipment
Injection probe (represented at 2 positions)
The distance from the DUT to the closest probe
position
Ground plane (connected to the shielded room)
Insulating support
Shielded room
Figure 9: Immunity Test Using the BCI Method - Schematic Diagram of the Test Setup
 
A current injection probe shall be used; a current monitoring probe is optional.
 
Use substitution method with forward power.
Copyright DaimlerChrysler
500 min
100 min



<!-- 第 32 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 32
 
The test setup shall be on a sufficiently large ground plane, so that the plane shall extend beyond the
test setup by at least 100 mm on all sides.
 
The distance between the test setup and all other conductive structures (such as the walls of the
shielded enclosure) with the exception of the ground plane shall be no less than 500 mm.
 
Where part of the system to be tested is normally connected electrically with the vehicle body, this
part shall be placed directly on the ground plane and connected with it.
 
Deviating from ISO 11452-4, the test harness shall be 1700 (+ 300,  0) mm long and routed 50 mm
above the ground plane (this harness can also be used for CISPR 25 Radiated Emissions and
Conducted Emissions Current Method testing).
 
The current injection probe shall be located on the test harness at two points, a distance of 150 mm
and at 750 mm from the DUT wiring connectors.  If the DUT harness has more than one connector,
the test shall be repeated, so that the current injection probe shall be attached around each section of
harness to the individual connector..
 
Ground leads that are shorter than 1m, or not included in the wiring harness, shall be taken out of the
current injection probe.
 
Wherever possible, production intent vehicle switching devices and sensors shall be used.
7.3
ALSE with a Ground Plane
The DUT shall be subjected to radiated immunity testing using an antenna for field generation in
accordance with ISO 11452-2.
7.3.1
Requirement
For Group A, B and C evaluation, the basic test level is 70 V/m and the HIRF test level is 150 V/m from
200 MHz to 3.2 GHz.  For Group D evaluation, the basic test level is 100 V/m and the HIRF test level is
200 V/m from 200 MHz to 1.4 GHz and 150 V/m from 1.4 to 3.2 GHz. The test levels and functional status
requirements by frequency range and functional group are specified in Table 17 and the Test Levels in
Figures 10 and 11.
Systems including Group A/B/C Functions
250 V/m
200 V/m
150 V/m
100 V/m
50 V/m
0 V/m
200 MHz
600 MHz
1.0 GHz
1.4 GHz
1.8 GHz
2.2 GHz
2.6 GHz
3.0 GHz
3.2GHz
Figure 10: Test Levels for ALSE Testing, Group A, B, C

<!-- 第 33 页 -->
250 V/m
200 V/m
150 V/m
100 V/m
50 V/m
0 V/m
The top level of Table 17, shaded gray, is only evaluated if the DUT has a Group D function.
Test Level
> 100 to ≤ 150
III
III
II
> 70 to ≤ 100
II
II
> 35 to  70
≤ 35
I
Note:  
1) The squib activation does not need to be recoverable.
7.3.2
Test setup
Refer to ISO 11452-2.
7.4
ALSE without Ground Plane
7.4.1
General
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 33
Systems including Group D Functions
200 MHz
600 MHz
1.0 GHz
1.4 GHz
1.8 GHz
2.2 GHz
2.6 GHz
3.0 GHz
3.2GHz
Figure 11: Test Levels for ALSE Testing, Systems including Group D functions
Table 17:  Performance Requirements for ALSE Testing, Group A, B, C and D
V/m
Group A Status
Group B Status
Group C Status
Group D Status
> 150 to ≤ 200
IV 
IV 
III 1)
II 1)
I
I
I
The DUT shall be subjected to radiated immunity testing using an antenna for field generation in
accordance with SAE J1113-21 (without ground plane).  RF uniformity requirement: define a 0.5x1.0
meter rectangular vertical plane through the field reference location perpendicular to the line from the
antenna to the DUT.  Measure the uniformity at all the defined points for the lowest and highest frequency
used for each antenna.  The uniformity shall be less than or equal to 6 dB relative to the reference point.
For system characterization, refer to DC-11225, Annex G.

<!-- 第 34 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 34
7.4.2
Requirement
For Group A, B and C evaluation, the basic test level is 70 V/m and the HIRF test level is 150 V/m from
200 MHz to 3.2 GHz.  For Group D evaluation, the basic test level is 100 V/m and the HIRF test level is
200 V/m from 200 MHz to 1.4 GHz and 150 V/m from 1.4 to 3.2 GHz. The test levels and functional status
requirements by frequency range and functional group are specified in Figures 10 and 11 and Table 17.
7.4.3
Test setup
For a schematic diagram of the test setup refer to Figure 12.
Optional Auto Monitoring
Capability
Data
Acquisition
DUT
Exerciser
Power Meter
Controller
RF
Generator
Dual
Directional
RF
Amplifier
Couplers
Figure 12: Radiated Immunity Test in an ALSE without a Ground Plane
- 
Use substitution method with forward power and specified uniformity.
- 
The antenna shall be sighted on the DUT.
- 
DUT to point “A” is an unshielded wiring harness of 600  50 mm in length.
- 
From point “A”, the harness goes vertically 1 meter to the floor and along the floor to the wall
bulkhead feedthrough filter.
- 
The DUT shall be 1 meter above the floor.
- 
The DUT shall be a minimum of 1 meter from the antenna and any other conductive surface and a
minimum of 1 meter from any absorber.
- 
Vertical polarization shall be used.
- 
The DUT shall be tested in three mutually perpendicular orientations (principal planes): (i) with the
main circuit board in the DUT parallel to the chamber floor (vehicle mounting surface down), (ii) with
the main circuit board perpendicular to the chamber floor edge on to the antenna and (iii) with the
main circuit board perpendicular to the chamber floor and broadside to the antenna.  These three
orientations shall be chosen from the six possible orthogonal orientations, to allow visibility of the
DUT, if required, and to maintain a consistent and repeatable routing of the DUT harness and direct
exposure of DUT apertures to the antenna.
- 
For modules in a metal case, the DUT connector(s) should be oriented upward or toward the antenna
and only this one orientation is required.
- 
Wiring harness routing shall be controlled and documented.
Copyright DaimlerChrysler
Filtered Connector
Tusonix 4201-001
Module
Turntable
A
DUT
1,000-4,000 MHz
200-1,000 MHz

<!-- 第 35 页 -->
7.5
TEM Cell Test
7.5.1
Requirement
250 V/m
200 V/m
150 V/m
100 V/m
50 V/m
0 V/m
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 35
Subcategory C components shall be subjected to radiated immunity testing with reference to ISO 11452-3
over the frequency range of 1 to 200 MHz.  The TEM cell used shall have a VSWR not to exceed 1.3:1
(empty cell) from 1 to 200 MHz.  The TEM cell shall have a feedthrough filter assembly to provide RF
isolated interfacing between the DUT and its system simulator outside the cell.  A similar setup using a
wideband TEM (GTEM) is acceptable for this frequency range. ALSE testing, if approved in the EMC test
plan, is another alternative for DUT that do not meet 1/3 TEM cell dimension requirement. For additional
information on setup and testing refer to DC-11225, Annex H.
From 1 to 30 MHz, the basic test level is 150 V/m for Group A, B and C functions and 200 V/m for Group
D functions.  From 30 MHz to 200 MHz, the basic test level is 70 V/m and the HIRF test level is 150 V/m
for Group A, B and C functions; the basic test level is 100 V/m and the HIRF level is 200 V/m for Group D
functions.  The immunity performance requirements are specified in Table 18 and the test levels in
Figures 13 and 14.
Systems including Group A/B/C Functions
1 MHz
10 MHz
100 MHz
200 MHz
Figure 13:  Test Levels for TEM Testing, Group A, B, C

<!-- 第 36 页 -->
250 V/m
200 V/m
150 V/m
100 V/m
50 V/m
0 V/m
Test Level
> 100 to ≤ 150
III
III
II
> 70 to ≤ 100
II
II
> 35 to  70
≤ 35
I
Note:
1) The squib activation does not need to be recoverable.
7.5.2
Test setup
Details on the test setup are given in ISO 11452-3 and in Figure 15.
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 36
Systems including Group D Functions
1 MHz
10 MHz
100 MHz
200 MHz
Figure 14: Test Levels for TEM Testing, Systems including Group D functions
The top level of Table 18, shaded gray, is only evaluated if the DUT has a Group D function.
Table 18:  TEM Cell Immunity Performance Requirements, 1 to 200 MHz, Group A, B, C and D
[V/m]
Group A Status
Group B Status
Group C Status
Group D Status
> 150 to ≤ 200
IV 
IV 
III 1)
II 1)
I
I
I

<!-- 第 37 页 -->
Lowpass
Filter(1)
RF
Amplifier
100kHz -
200MHz
Signal
Generator
Coupler
FWD
REV
Power
Meter
Note (1). No Low Pass Filter Required if
Harmonics of Amplifer are at Least -15 dBc
Deviating from ISO 11452-3:
- 
The use of a feedthrough filter assembly is required, not optional.
- 
The DUT connector(s) should be orientated toward the TEM cell door.
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 37
h2
 h/3
h1
=  h/3
Septum
Load
50 ohm
Dual
Directional
v
h2
DUT
h
Isolating
h1
Support
v
Filtered Connector
Tusonix 4201-001
DUT
Exerciser
Figure 15: TEM Immunity Test Setup
- 
The forward power required to achieve the specified field strengths shall be calculated with the
formula in ISO 11452-3 using the actual impedance over frequency as measured for the TEM cell
being used.  To verify this calculation, the field strength achieved in an empty cell shall be measured
using a field strength probe.
- 
The DUT shall be connected to the filter assembly with an unshielded wiring harness of 600  50 mm
in length running diagonally from the DUT connector(s) to the TEM cell bulkhead connectors.  The
orientation of this harness in the TEM cell shall be controlled and documented.  Any excess DUT
harness shall be fastened with nonconductive tape to the TEM cell floor at the bulkhead connector
end.
- 
The DUT shall be located in the approximate center of the TEM cell, midway between the septum and
floor; it may be shifted off center to allow for a direct harness routing but it shall remain in the center
two thirds volume of the cell.  The position of the DUT shall be consistent and documented.
- 
DUT shall be tested in two orthogonal orientations: (i) with the main circuit board in the DUT parallel
to the TEM cell floor with the longest axis of the DUT parallel to the axis of the septum (vehicle
mounting surface down) and (ii) with the main circuit board perpendicular to the TEM cell floor with
the longest axis of the DUT parallel to the axis of the septum or angle the DUT from the item (i)
position at an angle less than 90 degrees about its vertical axis if perpendicular to the cell floor is not
feasible due to exceeding the 1/3 floor to septum distance.  These two orientations shall be chosen
from the six possible orthogonal orientations, to allow visibility of the DUT, if required, and to maintain
a consistent and repeatable routing of the DUT harness.
- 
The VSWR shall be monitored with the DUT under test.  If this VSWR is greater than 1.5:1, the
location of the DUT and / or routing of the wiring harness shall be adjusted to reduce the VSWR
below 1.5:1 if possible, if not the data is indeterminate.  The VSWR information shall be included in
the test report.
Magnetic Field Immunity
For subcategory MS modules only: DUTs that incorporate components sensitive to magnetic fields (e.g.
Hall effect sensors or magnetic pickups) shall be subjected to magnetic field immunity testing as
described in MIL-STD-461E with the frequency range extended down to 15 Hz.  For vehicle applications

<!-- 第 38 页 -->
8.1
Requirements
180 dBpT
170 dBpT
160 dBpT
150 dBpT
140 dBpT
130 dBpT
120 dBpT
110 dBpT
100 dBpT
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 38
where the battery is located other than in the engine compartment, the routing of high current carrying
conductors near vehicle electronics raises the magnetic environment.
Subcategory MS DUTs shall not be affected by a magnetic flux density of 160 dBpT (dB picotesla) from
15 Hz to 60 Hz and above 60 Hz this flux density shall decrease at a rate of 6 dB per octave to 106 dBpT
at 30 kHz (Fig. 16).  Subcategory MS DUTs in severe magnetic environments (e.g. located within 0.5 m of
a battery cable or other power feed carrying 50 A or more of current) shall not be affected by a flux
density of 160 dBpT from 15 Hz to 30 kHz (Fig. 17).
Systems in non-severe magnetic field environment
10 Hz
100 Hz
1 kHz
10 kHz
30 kHz
Figure 16:  Test Levels for DUTs in a non-severe magnetic field environment

<!-- 第 39 页 -->
180 dBpT
170 dBpT
160 dBpT
150 dBpT
140 dBpT
130 dBpT
120 dBpT
110 dBpT
100 dBpT
8.2
Test
8.2.1
Test Setup
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 39
Systems in severe magnetic field environment
10 Hz
100 Hz
1 kHz
10 kHz
30 kHz
Figure 17:  Test Levels for DUTs in a severe magnetic field environment
- 
Test frequency steps shall be at least 10 per decade (equivalent to logarithmic steps of 23.28%).
- 
The DUT shall be exposed to a flux density of 160 dBpT from 15 Hz to 60 Hz using a sine wave test
signal.
- 
For DUTs not in a severe magnetic field environment, the DUT shall be exposed to a 60 Hz square
wave test signal that generates 160 dBpT amplitude of the 60 Hz component of the test signal.
- 
For DUTs not in a severe magnetic field environment, the sine wave scan using the 6 dB per octave
decreasing limit shall be performed only if there are effects noted during the square wave test.
- 
DUTs in severe magnetic environments shall be tested at 160 dBpT over the full frequency range.
- 
Bus modules and systems shall be evaluated for increased ignition off current draw (IOD) resulting
from inadvertent wake up from standby or power-down modes during magnetic exposure.
- 
A Helmholtz coil may be used with three mutually orthogonal orientations of the DUT instead of the
six positions of the test coil shown in Figure 18.

<!-- 第 40 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 40
Refer to Figure 18 for test setup.
Current
Function
Generator
Probe
Amplifier
Volt Meter
Current Probe
Power
Amplifier
Magnetic Field
Transducer
Test
Fixture
Power
Supply
DUT
Figure 18:  Magnetic Immunity Test Setup
Transient Immunity
9.1
Transient Disturbances Conducted along Supply Lines
9.1.1
Requirement
The DUT shall be subjected to repetitive voltage spikes with reference to ISO 7637-2.  The DUT shall be
monitored during operation while being subjected to the supply voltage transients as specified for the
appropriate system voltage in Tables 20 to 24.  These pulses are applied individually to each battery and
ignition line and any inputs or outputs supplied from battery or ignition voltage as configured in a DUT's
complete system.  The DUT shall also be tested in a powered-down state, if appropriate, to check for
inadvertent turn on (applies to modules that have logic power-up capability).  For all the supply voltage
transients, there shall be no damage to the DUT, no lockups of the DUT requiring power off reset and no
effect on stored data or false diagnostic indication (Status II, except where specified otherwise).  The DUT
shall be tolerant of transient emissions generated by the operation of its own system and other vehicle
systems (Status I).  Refer to Table 19.
Table 19:  Supply Voltage Transients - Immunity Requirements
Transient Pulse
Performance Status
Group A
Pulse #1
II 
II
Pulse #1b
II 
I
Pulse #2
II 
I
Pulse #3a
II 
I
Pulse #3b
II 
I
Note:  Pulse # 1 includes a 200 ms dropout during which some DUT may reset.  In this case, Status II
applies for the specified test interval (the DUT shall recover normal operation at the end of the test).
Pulse #1b is a positive transient and has no dropout.
Copyright DaimlerChrysler
Pos. 3
50 mm
DUT
Top View
Pos. 1
Pos. 2
50mm
Pos. 4
Plus Pos. 5 Top and Pos. 6 Bottom
Performance Status
Groups B, C and D

<!-- 第 41 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 41
DUT powered from regulated supplies in other modules (subcategory S) shall be tested as a system with
the sourcing module or an equivalent power supply.
9.1.2
Test Conditions
All pulses shall be applied for 10 min each.
9.1.3
Test Setup
Refer to ISO 7637-2 for the test setup.
9.1.4
Test Pulses
9.1.4.1
Test Pulse 1
Test Pulse 1 simulates the switch-off of a supply voltage to an inductance switched parallel to the DUT.
All supply lines shall be exposed to this test pulse.  It is defined by Figure 21 and Table 20.
Figure 21: Test Pulse 1
Table 20:  Test Pulse 1 - Parameters
Parameters
12 V System
24 V System
42 V System
UA in V
13.5

<!-- 第 42 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 42
Parameters
12 V System
24 V System
42 V System
Us in V
tr in µs
td in ms
t1 in s
t2 in ms
t3 in µs
 100
 100
 100
Ri in ohms
Test duration in min
9.1.4.2
Test Pulse 1b
Pulse 1b simulates switched inductive operating loads.  It is defined by Figure 22 and Table 21 and an
inverted waveform of Pulse 1 with no supply voltage power off.
Figure 22: Test Pulse 1b
Table 21:  Pulse 1b - Parameters
Parameters
12 V System
24 V System
42 V System
UA in V
13.5

<!-- 第 43 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 43
Parameters
12 V System
24 V System
42 V System
Us in V
tr in µs
td in ms
t1 in s
Ri in ohms
Test duration in min

<!-- 第 44 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 44
Test Pulse 2
Test Pulse 2 simulates the interruption of a current through an inductance switched in series with the
DUT.  All supply lines shall be exposed to this test pulse.  It is defined by Figure 23 and Table 22.
Figure 23: Test Pulse 2
Table 22:  Test Pulse 2 – Parameters
Parameters
12 V System
24 V System
42 V System
UA in V
13.5
Us in V
tr in µs
td in µs
t1 in s
0.5
0.5
0.5
Ri in ohms
Test duration in min

<!-- 第 45 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 45
9.1.4.3
Test Pulses 3a and 3b
Test Pulses 3a and 3b simulate the pulse bursts generated during switching operations (e.g. in relays).
Test Pulse 3a
Test Pulse 3a simulates the negative pulses. It is defined by Figure 24 and Table 23.
Figure 24: Test Pulse 3a
Table 23:  Test Pulse 3a - Parameters
Parameters
12 V System
24 V System
42 V System
UA in V
13.5
Us in V
tr in ns
td in µs
0.1
0.1
0.1
t1 in µs
t4 in ms
t5 in ms
Ri in ohms
Test duration in min

<!-- 第 46 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 46
- 
Test Pulse 3b
Test pulse 3b simulates the positive pulses. It is defined by Figure 25 and Table 24.
Figure 25: Test Pulse 3b
Table 24:  Test Pulse 3b - Parameters
Parameters
12 V System
24 V System
42 V System
UA in V
13.5
Us in V
tr in ns
td in µs
0.1
0.1
0.1
t1 in µs
t4 in ms
t5 in ms
Ri in ohms
Test duration in min

<!-- 第 47 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 47
9.2
Transient Disturbances Conducted along I/O or Sensor Lines
9.2.1
Requirement
The immunity testing of lines other than power supply lines shall be carried out in accordance with
ISO 7637-3.  For subcategory S components, testing with Pulse #2 using both positive and negative
polarity and direct capacitive coupling is also required.  For subcategory S, the regulated supply line
(usually 5 V) is considered an I/O line and shall also be tested.  Representative loading shall be used for
subcategory S components in order to assure effective evaluation of possible system risks due to vehicle
transients.  Components shall be subjected to voltage transients on input and output lines while
monitoring the DUT during operation.  For Group A functions of the DUT, there shall be no damage to the
DUT, no lockups of the DUT requiring power off reset and no effect on stored data or false diagnostic
indication (Status II).  For Group B, C and D functions of the DUT, there shall be no effects by the voltage
transients (Status I).  Refer to Table 25.
Table 25: Transients on I/O or Sensor Lines - Immunity Requirements
Transient Pulse
Performance Status
Performance Status
Group A
Groups B, C and D
Pulse # 2 (+ and )
(Subcategory S only)
II 
I
Pulse a
II 
I
Pulse b
II 
I
9.2.2
Test Conditions
Modules shall be subjected to repetitive voltage spikes utilizing capacitive coupling to the line(s) under
test.  This may be implemented by using a capacitive coupling clamp (CCC) or by direct capacitive
coupling (DCC) for Pulses a and b. Direct capacitive coupling (DCC) is required for Pulse 2 (+ and -).
These voltage transients are the pulses illustrated in Figures 27 to 30 and Tables 26 to 29.  The test
pulse voltages are set open circuit and are referenced to module ground.  They are applied for 5 minutes
each.
9.2.3
Capacitive Coupling Clamp (CCC) Test Setup
For a schematic diagram of the capacitive coupling clamp test setup refer to ISO 7637-3.  This method
applies for Pulses a and b only.  Supply voltage lines are not included in the clamp for this test.
9.2.4
Direct Capacitor Coupling (DCC) Test Setup
Direct capacitive coupling may be used replacing the capacitive coupling clamp for Pulses a and b, and is
required to couple Pulse 2 (+and-) to the DUT.  Refer to Figure 26 for the test setup.

<!-- 第 48 页 -->
(A)
(B)
Key
Test Pulse Generator
DUT
Harness
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 48
+
-
100 mm
C
100 mm
min
50 mm
(1,000 - 2,000) mm
Note: All harnesses shall be 50 (+/- 5) mm above ground plane.
+
-
100 mm
C
C
100 mm
min
50 mm
(1,000 - 2,000) mm
Figure 26: (A) General Test Setup  (B) An Example of the DCC test set-up for Common Mode Lines
(i.e., CAN BUS)

<!-- 第 49 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 49
Ground Plane
Line Under Test-Differential Mode Line in Figure 26(A) and Common Mode Lines in Figure 26(B).
Power Supply
DUT Exerciser
9.2.5
Test Pulses
Test Pulse 2, Positive and Negative Polarity in Figures 27 and 28 and in Tables 26 and 27.
Figure 27:  Positive Pulse 2 for I/O Coupling Test
Table 26:  Positive Pulse 2 - I/O Coupling Parameters
Parameters
12 V System
24 V System
42 V System
Us in V
tr in µs
td in µs
t1 in s
0.5
0.5
0.5
Ri in ohms
Test duration in min

<!-- 第 50 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 50
Figure 28:  Negative Pulse 2 for I/O Coupling Test
Table 27:  Negative Pulse 2 - I/O Coupling Parameters
Parameters
12 V System
24 V System
42 V System
Us in V
tr in µs
td in µs
t1 in s
0.5
0.5
0.5
Ri in ohms
Test duration in min

<!-- 第 51 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 51
9.2.5.1
Test Pulse a
This test pulse simulates the coupling of Test Pulse 3a on power lines onto control and signal lines. It is
defined by Figure 29 and Table 28.
Figure 29: Test Pulse a
Table 28:  Test Pulse a - Parameters
Parameters
12 V System
24 V System
42 V System
Us in V
tr in ns
td in µs
0.1
0.1
0.1
t1 in µs
t4 in ms
t5 in ms
Ri in ohms
Test duration in min

<!-- 第 52 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 52
9.2.5.2
Test pulse b
This test pulse simulates the coupling of Test Pulse 3b on power lines onto control and signal lines.  It is
defined by Figure 30 and Table 29.
Figure 30:  Test Pulse b
Table 29:  Test Pulse b - Parameters
Parameters
12 V System
24 V System
42 V System
Us in V
tr in ns
td in µs
0.1
0.1
0.1
t1 in µs
t4 in ms
t5 in ms
Ri in ohms
Test duration in min

<!-- 第 53 页 -->
10 Electrostatic Discharge (ESD)
10.1 ESD Handling Test
10.1.1 ESD Handling test requirements
Refer to Table 30 for the requirements.
Non-conductive case
Air discharge
[kV]
10.1.2 ESD Handling test setup
For a diagram of the handling test setup, refer to Figure 31.
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 53
The immunity tests against electrostatic discharges shall be carried out in accordance with ISO 10605
and IEC 61000-4-2 with modifications as defined in this section.  All DUT shall be subjected to the
unpowered handling test in 10.1 and the field coupled operating test in 10.2.  DUT that are readily
accessible to the occupants in a vehicle, or in readily accessible under hood or trunk locations, shall also
be subjected to the direct discharge operating test in 10.2. Readily accessible does not include
disassembly except where required for customer serviceable items.  The individual ESD discharge points
shall be specified in the EMC test plan for handling and operating tests.  For the operating tests, the DUT
shall be put in operation with all its connected switches, displays, sensors, actuators etc. and configured
as closely as possible to its intended vehicle application.  For these tests, the ambient humidity shall be
monitored and maintained in the range below 60% RH.  The pulse produced by the ESD simulator shall
be characterized using a calibration target as described in IEC 61000-4-2.  The pulse shall be measured
with a storage scope (sampling rate of 2 giga samples per second minimum, 1 GHz analog bandwidth)
which shall be shielded from the coaxial target and ground plane assembly.  Direct contact
characterization shall be used.  The ESD simulator shall be capable of generating contact discharges
from ±3 kV to ±25 kV.
For the handling (unpowered) test, there shall be no damage to the DUT and the DUT shall operate as
specified, without effect on stored data, after the test.  This is considered Status IV in this case as the
DUT is not being monitored during the test and no judgment about effects can be made.
Table 30:  ESD Immunity Requirements – Handling Test
Conductive case
Contact discharge
Pins
Contact discharge
[kV]
[kV]
8, 15
4, 8
3, 4

<!-- 第 54 页 -->
Key
ESD-generator main unit
HCP
ESD-generator
DUT
Ground point
2 x 470 k Ohm resistors to safety ground
Ground bar
Wooden table
10.1.3 ESD Handling test conditions
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 54
500 mm
Figure 31:  ESD Handling Test Setup
- 
The HCP (horizontal coupling plane or ground plane) shall be placed on the test bench.  The HCP
shall be large enough so as to protrude beyond the DUT on all sides by at least 100 mm.  The ESD
simulator shall have its ground referenced to the HCP at a point 0.5 ± 0.1 m from the DUT as shown
in Figure 31. The connection between safety ground and the HCP shall contain 2 x 470 kΩ, one at
each end.
- 
An ESD simulator according to IEC 61000-4-2 shall be used with a discharge network of 150 pF and
330 ohms.  For contact discharges the contact discharge electrode shall be used, for air discharges
use the air discharge electrode.  The ESD simulator power supply unit may be placed on the floor, a
cart, or on a 50 mm insulating spacer on the HCP no closer than 200 mm to the DUT.
- 
The DUT, with all leads disconnected, shall be centered on the HCP and placed directly on the
HCP.If the case is conductive, it shall be grounded to the HCP.
- 
Before testing commences, the discharge voltage of the ESD simulator shall be verified.
- 
Discharge points on the DUT case: All points that can be touched by the user during packaging,
installation or dismantling.  The individual discharge points shall be specified in the test plan. For non-
conductive cases, apply air discharges to the case, for conductive cases apply contact discharges to
the case.
- 
Discharge points on the connector pins: In the case where the connector(s) on the DUT are
configured so that individual pins are not readily accessible, or the pins are closely spaced such that
discharge to individual pins is not practical, then an extender cable shall be used.  This cable shall be

<!-- 第 55 页 -->
10.2 ESD Operating Tests
There are two ESD Operating Tests, Direct Coupled and Field Coupled.
10.2.1 ESD Operating Test Requirements
Requirement
Systems without
Group C and D
functions
Test Voltage
 25
Above
Requirements
 20
Above
Requirements
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 55
100 mm in length (solid wire recommended) and discharges shall be made to the fanned out leads at
the end of this cable. Apply contact discharges to the pins.
- 
For each of the required discharge voltages, 3 discharges of positive and 3 discharges of negative
polarity shall be performed at each of the specified discharge points.
- 
Between two individual discharges, the charge applied shall be removed via a grounded discharge
resistor with approximately 1 mega ohm resistance (e.g. 2 × 470 kilo ohm resistors in series) by
touching the discharge point (DUT, case or pins).  Alternatively, at least 5 s can be allowed to pass
between two discharges.
- 
After all discharges have been carried out at each voltage level, a functional performance test shall
be conducted.  This includes the measurement of the ignition-off current draw. The results shall be
documented in the test report.
The DUT shall be monitored during operation.  There shall be no lockups of the DUT requiring power off
reset.  The ESD Test Levels are in Table 31 and 33, the ESD Immunity Requirements are in Table 32
and 34.
Table 31: ESD Operating Test Levels for Direct Discharges
Direct coupled
Air discharges
Direct coupled
Contact discharges
[kV]
[kV]
(conductive and non-
(conductive points only)
conductive points)
4, 8, 15
3, 4, 8
Systems including
Group C functions
4, 8, 15, 20
3, 4, 8
Systems including
Group D functions
4, 8, 15, 20, 25
3, 4, 8
Table 32:  ESD Operating Immunity Requirements for Direct Discharges
[kV]
Group A Status
Group B Status
Group C Status
Group D Status
Above
Requirements
Above
Requirements
I
Above
Requirements
II 
I
 15
II 
II 
I 
I
 8
II 
I 
I 
I
 4
II 
I 
I 
I
 3
II 
I 
I 
I

<!-- 第 56 页 -->
Requirement
Systems without
Group D functions
8, 15, 20
Systems including
Group D functions
8, 15, 20, 25
Test Voltage
 25
Above
Requirements
10.2.2 ESD Operating Test Setup (Direct and Field Coupled)
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 56
The top level of Table 32, shaded gray, is only evaluated if the DUT has a Group D function.
Table 33: ESD Operating Test Levels for Field Coupled Test
Field Coupled
Contact discharges
[kV]
(contact discharge to test islands)
Table 34:  ESD Operating Immunity Requirements for Field Coupled Test
[kV]
Group A Status
Group B Status
Group C Status
Group D Status
Above
Requirements
Above
Requirements
I
 20
II  
II 
II 
I
 15
II 
II 
I 
I
 8
II 
I 
I 
I
The top level of Table 34, shaded gray, is only evaluated if the DUT has a Group D function.
For schematic diagrams of the test fixture for the ESD operating tests refer to Figure 32.  For the Direct
Discharge test setup refer to Figure 33 and for the Field Coupled test setup refer to Figure 34.

<!-- 第 57 页 -->
>=160
>=350
>=350
Key
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 57
Field Coupling Plane at least 10 mm larger than the DUT on all sides but with 160 by 350 mm
minimum dimensions to support DUT and the taper section to connect to the HCP
Field Coupling Strip (40 mm wide) to support the harness(es)
Discharge islands – conductively bonded to or one piece with the field coupling strip; 80 mm in
diameter
DUT and wiring harness isolation block – made of nonconductive material, r < 2.5, 50 mm high,
e.g. foamed polypropylene or Styrofoam
NOTE:  The Field Coupling Plane and Field Coupling Strip are made of copper or brass, 0.5 to 2
mm thick.  Dimensions are in mm ± 5%.
Figure 32:  ESD Operating Test Bench Setup

<!-- 第 58 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 58
-
>
Key
Field Coupling Plane
Field Coupling Strip
Discharge islands
DUT and wiring harness isolation block
DUT
DUT wiring harness
Battery
Peripheral or support equipment
AN (if used)
Ground reference point for battery and support equipment
DUT local ground,(if required)
Ground reference point for ESD Coupling Plane, ESD generator and safety ground connection
2 x 470 k Ohm high voltage resistors to safety ground
HCP
ESD generator main unit
NOTE:  Dimensions are in mm ± 5%.
Figure 33:  ESD Operating Test Setup: Direct Coupled
+
>

<!-- 第 59 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 59
-
>
Key
1.    Field Coupling Plane
Field Coupling Strip
Discharge islands
DUT and wiring harness isolation block
DUT
DUT wiring harness
Battery
Peripheral or support equipment
AN (if used)
Ground reference point for battery and support equipment
DUT local ground,(if required)
Ground reference point for ESD Coupling Plane, ESD generator and safety ground connection
2 x 470 k Ohm high voltage resistors to safety ground
HCP
ESD generator main unit
NOTE:  All dimensions are in mm ± 5%.
Figure 34:  ESD Operating Test Setup: Field Coupled
10.2.3 ESD Operating Test Conditions – Direct and Field Coupled
- 
The ESD test bench ground plane shall be a minimum of 0.5 m from other conductive structures such
as the surfaces of a shield room and shall be connected to safety ground with a connection that
contains 2 x 470 kilo ohm (one at the ground plane end at point (12) and the other at the safety
ground termination of the grounding conductor) .
- 
Before testing commences, the discharge voltage of the ESD simulator shall be verified.
- 
The ESD simulator shall have its ground referenced at point (12).
- 
least 10 mm.
+
>

<!-- 第 60 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 60
- 
The DUT shall be positioned on the ESD field coupling plane and a 1700 (-0, +300) mm wiring
harness shall be run from the DUT to its power supply and support equipment along the conductive
trace on top of the ESD field coupling strip.  The harness shall exit the DUT harness support 10 mm
from the edge of the discharge island most distant from the DUT.
- 
The ground reference for the DUT wiring harness and the load box is at point (10).
- 
The ground connection (wiring) of the DUT shall be connected as intended in the vehicle: for local
ground, directly connect to the point (12) and for remote ground connect to the point (10) via the
wiring harness.
- 
The case of the DUT, if conductive, shall be case grounded to the DUT ESD field coupling plane or at
the point (12).
- 
The battery ground shall be electrically connected to the HCP at point (10).
- 
The DUT shall be put in operation with all its connected switches, displays, sensors, actuators etc.
Wherever possible, production intent parts and wiring shall be used.
- 
Any peripheral support equipment shall be separated from the Field Coupling Strip by at least
200 mm.
- 
During this test, the DUT shall be monitored for effects.  The default interval between discharges is
1 second.
10.2.3.1 ESD Operating Test Conditions – Direct Coupled
- 
DUT that are accessible to occupants inside the vehicle shall be tested using an ESD simulator with a
discharge network of 330 pF and 330 ohms.  DUT that are accessible under hood or trunk locations
shall use a discharge network of 150 pF and 330 ohms.
- 
Discharges shall also be applied to connected switches, displays, sensors, actuators, etc. that are
accessible to occupants while DUT is operating.
- 
For each polarity and voltage, 10 contact discharges to conductive points on the DUT shall be carried
out..  In this process, the ESD simulator with the contact discharge electrode shall be positioned on
the device and then discharged.
- 
For each polarity and voltage, 10 air discharges shall be carried out..  In this process, the ESD
simulator with the air discharge electrode shall be moved towards the discharge point as quickly as
possible until either discharge occurs or the electrode touches the discharge point.
- 
Between two individual discharges, the charge applied shall be removed via a grounded discharge
resistor with approximately 1 mega ohm resistance (e.g. 2 × 470 kilo ohm resistors in series) by
touching the discharge point and the housing.  Alternatively, at least 1 s can be allowed to pass
between two discharges.
10.2.3.2 ESD Operating Test Conditions – Field Coupled
- 
Use an ESD simulator with the contact discharge electrode and a discharge network of 330 pF and
330 ohms.
- 
For each polarity and voltage, 10 contact discharges shall be carried out in the free area not covered
by the wiring harness at each of the three specified discharge islands.  Refer to Figure 34 for these
discharge islands.
- 
Between two individual discharges wait for at least 1 s.
- 
If the DUT harness has more than one connector, the test shall be repeated with the individual
harness for each connector.  The other harnesses connected to the other connectors must be placed
on the ground plane adjacent to the injection strip.

<!-- 第 61 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-07, Page 61
- 
Do not discharge directly to the harness.  If there are more than 40 lines in the harness bundle, the
harness bundle shall be flipped over (180 degrees) and the Field Coupled Test repeated.
End of Main Document
# # # # #

<!-- 第 62 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-05, Page 62
Annex A (informative)
FUNCTIONAL STATUS CLASSIFICATION EXAMPLES
Note:  This list is not necessarily complete. For updated DUT functional status classification information,
contact DCX EMC engineering.
Group A Functions:
 
antenna module operation
 
auxiliary car heater operation
 
entertainment systems and display operation – DVD or other entertainment only displays
 
front park and marker lamp operation (nonregulated)
 
headlamp cleaning operation
 
illuminated entry operation
 
informational diagnostic capability (telltales & chimes – nonregulated functions)
 
instrument cluster nonregulated functions & convenience indicators
 
intermittent windshield wiper operation (with fail-safe default)
 
inverters (110 Vac or other)
 
parking aid system (Parctronic) operation
 
photochromatic mirror operation (nonregulated functions)
 
rain sensor operation
 
rear wiper operation ability
 
remote keyless entry operation (with operator key override)
 
seat and steering wheel heating operation (except for fail w/ latch on)
 
solar roof operation (solar-cell-powered motor)
 
trip odometer operation
Group B Functions:
 
adaptive cruise (speed) control (Distronic) operation (with operator override or fail-safe default)
 
antilock brake system operation (with fail-safe default)
 
chime operation (regulated function)
 
data bus system operation (MOST /optical, D2B /optical)
 
informational systems and display operation including instrument panel video – navigational,
compass, climate control, time, general vehicle information – mileage, etc.
 
electronic climate control functions that do not compromise windshield defrost system operation
 
emergency calling system (Teleaid) operation
 
entertainment systems and display operation (radio, voice recognition system, CD, phone)
 
final drive control – 2wd or 4wd (above 10 kph)
 
headlight dimming/optical horn operation
 
instrument cluster enhancement functions (fuel gauge, indicators)
 
interior illumination stability (no perceptible variation)
 
license plate lamp operation and daytime running lights (DRL) (regulated function)
 
power door lock, trunk/hatch and trailer hitch release stability
 
remote keyless entry start ability
 
tire pressure monitoring
 
vehicle anti-theft system operation
 
vehicle electrical charging system (alternator) operation
 
vehicle immobilizer operation (at minimum range)
 
vehicle cruise (speed) control stability (e.g.  5 km/h)

<!-- 第 63 页 -->
Group C Functions:
DC-11224, EMC Performance Requirements – Components, 2007-05, Page 63
 
antilock brake system operation (without fail-safe default)
 
automatic headlamp operation
 
back up lamp operation (regulated function)
 
brake lamp and center high mounted brake light (CHMSL) operation (regulated function)
 
brake system malfunction indicator lamp (MIL) operation
 
child occupancy detection operation
 
convertible top stability (above 10 kph)
 
data bus system operation (CAN-B, C, D, LIN-Bus, other serial bus systems)
 
diagnostic memory stability and Group C functional inhibit capability
 
dynamic vehicle control system (ESP) stability including steering angle sensor stability
 
electronically controlled motor systems stability – motor cooling fan, seats with and without memory,
windows with and without express up / down function, mirrors rearview and outside, headlamp
leveling (no perceptible movement)
 
electronic transmission control
 
engine acceleration control (not including speed control with operator override)
 
engine malfunction indicator lamp (MIL) operation (regulated function)
 
engine stall control
 
engine rpm stability (e.g.  10%)
 
entertainment system volume stability (e.g. ± 6 dB)
 
fog lamp/high beam interlock operation (regulated function)
 
headlamp and tail lamp operation (regulated function)
 
horn operation (regulated function)
 
instrument cluster (malfunction information, odometer, speedometer operation, regulated warnings)
 
neutral start function (regulated function)
 
park and marker lamp operation (regulated function)
 
park brake indicator lamp operation (regulated function)
 
passive restraint system operation
 
photochromatic mirror reverse inhibit operation
 
power door / hatch / liftgate stability (no inadvertent open or close)
 
power supply control unit operation (power management for brake control and safety systems)
 
transmission gear indicator (regulated function)
 
seat and steering wheel heating stability (e.g. ± 5 degrees C)
 
seat belt operation
 
specialized functions for safety/fire/police or other emergency vehicles
 
start ability
 
steering wheel positioning stability
 
suspension system stability (air leveling system, active body control)
 
turn signal and indicator operation (regulated function)
 
vehicle braking ability
 
vehicle immobilizer stability (no inhibit of start)
 
vehicle steering ability
 
windshield defrost system operation
 
windshield washer operation
 
windshield wiper operation

<!-- 第 64 页 -->
Group D Functions:
DC-11224, EMC Performance Requirements – Components, 2007-05, Page 64
 
electroexplosive device (EED).
End of Annex A
# # # # #

<!-- 第 65 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-05, Page 65
Annex B (informative)
LIST OF CHANGES
B.1 List of Changes from DC-11224 to DC-11224 Rev. A
 
CG Author and MCG department name updated
 
1. Scope and sub-chapters, partially reworded for clarification
 
3. Terms and Definitions, term Qualification added
 
6.1 General, a paragraph relating to RF links is added, Figure 1 is updated
 
Table 3, clarification of decreasing limit line in the LW frequency range
 
6.3 CE, sentence “Ground leads that are shorter …” moved to 6.3.2. Test Setup
 
Table 4, updated in consideration of the changes in Table 5
 
Table 5, test no.3, service band added
 
 
Table 5, some names of SW service bands are corrected
 
Table 5, test no. 8 and no.9, corner frequencies are updated
 
Table 6, 7and 8, removed the unused frequency ranges.
 
Table 7, updated in consideration of the changes in Table 8
 
Table 8, test no.3, service band added
 
 
Table 8, some names of SW service bands are corrected
 
Table 8, test no. 8 and no.9, corner frequencies are updated
 
Table 10, added a note to clarify subcategory C requirements.
 
Table 10, updated in consideration of the changes in Table 11
 
Table 11, test no.3, service band added
 
 
Table 11, some names of SW service bands are corrected
 
Table 11, test no. 8 and no.9, corner frequencies are updated
 
Table 11, headline changed to “frequency range” to be a line with other tables
 
Table 11, typo bandwidth QP in the frequency range LW and MW corrected
 
Table 11, test no. 27, 28, 30, name for Service or Band changed identical to DC-11223
 
Table 11, test no. 27, relaxed the ISM (JP) requirements from 4 to 14 dBuV
 
Table 11, test no. 28, 30, typo, only one value for PK limit is correct, wrong numbers deleted
 
Table 11, test no. 35, typo, starting frequency changed to 851MHz
 
Table 11, added a note to clarify the RKE requirements
 
Section 6.5.1, formulation corrected for 24 V systems
 
7.1 a paragraph relating to RF links is added
 
Table 12 and 13, consistent terminology for duty cycle
 
Table 15, typo regarding start frequency for Cell Phones corrected to 806MHz
 
7.2.1. BCI setup and requirements clarified
 
Figure 4 to 8 updated for clarification
 
Table 16 updated and note added regarding squibs
 
Table 17, note added regarding squibs
 
7.5, partially reworded for clarification
 
Figures 13 and 14 updated, correct frequency range is 1-200MHz
 
Table 18, note added regarding squibs
 
Table 20 and 21, typos corrected, tr = 3µs, td = 1ms, Ri = 50 ohms for 24V systems
 
Table 21, typo corrected, Us = 30V for 12V and 42V systems
 
Figures 26, 32, 33 and 34 updated to be a line with ISO Standards

<!-- 第 66 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-05, Page 66
 
9.2.5.1 and 9.2.5.2, pulse description updated for better understanding
 
10., sentence added concerning discharge points
 
Annex A, moved the “emergency calling system (Teleaid) operation” from the Group C Function
to the Group B Function
 
Annex A, clarify the headlamp and tail lamp operation requirements
B.2  List of Changes from DC-10614 Rev. A to DC-11224
 
New standard number
 
Updated References and Abbreviations, Acronyms, Definitions & Symbols
 
Removed references to CG Lab Procedures except for LP-388C-65
 
Modified Table 1 Test selection matrix
 
Modified the definition of Status II to include system considerations
 
Clarified that all DUT except for BCM and IP shall meet both narrowband and broadband
requirements
 
Short duration motors that can readily accommodate additional suppression are only required to
meet the RF emissions basic limits if agreed upon between DCX and the supplier
 
Very short cycle motors are not tested for RF emissions
 
Frequency step size is increased for QP detector and/or emission testing of inherently broadband
components
 
Spectrum analyzer scan rate is dependent on repetition rate of DUT parameters
 
FFT may be used for Emission measurements
 
Emission tables are completely revised
 
For emission measurements new services are included and the applicable frequency range is
extended to 2.5 GHz
 
Ground lines <1 m are not included in CISPR 25 current measurement
 
Transient emission requirement for pulses shorter than 100µs are relaxed
 
Immunity modulation for regulatory requirements (per CD 2004/104/EC) changed to AM up to
800 MHz and pulse from 800 MHz to 2 GHz
 
Clarified that pulse modulation is required in cell phone and radar bands
 
Changed frequency resolution definition to comply with ISO 11452-1
 
Revised HIRF Frequency Ranges
 
Moved DRFI and PCE to DC-11225
 
Test level profiles are added as figures for immunity test requirements and the immunity
requirements tables are updated
 
VSWR requirement is clarified for TEM Cell Test
 
Transient pulses are applied individually to each supply voltage line
 
Adapted pulse 1 parameters for 24V to those of ISO 7637-2
 
Added a Pulse 1b requirement
 
Application of all transient pulses is set to 10 minutes
 
Corrected length of supply leads for transient testing to 500 mm
 
Increased the requirements for I/O pulses a and b
 
ESD Handling Test setup: modified ground reference, clarified DUT placement and eliminated
mat
 
ESD Test Levels and Requirements are completely revised
 
Common test setup specified for both direct coupled and field coupled ESD operating tests
 
Field coupled ESD test replaces the ISO indirect discharge test to the HCP and VCP
 
Material from informative annexes moved to DC-11225
 
Updated Annex A with changes to some functional status group functions
 
New Annex B with a List of Changes compared to DC-10614 revision A

<!-- 第 67 页 -->
DC-11224, EMC Performance Requirements – Components, 2007-05, Page 67
End of Annex B
# # # # #
