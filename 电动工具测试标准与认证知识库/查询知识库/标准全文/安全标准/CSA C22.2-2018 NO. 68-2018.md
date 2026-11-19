# CSA C22.2-2018 NO. 68-2018

> 标准号：`CSA C22.2-2018` ｜ 年份：2018 ｜ 版本状态：**未纳入核查范围**
> 来源方式：文字层直提 ｜ 原分类：安全标准 ｜ 页数：91
> 正文可信度：文字层数字完整，可检索引用；关键限值仍建议回原件核对
> 版本核查：清单只覆盖 50 条安规/EMC 现行标准，本条未逐篇联网核实
> 原始文件：`全文/安全标准/CSA C22.2 NO. 68-2018.md` ｜ 整理日期：2026-11-12

---

<!-- 第 2 页 -->
Legal Notice for Standards
Canadian Standards Association (operating as “CSA Group”) develops standards through a consensus standards development process approved
by the Standards Council of Canada. This process brings together volunteers representing varied viewpoints and interests to achieve consensus
and develop a standard. Although CSA Group administers the process and establishes rules to promote fairness in achieving consensus, it does
not independently test, evaluate, or verify the content of standards.
Disclaimer and exclusion of liability
This document is provided without any representations, warranties, or conditions of any kind, express or implied, including, without limitation,
implied warranties or conditions concerning this document’s fitness for a particular purpose or use, its merchantability, or its non-infringement
of any third party’s intellectual property rights. CSA Group does not warrant the accuracy, completeness, or currency of any of the information
published in this document. CSA Group makes no representations or warranties regarding this document’s compliance with any applicable
statute, rule, or regulation.
IN NO EVENT SHALL CSA GROUP, ITS VOLUNTEERS, MEMBERS, SUBSIDIARIES, OR AFFILIATED COMPANIES, OR THEIR EMPLOYEES, DIRECTORS,
OR OFFICERS, BE LIABLE FOR ANY DIRECT, INDIRECT, OR INCIDENTAL DAMAGES, INJURY, LOSS, COSTS, OR EXPENSES, HOWSOEVER CAUSED,
INCLUDING BUT NOT LIMITED TO SPECIAL OR CONSEQUENTIAL DAMAGES, LOST REVENUE, BUSINESS INTERRUPTION, LOST OR DAMAGED
DATA, OR ANY OTHER COMMERCIAL OR ECONOMIC LOSS, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER
THEORY OF LIABILITY, ARISING OUT OF OR RESULTING FROM ACCESS TO OR POSSESSION OR USE OF THIS DOCUMENT, EVEN IF CSA GROUP
HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, INJURY, LOSS, COSTS, OR EXPENSES.
In publishing and making this document available, CSA Group is not undertaking to render professional or other services for or on behalf of any
person or entity or to perform any duty owed by any person or entity to another person or entity. The information in this document is directed
to those who have the appropriate degree of experience to use and apply its contents, and CSA Group accepts no responsibility whatsoever
arising in any way from any and all use of or reliance on the information contained in this document.
CSA Group is a private not-for-profit company that publishes voluntary standards and related documents. CSA Group has no power, nor does it
undertake, to enforce compliance with the contents of the standards or other documents it publishes.
Intellectual property rights and ownership
As between CSA Group and the users of this document (whether it be in printed or electronic form), CSA Group is the owner, or the authorized
licensee, of all works contained herein that are protected by copyright, all trade-marks (except as otherwise noted to the contrary), and all
inventions and trade secrets that may be contained in this document, whether or not such inventions and trade secrets are protected by
patents and applications for patents. Without limitation, the unauthorized use, modification, copying, or disclosure of this document may
violate laws that protect CSA Group’s and/or others’ intellectual property and may give rise to a right in CSA Group and/or others to seek legal
redress for such use, modification, copying, or disclosure. To the extent permitted by licence or by law, CSA Group reserves all intellectual
property rights in this document.
Patent rights
Attention is drawn to the possibility that some of the elements of this standard may be the subject of patent rights. CSA Group shall not be
held responsible for identifying any or all such patent rights. Users of this standard are expressly advised that determination of the validity of
any such patent rights is entirely their own responsibility.
Authorized use of this document
This document is being provided by CSA Group for informational and non-commercial use only. The user of this document is authorized to do
only the following:
If this document is in electronic form:
- • load this document onto a computer for the sole purpose of reviewing it;
- • search and browse this document; and
- • print this document if it is in PDF format.
Limited copies of this document in print or paper form may be distributed only to persons who are authorized by CSA Group to have such
copies, and only if this Legal Notice appears on each such copy.
In addition, users may not and may not permit others to
- • alter this document in any way or remove this Legal Notice from the attached standard;
- • sell this document without authorization from CSA Group; or
- • make an electronic copy of this document.
If you do not agree with any of the terms and conditions contained in this Legal Notice, you may not load or use this document or make any
copies of the contents hereof, and if you do make such copies, you are required to destroy them immediately. Use of this document
constitutes your acceptance of the terms and conditions of this Legal Notice.

<!-- 第 3 页 -->
Standards Update Service
Title: Motor-operated appliances (household and commercial)
To register for e-mail notification about any updates to this publication
- • go to shop.csa.ca
- • click on CSA Update Service
The List ID that you will need to register for updates to this publication is 2426197.
If you require assistance, please e-mail techsupport@csagroup.org or call 416-747-2233.
personal information.

<!-- 第 4 页 -->
Motor-operated appliances
(household and commercial)
®A trademark of the Canadian Standards Association, operating as “CSA Group”
Published in August 2018 by CSA Group
A not-for-profit private sector organization
178 Rexdale Boulevard, Toronto, Ontario, Canada M9W 1R3
To purchase standards and related publications, visit our Online Store at shop.csa.ca
or call toll-free 1-800-463-6727 or 416-747-4044.
ISBN 978-1-4883-1447-6
All rights reserved. No part of this publication may be reproduced in any form whatsoever
without the prior permission of the publisher.

<!-- 第 5 页 -->
Contents
Commercial Use
Preface
Scope
Reference publications
Definitions
General requirements
C22.2 No. 68-18
Motor-operated appliances (household and commercial)
Technical Committee on Consumer and Commercial Products
Subcommittee on Electrical Motor and Battery-Operated Cleaning Appliances for Industrial and
Construction
5.1
General
5.1.1
Components
5.1.2
Stability
5.1.3
Backflow prevention
5.2
Enclosures
5.2.1
General
5.2.2
Protection of electrical parts
5.2.3
Supply cord material
5.2.4
Liquid containers
5.2.5
Nonmetallic enclosures
5.2.6
Flammability of enclosures of unattended appliances
5.2.7
Flammability of enclosures of attended appliances
5.2.8
Flammability of enclosures
5.2.9
Enclosures of moving parts
5.2.10  Enclosures of outdoor equipment
5.2.11  Enclosures of equipment used in a garage
5.2.12  Openings in enclosures
5.2.13  Enclosure doors and covers
5.2.14  Tests for outdoor and car wash equipment
5.3
Protection against corrosion
5.3.1
Iron and steel parts
5.3.2
Protection of surfaces
5.4
Mechanical assembly
5.4.1
Security from vibration
5.4.2
Fastening
5.4.3
Connections to live metal parts
5.4.4
Splices and connections
5.4.5
Brush caps
5.5
Supply connections
5.5.1
Permanently connected appliances
5.5.2
Cord-connected appliances and power-supply cords

<!-- 第 6 页 -->
5.6
Strain relief, flexing, and cord set retention
5.6.1
Strain relief
5.6.2
Flat cords
5.6.3
Permanently attached cords
5.6.4
Hand-held appliances
5.7
Terminal parts
5.7.1
General
5.7.2
Terminal parts of hand-held appliances
5.7.3
Leads
5.7.4
Rigid wiring terminals
5.8
Wiring
5.8.1
Internal wiring
5.8.2
Raceways
5.8.3
Holes
5.8.4
Insulation
5.8.5
Magnet wire
5.8.6
Internal wire types
5.8.7
Ampacity
5.8.8
Connections
5.8.9
Removal of covers
5.9
Electrical insulation
5.9.1
General
5.9.2
Arcing
5.9.3
Arcing or sparking parts of equipment used in a garage
5.10
Motors
5.10.1  General
5.10.2  Overheating protection
5.10.3  Motor-operated pumping units for painting equipment
5.10.4  Automatic-reset protective devices
5.10.5  Optional thermal protectors
5.10.6  Barbecue motors
5.11
Switches and controls
5.11.1  General
5.11.2  Voltage, current, and horsepower ratings
5.11.3  Safety interlock switches, mechanisms, and controls
5.11.4  Manually operated control devices
5.11.5  Cord-connected equipment
5.11.6  Painting equipment
5.12
Suppressors
5.12.1  General
5.12.2  Connection
5.13
Lampholders
5.13.1  General
5.13.2  Extra-low-voltage lamps
5.13.3  Mounting
5.13.4  Current and voltage ratings
5.13.5  Construction
5.13.6  Screw-shells
5.13.7  Shades

<!-- 第 7 页 -->
5.14
Protective devices and fuseholders
5.14.1  Construction
5.14.2  Polarization of overcurrent protective device
5.14.3  Ungrounded or double-insulated equipment
5.15
Transformers
5.16
Spacings
5.16.1  General
5.16.2  Spacings within electrical components
5.16.3  Use of insulating barriers
5.16.4  Magnet wire
5.17
Special safety features
5.17.1  General
5.17.2  Loosening of parts
5.17.3  Cutting mechanisms
5.18
Bonding and grounding
5.18.1  General
5.18.2  Exceptions
5.19
Pressure vessels and parts subject to pressure
5.19.1  Exceptions
5.19.2  Hydrostatic strength test
5.19.3  Construction
5.19.4  Drain holes
5.19.5  Pressure release
5.19.6  Shut-off valves
5.19.7  Protection by pressure-relief devices
5.19.8  Pressure setting of pressure-relief valves
5.19.9  Pressure-relief devices
5.19.10  Setting of pressure-regulating devices
5.19.11  Electric pressure-regulating devices
5.19.12  Pneumatic pilot valves
5.19.13  Pressure gauges
5.19.14  Air compressors
5.19.15  Start-to-discharge pressure
5.20
Sprayers, high-pressure airless sprayers, and high-pressure washers/cleaners
5.20.1  Sprayers
5.20.2  High-pressure airless sprayers
5.20.3  High-pressure washers/cleaners
5.20.4  Flash point of fluid used with sprayers
5.21
Painting equipment with a roller-type applicator
5.22
Printed circuit boards
5.22.1  General
5.22.2  Class 2 circuits
5.22.3  Spacing between conductors and components
5.22.4  Internal spacings
5.22.5  Component failure
5.23
Motorized chairs, beds, and exercise appliances
5.23.1  Entrapment prevention
5.23.2  Protective enclosures and baffles
5.23.3  Child-safe controls

<!-- 第 8 页 -->
5.23.4  Motion controls
5.23.5  Power failure
5.23.6  Hand-held control box interconnecting cable
5.23.7  Testing
5.24
Rechargeable battery-operated pedestrian controlled material moving or transporting
appliances
Tests
6.1
General
6.1.1
Sequence of tests
6.1.2
Test voltage
6.1.3
Rated frequency
6.1.4
Duty cycle
6.2
Maximum normal load
6.2.1
General
6.2.2
Vibrators and massage machines
6.2.3
Air compressors
6.2.4
Household trash compactors
6.2.5
Paint sprayers
6.2.6
Painting equipment with roller-type applicators
6.2.7
Motor-operated hoists
6.2.8
Motor-operated treadmills
6.2.9
Golf putting cups
6.2.10  Household electrically operated chairs, beds, and exercise appliances
6.2.11  Barbecue motors
6.2.12  Brake lathes
6.3
Starting
6.3.1
General
6.3.2
Compliance testing
6.4
Rating
6.5
Temperature (normal)
6.5.1
Maximum temperature
6.5.2
Testing at overvoltage and undervoltage
6.5.3
Frequency
6.5.4
Limiting temperature of insulating materials
6.5.5
Temperature tests
6.5.6
Temperature measurement
6.5.7
Equipment not continuously operated
6.6
Dielectric strength
6.6.1
Criteria
6.6.2
Testing transformer
6.6.3
Switches and controls
6.7
Temperature (abnormal)
6.7.1
General
6.7.2
Determining hazards
6.7.3
Test conditions for hazards
6.7.4
Additional abnormal test
6.7.5
Short-circuiting of components and conductors
6.7.6
Hand-held appliances

<!-- 第 9 页 -->
6.7.7
Testing of foot control
6.7.8
Thermal protection
6.7.9
Motor-operated pumping units
6.7.10  Criteria
6.8
Overload and endurance (switches and controls)
6.8.1
Overload
6.8.2
Endurance
6.9
Leakage current
6.9.1
Single-phase cord-connected appliances
6.9.2
Leakage current for grounded stationary treadmills containing EMC filter
6.9.3
Meter
6.9.4
Frequency
6.9.5
Applied voltage
6.9.6
Test circuit
6.9.7
Test conditions
6.9.8
Position of switches
6.9.9
Bonding conductors
6.9.10  Appliances with enclosures of insulating material
6.9.11  Overfill and tip over
6.10
Stability
6.11
Physical abuse
6.11.1  Impact
6.11.2  Drop
6.11.3  Shock hazard
6.11.4  Static load
6.12
Strain relief, flexing, and cord set retention
6.12.1  Strain relief
6.12.2  Flexing
6.12.3  Cord set retention
6.13
Speed control — Limited short-circuit
6.13.1  Testing for fire hazard
6.13.2  Controls to be tested
6.13.3  Enclosure
6.13.4  Testing of samples
6.13.5  Ignition
6.14
Backflow
6.15
Flaming oil — Perforated metal panels or wire screens
6.15.1  Application of test
6.15.2  Apparatus
6.15.3  Location
6.15.4  Ignition of oil
6.15.5  Contact of oil with cheesecloth
6.15.6  Criteria
6.16
Hydrostatic strength — Pressure vessel and system parts
6.16.1  Requirements
6.16.2  Test procedure
6.16.3  Performance under rated load
6.16.4  Pneumatic pilot valve
6.17
High-current arc ignition

<!-- 第 10 页 -->
6.18
Moisture-absorption resistance of insulation
6.19
Standard flame
6.19.1  Appliances unattended in normal use
6.19.2  Appliances attended in normal use
6.19.3  Other appliances
6.20
Motorized chairs, beds, and exercise appliances
6.20.1  Rating
6.20.2  Normal load and operating cycle
6.20.3  Entrapment
6.20.4  Bed or chair deflection test
6.20.5  Motion control
6.20.6  Power failure
6.20.7  Bed or chair temperature (abnormal) test
6.20.8  Longitudinal abrasion
6.20.9  Conditioning
6.21
Oven conditioning (nonmetallic enclosures)
Marking
7.1
General
7.2
Compliance
7.3
Equipment for intermittent use
7.4
Separately supplied components
7.5
Single-motor equipment
7.6
Voltage
7.7
Electric beds
7.8
Cleaning instructions
7.9
Equipment for garage use
7.10
Receptacles
7.11
Non-time-delay equipment
7.12
Fuse ratings
7.13
Supply conductor temperatures
7.14
Brackets
7.15
Combustible fluids
7.16
Sprayers
7.16.1  General
7.16.2  High-pressure airless sprayers
7.16.3  High-pressure washers/cleaners
7.16.4  GFCI marking
7.17
Painting equipment
7.18
Commercial appliances for permanent connection
7.19
Motorized chairs, beds, and exercise appliances
7.20
Connections to potable water
7.21
Air compressors
Cord-connected double-insulated appliances
8.1
Application
8.2
General requirements
8.2.1
Grounding
8.2.2
Construction

<!-- 第 11 页 -->
8.2.3
Enclosure material
8.2.4
Supplementary insulation
8.2.5
Enclosure as supplementary or reinforced insulation
8.2.6
Basic insulation
8.2.7
Capacitors
8.2.8
Loss of insulation
8.3
Construction
8.3.1
General
8.3.2
Openings and recesses
8.3.3
Mechanical assembly
8.3.4
Supply connections
8.3.5
Spacings
8.4
Marking
8.5
Tests
8.5.1
Dielectric strength
8.5.2
Leakage current
8.5.3
Insulation test
Annex A (normative)
— Requirements for rechargeable battery motor-operated appliances
Annex B (normative)
— French translations of markings

<!-- 第 12 页 -->
Technical Committee on Consumer and
Commercial Products
S. Lawrence
Cisco Systems Canada Co.,
Scarborough, Ontario
Category: Producer Interest
Chair
D. Mascarenhas
Brampton, Ontario
Category: User Interest
Vice-Chair
D.P. Badry
Yukon Government, Community Services,
Whitehorse, Yukon
Category: Regulatory Authority
G. Benjamin
Thomas & Betts Limited,
Dorval, Québec
Category: Producer Interest
W.J. Burr
Burr and Associates,
Campbell River, British Columbia
Category: User Interest
J. Clements
Dallas, Texas, USA
Category: General Interest
J.E. Evans
Evans Regulatory Certification Consulting,
Jasper, Ontario
Category: General Interest
N. Hanna
Electrical Safety Authority,
Mississauga, Ontario
Category: Regulatory Authority
W. Hansen
Trane Ingersoll Rand,
La Crosse, Wisconsin, USA
Category: Producer Interest
J.A. Huzar
Consumers Council of Canada,
Victoria, British Columbia
Category: User Interest
J. Imlah
Imlah Electrical Consulting,
Aloha, Oregon, USA
Category: General Interest

<!-- 第 13 页 -->
R.J. Kelly
Government of Nunavut, Department of Community
& Government Services,
Iqaluit, Nunavut
Category: Regulatory Authority
F. LaRiccia
Health Canada, The Risk Assessment Bureau,
Ottawa, Ontario
Category: Regulatory Authority
G. Lundy
IBM Canada Ltd.,
Markham, Ontario
Category: Producer Interest
B.L. Rebel
Association of Home Appliance Manufacturers
Canada (AHAM),
Ottawa, Ontario
Category: Producer Interest
A.Z. Tsisserev
AES Engineering,
Vancouver, British Columbia
Category: General Interest
A. Andronescu
CSA Group,
Toronto, Ontario
Project Manager

<!-- 第 14 页 -->
Subcommittee on Electrical Motor and
Battery-Operated Cleaning Appliances for
Industrial and Commercial Use
M. Andersen
Underwriters Laboratories Inc.,
Northbrook, Illinois, USA
R.D. Battema
Compliance Consulting Services LLC,
Bristol, Tennessee, USA
C.A. Bender
Tennant Company,
Holland, Michigan, USA
S. Briquet
Tiger-Vac International Inc.,
Laval, Québec
R.B. Chase
Nautilus, Inc.,
Vancouver, Washington, USA
D. Conlon
Underwriters Laboratories Inc.,
Melville, New York, USA
J.E. Evans
Evans Regulatory Certification Consulting,
Jasper, Ontario
C. Freed
Nilfisk A/S,
Hadsund, Denmark
D.V. Grandin
Bureau Veritas Consumer Products Services,
Buffalo, New York, USA
D.R. Harper
Campbell Hausfeld, a Division of the Scott-Fetzer
Company,
Harrison, Ohio, USA
J.A. Huebsch
Electrolux Small Appliances Sector,
Shanghai, China
A. Jensen
Icon Health & Fitness,
Logan, Utah, USA

<!-- 第 15 页 -->
B.P. Kelkhoff
The Chamberlain Group, Inc.,
Elmhurst, Illinois, USA
D. Koltak
Bissell Incorporated,
Grand Rapids, Michigan, USA
D.C. Kumpf
Hoover Inc.,
Glenwillow, Ohio, USA
D. Lawrence
Canavac Systems Inc.,
Stratford, Ontario
Z. Lemez
Thane Direct Inc.,
Mississauga, Ontario
E.S. Lindsay
Lindsay Manufacturing Inc.,
Ponca City, Oklahoma, USA
T. Lu
CSA Group,
Toronto, Ontario
B.G. McIntosh
Alberta Municipal Affairs,
Grande Prairie, Alberta
P.R. Molina
Avidbots Corp.,
Kitchener, Ontario
C.A. Newton
All Canada Vac Limited,
Mississauga, Ontario
G.N. Polosky
AMETEK Inc.,
Kent, Ohio, USA
D.A. Rivord
Graco Minnesota Inc.,
Minneapolis, Minnesota, USA
P. Schilke
Nilfisk-Advance, Inc.,
Plymouth, Minnesota, USA
J. Seminatore
Carnegie Robotics,
Pittsburgh, Pennsylvania, USA
M.T. Sherman
Graco Minnesota Inc.,
Minneapolis, Minnesota, USA

<!-- 第 16 页 -->
F.D. Stritesky
In-Sink-Erator Division, Emerson Electric Company,
Racine, Wisconsin, USA
B. Thompson
Icon Health & Fitness,
Logan, Utah, USA
B. Ulm
Discovery Robotics,
Pittsburgh, Pennsylvania, USA
G. Weidner
GW Technical Services Inc.,
Wausau, Wisconsin, USA
M.B. Williams
Association of Home Appliance Manufacturers
(AHAM),
Washington, DC, USA
M. Yousef
Health Canada,
Ottawa, Ontario
A. Andronescu
CSA Group,
Toronto, Ontario
Project Manager

<!-- 第 17 页 -->
Preface
This is the eighth edition of CSA C22.2 No. 68, Motor-operated appliances (household and commercial),
one of a series of Standards issued by CSA Group under Part II of the Canadian Electrical Code. It
supersedes the previous editions, published in 2009, 1992, 1989, 1981, 1976, 1962, and 1942.
This edition updates the 2009 edition of CSA C22.2 No. 68. The major differences include the removal of
the requirements for shaving appliances, hair clippers, animal shearers, appliances used for manicure,
appliances for hair dressers and similar appliances, food waste disposers and sewing machines, and the
addition of requirements for tool cabinets, material moving and transporting devices, and rechargeable
battery-operated appliances.
This Standard is considered suitable for use for conformity assessment within the stated scope of the
Standard.
This Standard was prepared by the Subcommittee on Electrical Motor and Battery-Operated Cleaning
Appliances for Industrial and Commercial Use, under the jurisdiction of the Technical Committee on
Consumer and Commercial Products and the Strategic Steering Committee on Requirements for
Electrical Safety, and has been formally approved by the Technical Committee.
Interpretations: The Strategic Steering Committee on Requirements for Electrical Safety has provided
the following direction for the interpretation of standards under its jurisdiction: “The literal text shall be
used in judging compliance of products with the safety requirements of this Standard. When the literal
text cannot be applied to the product, such as for new materials or construction, and when a relevant
CSA committee interpretation has not already been published, CSA Group’s procedures for
interpretation shall be followed to determine the intended safety principle.”
Notes:
1)
Use of the singular does not exclude the plural (and vice versa) when the sense allows.
2)
Although the intended primary application of this Standard is stated in its Scope, it is important to note that it
remains the responsibility of the users of the Standard to judge its suitability for their particular purpose.
3)
This Standard was developed by consensus, which is defined by CSA Policy governing standardization — Code
of good practice for standardization as “substantial agreement. Consensus implies much more than a simple
majority, but not necessarily unanimity”. It is consistent with this definition that a member may be included in
the Technical Committee list and yet not be in full agreement with all clauses of this Standard.
4)
To submit a request for interpretation of this Standard, please send the following information to
inquiries@csagroup.org and include “Request for interpretation” in the subject line:
- a)
define the problem, making reference to the specific clause, and, where appropriate, include an
illustrative sketch;
- b)
provide an explanation of circumstances surrounding the actual field condition; and
- c)
where possible, phrase the request in such a way that a specific “yes” or “no” answer will address the
issue.
Committee interpretations are processed in accordance with the CSA Directives and guidelines governing
standardization and are available on the Current Standards Activities page at standardsactivities.csa.ca.
5)
This Standard is subject to review within five years from the date of publication. Suggestions for its
improvement will be referred to the appropriate committee. To submit a proposal for change, please send the
following information to inquiries@csagroup.org and include “Proposal for change” in the subject line:
- a)
Standard designation (number);
- b)
relevant clause, table, and/or figure number;
- c)
wording of the proposed change; and
- d)
rationale for the change.

<!-- 第 18 页 -->
Motor-operated appliances (household and
commercial)
1 Scope
1.1
This Standard applies to motor-operated appliances* intended for use with nominal system voltages of
600 V and less, except that where appliances are driven by universal-type motors or electromagnetic
mechanisms, the scope is limited to appliances rated for use on nominal system voltages of 240 V or
less. This Standard applies to appliances designed to be used in accordance with CSA C22.1, Canadian
Electrical Code, Part I.
* For convenience, the term “appliance” or “equipment” is used in this Standard.
1.2
This Standard applies to permanently connected, cord-connected, and rechargeable battery-operated
appliances for household and commercial use in non-hazardous locations.
Note: The products covered by this Standard include massage appliances, automotive servicing equipment, air
compressors, car wash equipment, chairs, beds, exercise appliances, paint sprayers, paint rollers, parts cleaners,
household trash compactors, barbecue motors, hand-held engravers, material moving and transporting devices
(i.e., hand pallet trucks, electric wheelbarrows), and similar equipment.
1.3
This Standard applies to sprayers intended for extensive open spraying of cleaning fluids, paint,
insecticides, and similar liquids having a flashpoint higher than 60 °C, but excluding electrostatic
sprayers and sprayers for use in spray booths or in other areas where hazardous concentrations of
flammable vapours are likely to be present.
1.4
Automotive equipment covered by this Standard, such as wheel aligners, engine timing lights, and
analyzers, tools cabinets, might or might not have motors.
1.5
Requirements for cord-connected double-insulated appliances are specified in Clause 8.
1.6
Requirements for rechargeable battery-operated appliances are specified in Annex A.
1.7
This Standard does not include requirements for equipment covered by a specific Standard under the
Canadian Electrical Code, Part II (e.g., drafting tables, pencil sharpeners).

<!-- 第 19 页 -->
1.8
This Standard does not apply to
- a)
electric shavers, hair clippers (including animal clippers), animal shearers, appliances used for
manicure or pedicure, appliances for hairdressers, and similar appliances. These appliances are
covered by CAN/CSA-C22.2 No. 60335-2-8;
- b)
food waste disposers. These appliances are covered by CAN/CSA-C22.2 No. 60335-2-16;
- c)
electric sewing machines These appliances are covered by CAN/CSA-C22.2 No. 60335-2-28;
- d)
shoe polishing appliances. These appliances are covered by CAN/CSA-C22.2 No. 60335-2-82; and
- e)
dental irrigators. These appliances are covered by CAN/CSA-C22.2 No. 60335-2-52.
1.9
In this Standard, “shall” is used to express a requirement, i.e., a provision that the user is obliged to
satisfy in order to comply with the standard; “should” is used to express a recommendation or that
which is advised but not required; and “may” is used to express an option or that which is permissible
within the limits of the Standard.
Notes accompanying clauses do not include requirements or alternative requirements; the purpose of a
note accompanying a clause is to separate from the text explanatory or informative material.
Notes to tables and figures are considered part of the table or figure and may be written as
requirements.
Annexes are designated normative (mandatory) or informative (non-mandatory) to define their
application.
2 Reference publications
This Standard refers to the following publications, and where such reference is made, it shall be to the
edition listed below, including all amendments published thereto.
CSA Group
B51-14
Boiler, pressure vessel, and pressure piping code
CAN/CSA-B64 Series-11 (R2016)
Backflow preventers and vacuum breakers
CAN/CSA-B64.1.1-11
Atmospheric vacuum breakers (AVB)
CAN/CSA-B64.1.2-11
Pressure vacuum breakers (PVB)
CAN/CSA-B64.3-11
Dual check valve backflow preventers with atmospheric port (DCAP)

<!-- 第 20 页 -->
CAN/CSA-B64.4-11
Reduced pressure principle (RP) backflow preventers
CAN/CSA-B64.8-11
Dual check valve backflow preventers with intermediate vent (DuCV)
B140.0-03 (R2018)
Oil-burning equipment: General requirements
C22.1-18
Canadian Electrical Code, Part I
CAN/CSA-C22.2 No. 0-10 (R2015)
General requirements - Canadian Electrical Code, Part II
C22.2 No. 0.4-17
Bonding of electrical equipment
CAN/CSA-C22.2 No. 0.17-00 (R2018)
Evaluation of properties of polymeric materials
C22.2 No. 0.23-15
General requirements for battery-powered appliances
C22.2 No. 8-13
Electromagnetic interference (EMI) filters
C22.2 No. 14-18
Industrial control equipment
C22.2 No. 18.1-18
Metallic outlet boxes
C22.2 No. 18.2-06 (R2016)
Nonmetallic outlet boxes
C22.2 No. 24-15
Temperature-indicating and -regulating equipment
C22.2 No. 39-13 (R2017)
Fuseholder assemblies
C22.2 No. 42-10 (R2015)
General use receptacles, attachment plugs, and similar wiring devices
C22.2 No. 43-17
Lampholders
C22.2 No. 49-14
Flexible cords and cables

<!-- 第 21 页 -->
C22.2 No. 55-15
Special use switches
C22.2 No. 66.1-06 (R2015)
Low voltage transformers — Part 1: General requirements
C22.2 No. 66.2-06 (R2015)
Low voltage transformers — Part 2: General purpose transformers
C22.2 No. 66.3-06 (R2015)
Low voltage transformers — Part 3: Class 2 and Class 3 transformers
C22.2 No. 77-14
Motors with inherent overheating protection
C22.2 No. 94.2-15
Enclosures for electrical equipment, environmental considerations
C22.2 No. 100-14
Motors and generators
C22.2 No. 111-10 (R2015)
General-use snap switches
C22.2 No. 127-18
Equipment and lead wires
C22.2 No. 144.1-16
Ground-fault circuit-interrupters
C22.2 No. 156-M1987 (R2013)
Solid-state speed controls
CAN/CSA-C22.2 No. 198.1-06 (R2015)
Extruded insulating tubing
C22.2 No. 210-15
Appliance wiring material products
C22.2 No. 213-17
Nonincendive electrical equipment for use in Class I and II, Division 2 and Class III, Divisions 1 and 2
hazardous (classified) locations
CAN/CSA-C22.2 No. 4248 series
Fuseholders
CSA CAN/CSA-C22.2 No. 60335-2-8:16
Household and similar electrical appliances — Safety — Part 2-8: Particular requirements for shavers,
hair clippers and similar appliances

<!-- 第 22 页 -->
CSA CAN/CSA-C22.2 No. 60335-2-16:16
Household and similar electrical appliances — Safety — Part 2-16: Particular requirements for food
waste disposers
CAN/CSA-C22.2 No. 60335-2-23:15
Household and similar electrical appliances — Safety — Part 2-23: Particular requirements for
appliances for skin or hair care
CSA CAN/CSA-C22.2 No. 60335-2-28:16
Household and similar electrical appliances — Safety — Part 2-28: Particular requirements for sewing
machines
CSA CAN/CSA-C22.2 No. 60335-2-52:14
Household and similar electrical appliances — Safety — Part 2-52: Particular requirements for oral
hygiene appliances
CSA CAN/CSA-E60335-2-82:13 (R2018)
Household and similar electrical appliances — Safety — Part 2-82: Particular requirements for
amusement machines and personal service machines
CAN/CSA-C22.2 No. 61058-1:17
Switches for appliances — Part 1: General requirements
CAN3-C235-83 (R2015)
Preferred voltage levels for AC systems, 0 to 50 000 V
CAN/CSA-E60730-1:15
Automatic electrical controls — Part 1: General requirements
Z262.6-14
Specifications for facially featured headforms
ASME (The American Society of Mechanical Engineers)
PTC9-1970 (R1997)
Displacement Compressors, Vacuum Pumps and Blowers
ASTM International
D2240-15e1
Standard Test Method for Rubber Property — Durometer Hardness
3 Definitions
The following definitions shall apply in this Standard:
Attended intermittent-duty household appliance — an appliance intended for infrequent and short-
time use in a household and used only while attended.
Basic insulation — insulation applied to bare live parts in order to separate them from inaccessible non-
current-carrying metal parts or from supplementary insulation, or both.

<!-- 第 23 页 -->
Combustible liquid — a liquid having a flash point of 38 °C or higher.
Compressor horsepower — the mechanical power required by the compressor air pump shaft to deliver
air at a rated pressure and volume flow rate.
Cord-connected equipment — equipment that is connected to the electrical supply by a cord set or by
a power-supply cord terminating in a suitable attachment plug.
Double-insulated appliance — an appliance in which double insulation or reinforced insulation, or both,
is used throughout, without provision for grounding.
Note: An appliance constructed with double or reinforced insulation, or both, throughout but that has a three-
conductor cord and attachment plug for grounding certain non-current-carrying metal parts is considered to be
grounded equipment and not a double-insulated appliance.
Double insulation — an insulation system that comprises both basic insulation and supplementary
insulation, arranged such that they are not simultaneously subjected to the same deteriorating stresses
(e.g., electric field, temperature, contaminants) to the same degree.
Flash point — the minimum temperature at which a liquid gives off sufficient vapour to form an
ignitable mixture with the air near the surface of the liquid or within the vessel used.
Hand-held equipment — equipment intended to be held in the hand during normal use and whose
motor forms an integral part of the equipment.
High-pressure airless sprayer — a spraying system for paint, insecticides, and similar applications, that
employs a high-pressure liquid pump connected by a high-pressure liquid hose to a spray gun and that
operates at a pressure of 2500 kPa or greater.
High-pressure washer/cleaner — a cleaning-agent (water with or without the addition of a soluble or
miscible chemical) spraying system that employs a high-pressure liquid pump connected by a high-
pressure liquid hose to a cleaning-agent spray gun and that operates at a pressure of 2500 kPa or
greater.
Permanently connected equipment — an appliance or equipment that is not disconnected from the
electrical supply by means of an attachment plug.
Pressure-regulating device — a pressure-responsive mechanism designed to automatically limit the
operation of the pressure-imposing element at a predetermined pressure.
Pressure-relief device — a pressure-actuated valve or rupture member designed to automatically
relieve pressure in excess of its setting or design rupture-pressure.
Pressure-relief valve — a pressure-actuated valve held closed by a spring or other means and designed
to automatically relieve pressure in excess of its setting.
Pressure vessel — an unfired vessel used for containing, storing, distributing, transferring, distilling,
processing, or otherwise handling any gas, vapour, or liquid under pressure.
Reinforced insulation — an insulation system applied to bare live parts to separate them from
accessible or external surfaces, or both.
Note: The term “insulation system” does not imply that the insulation is one homogeneous piece; rather, it can
comprise several layers that cannot be tested separately as supplementary or basic insulation.

<!-- 第 24 页 -->
Supplementary insulation — insulation applied in addition to basic insulation in order to prevent
contact with inaccessible non-current-carrying metal parts or with basic insulation, or both.
Note: An enclosure of insulating material can form a part or all of the supplementary insulation.
4 General requirements
General requirements applicable to this Standard are given in CAN/CSA-C22.2 No. 0.
5 Construction
5.1 General
5.1.1 Components
Electrical components provided as part of appliances and auxiliary electrical equipment shall conform to
the particular Standard of the Canadian Electrical Code, Part II, covering such components and shall also
be suitable for their respective applications.
5.1.2 Stability
Appliances other than hand-held appliances shall meet the requirements of Clause 6.10. As an
alternative, the appliance may be provided with a bracket or other device for being secured to a floor or
wall so as to achieve the necessary stability, provided that it is marked in accordance with Clause 7.14.
5.1.3 Backflow prevention
5.1.3.1
Appliances having provision for connection to a potable water supply shall comply with Clause 5.1.3.2 or
5.1.3.3, as applicable.
5.1.3.2
Appliances incorporating a liquid storage tank whose source is a potable water supply shall have
- a)
an air gap between the water inlet and the maximum water level in the storage tank. The height of
the air gap shall be at least three times the diameter of the water supply pipe to the tank and shall
be not less than 25 mm. All appliances except those intended for stationary installation shall
comply with Clause 6.14;
- b)
a vacuum breaker in compliance with CAN/CSA-B64.1.1 or CAN/CSA-B64.1.2; or
- c)
a backflow preventer in compliance with CAN/CSA-B64.3, CAN/CSA-B64.4, or CAN/CSA-B64.8.
5.1.3.3
Appliances not incorporating a liquid storage tank shall
- a)
be marked as specified in Clause 7.20; or
- b)
comply with Clause 5.1.3.2.

<!-- 第 25 页 -->
5.2 Enclosures
5.2.1 General
Enclosures of electrical appliances shall be constructed to provide the strength and rigidity necessary to
resist the normal abuse to which they might be subjected, as determined by the applicable physical
abuse tests of Clause 6.11.
5.2.2 Protection of electrical parts
Electrical parts of appliances, except power supply cords, shall be located or enclosed to provide
protection against accidental contact with bare or single-insulated live parts that could present a shock
hazard. Parts of outer enclosures that are intended to be removed, without the use of tools, by the user
of the appliance (to permit the attachment of accessories, for operating adjustments, etc.) shall not be
considered a suitable means of protection against shock hazard unless the supply cord must be
removed from the appliance before disassembly. Insulated brush caps do not require additional
enclosures.
5.2.3 Supply cord material
5.2.3.1
If supply cord material is used as internal wiring within the enclosure of an appliance, such wiring
material shall be excluded when determining compliance with Clause 5.2, provided that
- a)
all conductor connections are contained within a separate enclosure; and
- b)
the supply cord material used is at least equivalent to the power-supply cord material specified in
Table 1 for the type of appliance.
5.2.3.2
If the supply cord material used for internal wiring is of the parallel-conductor integral type (e.g., SPT), it
shall not be ripped more than 75 mm unless
- a)
the minimum wall thickness of the conductor insulation after ripping is at least 1.37 mm;
- b)
the minimum thickness of the conductor insulation after ripping is at least 0.66 mm and is wholly
contained within a separate enclosure; or
- c)
the minimum thickness of the conductor insulation after ripping is at least 0.66 mm and the
conductor is enclosed in supplementary insulating tubing that meets the requirements of
CAN/CSA-C22.2 No. 198.1.
5.2.4 Liquid containers
Appliances having a liquid container that can be overfilled in normal use shall comply with the overfill
test specified in Clause 6.9.11.1, and portable units having liquid containers that can tip over and spill
the liquid shall comply with the tip-over test specified in Clause 6.9.11.2.
5.2.5 Nonmetallic enclosures
Nonmetallic enclosures for live parts shall
- a)
comply with the oven conditioning requirements of Clause 6.21;
- b)
not be in contact with incandescent lamps;
- c)
if part of the insulation system, be moisture-absorption resistant as determined by the moisture-
absorption test of Clause 6.18; and
- d)
comply with the flame test requirements of Clauses 5.2.6 to 5.2.8, as applicable.

<!-- 第 26 页 -->
Enclosures of switches and controls that comply with Clause 5.11.1 shall be exempt from this
requirement.
5.2.6 Flammability of enclosures of unattended appliances
5.2.6.1
Appliances that are unattended in normal use (e.g., aquarium pumps), or that have power-consuming
components (e.g., transformers, semiconductors, relays, motor windings, but excluding pilot lights,
supply conductors, and switches) that remain energized when not operated, shall comply with
- a)
one of the following tests in CAN/CSA-C22.2 No. 0.17:
- i)
flame test A in Clause D1;
ii)
5VA; or
iii) the flame retardant coatings test; or
- b)
the requirements of Clause 5.2.6.2 of this Standard.
5.2.6.2
Enclosures of appliances specified in Clause 5.2.6.1 shall comply with the high-current arc ignition test
and the horizontal burning (HB) test in CAN/CSA-C22.2 No. 0.17.
Components shall comply with the following, as applicable:
- a)
all components: Clause 6.7.3;
- b)
speed controls: Clause 6.13;
- c)
transformers, if provided: CSA C22.2 No. 66.3; and
- d)
motors that can remain energized while the appliance is unattended shall be thermally protected in
compliance with CSA C22.2 No. 77.
5.2.7 Flammability of enclosures of attended appliances
Except as otherwise specified in Clauses 5.2.6.2 and 5.2.8, appliances that are attended in normal use
shall comply with Flame test D in CAN/CSA-C22.2 No. 0.17.
5.2.8 Flammability of enclosures
Enclosures of appliances that have momentary contact switches or are intended to be hand-held during
operation shall comply with the horizontal burning (HB) test in CAN/CSA-C22.2 No. 0.17.
For appliances containing open components without enclosures or component enclosures not
complying with the applicable Standard of the Canadian Electrical Code, Part II, the appliance enclosure
shall comply with the high-current arc ignition test in CAN/CSA-C22.2 No. 0.17.
5.2.9 Enclosures of moving parts
Except for parts that are necessarily exposed during normal operation, moving parts that can pose a
hazard (e.g., pulleys, belts, and gears) shall be enclosed or guarded to prevent accidental contact. The
means used for enclosing or guarding shall comply with the probe test specified in Clause 5.2.12.3 or
5.2.12.4.
5.2.10 Enclosures of outdoor equipment
Enclosures for outdoor equipment (e.g., barbecue motors) shall meet the requirements of
Clause 5.2.14.1.

<!-- 第 27 页 -->
5.2.11 Enclosures of equipment used in a garage
Equipment intended for use in a garage or similar location and containing sparking or arcing parts (e.g.,
switches and commutators) shall be
- a)
totally enclosed; or
- b)
constructed to
- i)
prevent the escape of hot metal, sparks, and flaming particles; and
ii)
keep such igniting materials more than 50 mm from any side of the enclosure that can be
placed on the floor or another support.
Equipment shall be marked in accordance with Clause 7.9.
5.2.12 Openings in enclosures
5.2.12.1
Openings in appliances, except for hand-held types and those underneath motors that comply with
CSA C22.2 No. 77, shall not be located directly below terminals, heater elements, or wiring, including
insulated conductors and other live parts, except power-supply cords and wiring suitable for use outside
the enclosure, unless they are baffled or screened to prevent molten metal or burning material from
falling on the supporting surface. This requirement shall not apply to wiring supplied from a Class 2
transformer that complies with CSA C22.2 No. 66.1 and CSA C22.2 No. 66.3.
5.2.12.2
Ventilating and other openings in external enclosures of table-mounted and hand-held equipment shall
be designed, located, or protected to prevent Probe 1 as shown in Figure 1 from contacting live parts,
whether bare or insulated (e.g., coil windings), or moving internal parts, contact with which can result in
injury to persons during the intended use of the equipment, except as required by Clause 5.17.
5.2.12.3
Except as permitted in Clause 5.2.12.4, openings in enclosures of appliances other than table-mounted
and hand-held appliances shall prevent Probe 2 as specified in Figure 1 from contacting bare live parts,
insulated live parts (e.g., coil windings), or moving internal parts, contact with which can cause injury to
persons during the intended use of the equipment.
5.2.12.4
Openings that permit a 19 mm diameter rod to enter an enclosure shall not permit such a rod to
contact live parts, whether bare, insulated, or moving, contact with which can cause injury within the
space specified in Figure 2.
5.2.12.5
If a screen or perforated metal panel is used to prevent molten metal or burning material from falling
on the supporting surface as required by Clause 5.2.12.1, it shall be
- a)
a galvanized steel screen or the equivalent, having a 14 × 14 mesh and wire with a diameter of
0.46 mm;
- b)
a panel in accordance with Table 2; or
- c)
a perforated metal panel or wire screen that complies with the flaming oil test specified in
Clause 6.15.

<!-- 第 28 页 -->
5.2.13 Enclosure doors and covers
5.2.13.1
Doors or covers shall be hinged or otherwise attached in an equivalent manner where
- a)
they provide access to any protective devices, the normal functioning of which requires
replacement; or
- b)
it is necessary to open such doors or covers in connection with the normal operation of an
appliance.
Note: The replacement of fuses is not considered a normal operation, but the resetting of overload devices and the
adjustment of timers or switches or similar equipment are considered normal operations.
5.2.13.2
Doors or covers shall be close-fitting and provided with means for holding them in a closed position. If
such doors and covers provide access to bare live parts, they shall not be capable of being opened
without use of a tool or key.
5.2.14 Tests for outdoor and car wash equipment
5.2.14.1 Water test for outdoor equipment
Equipment intended for outdoor use shall comply with the rain test requirements specified in Clause 8.3
of CSA C22.2 No. 94.2.
5.2.14.2 Leakage current test
Immediately following the test specified in Clause 5.2.14.1, the equipment shall comply with the leakage
current test specified in Clause 6.9.
5.2.14.3 Water test for car wash equipment
Except as permitted by Clause 5.2.14.4, electrical equipment intended for use in a car wash area shall
comply with the requirements of Clause 5.2.14.1. Submersible products shall comply with the
requirements of Clause 8.10 of CSA C22.2 No. 94.2.
5.2.14.4 Exception
Equipment that can be exposed to water, spray, or detergent solution, and that is intended to have its
of its own discharge for 5 min from a distance of 1.50 m.
5.2.14.5 Dielectric strength and insulation resistance test
At the conclusion of the tests specified in Clauses 5.2.14.3 and 5.2.14.4, the equipment shall withstand a
repeat dielectric strength test (see Clause 6.6), and the insulation resistance at 500 V dc applied
between the supply terminals and exposed non-current-carrying conductive parts shall be not less than
50 000.
Note: The insulation resistance test should only be conducted on appliances that are not cord- and plug-connected;
typically this test is only conducted on permanently connected appliances.
5.3 Protection against corrosion
5.3.1 Iron and steel parts
Iron and steel parts shall be protected against corrosion in accordance with CAN/CSA-C22.2 No. 0.

<!-- 第 29 页 -->
5.3.2 Protection of surfaces
The surfaces of metal parts shall be protected, if necessary, against scaling, flaking, and other effects of
corrosive action that might, in normal use, cause reduction in the dielectric strength of appliances or
reduce the spacings to smaller than those required by Clause 5.16.
5.4 Mechanical assembly
5.4.1 Security from vibration
Appliances shall be so assembled that they will not likely be affected adversely by the vibration of
normal operation. Wire connectors shall be taped unless applied by a compression tool or a machine.
5.4.2 Fastening
Switch assemblies, lampholders, receptacles, or controls provided as parts of appliances shall be
fastened securely and rigidly and shall be prevented from turning by means other than friction between
surfaces. Lockwashers shall not be used to prevent rotation of the body of rotary switches or field
wiring terminals.
5.4.3 Connections to live metal parts
Connections to live metal parts (e.g., brushholders) shall be such that
- a)
the electrical connection is maintained; and
- b)
the connection is prevented from turning or shifting in position by means other than friction
between surfaces, if such motion would result in a reduction of spacings to smaller than those
specified in Clause 5.16.
5.4.4 Splices and connections
Splices and connections shall be mechanically secure and shall provide adequate and reliable electrical
contact. Except for printed circuit boards and hollow pin terminals into which the wire is inserted,
soldered connections shall be made mechanically secure before being soldered if breaking or loosening
of the connections could result in any hazardous condition. Splices shall be provided with insulation
equivalent to that of the wires if the required spacing between splices and other metal parts is not met.
5.4.5 Brush caps
Brush caps of motors shall be threaded or otherwise constructed to prevent loosening.
5.5 Supply connections
5.5.1 Permanently connected appliances
5.5.1.1
Appliances intended to be permanently connected shall have a terminal box, or the equivalent, suitable
for conduit connection to the supply. Terminal boxes shall comply with CAN/CSA-C22.2 No. 0, CSA C22.2
No. 18.1, or CSA C22.2 No. 18.2.
5.5.1.2
Where openings for conduit connection are provided in sheet metal enclosures,
- a)
the metal thickness shall be not less than
- i)
0.78 mm (No. 20 MSG) for sheet steel; and
ii)
1.08 mm (No. 16 MSG) for nonferrous metal; or

<!-- 第 30 页 -->
- b)
the enclosure and conduit connection shall comply with the impact test of Clause 6.11.1.
5.5.1.3
Boxes for wiring terminal parts shall be of metal or of moisture-absorption-resistant insulating material
that complies with the flame test of Clause 5.2.6. The thickness of the metal shall be in accordance with
Table 3, or the terminal box shall comply with the static load test of Clause 6.11.4.
5.5.1.4
Terminal boxes of wiring compartments in which supply connections are made shall be located so that
connections will be readily accessible for inspection after the appliance is installed as intended.
5.5.2 Cord-connected appliances and power-supply cords
5.5.2.1
Appliances shall have a suitable length of permanently attached power-supply cord or shall be provided
with male terminals of the pin or blade type that will accommodate a suitable connector for attaching a
cord set or interconnecting cord.
If a ground-fault circuit interrupter (GFCI) is provided, it
- a)
shall be a Class A type complying with CSA C22.2 No. 144.1; and
- b)
shall be
- i)
an integral part of the power-supply-cord attachment plug; or
ii)
located in the power-supply cord within 200 mm of the attachment plug face. The GFCI shall
be marked as specified in Clause 7.16.4.
Note: Power-supply cords measuring 1.22 to 1.83 m (4 to 6 ft) from the face of the attachment plug to the point of
attachment or entry into the enclosure are considered to be of suitable length for massage appliances and motor-
operated footbaths.
5.5.2.2
Appliances with a cord set or permanently attached power-supply cord shall have an attachment plug
complying with CSA C22.2 No. 42 for connection to the supply circuit. The voltage rating of the
attachment plug shall correspond to the voltage rating of the product, and the ampacity of the
attachment plug shall be no less than
- a)
the marked current rating of the appliance or the input current under maximum normal load
conditions (see Clause 6.2), whichever is greater, for appliances that operate in the normal
intended use for a total of 1 h or less in any 2 h period; and
- b)
125% of the marked current rating of the appliance or 125% of the input current under maximum
normal load conditions (see Clause 6.2), whichever is greater, for appliances that operate in the
normal intended use for a total of more than 1 h in any 2 h period.
5.5.2.3
If an appliance is marked in watts, for the purposes of Clause 5.5.2.2, the marked current shall be
measured while the appliance is loaded to draw marked watts.
5.5.2.4
If the appliance is designed for use with two or more different supply voltages, the attachment plug
provided shall be rated for the supply voltage selected at the factory, and the appliance shall be marked
in accordance with Clause 7.6.

<!-- 第 31 页 -->
5.5.2.5
Power-supply cords, cord sets, and interconnecting cords provided for use with appliances shall be of
the types specified in Table 1 or the equivalent. Interconnecting cords, which are not subjected to the
same adverse conditions as supply cords, shall be of types suitable for their specific condition of use.
The cords of appliances, considering conditions of use other than those specified in Table 1, shall be of
types specified in Table 4.
5.5.2.6
The supply cord for a high-pressure washer/cleaner shall be
- a)
permanently attached to the machine; and
- b)
not less than 7 m in length.
5.5.2.7
The connection at the appliance intended for an accessory such as a connector in a controller or a
power-supply cord shall not be made using general-purpose receptacles or attachment-plug caps of the
type used to connect the supply cord to a general-purpose receptacle.
5.5.2.8
Guards or some equivalent type of protection shall be provided to prevent accidental contact with
terminals of the pin or blade type when they are live or to protect them from mechanical damage, or
both.
The guard shall prevent a straight edge placed in any position across the guard from touching any
terminal.
Guards shall afford protection equivalent to that of steel not less than 0.68 mm thick (No. 22 MSG) and
shall be fastened independently of the terminals, unless investigation shows that no hazard is present.
5.5.2.9
A hand-held engraver having a rating of 30 W or less shall be provided with a flexible cord having a
mechanical serviceability rating of not less than Type SPT-2.
5.6 Strain relief, flexing, and cord set retention
5.6.1 Strain relief
Strain relief shall be provided where a permanently attached power-supply cord enters an enclosure so
that mechanical strain on the supply cord is not transmitted to terminals, splices, or internal wiring.
Accessible interconnecting cords and cables that are permanently attached and carry hazardous
voltages shall also be provided with a strain-relief device that complies with Clause 6.12.1.
5.6.2 Flat cords
In the case of flat cords (e.g., SPT and HPN) having parallel conductors that can be separated, the strain
relief may be applied to the separated conductors, provided that the separated portion of the cord does
not extend outside the appliance enclosure or bushing.
5.6.3 Permanently attached cords
A permanently attached power-supply cord, cable, or wiring that is subjected to flexing during normal
use of the equipment shall withstand the flexing test specified in Clause 6.12.2.

<!-- 第 32 页 -->
5.6.4 Hand-held appliances
A hand-held appliance rated over 30 V that employs a cord set shall have the appliance plug retention
system tested as specified in Clause 6.12.3.
5.7 Terminal parts
5.7.1 General
Except as otherwise specified in Clause 5.7.2, terminal parts such as binding head screws, bolts, and
studs shall not be smaller than Size No. 6.
5.7.2 Terminal parts of hand-held appliances
Terminal parts such as binding head screws, bolts, and studs of hand-held appliances shall not be
smaller than Size No. 3.
5.7.3 Leads
Where leads in the terminal box are intended for connection to the power-supply conductors at the
time of installation, they shall be
- a)
of suitable ampacity and length;
- b)
No. 18 AWG or larger; and
- c)
Type CL751, CL902, CL1251, or an equivalent as specified in CSA C22.2 No. 127.
5.7.4 Rigid wiring terminals
Rigid wiring terminals shall thread into metal and shall be prevented, by means other than friction, from
turning or shifting that could result in reducing the spacings required by Clause 5.16.
5.8 Wiring
5.8.1 Internal wiring
Internal wiring and connections shall be located to prevent contact with moving parts and
- a)
rigid; or
- b)
mechanically held.
5.8.2 Raceways
Raceways shall be smooth and free from projections, sharp edges, burrs, etc., that could cause abrasion
of the insulation on conductors.
5.8.3 Holes
Holes in walls through which conductors pass shall have smoothly rounded bushings or shall have
smooth, well-rounded surfaces upon which conductors can bear.
5.8.4 Insulation
Internal wiring shall have a type of insulation recognized as suitable for the particular application, when
considered with respect to
- a)
the temperature and voltage to which the wiring will be subjected;
- b)
exposure to oil or grease; and
- c)
other conditions of service to which the wiring is likely to be subjected.

<!-- 第 33 页 -->
5.8.5 Magnet wire
The magnet wire of a coil may be used as a lead if the wire is
- a)
connected directly to fixed terminals of brushholders, switches, terminal boards, and similar parts;
- b)
not smaller than No. 23 AWG copper or the equivalent, except for cord-connected appliances with
an input of 300 W or less at 120 V, and 600 W or less at 240 V, in which case the wire may be
smaller than No. 23 AWG; or
- c)
provided with a sleeving of suitable insulating material that is securely fastened or supported and
that meets the applicable requirements of CAN/CSA-C22.2 No. 198.1, except when
- i)
not in contact with non-current-carrying conductive parts; or
ii)
having sufficient rigidity and so located that there is no likelihood of the spacings between
bare live parts and non-current-carrying conductive parts becoming smaller than the required
minimum, even if the wires break.
5.8.6 Internal wire types
Internal wiring shall be of Type TEW, GTF, SEWF-1, SEW-1, TR, or an equivalent as specified in
CSA C22.2 No. 127.
5.8.7 Ampacity
The ampacity of conductors shall be such that the limiting temperature for the insulation is not
exceeded.
5.8.8 Connections
Connections in wiring shall have their sleeving, if provided, mechanically ensured.
5.8.9 Removal of covers
The removal of covers for coin or ticket collection in coin- or ticket-operated equipment shall not
expose terminals, wiring, or other live parts.
5.9 Electrical insulation
5.9.1 General
Current-carrying parts other than magnet wire shall be supported on flame-resistant and moisture-
absorption-resistant insulating materials such as porcelain, phenolic composition, or equivalent material
and shall be in compliance with the HB test in CAN/CSA-C22.2 No. 0.17. Insulating materials of cord-
connected appliances rated 150 volts-to-ground or less shall comply with the moisture-absorption test
of Clause 6.18.
5.9.2 Arcing
When subjected to the effects of arcing (e.g., by proximity to open electrical contact of switches or
commutators), insulation shall be in compliance with the HB test in CAN/CSA-C22.2 No. 0.17.
5.9.3 Arcing or sparking parts of equipment used in a garage
Parts that can create arcing or sparking (e.g., switches, receptacles, connectors, commutators, motors,
etc.) shall be located not less than 460 mm above the floor level.

<!-- 第 34 页 -->
5.10 Motors
5.10.1 General
Motors shall comply with the applicable requirements of CSA C22.2 No. 100, except for motor
enclosures, which shall meet the applicable requirements of this Standard.
5.10.2 Overheating protection
Motors shall have inherent overheating protection in accordance with CSA C22.2 No. 77. This
requirement shall not apply to
- a)
appliances having overload protection, consisting of a device that is responsive to motor current,
rated or set at values not greater than specified in the Canadian Electrical Code, Part I;
- b)
commercial appliances intended for permanent connection, in which the motor can be readily
protected against overload at the time of installation in accordance with the Canadian Electrical
Code, Part I, and that are marked in accordance with Clause 7.18;
- c)
appliances having a momentary contact switch;
- d)
appliances that are hand-held during the intended use;
- e)
attended intermittent-duty household appliances that comply with Clause 6.7.3 e); or
- f)
attended intermittent-duty household appliances incorporating a one-shot fusible device, which
might or might not be installed by the manufacturer.
5.10.3 Motor-operated pumping units for painting equipment
The motor of a motor-operated pumping unit for painting equipment with a roller-type applicator shall
have overheating protection in accordance with CSA C22.2 No. 77. The pumping unit shall comply with
the abnormal test of Clause 6.7.9.
5.10.4 Automatic-reset protective devices
Automatic-reset types of protective devices shall not be used in motor-operated equipment if the
automatic restarting of motors could result in any hazardous conditions.
5.10.5 Optional thermal protectors
Appliances having motors with optional thermal protectors and marked or claimed to be thermally
protected shall comply with the applicable requirements of CSA C22.2 No. 77.
5.10.6 Barbecue motors
Barbecue motors shall not reach temperatures higher than 65 °C above ambient temperature when
tested in accordance with Clause 6.2.11.
5.11 Switches and controls
5.11.1 General
Switches and controls shall comply with the applicable requirements of
- a)
CSA C22.2 No. 14;
- b)
CSA C22.2 No. 24;
- c)
CSA C22.2 No. 55;
- d)
CSA C22.2 No. 111;
- e)
CSA C22.2 No. 156;
- f)
CAN/CSA-C22.2 No. 61058-1; or
- g)
CAN/CSA-C22.2 No. E60730-1.

<!-- 第 35 页 -->
5.11.2 Voltage, current, and horsepower ratings
Switches and controls shall have voltage, current, and horsepower (where applicable) ratings not lower
than those of the circuits that they control, or they shall be subjected to investigation to determine
their acceptability for the application.
5.11.3 Safety interlock switches, mechanisms, and controls
Safety interlock switches, mechanisms, and controls shall meet the requirements of Clauses 6.8.1 and
6.8.2.
5.11.4 Manually operated control devices
Manually operated control devices shall have the OFF position clearly indicated, unless their
construction or operating conditions render this unnecessary. The symbol “O” may be used to indicate
the OFF position.
5.11.5 Cord-connected equipment
Cord-connected equipment having a motor rated more than 1/3 hp shall be provided with a switch for
controlling the motor. The switch shall not be connected in the circuit of the identified conductor unless
this connection results in the opening of all ungrounded supply conductors to the motor.
5.11.6 Painting equipment
For painting equipment utilizing a roller-type applicator and having a pressure-actuated switch that
operates under normal use, the endurance test specified in Clause 6.8.2.2 shall be conducted.
5.12 Suppressors
5.12.1 General
Suppressors for radio interference shall comply with CSA C22.2 No. 8.
5.12.2 Connection
Suppressors shall not be connected between live parts and exposed conductive parts, except as is
necessary for normal operation of the equipment.
5.13 Lampholders
5.13.1 General
Lampholders shall comply with the applicable requirements of CSA C22.2 No. 43.
5.13.2 Extra-low-voltage lamps
Lampholders for extra-low-voltage lamps (e.g., 30 V or less) shall not be connected across parts of
motor windings if the rating of the motor is higher than 150 V.
5.13.3 Mounting
Lampholders and lamps shall be securely mounted and protected from mechanical damage by
- a)
their location;
- b)
the type of lampholder; or
- c)
a suitable guard.

<!-- 第 36 页 -->
5.13.4 Current and voltage ratings
Lampholders shall have current and voltage ratings suitable for the circuit in which they are connected.
5.13.5 Construction
Lampholders shall be of dead-front construction.
5.13.6 Screw-shells
Screw-shells of lampholders shall be connected in the circuit of the identified conductor if one is
provided.
5.13.7 Shades
Shades for lampholders shall be supported independently of the lampholders.
5.14 Protective devices and fuseholders
5.14.1 Construction
Protective devices and fuseholders shall be of dead-front construction unless they are located where
access is restricted in accordance with Clause 5.2.14. Fuseholders shall comply with CSA C22.2 No. 39 or
the CAN/CSA-C22.2 No. 4248 series.
5.14.2 Polarization of overcurrent protective device
A single-pole overcurrent protective device shall be connected between the ungrounded branch circuit
conductor and the load, except where the overcurrent protection device is located in that part of a
circuit that is connected by an unpolarized connector, in which case either or both conductors may be
protected. The screwshell of plug-fuse-type fuseholders and the cap end of extractor-post cartridge-
type fuseholders shall be connected to the load.
5.14.3 Ungrounded or double-insulated equipment
Ungrounded or double-insulated equipment provided with accessible fuseholders and equipment rated
240 V shall employ dead-front shockproof-type fuseholders, or shall comply with the marking
requirements of Clause 7.8.
5.15 Transformers
Transformers shall comply with CSA C22.2 No. 66.1, CSA C22.2 No. 66.2, and CSA C22.2 No. 66.3, as
applicable.
5.16 Spacings
5.16.1 General
Except as otherwise specified in Clauses 5.16.2 and 5.16.3, spacings shall be not smaller than those
specified in Table 5. If bare live parts are not rigidly supported, or if movable non-current-carrying
conductive parts are in proximity to bare live parts, the constructions shall be such that the minimum
spacings specified in Table 5 will be maintained under all conditions.

<!-- 第 37 页 -->
5.16.2 Spacings within electrical components
The spacings within motors, switches, lampholders, or other devices supplied as part of equipment shall
comply with the applicable Standard of the Canadian Electrical Code, Part II. If no such Standard exists,
spacings shall be the subject of investigation.
Spacings within motors complying with Table 5 need not comply with the component spacing
requirements of CSA C22.2 No. 100.
5.16.3 Use of insulating barriers
An insulating barrier or liner may be used to obtain the spacings required by Clause 5.16.2, provided
that it is
- a)
of adequate dielectric strength and resistant to moisture absorption;
- b)
not adversely affected by arcing and is suitable for the temperature encountered;
- c)
of adequate mechanical strength and permanently held in place by means other than adhesives;
- d)
not less than 0.66 mm thick, except that it may be not less than 0.33 mm thick if used in
conjunction with a spacing not less than one-half of that required by Clause 5.16.2;
- e)
mica with a thickness of 0.25 mm or another insulating material meeting the requirements of Items
mechanical means (in which case no spacing is required), and adhesives are not used.
5.16.4 Magnet wire
Magnet (e.g., film-coated) wire shall be considered a bare live part for the purposes of determining
compliance of equipment with the spacing requirements of this Standard.
5.17 Special safety features
5.17.1 General
Appliances or equipment involving mechanical or other hazards shall be provided with protection that
does not interfere with the intended manner of operating the equipment.
5.17.2 Loosening of parts
Movement of parts during the intended operation of equipment shall not result in any loosening of the
parts that could pose a hazard of personal injury (e.g., the exposure of moving or bare live parts).
5.17.3 Cutting mechanisms
Cutting mechanisms shall be guarded, except where exposure of the blades or other equivalent parts is
necessary for their operation.
5.18 Bonding and grounding
5.18.1 General
Unless double insulated, equipment shall be constructed to comply with CSA C22.2 No. 0.4, except as
otherwise specified in Clause 5.18.2.
5.18.2 Exceptions
Equipment, other than sprayers, need not comply with Clause 5.18.1 where
- a)
exposed metal parts are not likely to become energized, and the equipment complies with
Clause 8.5; or

<!-- 第 38 页 -->
- b)
it is cord-connected household equipment that is hand-held or table-mounted and is neither
connected to the water supply or drainage during use nor intended to be immersed partially or
entirely for cleaning.
5.19 Pressure vessels and parts subject to pressure
5.19.1 Exceptions
The requirements of Clauses 6.16.1 and 6.16.2 shall not apply to pressure vessels that are required by
provincial regulations to bear a Canadian Registration Number (CRN) or to high-pressure liquid spray
equipment.
A part of a product, other than a pressure vessel, that is subjected to air or vapour pressure during
normal or anticipated abnormal operation shall withstand without rupture a pressure corresponding to
- a)
five times the start-to-discharge setting of the relief device provided in the system, as determined
in accordance with Clause 5.19.15; or
- b)
five times the maximum pressure that can be developed in the system, but not greater than the
relief valve setting.
A section of a pressure system constructed of continuous copper or steel tubing or of lengths of copper
or steel tubing shall be connected by conventional tubing fittings or hard-soldered, brazed.
A motor-operated air compressor intended for use with sprinkler systems shall be tested at a pressure
corresponding to five times the maximum relief valve setting.
Note: See CSA B51 for detailed requirements for pressure vessels.
5.19.2 Hydrostatic strength test
Pressure vessels not required to bear a CRN but that are subjected to pressure exceeding 103 kPa shall
comply with the hydrostatic strength test specified in Clause 6.16.
5.19.3 Construction
Pressure vessels shall be constructed of ductile metals.
5.19.4 Drain holes
Where there is no means for gaining access to the inside of a stationary or permanently affixed pressure
vessel, a drain hole shall be provided and located in the lowest portion of the pressure vessel. The hole
shall be a threaded hole not smaller than 6.3 mm NPT (national pipe thread) and shall be provided with
a plug that can be removed or with piping to a drain cock. The system shall have provision for gravity or
pressure drainage of the vessel.
As an exception, pressure vessels having a drain hole located a maximum of 45° from the lowest point
of the vessel shall be considered to comply with this Clause when
- a)
the product is marked in accordance with Clause 7.21.3;
- b)
the instruction manual explains how to drain the pressure vessel properly; and
- c)
the product can be tilted so that the drain hole is at the lowest point, for complete draining
without introducing a risk of personal injury.

<!-- 第 39 页 -->
5.19.5 Pressure release
A means of relieving pressure (e.g., a pressure-relief device, fusible plug, soldered joint, nonmetal
tubing, or other equivalent means) shall be provided for a part in which pressure might be generated by
an external source of heat.
5.19.6 Shut-off valves
A shut-off valve shall not be provided between a pressure-relief means and the part that it is intended
to protect.
5.19.7 Protection by pressure-relief devices
A pressure vessel having an inside diameter greater than 76 mm and subject to air pressure generated
or stored within an assembly shall be protected by a pressure-relief device.
5.19.8 Pressure setting of pressure-relief valves
The start-to-discharge pressure setting of a pressure-relief device shall be not higher than the maximum
working pressure of the vessel. The discharge rate of the device shall ensure that the pressure
developed in the vessel does not rise more than 10% above the maximum working pressure.
5.19.9 Pressure-relief devices
A pressure-relief device shall
- a)
be connected as close as possible to the pressure vessel or parts of a system that it is intended to
protect;
- b)
be located so that it is readily accessible for inspection and repair and cannot be readily rendered
inoperative;
Note: A sealed adjustable pressure-relief valve may be used.
- c)
have its discharge opening located and directed so that operation of the device does not deposit
moisture on uninsulated live parts or on insulation or components negatively affected by moisture;
- d)
have a designated CRN; and
- e)
have means (e.g., a ring or handle) designated for testing whether the device is of a pressure-
actuated-valve type.
5.19.10 Setting of pressure-regulating devices
A pressure-regulating device necessary for regulating the pressure in a vessel shall
- a)
have a maximum pressure setting of not more than 90% of the rating of the pressure-relief device;
- b)
prevent the pressure-relief devices specified in Clause 5.19.9 from operating during or after the
test specified in Clause 5.19.11; and
- c)
if electric, comply with the requirements of Clause 5.19.11.
5.19.11 Electric pressure-regulating devices
Electric pressure-regulating devices shall comply with the 30 000-cycle test specified in Clause 6.16.3.
5.19.12 Pneumatic pilot valves
A pneumatic pilot valve used as a pressure-regulating device shall comply with the 30 000-cycle test
specified in Clause 6.16.4.

<!-- 第 40 页 -->
5.19.13 Pressure gauges
A pressure vessel shall have a pressure gauge or other equivalent device to indicate when pressure is
retained within the vessel. The gauge shall have a full-scale reading of not less than 150% of the
pressure-relief device setting. An appliance with a pressure indicator that is not calibrated in pressure
units shall be permanently marked to define the significance of the markings on the pressure indicator
(e.g., “0, 1, 2,
5.19.14 Air compressors
Air compressors marked in horsepower at the direction of the manufacturer shall be marked in
accordance with Clause 7.21.1. The air volume flow rate shall be measured as specified in ASME PTC9.
Air compressors likely or intended to be used as sprayers for paint, insecticide, or similar applications
shall comply with Clause 5.20.1, except that the hose specified in Clause 5.20.1 b) need not be provided.
Air compressors having a head or associated fittings and motor frame that can be contacted by the user
and attain temperatures that exceed the 90 °C limit for external surfaces as specified in Table 7 shall be
marked as specified in Clause 7.21.2.
5.19.15 Start-to-discharge pressure
To determine the start-to-discharge pressure setting of a pressure-relief device, three samples of the
device shall be subjected three times each to a gradually increasing air pressure. The pressure at which
the device begins to open shall be recorded. The start-to-discharge pressure setting of each sample shall
be considered the average value of the three trials.
5.20 Sprayers, high-pressure airless sprayers, and high-pressure washers/cleaners
5.20.1 Sprayers
Sprayers for paint, insecticides, and similar applications shall comply with the marking requirements of
Clause 7.16.1 b) and be constructed as follows:
- a)
Spray shall be prevented from accumulating within the unit in quantities sufficient to allow a
hazard to result from
- i)
a reduction in electrical spacing;
ii)
a reduction in heat dissipation; or
iii) the spray residue being ignited by arcing parts.
- b)
Arcing parts shall be so enclosed as to comply with the nonincendive test requirements for
nonincendive components as specified in CSA C22.2 No. 213 (Group D test gas), except that a
compressor or liquid pump connected to its spray gun by a hose at least 7.60 m in length need not
enclose arcing parts if marked in accordance with Clause 7.16.1 b).
- c)
Sprayers shall
- i)
have a means to limit liquid pressure to a maximum of 2500 kPa; or
ii)
comply with Clause 5.20.2.
5.20.2 High-pressure airless sprayers
A high-pressure airless sprayer shall
- a)
comply with Clause 5.20.1 a) and b);
- b)
be provided with an instruction manual;
- c)
be marked in accordance with Clause 7.16.2;
- d)
be provided with
- i)
a guard extending not less than 25.4 mm beyond the airless spraying tip; and

<!-- 第 41 页 -->
ii)
either
1)
an automatic trigger-locking device; or
2)
a manual trigger-locking device and a diffuser nut;
- e)
employ a hose with a burst pressure rating of four times the maximum rated working pressure of
the system for connection between the liquid pump and the spray gun. Such a hose shall have
suitable means (e.g., a grounding conductor, conductive hose, or metal reinforcing), to discharge
static electricity generated by liquid flow during normal use of the appliance; and
- f)
have a means to limit liquid pressure to the maximum system working pressure.
5.20.3 High-pressure washers/cleaners
A high-pressure washer/cleaner shall
- a)
employ a hose with a burst pressure rating of four times the maximum rated working pressure of
the system for connection between the liquid pump and the spray gun;
- b)
have a means to limit liquid pressure to a pressure not exceeding the maximum system working
pressure; and
- c)
be provided with a user instructional manual and marked in accordance with Clause 7.16.3.
5.20.4 Flash point of fluid used with sprayers
The flash point of manufacturer-recommended cleaning fluid or any other fluid used with sprayers,
high-pressure airless sprayers, and high-pressure washers shall be higher than 60 °C, and machines that
use combustible fluids shall be marked in accordance with Clause 7.15.
5.21 Painting equipment with a roller-type applicator
Arcing parts shall be
- a)
so enclosed as to comply with the nonincendive test requirements for nonincendive components in
CSA C22.2 No. 213 (Group D test gas); or
- b)
marked in accordance with Clause 7.17.
5.22 Printed circuit boards
5.22.1 General
Printed circuit boards shall be of heat-resistant and moisture-absorption-resistant insulating material
and, except as specified in Clause 5.22.2, shall comply with the V-1 or VTM-1 flame test requirements of
CAN/CSA-C22.2 No. 0.17.
5.22.2 Class 2 circuits
Printed circuit boards supporting only Class 2 circuits as defined in the Canadian Electrical Code, Part I,
or in CSA C22.2 No. 66.1 and CSA C22.2 No. 66.3 shall comply with the HB flame test in CAN/CSA-C22.2
No. 0.17.
5.22.3 Spacing between conductors and components
Except where an appliance complies with Clause 6.7.4, spacings between conductors or components, or
both, shall be not smaller than specified in Table 5.
5.22.4 Internal spacings
Where spacings cannot be readily ascertained (e.g., spacings internal to a component), the printed
circuit board shall withstand the application of the dielectric strength test voltage specified in Table 6
for not less than 1 s without breakdown, unless the equipment complies with Clause 6.7.4.

<!-- 第 42 页 -->
5.22.5 Component failure
Where the failure of a component can cause a fire or shock hazard, the appliance shall comply with
Clause 6.7.4.
5.23 Motorized chairs, beds, and exercise appliances
5.23.1 Entrapment prevention
Motorized chairs, beds, and exercise appliances that have moving parts that, during operation, can
cause pinching, crushing, or other injury to limbs or extremities as determined by the entrapment tests
of Clause 6.20.3, shall be baffled as specified in Clause 5.23.2 or provided with child-safe controls as
specified in Clause 5.23.3.
5.23.2 Protective enclosures and baffles
entrapment test of Clause 6.20.3 shall be enclosed or baffled by mechanical barriers that comply with
the deflection test requirements of Clause 6.20.4.
5.23.3 Child-safe controls
Where baffling of moving parts is impracticable, other means shall be provided to prevent unsupervised
operation of the device mechanism (e.g., a key lock for power switches or controls that are removable).
In such cases, a warning marking shall be provided on the control unit as specified in Clause 7.19.
5.23.4 Motion controls
5.23.4.1
Where the operation of exposed movable parts other than vibrators is controlled by a switch, the switch
shall be of the type that, when released, all moving parts of the mechanism that constitute a hazard are
stopped.
5.23.4.2
A switch that is used to control exposed movable parts that can pose a risk of personal injury shall be
guarded or located so as to prevent unintentional movement to any ON position.
5.23.4.3
Controls such as timers or automatic reset overload protective devices shall not be used unless it can be
demonstrated that automatic starting of the equipment using such devices will not pose a risk of
personal injury.
5.23.4.4
Switches and/or devices controlling the direction of travel of exposed moving parts of a mechanism
shall be capable of being stopped and the direction of travel reversed at any point in the operation of
the device mechanism when tested as specified in Clause 6.20.5.
5.23.5 Power failure
Motorized chairs, beds, and exercise appliances shall be constructed so that, in the event of a power
failure, they do not change position.

<!-- 第 43 页 -->
5.23.6 Hand-held control box interconnecting cable
The hand-held control box interconnecting cable (pendant cable) of motorized chairs, beds, and
exercise appliances, which carries shock-hazardous voltages, shall be
- a)
of a type as specified in Table 1 for power-supply cords; or
- b)
multi-conductor jacketed cable, Type AWM, Class II, Group B, that complies with
- i)
CSA C22.2 No. 210;
ii)
the flexing test of Clause 6.12.2, performed with the pendant control;
iii) the longitudinal abrasion test of Clause 6.20.8; and
iv) the conditioning test of Clause 6.20.9.
5.23.7 Testing
Motorized chairs, beds, and exercise appliances shall be tested as specified in Clauses 6.2.10 and 6.20.
5.24 Rechargeable battery-operated pedestrian controlled material moving or
transporting appliances
5.24.1
The travelling speed of pedestrian controlled material moving or transporting appliances shall not
exceed the normal adult walking speed of approximately 5.6 km/h (3.5 mph).
5.24.2
The power switch to the driving motor of the pedestrian controlled material moving or transporting
appliances shall be of momentary type that requires constant pressure to the actuator in order to
activate the drive motor.
5.24.3
The actuator of the power switch to the driving motor of pedestrian controlled material moving or
transporting appliances shall be protected from accidental turn on.
5.24.4
Pedestrian controlled material moving or transporting appliances that are supported by wheels only
shall be equipped with parking brake(s) that can be activated with a single foot or hand action of the
operator while in the position of operating the appliance.
5.24.5
Pedestrian controlled motorized hand pallet trucks shall be marked in accordance with Annex A.
6 Tests
6.1 General
6.1.1 Sequence of tests
Except as otherwise indicated, representative samples shall be subjected to the tests specified in
Clause 6. The order of the tests shall correspond to the order of the clauses.

<!-- 第 44 页 -->
6.1.2 Test voltage
Tests shall be conducted with the equipment connected to a supply having a voltage equal to the
nominal system voltage for the supply system with which the equipment is intended to operate
(e.g., 120 V). Nominal system voltage shall be as specified in CSA CAN3-C235.
6.1.3 Rated frequency
Where rated frequency is referred to the tests specified in Clause 6, it shall include dc if applicable.
6.1.4 Duty cycle
Where an appliance is marked for duty cycle, it shall be tested accordingly.
6.2 Maximum normal load
6.2.1 General
6.2.1.1
Except as otherwise specified in Clause 6.2.1.5, the maximum normal load shall be considered to be
that which approximates as closely as possible the most severe conditions of normal use, but which is
not a deliberate overload unless, in the opinion of the testing agency, conditions warrant such a load.
Test loads that have been found to be representative of the most severe conditions of normal use are
specified in Clauses 6.2.2 to 6.2.12. Protective devices (e.g., motor overheat protectors, fuses) shall not
operate during testing.
6.2.1.2
Equipment having characteristics not covered by the test procedures specified in Clause 6 shall be
tested as necessary to meet the intent of the requirements specified in this Standard.
6.2.1.3
Equipment using more than one attachment shall be tested with the attachment that provides the
greatest maximum normal load.
6.2.1.4
The value of current or watts input derived from a variable load, excluding OFF periods, shall be the
arithmetic average of the results from a recording meter.
6.2.1.5
Equipment that is marked in amperes, watts, horsepower, or any other rating greater than the
representative load specified in Clauses 6.2.2 to 6.2.12 shall be tested with a load applied to the motor
output shaft by a dynamometer, or by any other suitable means, to produce the greater load. This
greater load shall be considered the maximum normal load and shall be used as specified in Clauses 6.4
and 6.5.
6.2.2 Vibrators and massage machines
Household hand-held equipment shall be operated continuously at no-load for 20 min. Commercial
hand-held equipment shall be operated at no-load for 5 min ON and 5 min OFF until constant
temperatures are reached. Equipment that is not intended to be hand-held while in use shall be

<!-- 第 45 页 -->
operated continuously until constant temperatures are reached. Massagers with rope heaters shall
meet the 300 h endurance test as specified in Clause 22.102K of CAN/CSA-C22.2 No. 60335-2-23.
6.2.3 Air compressors
6.2.3.1
Air compressors shall be operated continuously at the test voltage and maximum electrical load until a
constant temperature is reached.
6.2.3.2
Air compressors with timers that are used as air dispensers/tire inflators at automotive service stations
shall be operated for 10 cycles with a 20 s interval between cycles, except that there shall be no interval
between the last two cycles. The duration of each cycle shall be equal to the maximum operating time
of the timer.
6.2.4 Household trash compactors
Household trash compactors shall be operated for 6 consecutive cycles with a 5 s interval between
cycles, under both of the following load conditions, with the motor being allowed to cool to room
temperature between test conditions:
- a)
no-load; and
- b)
with a simulated load of plastic foam blocks*, or a load that would cause the ram to reverse
direction within 25.4 mm of its maximum travel.
* Ethafoam® has been found to be suitable as a load for this test.
The input current or wattage to be marked on the units shall be the maximum value obtained while
operating under the conditions specified in Items a) and b), excluding the interval from 2 s before to 2 s
after the reversal of the ram at the compacting end of the operational cycles.
6.2.5 Paint sprayers
Paint sprayers shall be operated continuously while spraying water until a constant temperature is
reached. For sprayers with compressors integral to the spray guns, 2 min intervals shall be allowed for
the refilling of the reservoir, and the test shall be terminated after 1 h. If water is incompatible with the
paint sprayer mechanism or does not yield comparable results, another liquid may be substituted for
the test.
6.2.6 Painting equipment with roller-type applicators
Painting equipment with a roller-type applicator shall have the reservoir filled with water, and painting
action shall be simulated by cycling the unit 5 min ON followed by 1 min OFF. After five complete ON
and OFF cycles, the roller applicator shall be laid down for 10 min while leaving the unit active, and the
cycling shall be resumed until a constant temperature is reached. If water is incompatible with the
mechanism or does not yield comparable results, another liquid may be substituted for the test.
6.2.7 Motor-operated hoists
The input of motor-operated hoists shall be measured by performing 10 operations of raising the hoist
to the maximum recommended load with 2 min off at the top and 2 min off at the bottom. The hoist
shall be loaded with the maximum recommended load.

<!-- 第 46 页 -->
6.2.8 Motor-operated treadmills
The input in amperes and watts shall be determined by having a person weighing 91 kg run on the belt.
The measured input to the treadmill in amperes or watts shall not exceed 110% of the marked rating
when the equipment is operated at nominal system voltage and at any frequency ratings marked on the
nameplate.
The temperature test shall be conducted by loading the motor on the dynamometer at the measured
input until a constant temperature is reached. The ventilation provided to the motor shall be simulated
to approximate that of the treadmill.
6.2.9 Golf putting cups
The input in amperes and watts shall be determined by energizing the solenoid every 10 s. RMS values
of 10 pulses shall be measured and an average value shall be calculated. The temperature test shall be
conducted by energizing the solenoid every 10 s until a constant temperature is reached.
6.2.10 Household electrically operated chairs, beds, and exercise appliances
An electrically operated chair, bed, or exercise appliance shall be operated for nine complete cycles of
adjustment through its complete range of motion, without pause between cycles, except that a 5 min
period shall be interposed between the third and fourth cycle and between the sixth and seventh cycle.
During the 5 min intervals the motor shall be running without the operation of the appliance, if
possible; otherwise the motor shall be de-energized. If the speed of the operation of the appliance can
be controlled, the test shall be performed at such speed that maximum heating will result. An appliance
that is capable of more than one mode of motion shall be tested for each mode. The appliance shall be
loaded with weights representing the weight of a person, as follows:
- a)
An electric chair or exercise appliance shall be loaded with 90 kg by placing a 45 kg weight on the
seat, a 15 kg weight on the leg supports, and a 30 kg weight on the back supports, as shown in
Figure 3. A chair without a leg support shall be loaded with a 60 kg weight on the seat and a 30 kg
weight on the back support, as shown in Figure 4. The centre of gravity of the load secured to the
seat or leg/back support section shall be at a maximum distance from the pivot, but not more than
450 mm. The chair shall be operated in the mode that represents the maximum load (e.g., lifting of
90 kg total weight, while simultaneously raising the back and leg support sections, which shall be
loaded as specified above).
- b)
A single-size electric bed or exercise appliance shall be loaded with two 45 kg weights in a similar
fashion as specified in Item a). A maximum of two adjacent reclining sections may be loaded, but
all sections shall be operated at the same time. The centre-to-centre distance between the two
loads shall not exceed 1.2 m.
- c)
A double bed or exercise appliance shall be loaded in a similar fashion as specified in Items a) and
- b), with an additional 90 kg load (two 45 kg weights), and all sections of the bed shall be operated
simultaneously (see Figure 5).
6.2.11 Barbecue motors
Barbecue motors shall undergo temperature testing by operating until equilibrium is reached.
6.2.12 Brake lathes
The spindle motor of a brake lathe shall be operated continuously while cutting a rotor or drum until
thermal equilibrium is reached. The slide motor, if provided, shall be subjected to a duty cycle of 15 min
ON and 5 min OFF, until thermal equilibrium is reached. The input in amperes and watts of the slide
motor shall be determined by operating the motor through one complete cycle.

<!-- 第 47 页 -->
6.3 Starting
6.3.1 General
fuses (not time-delay fuses) having current ratings corresponding to that of the branch circuits to which
the equipment would be connected, except where
- a)
the equipment starts and operates normally on circuits protected by time-delay fuses; and
- b)
the equipment is marked in accordance with Clause 7.11.
6.3.2 Compliance testing
To determine compliance with Clause 6.3.1, the equipment shall be connected to an electrical supply of
the nominal system voltage and rated frequency and shall be started from stand-still to normal
operating speed three consecutive times without blowing the fuse. The equipment shall be at room
temperature at the beginning of the test. If the marked rating covers a range of frequencies, the
equipment shall be tested at the frequency found to yield the highest starting current.
6.4 Rating
The measured input to the equipment in amperes or watts shall be 85 to 110% of the marked rating
when the equipment is operated at nominal system voltage and at any of the frequency ratings marked
on the nameplate under the condition of maximum normal load, as specified in Clause 6.2, except that
single-phase equipment rated less than 3 A or 300 W input shall be 80 to 120% of the marked rating
and the indicated horsepower shall be 70 to 130% of the marked rating.
The shaft output horsepower of motors is not a required marking, but when it is indicated, advertised,
or marked, the actual shaft output horsepower at the maximum normal load shall be 80 to 120% of the
marked horsepower rating.
Equipment having a motor that is to be interchanged with another certified motor during production or
at the time of installation shall not impose a brake load exceeding the motor horsepower rating. This
requirement shall not affect the marking on an electric motor or generator meeting the requirements of
CSA C22.2 No. 100.
6.5 Temperature (normal)
6.5.1 Maximum temperature
When connected to an electrical supply complying with Clauses 6.1.2 and 6.5.3 and operated under
conditions of maximum normal load as specified in Clause 6.2, equipment shall attain neither
- a)
a temperature at any point sufficiently high to constitute a fire hazard or to affect adversely any
materials used in the equipment; nor
- b)
temperatures at specific points greater than those indicated in Table 7, based on an ambient
temperature of 25 °C.
6.5.2 Testing at overvoltage and undervoltage
Equipment shall meet the requirements of Clause 6.5.1 when tested at the extreme operating voltages
of the supply system (e.g., 120 V at 104 and 127 V; see CSA CAN3-C235) while operating in the intended
manner and at any speed setting for equipment designed to operate at more than one speed with an
additional allowance of 20 °C above the insulation temperature specified in Clause 6.5.1.

<!-- 第 48 页 -->
6.5.3 Frequency
Equipment shall be tested at 60 Hz unless rated for dc only or for another frequency only.
6.5.4 Limiting temperature of insulating materials
The limiting temperature for insulating materials other than those specified in Table 7 shall be the
subject of investigation.
6.5.5 Temperature tests
Temperature tests shall be conducted at any room temperature between 10 and 40 °C, and the
variation below or above 25 °C shall be respectively subtracted from or added to the limiting
thermostat.
6.5.6 Temperature measurement
Temperature readings shall be obtained by means of thermocouples, except that coil temperatures may
be determined by the rise-of-resistance method. For continuously operated equipment, a temperature
may be considered constant when three successive readings, taken at intervals of 10% of the previously
elapsed duration of the test, but not less than 5 min intervals, indicate no change. For equipment that is
not operated continuously, the recorded maximum temperatures shall be those obtained when the
equipment is operated at the maximum normal load specified in Clause 6.2.
6.5.7 Equipment not continuously operated
Equipment not intended for continuous operation (see Clause 7.3) shall be operated under its probable
intermittent or short-term duty for the maximum normal load conditions as specified in Clause 6.2.
6.6 Dielectric strength
6.6.1 Criteria
Immediately after the temperature test, the equipment shall withstand without breakdown, for 1 min,
the application of an ac voltage of suitable frequency between live parts and non-current-carrying
conductive parts that can become grounded, as follows:
- a)
for equipment rated 31 to 250 V: 1000 V;
- b)
for equipment rated 251 to 600 V: 1000 V plus twice the rated voltage;
- c)
for equipment rated 31 to 250 V that is not grounded and is applied directly to persons: 2500 V;
and
- d)
for extra-low-voltage circuits (other than self-generating millivolt circuits) at 30 V or less: 500 V.
Solid-state control circuits that normally have a connection to ground may have the ground connection
disconnected during the dielectric strength test.
6.6.2 Testing transformer
Compliance with Clause 6.6.1 shall be determined by means of a suitable testing transformer, the
output of which can be regulated. Starting at zero, the applied voltage shall be increased gradually and
at a uniform rate until the required test value is reached or breakdown occurs.
6.6.3 Switches and controls
For the dielectric strength test, all switches and controls shall be in the ON position.

<!-- 第 49 页 -->
6.7 Temperature (abnormal)
6.7.1 General
If the conditions of normal operation are not representative of abnormal conditions likely to be
encountered in actual service, equipment shall not become a fire or shock hazard when operated under
such abnormal conditions.
6.7.2 Determining hazards
Equipment shall be considered a hazard if operation under abnormal conditions results in
- a)
any emission of flame or molten metal, excluding solder; or
- b)
the glowing or flaming of combustible material on which the equipment might be placed, or of
adjacent wall surfaces, as specified in Clause 6.7.3.
6.7.3 Test conditions for hazards
To determine whether a fire hazard exists, a separate burnout or abnormal heating test shall be
conducted with the equipment connected to an electrical supply circuit complying with Clause 6.1.2 and
operating continuously until the ultimate result has been determined. The ultimate result may be
constant temperatures, the opening of the circuit by a fuse or thermal protector, or the opening of a
winding without resulting in a hazard. The following test conditions shall apply:
- a)
The equipment shall be located or supported in the same manner as specified for the normal
temperature test.
- b)
Controls such as temperature-regulating thermostats shall be set to the maximum heat position.
- c)
The test surfaces shall consist of four single-ply layers of cheesecloth, located in the position most
likely to be subject to fire hazard (e.g., on supporting surfaces) and draped loosely over the
appliance. The cloth used shall be bleached cheesecloth running approximately 34 g/m2, with a
thread count in the range of 10 to 13 by 9 to 12 thread/cm.
- d)
Cord-connected equipment that is designed to operate at more than one voltage (e.g., 120 and
240 V) shall be tested at the highest voltage while connected for operation at the lowest voltage,
and at any other connection and voltage if a more severe condition would result.
- e)
Equipment of the type specified in Clause 5.10.2 e) shall be tested additionally by subjecting five
samples to a stalled rotor test.
- f)
The equipment may be stationary during the test, and conditions of operation need not
approximate those of actual service.
- g)
During the test the leakage current shall be measured and shall not exceed the limit specified in
Clause 6.9.1.
- h)
After allowing the equipment to cool to room temperature, the equipment shall also withstand the
dielectric strength test of Clause 6.6 (repeated) after the abnormal temperature tests.
6.7.4 Additional abnormal test
Where required by Clauses 5.22.3, 5.22.4, or 5.22.5, equipment shall comply with the additional
abnormal test specified in Clause 6.7.5.
6.7.5 Short-circuiting of components and conductors
Conductors or components, or both, with spacings smaller than those required by Table 5 shall be
short-circuited. The failure mode of components (open or short circuit) shall be simulated. Only one
condition at a time shall be tested.

<!-- 第 50 页 -->
6.7.6 Hand-held appliances
Appliances that are hand-held and/or operated by a momentary contact switch shall be tested as
follows:
- a)
The rotor shall be locked and the unit shall be tested for 10 cycles of 15 s ON and 15 s OFF.
- b)
The unit shall be operated continuously under no-load conditions until the ultimate result has been
determined but for not longer than 7 h.
- c)
Where the unit has a one-shot protector that is necessary to prevent a hazard under the conditions
of Item a), then five samples shall be tested.
- d)
Where the unit is not supplied with a one-shot protector, only one sample shall be required for the
test of Item a).
- e)
Where the unit has an “optional” one-shot protector (i.e., the unit will pass all required tests
without the protector), then for the test of Item a), one sample shall be tested with the protector
shorted and one sample shall be tested with the protector in place.
- f)
The appliance shall comply with CSA C22.2 No. 77, unless
- i)
the unit is not marked THERMALLY PROTECTED; and
ii)
the appliance is investigated to ensure that the one-shot protector does not contribute to or
cause any fire or shock hazard.
6.7.7 Testing of foot control
In addition to being tested in accordance with Clause 6.7.6, foot controls shall be continuously operated
in the position that will generate the most heat, until the ultimate result has been determined (see
Clause 6.7.3) or for a maximum of 7 h. During the test, the foot control may be readjusted in order to
achieve and maintain the maximum temperature of the enclosure.
6.7.8 Thermal protection
An appliance that is not required by this Standard to be thermally protected but is equipped with
thermal protection shall be tested as follows:
- a)
The rotor shall be locked and the unit shall be operated continuously until the ultimate result has
been determined (see Clause 6.7.3).
- b)
The unit shall be continuously operated under no-load conditions until the ultimate result has been
determined or for a maximum of 7 h.
6.7.9 Motor-operated pumping units
As required by Clause 5.10.3, the switch of a motor-operated pumping unit shall be locked in the ON
position to cause pressure buildup. The pumping unit shall be tested until an ultimate result is achieved,
but for not more than 7 h. At the completion of the test, the pressure vessel shall not burst, leak, or
have any visible cracks.
6.7.10 Criteria
Following the additional abnormal tests, the equipment shall
- a)
not yield results as specified in Clause 6.7.2;
- b)
comply with Clause 6.6;
- c)
for cord-connected appliances rated 150 volts-to-ground or less, comply with Clause 6.10; and
- d)
comply with Clause 5.2.12.

<!-- 第 51 页 -->
6.8 Overload and endurance (switches and controls)
6.8.1 Overload
6.8.1.1
As required by Clause 5.11.3, safety interlock switches, mechanisms, and controls shall be tested at the
specified test voltage (see Clause 6.1.2) and rated frequency of the equipment, by making and breaking
the stalled motor current 50 consecutive times without undue arcing, burning, pitting, or welding of the
switch contacts, and without electrical or mechanical failure. If, in addition to the motor, another circuit
is controlled by the switch, it shall be included in the test load.
6.8.1.2
The following test conditions shall apply:
- a)
The duration of the ON and OFF periods shall be such that the temperature rise of the motor
windings does not exceed that which is normally encountered in service. The switches shall not be
operated at a rate higher than 10 times/min.
- b)
The switch poles that are least likely to arc to non-current-carrying conductive parts shall be
connected to such parts through a suitable fuse. Under this condition the fuse shall not blow.
6.8.1.3
If the equipment has both ac and dc ratings, the test required by Clause 6.8.1.1 shall be conducted with
the equipment connected to a dc supply of maximum rated voltage, and the dc overload test shall be
considered representative of the test for ac. In the event that switches fail the dc tests but subsequent
samples pass the ac tests, the equipment shall be rated for ac use only.
6.8.2 Endurance
6.8.2.1
As required by Clause 5.11.3, safety interlock switches, mechanisms, and controls shall comply with the
endurance test required by CSA C22.2 No. 55 and CSA C22.2 No. 111, as applicable, except that the
rated load may be considered to be the load controlled by the switch in the equipment.
6.8.2.2
As required by Clause 5.11.6, the pressure-actuated switch of painting equipment using a roller-type
applicator shall comply with the endurance test as required by CSA C22.2 No. 14, conducted at normal
load for 100 000 cycles of operation.
6.9 Leakage current
6.9.1 Single-phase cord-connected appliances
The leakage current of single-phase cord-connected appliances rated not more than 150 volts-to-ground
shall not exceed 0.75 mA when tested in accordance with Clauses 6.9.3 to 6.9.11.
6.9.2 Leakage current for grounded stationary treadmills containing EMC filter
The leakage current for a grounded stationary treadmill which contains an EMC suppression filter shall
not exceed 3.5 mA.

<!-- 第 52 页 -->
6.9.3 Meter
The meter shall be as shown in Figure 7. The leakage current shall be measured by means of the circuit
described in Figure 7 between any pole of the supply and accessible metal parts connected to metal foil
having an area not exceeding 20 cm × 10 cm which is in contact with accessible surfaces of insulating
materials. The voltmeter shown in Figure 7 shall be capable of measuring the true rms value of the
voltage.
6.9.4 Frequency
The frequency of the supply for the test shall be 60 Hz.
6.9.5 Applied voltage
The applied voltage shall be the nominal system voltage.
6.9.6 Test circuit
The test circuit shall be as shown in Figure 6.
6.9.7 Test conditions
6.9.7.1
The equipment shall be at room temperature with all switches in the ON position and switch S1 open. It
shall also be tested within 5 s of applying the test voltage (with switch S1 closed) and again after
reaching normal operating temperatures. Equipment with speed or temperature controls shall be tested
at low, medium, and high settings of the controls.
6.9.7.2
Protective impedance and radio interference filters if any, shall not be disconnected before carrying out
the tests.
6.9.8 Position of switches
The tests shall be conducted with the switch S2 in position A, and repeated with switch S2 in position B,
and with switch S1 both closed and open.
6.9.9 Bonding conductors
The bonding conductor of cord-connected appliances having a grounding circuit shall be connected to
ground only through the leakage current meter.
6.9.10 Appliances with enclosures of insulating material
Appliances having an enclosure of insulating material shall have a probe applied to metal foil with an
area of 200 cm2 in contact with accessible surfaces of such insulating material.
6.9.11 Overfill and tip over
6.9.11.1
Appliances having a liquid container (see Clause 5.2.4) that can be overfilled in normal use shall have
the container filled, after which half of this quantity of liquid (but not more than 0.5 L) shall be added
evenly over a 30 s period while the equipment is in the position of normal use. Where the test liquid is
water, it shall be a hard water solution of 0.5 g calcium sulphate (CaSO4) per litre.

<!-- 第 53 页 -->
6.9.11.2
Portable appliances having a liquid container that can be tipped over (see Clause 5.2.4) shall be filled to
capacity and then overturned. The direction of the spill shall be that which is most likely to result in a
shock hazard. Where the test liquid is water, the same water solution as specified in Item a) shall be
used.
6.10 Stability
The stability of a non-hand-held appliance shall be such that it will not overturn when placed in any
position on a surface inclined 10° from the horizontal. During this test, an appliance having casters shall
have the casters turned to the most unfavourable position, and any doors, drawers, or containers
supplied with the appliance shall be in the most unfavourable position, and filled or empty, whichever is
the more severe condition.
6.11 Physical abuse
6.11.1 Impact
Except as otherwise specified in Clause 6.11.2, exposed surfaces of equipment enclosures, supports,
handles, and controls shall withstand, while at normal room temperature, an impact of 2.03 J from a
50 mm diameter steel ball with a mass of approximately 0.5 kg. During the test,
- a)
the equipment shall be held in a fixed position on a supporting surface;
- b)
all attachments shall be removed; and
- c)
any covers or lids that can be opened or removed during use or adjustment shall be opened or
removed.
6.11.2 Drop
A sample of hand-held appliances shall withstand being dropped from a height of 0.91 m, three times,
on the hardwood test floor specified in Item c) of this Clause. The three drops shall result in an impact
on three different locations of the sample.
For this test,
- a)
if the equipment is provided with a cord set, it shall not be removed;
- b)
attachments shall be removed; and
- c)
the hardwood test floor shall be constructed of oak, birch, or maple flooring, securely attached to a
fir plywood base not less than 12 mm thick, with a total overall thickness between 25 and 38 mm.
During the test, the hardwood floor, which may be small in area (minimum 43 × 43 cm), shall be
supported by a concrete floor or the equivalent.
6.11.3 Shock hazard
As a result of the tests specified in Clause 6.11.1 or 6.11.2, the appliance shall not become a shock
hazard, as determined by the leakage current test of Clause 6.9 and the requirements of Clause 5.2.12
regarding openings in enclosures.
6.11.4 Static load
The terminal box shall be capable of withstanding for 1 min a vertical force of 1000 N on horizontal
surfaces when the appliance is mounted in any intended position. The load shall be applied through a
flat metal surface of 50 mm in diameter without impairing the effectiveness of the enclosures or
reducing the spacings to smaller than those specified in Table 5.

<!-- 第 54 页 -->
6.12 Strain relief, flexing, and cord set retention
6.12.1 Strain relief
As required by Clause 5.6.1, strain relief for permanently attached cords and cables shall prevent
transmission of strain to interior wiring, splices, and terminals when
- a)
a steady pull of 150 N is applied in any direction for 1 min, except that for household equipment
other than power-supply cords of residential garage door operating units, the test shall be
conducted with a steady pull of 90 N;
- b)
the cord or cable is pushed in, in which case the cord shall be prevented from contacting sharp
edges, points, or moving parts, or shall be exposed to temperatures above the temperature rating
of the cord insulation; and
- c)
a torque of 0.226 N•m per 2.54 mm minimum cross-section of the cord or cable is applied
between the cord and the enclosure for 1 min in either direction.
6.12.2 Flexing
6.12.2.1
As required by Clause 5.6.3, cords, cables, or wires that are flexed while in use shall withstand a flex test
of 5000 cycles where they enter the enclosure without causing exposure or breakage of the conductors
and without displacement or breakage of the anti-kink device, if supplied. The rate of flexing shall be
10 cycles/min unless the manufacturer agrees to a faster rate. The flexing test may be performed on a
sample other than that used for the strain relief test.
6.12.2.2
One cycle of the flexing test shall consist of the movement of the cord, cable, or wiring from a position
of the most extreme flex to the opposite position of the most extreme flex and back again, but no more
than a total of 180° (twice), and in the direction resulting in the most severe test.
6.12.2.3
The flexing test shall be conducted with the cord under a tension force of 1.1 N, with the tension
applied to the cord 200 mm from the point of cord entry.
6.12.2.4
At the completion of the test the appliance shall withstand the dielectric strength test specified in
Clause 6.6 and shall continue to function.
6.12.2.5
Impairment of the strain relief shall be determined by the test specified in Clause 6.12.1.
6.12.3 Cord set retention
As required by Clause 5.6.4, the appliance plug retention system shall be subjected to 1000 cycles of
plug insertion and removal, with each cycle consisting of an insertion into and removal from the
appliance.
The insertion and removal of the plug shall be done at a rate not exceeding 10 cycles/min unless the
manufacturer agrees to a faster rate. The appliance shall not be energized.

<!-- 第 55 页 -->
At the end of the test the plug retention system shall withstand for 1 min a 4.4 N withdrawal force
axially applied to the cord, without the plug becoming disengaged from the retention system.
6.13 Speed control — Limited short-circuit
6.13.1 Testing for fire hazard
Solid-state speed controls shall be tested for fire hazards in their enclosure (which could be the
enclosure of the equipment controlled). Each of the six controls shall be connected in turn in a circuit
limited to the values shown in Table 8 at a power factor of 0.9 to 1.0. The circuit capacity shall be
measured without the control or protective fuse in the circuit.
6.13.2 Controls to be tested
Each control to be tested shall be connected in the circuit in series with the supply cord, where
applicable, that is supplied with
- a)
the equipment; and
- b)
a non-renewable fuse (i.e., not of the time-delay type) of four times the rating of the motor but
not less than 15 A.
6.13.3 Enclosure
The enclosure and exposed non-current-carrying conductive parts surrounding the control shall be
grounded, and surgical cotton shall be placed around and in all openings of the enclosure.
6.13.4 Testing of samples
Six samples shall be tested by closing the short-circuit on each speed control. Three samples shall be
tested with the control set at the maximum speed, and three samples shall be tested with the control
set at the minimum speed.
6.13.5 Ignition
In each case there shall be no ignition of the cotton.
6.14 Backflow
The air gap required by Clause 5.1.3.2 a) shall be maintained when the tank is filled to the maximum
water level condition that could occur and the machine is
- a)
tilted up to 15° in any direction; and
- b)
tipped over, and the air gap is measured 60 s later.
6.15 Flaming oil — Perforated metal panels or wire screens
6.15.1 Application of test
This test shall be performed on perforated metal panels or wire screens as required by
Clause 5.2.12.5 c).
6.15.2 Apparatus
The apparatus for the test shall consist of
- a)
an iron ladle 63 mm in diameter with a pouring lip;
- b)
a heat-resistant glass dish;
- c)
a standard for supporting the test specimen;

<!-- 第 56 页 -->
- d)
a quantity of single-ply bleached cheesecloth running approximately 34 g/m2, with a thread count
in the range of 10 to 13 thread/cm (warp) by 9 to 12 thread/cm (weft);
- e)
a supply of No. 2 furnace oil*; and
- f)
a stop-clock.
* For further information see CSA B140.0.
6.15.3 Location
The test shall be conducted in a room with no air drafts. A specimen of the material shall be supported
horizontally, 50 mm above a layer of cheesecloth placed in a dish.
6.15.4 Ignition of oil
Ten cm3 of No. 2 furnace oil poured into the ladle shall be ignited and allowed to burn for at least
1 min, at which point it shall be poured at a rate of not less than 1 cm3/3 s onto the specimen from a
position 100 mm above it. The burning oil shall be applied three times, with a 5 min interval between
applications.
6.15.5 Contact of oil with cheesecloth
Means shall be provided to ensure that only oil that passes through the test specimen makes contact
with the cheesecloth.
6.15.6 Criteria
The cheesecloth shall not be ignited at any point during the three applications specified in
Clause 6.15.4.
6.16 Hydrostatic strength — Pressure vessel and system parts
6.16.1 Requirements
Pressure vessels or system parts not bearing a Canadian Registration Number (CRN), when tested as
specified in Clause 6.16.2, shall not
- a)
leak at a pressure of 1-1/2 times the maximum allowable working pressure; or
- b)
rupture at a pressure of 2-1/2 times the maximum allowable working pressure.
Rupture of a nonmetallic fluid transfer line and its connections, or at a gasket, may be considered to
comply with the requirements of this Clause provided that repeated tests conducted with the media the
line or gasket is intended to contain show no evidence of posing a risk of electric shock or injury to
persons.
6.16.2 Test procedure
The test shall be conducted by filling the pressure vessels and system parts as necessary with water so
as to exclude all air to comply with Clause 5.19.2. Hydrostatic pressure shall be gradually applied by
means of a connected hydraulic pump until reaching the levels specified in Clause 6.16.1; each level
shall be maintained for 1 min.
6.16.3 Performance under rated load
As required by Clause 5.19.11, an electric pressure-regulating device shall perform under rated load for
30 000 cycles of operation with no shift in pressure calibration greater than 5% of the initial calibration
setting. An adjustable pressure-regulating device shall be tested at its highest pressure setting unless
the adjustment means is reliably sealed at a lower setting.

<!-- 第 57 页 -->
6.16.4 Pneumatic pilot valve
As required by Clause 5.19.12, a pneumatic pilot valve used as a pressure-regulating device shall be
capable of performing under rated load for 30 000 cycles of operation without exceeding a valve set
pressure drift of 5% of the working pressure of the system. The valve construction shall be such that it
cannot be locked to prevent performance of its intended function.
6.17 High-current arc ignition
Where required by Clauses 5.2.7 and 5.2.9, three samples of the enclosure material, each measuring
127 ± 5 mm × 12.7 ± 0.2 mm and having a thickness equal to that of the enclosure at the point where
arcing occurs, shall be tested as specified in the high-current arc ignition (HAI) test in CAN/CSA-C22.2
No. 0.17, except that the material shall be considered acceptable if each sample resists ignition during
the first 60 arcs.
6.18 Moisture-absorption resistance of insulation
A cord-connected appliance rated 150 volts-to-ground or less shall be conditioned for 48 h in air that
has a temperature of 32 ± 2 °C and a relative humidity of 88 ± 2%. Immediately after conditioning, the
leakage current shall be measured and shall comply with Clause 6.9.
6.19 Standard flame
6.19.1 Appliances unattended in normal use
Appliances that are unattended in normal use shall comply with Clause 5.2.6.1 or 5.2.6.2.
After the fifth application of the test flame, there shall be no openings in the test specimens that will
permit a 6.3 mm diameter probe to enter after the material has returned to approximate room
temperature. The probe shall be applied with minimal force. Test specimens shall not drip flaming
particles that ignite the surgical cotton.
6.19.2 Appliances attended in normal use
Enclosures of appliances that are attended in normal use shall comply with Clause 5.2.7.
The enclosures shall not continue to burn for more than 1 min after either application of the test flame,
and there shall be no openings in the test specimens that will permit a 6.3 mm diameter probe to enter,
after the material has returned to approximate room temperature. The probe shall be applied with
minimal force. Test specimens shall not drip flaming particles that ignite the surgical cotton.
6.19.3 Other appliances
Appliances having momentary contact switches or that are hand-held shall comply with Clause 5.2.8.
6.20 Motorized chairs, beds, and exercise appliances
6.20.1 Rating
Ratings shall comply with Clause 6.4 during normal operation.
6.20.2 Normal load and operating cycle
The normal load and operating cycle to be used for the rating test shall be the same as specified in
Clause 6.2.10.

<!-- 第 58 页 -->
6.20.3 Entrapment
6.20.3.1
As required by Clause 5.23.1, chairs, beds, and exercise appliances that are not provided with controls
complying with Clauses 5.23.3 and 7.19 shall be tested as specified in Clause 6.20.3.4 to 6.20.3.6 and in
accordance with the deflection test specified in Clause 6.20.4.
6.20.3.2
The test probe shall be a 100 mm long neoprene rod 9.5 mm in diameter and having a hardness of 50 to
70 Durometer A, as specified in ASTM D2240.
6.20.3.3
The headform used for this test shall be a juvenile male/adult female head-size type that conforms to
Figure 3 of CSA Z262.6.
6.20.3.4
The probe or headform shall be placed in the closing area of any exposed mechanical assembly in order
to determine whether the mechanical assembly is capable of trapping the probe or headform while the
mechanical assembly is moving to close the gap or angle of a scissors action. The probe or headform
shall be placed in the gap using minimal force. The mechanism shall be operated in the direction that
closes the gap. If the mechanism does not trap the probe or headform, it shall be considered
acceptable. If the mechanism does trap the probe or headform, the test of Clause 6.20.3.6 shall apply.
6.20.3.5
The headform shall be inserted so that the mechanism will close on the front-to-rear and side-to-side
headform orientation dimensions. Other orientations of the headform in the closing gap may be tested
if applicable.
6.20.3.6
Entrapment shall be confirmed when a force of 9 N or greater is required to dislodge the probe or
headform. The weight of the probe and headform shall be excluded from the 9 N force. During the
entrapment test, the appliance shall be loaded as specified in Clause 6.2.10 or with no load, whichever
results in a more unfavourable condition.
6.20.4 Bed or chair deflection test
6.20.4.1
As required by Clause 5.23.2, the test shall be applied only to those parts of the enclosure that cover
moving parts. A force of 110 N shall be applied for 1 min by means of a metal rod 13 mm in diameter
with a hemispherical end.
6.20.4.2
To comply with enclosure deflection requirements,
- a)
any resultant opening shall comply with Clause 5.2.12; and
- b)
there shall be no hazardous contact with moving mechanical parts.

<!-- 第 59 页 -->
6.20.5 Motion control
As required by Clause 5.23.4.4, each switch or control mechanism shall be operated at least once for
each third of the mechanism travel distance, and stop, start, and reversing capabilities shall be checked
in order to determine compliance with Clause 5.23.4.4.
6.20.6 Power failure
As required by Clause 5.23.5, the appliance shall be loaded as specified in Clause 6.2.10 and extended to
the extreme position in which it is most likely to have the maximum movement in the event of a power
failure. The power shall be removed and the amount of movement of the person-supporting surface
shall be measured. The movement shall be not more than 6.3 mm.
6.20.7 Bed or chair temperature (abnormal) test
6.20.7.1
For an appliance having a heating pad controlled by a timer, the test shall be performed as specified in
Clauses 6.2.10 and 6.5, except that the regulating thermostat shall be bypassed and 2 single plies of
cheesecloth shall be placed over the unit (but under the load). The unit, including cheesecloth, shall be
covered by a 12 mm thick felt pad. The timer shall be set to its maximum setting. There shall be no
charring of the cheesecloth.
6.20.7.2
For an appliance not having a timer, the test of Clause 6.20.7.1 shall be performed until an ultimate
result has been determined (see Clause 6.7.3) or for a maximum of 7 h. There shall be no charring of
the cheesecloth.
6.20.8 Longitudinal abrasion
As required by Clause 5.23.6 b) iii), three samples of the cable shall be tested as received and after
being conditioned as specified in Clause 6.20.9.
A 50 to 75 mm wide strip of medium grade, 120 grit, 3M brand (or equivalent) emery cloth shall be
supported over a 190 mm radius of a quarter cylinder.
The cable (approximately 1.2 m) shall be passed over the emery surface with one end fastened to a
reciprocating machine and the other end secured to an 11 N weight. The cable shall be operated at
36 ± 1 cycles/min with a 305 ± 6 mm stroke.
The cable shall be positioned so that its mid-length is at the midpoint of the abrasive surface at the end
of the down stroke.
Each sample shall withstand 350 cycles (700 strokes) of abrasion of the outer surface of the cable
without exposure of a current-carrying conductor.
A conductor shall be considered exposed if it is visually conspicuous and the exposure has been verified
by the dielectric strength test of Clause 6.6, applied between the conductor and a sheet of metal foil
placed between the emery cloth and the area where maximum abrasion has occurred.
6.20.9 Conditioning
As required by Clause 5.23.6 b) iv), samples of the cables shall be placed in a circulating-air oven
maintained at 90 °C for 7 d or, at the request of the manufacturer, at 65 °C for 90 d. After removal from

<!-- 第 60 页 -->
the oven the cables shall remain at room temperature (25 ± 5 °C) for at least 24 h before any tests are
conducted. If the cables are conditioned at 65 °C for 90 d, samples of the separately insulated current-
carrying conductors shall be conditioned at 90 °C for 7 d.
6.21 Oven conditioning (nonmetallic enclosures)
6.21.1
To determine compliance with Clause 5.2.5 a), the appliance shall be placed in a circulating-air oven for
7 h at a temperature 10 °C above the maximum attained on the enclosure during the rated-load
temperature test or
- a)
70 °C, whichever is higher, for appliances that are typically used indoors, such as aquarium pumps,
beds, chairs, exercise appliances, and scissors; or
- b)
90 °C, whichever is higher, for appliances that are typically used outdoors.
6.21.2
Following the conditioning specified in Clause 6.21.1, there shall be no
- a)
reduction of spacings to smaller than those required by this Standard;
- b)
exposure of live parts or internal wiring, as determined by the requirements of Clauses 5.2.12 and
8.3.2; or
- c)
conditions that would increase the risk of shock or fire hazard.
7 Marking
Note: In Canada, there are two official languages, English and French. Annex B provides equivalent French
translations of markings specified in this Standard.
7.1 General
Equipment shall be plainly marked, in a permanent manner, in a place where the details are readily
visible, with the following:
- a)
the manufacturer’s name, trademark, trade name, or other recognized symbol of identification;
- b)
the catalogue, style, model, or other type designation;
- c)
the voltage;
- d)
the letters “ac”, if the appliances are not suitable for use on dc, after the voltage, the symbol “~”,
or the frequency in Hz, if necessary;
- e)
the number of phases, unless obviously intended for single-phase use only;
- f)
the rated input in amperes or watts; and
- g)
the month and year of manufacture, at minimum, shall be marked on each product in a location
accessible with the use of tools. Date coding, serial numbers, or equivalent means may be used.
7.2 Compliance
Markings shall comply with CAN/CSA-C22.2 No. 0.
7.3 Equipment for intermittent use
Equipment intended for intermittent or short-term operation shall be marked accordingly, unless the
nature of its use is obvious.

<!-- 第 61 页 -->
7.4 Separately supplied components
Where required components such as a capacitor or a capacitor-transformer unit are not supplied as
part of the equipment, suitable instructions regarding the proper ratings and connections of these
separately supplied components shall be provided. This marking may take the form of a suitable wiring
diagram or equivalent attached to the inside of a connection box or equivalent.
7.5 Single-motor equipment
In equipment having a single motor as the only electric-energy-consuming component, the electrical
rating that appears on the motor nameplate need not be shown elsewhere on the appliance if the
nameplate is visible after the motor has been installed in the appliance. This does not preclude the
necessity of opening doors or removing simple covers when motors are enclosed within permanently
connected equipment.
7.6 Voltage
The appliance shall be marked in a permanent manner to indicate the particular voltage for which it is
connected when shipped from the factory and when
- a)
it is a cord-connected appliance equipped with a multi-voltage motor and the motor nameplate is
used to show the electrical rating of the equipment as specified in Clause 7.5; or
- b)
it is a multi-voltage appliance as specified in Clause 5.5.2.4.
7.7 Electric beds
Electric beds intended for household use shall be plainly marked “FOR HOUSEHOLD USE ONLY” or with
equivalent wording.
7.8 Cleaning instructions
If the construction of equipment is such that a cleaning or similar servicing by the user (e.g., the
replacement of pilot lamps, fuses, ink ribbons, or paper rolls) could result in accidental contact due to
the exposure of normally enclosed or protected live parts, the equipment shall be clearly and
permanently marked with the following warning: DISCONNECT FROM SUPPLY CIRCUIT BEFORE
OPENING.
7.9 Equipment for garage use
Equipment intended for use in a garage or similar location shall be plainly and permanently marked
with the warning “DO NOT USE BELOW GARAGE FLOOR OR GRADE LEVEL” in letters of a contrasting
colour to the background and not less than 2.8 mm high. Embossed letters shall be raised at least
0.4 mm.
7.10 Receptacles
If receptacles, as specified in CSA C22.2 No. 42, are provided for any purpose, they shall be clearly and
permanently marked on or adjacent to the receptacle with the maximum load or intended purpose.
This requirement does not apply to special-type receptacles or connectors.
7.11 Non-time-delay equipment
Equipment that does not start and attain normal running speed when connected to a circuit protected
by an ordinary fuse (i.e., not a time-delay type) as specified in Clause 6.3 shall be plainly marked with
the following: IF CONNECTED TO A CIRCUIT PROTECTED BY FUSES, USE TIME-DELAY FUSE MARKED “D”.

<!-- 第 62 页 -->
7.12 Fuse ratings
Fuse ratings shall be clearly and permanently marked adjacent to each fuseholder.
7.13 Supply conductor temperatures
The permanent marking “USE SUPPLY WIRES SUITABLE FOR ___°C” shall be located near the supply
entrance or on the nameplate if the temperature in the terminal box or the compartment intended for
the supply connections exceeds 60 °C during the normal temperature test. The temperature to be
marked shall be 75, 90, or 110 °C for temperature ranges of 61 to 75 °C, 76 to 90 °C, or 91 to 110 °C,
respectively.
7.14 Brackets
Equipment needing a bracket to provide the stability required by Clause 6.10 shall be marked to
indicate the purpose and location of the bracket. This marking may appear on a paper label.
7.15 Combustible fluids
As required by Clause 5.20.4, appliances using cleaning fluids or other combustible fluids shall be
marked with an identification of the recommended fluid or with the following: WARNING: USE A
_______ FLUID HAVING A FLASH POINT HIGHER THAN 60 °C.
7.16 Sprayers
7.16.1 General
As required by Clause 5.20.1, sprayers shall be
- a)
provided with an instruction manual that includes instructions concerning the fire, electrical, and
physical hazards involved in the use of combustible solvents and toxic chemicals; and
- b)
marked with the following or equivalent wording in a location that is readily visible and legible
during normal use and unlikely to be obscured by accumulation of paint spray residue: WARNING:
WHEN A COMBUSTIBLE LIQUID IS SPRAYED THERE CAN BE DANGER OF FIRE OR EXPLOSION,
ESPECIALLY IN A CLOSED AREA. READ INSTRUCTION MANUAL BEFORE OPERATING.
A sprayer having arcing parts that do not comply with Clause 5.20.1 b), but that is connected to its spray
gun by a hose at least 7.60 m in length, shall be marked with the following or equivalent wording:
WARNING: ARCING PARTS. USE SPRAY GUN HOSE AT LEAST 7.6 m LONG AND KEEP THE COMPRESSOR/
MOTOR/_______ AT LEAST 6 m AWAY FROM EXPLOSIVE VAPOURS.
7.16.2 High-pressure airless sprayers
As required by Clause 5.20.2, a high-pressure airless sprayer shall
- a)
have an instruction manual as specified in Clause 7.16.1 a) that includes comprehensive
instructions concerning the prevention of static sparking, the method of cleaning, the relieving of
pressure, the maintenance of the hose and its integral grounding conductors, and the following or
equivalent wording:
- i)
INJECTION HAZARD: EQUIPMENT CAN CAUSE SERIOUS INJURY IF THE SPRAY PERMEATES THE
SKIN. DO NOT POINT THE GUN AT ANYONE OR ANY PART OF THE BODY. IN CASE OF
PERMEATION, SEEK MEDICAL AID IMMEDIATELY;
ii)
THIS SYSTEM IS CAPABLE OF PRODUCING ___ kPa. TO AVOID RUPTURE AND INJURY, DO NOT
OPERATE THIS PUMP WITH COMPONENTS RATED LESS THAN ___ kPa WORKING PRESSURE
(INCLUDING BUT NOT LIMITED TO SPRAY GUNS, HOSE, AND HOSE CONNECTIONS); and

<!-- 第 63 页 -->
iii) BEFORE SERVICING, CLEANING, OR REMOVAL OF ANY PART, SHUT OFF POWER AND RELIEVE
PRESSURE;
- b)
be marked, in addition to the requirements of Clause 7.16.1 b) and c), with the following:
WARNING: HIGH PRESSURE. KEEP CLEAR OF NOZZLE; and
- c)
be marked with the following or equivalent wording: HIGH-PRESSURE DEVICE. READ INSTRUCTION
MANUAL BEFORE OPERATING AND OBSERVE ALL WARNINGS.
7.16.3 High-pressure washers/cleaners
As required by Clause 5.20.3, a high-pressure washer/cleaner shall be marked with the following or
equivalent wording: WARNING: DO NOT SPRAY ELECTRICAL APPARATUS AND WIRING.
7.16.4 GFCI marking
As required by Clause 5.5.2.1, the GFCI shall be marked “RAINPROOF” or “SUITABLE FOR WET
LOCATIONS”.
7.17 Painting equipment
As required by Clause 5.21, painting equipment that utilizes a roller-type applicator shall be marked
with the following:
- a)
DO NOT IMMERSE IN WATER OR SOLVENT; and
- b)
FOR USE WITH WATER-BASED LIQUIDS ONLY.
7.18 Commercial appliances for permanent connection
Where required by Clause 5.10.2 b), commercial appliances for permanent connection shall be marked
with the words
“CAUTION:
- (1) MOTOR NOT PROTECTED — EXTERNAL OVERHEAT PROTECTION IN ACCORDANCE WITH CE CODE,
PART I, SHALL BE PROVIDED.
- (2) MINIMUM CIRCUIT AMPACITY OF CONDUCTOR IS ________ A.
- (3) MAXIMUM BRANCH CIRCUIT FUSE IS ________ A”.
7.19 Motorized chairs, beds, and exercise appliances
As required by Clause 5.23.3, the control unit of an appliance shall be marked in a readily visible manner
with the following or equivalent wording: WARNING: REMOVE CONTROL BOX (OR KEY, OR SAFETY PIN,
AS APPLICABLE) WHEN NOT IN USE, AND STORE OUT OF REACH OF CHILDREN.
7.20 Connections to potable water
Appliances having provision for connection to a potable water supply as required by Clause 5.1.3.3 shall
be marked with the following or equivalent wording: WARNING: IF CONNECTION IS MADE TO A
POTABLE WATER SYSTEM, THE SYSTEM SHALL BE PROTECTED AGAINST BACKFLOW.
7.21 Air compressors
7.21.1
As required by Clause 5.19.14, an air compressor rated in W (hp) shall be marked “COMPRESSOR ___ W
(OR HP), AT AIR PRESSURE ___ Pa (OR PSI) AND AIR VOLUME FLOW RATE ___ dm3/s (OR CFM)”. If the
air compressor motor is marked in horsepower, the marked motor horsepower shall be equal to or

<!-- 第 64 页 -->
higher than the compressor (air pump shaft) horsepower, and the compressor horsepower shall be
marked as specified in this Clause.
7.21.2
As required by Clause 5.19.14, air compressors whose temperature exceeds the 90 °C limit for external
surfaces shall be marked with the following or equivalent wording on or adjacent to the hot surfaces:
WARNING: HOT SURFACE — DO NOT TOUCH.
7.21.3
A product constructed in accordance with Clause 7.21.1 shall be marked, adjacent to the drain hole so
as to be visible while the product is in use, with the word “CAUTION” and the following or equivalent
wording: “RISK OF BURSTING — TILT TANK TO DRAIN“.
8 Cord-connected double-insulated appliances
8.1 Application
The requirements of Clause 8 apply to cord-connected appliances for use in nonhazardous locations on
circuits not exceeding 150 volts-to-ground and designed to be used in accordance with the Canadian
Electrical Code, Part I.
This Clause supplements those requirements specified elsewhere in this Standard and forms the basis
for the design and construction of cord-connected appliances that have double insulation in lieu of the
grounding of exposed non-current-carrying conductive parts, if any, and that are marked to indicate this
in accordance with Clause 8.4.
8.2 General requirements
8.2.1 Grounding
Double-insulated equipment shall not have provision for grounding.
8.2.2 Construction
The construction shall be such that failure of two independent sections of insulation occurs before any
exposed metal becomes live, unless the construction is such that reinforced insulation is used (see the
definition of double-insulated appliance in Clause 3).
8.2.3 Enclosure material
Insulating material may form a part or the whole of the enclosure of double- or reinforced-insulated
equipment.
8.2.4 Supplementary insulation
Supplementary insulation shall provide insulating and mechanical properties at least equivalent to the
basic insulation normally acceptable for the appliance.
8.2.5 Enclosure as supplementary or reinforced insulation
Where part or all of the enclosure is of insulating material (i.e., there is no exposed metal), it shall be
treated as supplementary insulation or reinforced insulation.

<!-- 第 65 页 -->
8.2.6 Basic insulation
Basic insulation and metal insulated from bare live parts by basic insulation shall not be accessible to
the user, as required by Clause 8.3.2.2.
8.2.7 Capacitors
Capacitors shall not be connected to exposed conductive parts.
8.2.8 Loss of insulation
The construction shall be such that normal use of the appliance, including servicing, does not result in
loss of insulation as originally provided.
8.3 Construction
8.3.1 General
8.3.1.1
Except where reinforced insulation is used, supplementary insulation shall be interposed between all
exposed non-current-carrying conductive parts and
- a)
basic-insulated current-carrying parts, including insulated wire; and
- b)
insulation.
A permanently maintained air space may be used as either supplementary or reinforced insulation.
8.3.1.2
External parts of insulating material, the deterioration of which might cause the appliance to become
unsafe, shall be sufficiently resistant to heat (see Clauses 5.2.6 to 5.2.8).
8.3.1.3
The construction shall be such that the added protection provided by any supplementary insulation will
not be reduced by the normal use and servicing to which the equipment is likely to be subjected.
8.3.1.4
Unless protected from physical abuse by the outer enclosure of the equipment or by other means,
supplementary insulation shall be adequately resistant to such abuse.
Supplementary insulation that comprises the outer enclosure of the appliance shall be considered to be
adequately resistant to physical abuse if the appliance complies with the mechanical strength
requirements of Clause 6.11.
8.3.1.5
Bare live parts of a switch, other than its terminals, shall be completely enclosed in a separate enclosure
of insulating material, and
- a)
no non-current-carrying conductive part that extends outside the switch enclosure shall enter the
arc chamber;
- b)
the plunger, toggle, or similar part that contacts bare live parts shall be wholly of insulating
material; and

<!-- 第 66 页 -->
- c)
no bare live parts shall be accessible to the probe specified in Clause 8.3.2.2 when the exposed
parts of the plunger, toggle, or other actuating member are removed by being cut off flush with the
external surface.
8.3.2 Openings and recesses
8.3.2.1
There shall be no openings other than those required for the proper functioning of the appliance,
including for the dissipation of the heat generated during normal operation.
8.3.2.2
Openings or recesses providing access to bare live parts, basic-insulated parts, or basic insulation shall
be of such size and shape that the entry of Probe 1 of Figure 1 is prevented.
Magnet (e.g., film-coated) wire shall be considered a bare live part for the purposes of this Clause.
8.3.2.3
Openings, including construction joints, shall be designed to minimize the accumulation of dirt or
fragments of metal and commutator dust that could cause bridging or serious contamination of
insulating surfaces.
8.3.3 Mechanical assembly
8.3.3.1
Bare live parts shall be constructed and secured so that in normal use they cannot come into contact
with supplementary insulation or any non-current-carrying conductive parts that are separated from
external conductive parts by only supplementary insulation.
8.3.3.2
Construction shall be such that an air gap between the parts specified in Clause 8.3.3.1 cannot be
reduced to less than permitted in Table 8 or be easily bridged by foreign matter.
Magnet (e.g., film-coated) wire shall be considered a bare live part for the purposes of this Clause.
8.3.3.3
Construction shall be such that it prevents wires, screws, nuts, washers, springs, and similar parts that
might become loose or free, from bridging supplementary or reinforced insulation.
8.3.3.4
Sleeves, if provided as additional basic insulation on insulated conductors, shall be secured in position
to prevent accidental removal (e.g., during servicing).
8.3.3.5
An accessible brush cap shall be
- a)
of suitable insulating material;
- b)
recessed so that its top is behind the plane of the brush-holder opening in the surrounding portion
of the equipment; and

<!-- 第 67 页 -->
- c)
capable of withstanding three impact tests as specified in Clause 6.11, each impact being made on
a different part or area of the enclosure, without cracking or exposing of bare live parts.
8.3.4 Supply connections
8.3.4.1
A jacket on a power-supply cord shall not be considered supplementary insulation.
8.3.4.2
The power-supply cord shall have a mechanical serviceability of at least that required for grounded
appliances and shall not have a grounding conductor.
8.3.4.3
The power-supply cord shall be insulated additionally from exposed conductive parts at the point where
it enters the appliance.
8.3.4.4
A metal strain-relief clamp shall not be accessible and shall not make contact with an accessible non-
current-carrying conductive part unless the clamp is suitably insulated from the cord.
8.3.5 Spacings
8.3.5.1
The spacings shall be not smaller than those specified in Table 9. Larger spacings can be required at
points at which carbon dust, lubricants, or other conductive contaminants exist or can accumulate.
8.3.5.2
Magnet (e.g., film-coated) wire shall be considered a bare live part when determining compliance with
the spacings specified in Table 9.
8.3.5.3
When spacings are measured, screws that are not prevented from loosening shall be positioned, by
unscrewing if necessary, to yield minimum spacings.
8.3.5.4
All over-surface spacings shall be measured along or across the joints unless such joints are effectively
cemented together.
8.3.5.5
Spacings measured through openings in housings of insulating material shall be measured using metal
foil drawn tightly across the opening.
8.3.5.6
All air gaps shall be included when determining over-surface spacings, except those less than 1.0 mm
wide.

<!-- 第 68 页 -->
8.3.5.7
The depth of any groove less than 1.0 mm wide shall not be considered when determining the over-
surface spacing.
8.4 Marking
Markings shall comply with the requirements for double-insulated equipment in CAN/CSA-C22.2 No. 0.
8.5 Tests
8.5.1 Dielectric strength
While at normal operating temperature, the appliance shall be capable of withstanding without
breakdown, for 1 min, the application of the ac test voltages specified in Table 10.
8.5.2 Leakage current
8.5.2.1
When tested under the conditions specified in Clause 6.9, the leakage current shall not exceed
- a)
3.5 mA with the nominal system voltage specified in CSA CAN3-C235 (e.g., 120 V) applied between
each side of the supply circuit in turn and inaccessible basic-insulated non-current-carrying
conductive parts; and
- b)
0.5 mA with the nominal system voltage applied between each side of the supply circuit in turn
and exposed non-current-carrying conductive parts or metal foil 10 × 20 cm in area, or smaller if
the total area of the plastic enclosure is less than 200 cm2, in contact with external non-conductive
surfaces.
8.5.2.2
Prior to the measurement of the leakage current, the sample shall be operated under no-load
conditions for 100 h or until the brushes wear out, whichever interval is shorter, but in no case less than
25 h.
Note: The brushes may be replaced during this test.
8.5.2.3
Following the no-load conditioning test specified in Clause 8.5.2.2, and prior to the measurement of the
leakage current, the sample shall be subjected for 48 h to a moist atmosphere having a relative
humidity of 80 to 90% at a temperature of 32 ± 2 °C.
8.5.2.4
The frequency of the supply for the test shall be the rated frequency or dc rating, as applicable.
8.5.3 Insulation test
8.5.3.1
This test shall apply to appliances that employ motors other than induction motors. Appliances that
employ induction motors shall be the subject of investigation.

<!-- 第 69 页 -->
8.5.3.2
Any protective device that is provided with the appliance and that can be reset, replaced, repaired, or
otherwise modified by the user shall be short-circuited, except as otherwise specified in Clause 8.5.3.3.
Note: The objective of the insulation test is to determine the integrity of the appliance insulation and not the
effectiveness of a protective device, with the exception of a thermal cutoff of the type specified in Clause 8.5.3.3.
8.5.3.3
A one-shot non-resettable or non-replaceable thermal cutoff that is permanently incorporated in the
motor shall not be short-circuited if, upon opening of the thermal cutoff, each motor part intended for
protection by the cutoff is rendered permanently inoperative and must be replaced in order to return
the appliance to a functional condition.
8.5.3.4
Severe overstress of the basic insulation shall not cause exposure of basic-insulated live parts as
specified in Clause 8.3.2 and shall not cause failure of the supplementary insulation as determined by
- a)
the leakage current test as specified in Clause 8.5.2.1 b), conducted while the appliance is hot; and
- b)
the dielectric strength test as specified in Clause 8.5.3.6.
8.5.3.5
To determine compliance with Clause 8.5.3.4, a motor-operated appliance shall be subjected to a
running overload test, when connected to a fused 30 A branch circuit of nominal system voltage, by
operating the appliance at full load for 30 min and increasing the load by 10% every 30 min until any
one of the following conditions occurs:
- a)
the 30 A fuse operates;
- b)
the input current suddenly increases by 100%, or more, of rated current;
- c)
flame appears (if flame occurs it shall be extinguished immediately); or
- d)
there is an open circuit in the motor winding(s).
8.5.3.6
Following the running overload test specified in Clause 8.5.3.5 and after allowing the appliance to cool
to room temperature, the appliance shall be capable of withstanding without dielectric breakdown, for
1 min, the application of an ac voltage of 1000 V between live parts and accessible non-current-carrying
conductive parts (or metal foil in contact with external nonconductive surfaces).

<!-- 第 70 页 -->
Table 1
Cord type
(See Clauses 5.2.3.1, 5.5.2.5, 5.23.6, and A.3.)
Cord type
(minimum
requirements)
Appliance
Household
Commercial
Air compressors/paint sprayers
SJO, SJT
SJO, SJT
Air compressors/paint sprayers (with wheels) rated more than
2 hp (1492 W)
SO, ST
SO, ST
Air compressors/paint sprayers (with wheels) rated less than
2 hp (1492 W)
SJO, SJT
SJO, SJT
Air inflators (without compressors)
SPT-2
SJT
Aquarium pumps
SPT-1
SJ
Auto service equipment
—
SJT, SJO
Auto wash equipment
—
SOW, STW
Barbecue motors
SJOW, SJTW
SOW, STW
Beds, chairs, exercise appliances
SV, SVT
SJ, SJT
Cloth cutters
—
SJ
Golf putting machines
SPT-1
SJT
Hand-held engravers
SPT-2
—
Hat-cleaning machines
—
SJ
Painting equipment/roller applicators
SJT
SJT
Scissors and vibrators
rated greater than 0.5 A
SPT-1
SV
rated 0.5 A or less
TPT, TST*
—
Spray washers (without wheels, employing a motor of any
rating)
SJOW, SJTW
SJOW, SJTW
SOW, STW
SOW, STW
Spray washers (with wheels, employing a motor rated more
than 2 hp (1492 W)
Spray washers (with wheels, employing a motor rated 2 hp
(1492 W) or less and provided with a Class A GFCI)
SJOW, SJTW
SJOW, SJTW
* When a TPT or TST tinsel cord is employed, the appliance and cord shall meet the following requirements:
- a)
the cord shall not be longer than 2.45 m (8 ft);
- b)
the cord shall be attached to the appliance directly or by a plug other than a standard flatiron or appliance
plug; and
- c)
the appliance rating shall not be more than 0.5 A.

<!-- 第 71 页 -->
Table 2
Perforated metal panels
(See Clause 5.2.12.5.)
Spacing of holes centre-to-
centre, mm
Thickness, mm
Diameter of holes, mm
0.76
1.14
1.70 (36 holes per cm2)
0.76
1.19
2.36
0.89
1.90
3.20 (11 holes per cm2)
0.99
1.60
2.70
Table 3
Thickness of metal for boxes for wiring of terminal parts
(See Clauses 5.5.1.3 and A.3.)
Type of metal
Minimum thickness, mm
Sheet steel
1.06*
Cast iron
3.20
Malleable iron
2.40
Die-cast metal
for an area greater than 154 cm2 or having any dimension
greater than 150 mm
2.40
1.60
for an area of 154 cm2 or less or having no dimension greater
than 150 mm
* Thinner metal may be used if investigation shows that adequate rigidity is provided, except as required by
Clause 5.5.1.2.

<!-- 第 72 页 -->
Table 4
Conditions of use, voltage, and temperature ratings of flexible cords
(See Clauses 5.5.2.5 and A.3 and Table 10.)
Temperature
rating, °C
Notes
Damp
(or dry)
locations
CSA type
designation
Voltage
rating, V
Use
Kind
SV
—
Not for
hard usage
Flexible
cord
SVO
1, 4
SVT
1, 4
SPT-1
SPT-2
SPT-3
For hard
usage
Flexible
cord
SJ
SJO
1, 2, 4
SJT
1, 2, 4
SPT-3
1, 2, 4
For extra-
hard usage
Flexible
cord
S
SO
1, 2, 3
ST
1, 2, 4
Wet
(or damp or
dry)
locations
For hard
usage
Outdoor
flexible cord
SJOW
1, 5
SJTW
—
For extra-
hard usage
SOOW
1, 5
Outdoor
flexible cord
SOW
1, 5
STW
—
Notes:
1)
When exposed to oil, the temperature rating of the jacket of types SVO, SVT, SJO, SJT, SO, ST, SOW, and SJOW
is limited to 60 °C regardless of the temperature rating of the insulation.
2)
Types SJ, SJO, SJT, S, SO, and ST flexible cords are now recognized only as components of equipment.
3)
Types SVO, SJO, and SO are also available rated 90 °C.
4)
Types SVT, SPT-1, SPT-2, SPT-3, SJT, and ST are also available rated 105 °C.
5)
Types SOW, SOOW, and SJOW are also available rated 90 and 105 °C.

<!-- 第 73 页 -->
Table 5
Minimum spacings for bare live parts
(See Clauses 5.16.1, 5.16.2, 5.22.3, 6.7.5, 6.11.4, and A.3.)
Parts involved
Installer wiring terminals*
6.3
6.3
Appliances without motors and with motors having a
motor-frame diameter of 178 mm or less
- a) between bare live parts of different voltage; and
between bare live parts and non-current-carrying
conductive parts other than an electrically conductive
enclosure
- b) between bare live parts and an electrically conductive
enclosure
Appliances with motors having a motor-frame diameter‡
larger than 178 mm between bare live parts of different
voltage; and between bare live parts and non-current-
carrying conductive parts including an electrically
conductive enclosure
Printed circuit conductors
30 Class 2†
—
—
* Installer wiring terminals are those to which supply connections are made at the time of installation.
† lncludes the following types of circuit:
- a)
Class 2 not exceeding 30 V rms as defined in the Canadian Electrical Code, Part I;
- b)
those supplied by a Class 2 transformer, as defined in CSA C22.2 No. 66.3;
- c)
those protected by a dropping resistor, where investigation demonstrates equivalent protection to an
impedance-protected Class 2 transformer; and
- d)
those protected by other means of isolation, where investigation demonstrates equivalent protection to a
Class 2 circuit.
‡ The required spacings in this Table are based on the size of the largest motor in the equipment. See CSA C22.2
No. 100 for a description of the motor-frame diameter.
August 2018
© 2018 Canadian Standards Association
Minimum
spacing,
mm
Maximum
voltage, V
rms
Through
air
Over
surface
9.5
12.5
30 Class 2†
—
—
0.5
—
1.6
1.6
3.2
3.2
6.3
9.5
3.2
3.2
6.3
6.3
9.5
12.5
3.2
3.2
6.3
6.3
9.5
12.5
0.5
0.5
1.0
1.0

<!-- 第 74 页 -->
Table 6
Dielectric strength test voltages
(See Clauses 5.22.4 and A.3.)
Parts
Voltage, V
Potentiometers and rheostats
Parts operating at less than
175 V peak
375 V peak
750 V peak
Table 7
Limiting temperatures for appliances
(See Clauses 5.19.14, 6.5.1, 6.5.4, 6.5.5, and A.3.)
Item
Location
Maximum temperature, °C
At any point on or within a supply terminal box to which
connections are made in the field
60*
On fibre used as electrical insulation or as a part whose
failure would result in a hazardous condition
On wood or other combustible material whose failure
would result in a hazardous condition
On fuses
On surfaces adjacent to or upon which appliances can rest
in service and on any external surface
On varnished-cloth insulation
On phenolic composition used as electrical insulation or as
a part whose failure would result in a hazardous condition
150†
On capacitors, unless marked otherwise
Electrolytic
65‡
Other types
On sealing compound
20 less than the melting point
On conductor insulation
Limiting temperature of the
insulation§
On flexible cords
Limiting temperature of the
insulation
(Continued)

<!-- 第 75 页 -->
Table 7 (Concluded)
Item
Location
Maximum temperature, °C
Handles, knobs, grips
Metal
Porcelain,
enamel
- a) held continuously in normal
use
- b) held intermittently in normal
use
On motor windings, cords, and
other moving parts
See CSA C22.2 No. 100
On transformers
See CSA C22.2 No. 66.1, CSA
C22.2 No. 66.2, or CSA C22.2
No. 66.3, as applicable
On switch parts
See CSA C22.2 No. 55 and CSA
C22.2 No. 111
On thermostat parts
See CSA C22.2 No. 24
On controls (other than switch
parts), resistors, solenoids,
relays, etc.
See CSA C22.2 No. 14
* Higher temperatures may apply provided that appliances are marked in accordance with Clause 7.13 or
Clause 7.21.2, as applicable.
† This limitation shall not apply to a composition whose heat-resisting properties have been found suitable for
higher temperatures.
‡ This limitation shall not apply to a capacitor that is an integral part of a motor.
§ Short lengths of conductors may be exposed to higher temperatures, provided that supplementary heat-resistant
insulation of adequate dielectric strength is used over the insulation to safeguard it against deterioration where
breakdown of the insulation can result in electrical failure.
August 2018
Plastic,
wood

<!-- 第 76 页 -->
Table 8
Capacity of test circuit
(See Clause 6.13.1, 8.3.3.2, and A.3.)
Nominal system voltage, V
Test circuit current
limit, A
Single-phase
Three-phase
Motor rating, hp
≤ 1
0–600
0–300
301–600
> 1 and ≤ 3
0–600
0–600
> 3 and ≤ 7.5
0–250
0–300
251–600
301–600
> 7.5
0–600
0–600
Table 9
Minimum spacings
(See Clauses 8.3.5.1, 8.3.5.2, and A.3.)
Item
Parts involved
Minimum spacing, mm
Between bare live parts and inaccessible non-
current-carrying conductive parts separated by
basic insulation only
Not less than the through-air and over-
surface spacings specified in Clause 5.16
for bare live parts and exposed non-
current-carrying conductive parts
Between inaccessible non-current-carrying
conductive parts and exposed non-current-carrying
insulation
Between bare live parts and exposed non-current-
carrying conductive parts separated by double or
reinforced insulation (where applicable), except as
indicated in Item 4
Not less than twice the through-air and
over-surface spacings specified in
Clause 5.16 for bare live parts and
exposed non-current-carrying
conductive parts
Between bare live parts and accessible non-current-
carrying conductive parts at a commutator or other
location in which foreign materials can build up
7.9 over surface
Between bare live parts, including film-coated wire
wound in the form of a coil (wrapped or
unwrapped) and reliably held in place, and the
interior surface of insulating material that serves as
supplementary insulation
0.8 through air

<!-- 第 77 页 -->
Table 10
Dielectric strength test voltages
(See Clauses 8.5.1 and A.3.)
Item point of application of test voltage
AC dielectric strength test voltage, V
Between live parts and inaccessible basic-
insulated non-current-carrying conductive parts
Value specified in Clause 6.6
Between inaccessible basic-insulated non-
current-carrying conductive parts and
accessible conductive parts
Between inaccessible basic-insulated non-
current-carrying conductive parts and metal foil
in contact with external non-conductive
surfaces*
Between live parts with reinforced insulation
and accessible non-current-carrying conductive
parts
Between live parts with reinforced insulation
and metal foil in contact with external
nonconductive surfaces*
Between accessible non-current-carrying
conductive parts (or metal foil in contact with
external non-conductive surfaces) and metal
foil wrapped around the supply cord at the
point of entry into the housing (or metal rod of
the same diameter as the cord inserted in its
place)†
* A coating of conductive material may be used in place of metal foil.
† If the power-supply cord enters through an opening in an insulating case, the metal foil shall be adjusted so that
the distance between it and the metal rod is approximately 50 mm over surface.
Note: For appliances having both reinforced insulation and double insulation, care shall be taken to ensure that the
voltage applied to the reinforced insulation does not further stress the basic or supplementary insulation beyond
the stress provided by the voltages specified in Table 4.

<!-- 第 78 页 -->
Side
view
Probe 1
6.3
Probe 2
12.5
X
X
X
X
Plan
C22.2 No. 68-18
Motor-operated appliances (household and commercial)
Figure 1
Probe for table-mounted and hand-held appliances
(See Clauses 5.2.12.2, 5.2.12.3, and 8.3.2.2.)
d
Top view
Diameter, d
Length, ℓ
Figure 2
Probe areas for bare live parts
(See Clause 5.2.12.4.)
Opening
Enclosure
X
X
X
X
Elevation
Note: “X” equals five times the diameter of the largest rod that can be inserted through the opening, but not less
than 100 mm.

<!-- 第 79 页 -->
Figure 3
Loading for electric chair or exercise appliance
(See Clause 6.2.10.)
= max 450 mm
= max 450 mm
30 kg
Pivot
Legend:
ℓ= length
August 2018
© 2018 Canadian Standards Association
Pivot
= max 450 mm
45 kg
15 kg
Up
Down
= max 1200 mm

<!-- 第 80 页 -->
= max 450 mm
30 kg
60 kg
Pivot
C22.2 No. 68-18
Motor-operated appliances (household and commercial)
Figure 4
Loading for chair without a leg support
(See Clause 6.2.10.)
Up
Down
Legend:
ℓ= length

<!-- 第 81 页 -->
Powered pivots
45 kg
= max 450 mm
= max 450 mm
= max 1200 mm
C22.2 No. 68-18
Motor-operated appliances (household and commercial)
Figure 5
Loading Test
[See Clause 6.2.10 c).]
Passive pivot
45 kg
Slide
Legend:
ℓ= length

<!-- 第 82 页 -->
A
B
S2
120 V
V
S1
Identified supply conductor
120 V
A
B
S2
240 V
120 V
S1
Identified supply conductor
S1
120 V
240 V
120 V
Identified supply conductor
C22.2 No. 68-18
Motor-operated appliances (household and commercial)
Figure 6
Leakage current measurement circuit
(See Clauses 6.9.6 and A.3.)
Item under test
Meter
Probe
Ground
open
Insulating table
Item under test
Meter
Probe
Ground
open
Insulating table
A
B
S2
Item under test
Meter
Probe
Ground
open
Insulating table

<!-- 第 83 页 -->
A
RS
CS
Test terminals
B
RB
RS
1 500
Ω
Ω
RB
C1
0.22
µF
CS
Note: This Figure has been reproduced from IEC 60990:2016, Methods of measurement of touch current and
protective conductor current.
C22.2 No. 68-18
Motor-operated appliances (household and commercial)
Figure 7
Measuring network, touch current weighted for perception or reaction
(See Clause 6.9.3.)
Weighted touch current
(perception/reaction)
=
(peak value)
U2
R1
C1
U1
U2
R1
10 000
Ω
0.022
µF

<!-- 第 84 页 -->
Annex A (normative)
Requirements for rechargeable battery motor-operated
appliances
Note: This Annex is a mandatory part of this Standard.
A.1
This Annex covers motor-operated appliances (household and commercial) that are powered by
rechargeable batteries, either solely, as an alternative, or in conjunction with other sources.
A.2
Rechargeable battery motor-operated appliances (household and commercial) that are covered under
this Annex shall meet the requirements specified in CSA C22.2 No. 0.23 with the conditions and
specifications as required by Annex D of CSA C22.2 No. 0.23, as specified in Clauses A.3 to A.12 below.
A.3
In reference to Indent A of Annex D of CSA C22.2 No. 0.23, except as indicated elsewhere in
CSA C22.2 No. 0.23, the requirements in this Standard shall not apply or shall be amended as follows:
- a)
Clause 8 (Cord-connected double-insulated appliances) does not apply in its entirety.
- b)
The following Clauses do not apply:
- i)
Clause 3 (“Basic insulation”);
ii)
Clause 3 (“Cord-connected equipment”);
iii) Clause 3 (“Double-insulated appliance”);
iv) Clause 3 (“Double insulation”);
- v)
Clause 3 (“Permanently connected equipment”);
vi) Clause 3 (“Reinforced insulation”);
vii) Clause 3 (“Supplementary insulation”);
viii) Clause 5.2.3 (Supply cord material);
ix) Clause 5.2.5 (Nonmetallic enclosures);
- x)
Clause 5.2.6 (Flammability of enclosures of unattended appliances);
xi) Clause 5.2.7 (Flammability of enclosures of attended appliances);
xii) Clause 5.2.8 (Flammability of enclosures);
xiii) Clause 5.2.14.2 (Leakage current test);
xiv) Clause 5.2.14.5 (Dielectric strength and insulation resistance test);
xv) Clause 5.5 (Supply connections);
xvi) Clause 5.6 (Strain relief, flexing, and cord set retention);
xvii) Clause 5.7.3 (Leads);
xviii) Clause 5.10.2 a) and b) (Overheating protection);
xix) Clause 5.11.5 (Cord connected equipment);
xx) Clause 5.13.6 (Screw-shells);
xxi) Clause 5.14.2 (Polarization of overcurrent protective device);
xxii) Clause 5.14.3 (Ungrounded or double-insulated equipment);
xxiii) Clause 5.15 (Transformers);
xxiv) Clause 5.16 (Spacings);
xxv) Clause 5.18 (Bonding and grounding);
xxvi) Clause 5.22.2 (Class 2 circuits);

<!-- 第 85 页 -->
xxvii) Clause 5.22.4 (Internal spacings);
xxviii) Clause 5.22.5 (Component failure);
xxix) Clause 6.1.1 (Sequence of tests);
xxx) Clause 6.1.2 (Test voltage);
xxxi) Clause 6.1.3 (Rated frequency);
xxxii) Clauses 6.2.1.1 to 6.2.1.5, and 6.3 (Starting);
xxxiii) Clause 6.4 (Rating);
xxxiv) Clause 6.5 (Temperature (normal);
xxxv) Clause 6.6 (Dielectric strength);
xxxvi) Clause 6.7 (Temperature abnormals);
xxxvii) Clause 6.8 [Overload and endurance (switches and controls)];
xxxviii) Clause 6.9 [Leakage current (Update 3)];
xxxix) Clause 6.11 (Physical abuse);
xl) Clause 6.12 (Strain relief, flexing, and cord set retention);
xli) Clause 6.13 (Speed control — Limited short-circuit);
xlii) Clause 6.17 (High-current arc ignition);
xliii) Clause 6.18 (Moisture-absorption resistance of insulation);
xliv) Clause 6.19 (Standard flame);
xlv) Clause 6.21 [Oven conditioning (nonmetallic enclosures)];
xlvi) Clause 7.1 c), d), e), and f) (General);
xlvii) Clause 7.4 (Separately supplied components);
xlviii) Clause 7.5 (Single-motor equipment);
xlix) Clause 7.6 (Voltage);
- l)
Clause 7.10 (Receptacles);
li)
Clause 7.11 (Non-time-delay equipment);
lii) Clause 7.13 (Supply conductor temperatures);
liii) Clause 7.16.4 (GFCI marking); and
liv) Clause 7.18 (Commercial appliances for permanent connection).
- c)
The portions of Clause 5.2.14 (Test for outdoor and car wash equipment) that require the outcome
of the testing to comply with the leakage current test (Clause 5.2.14.2) and dielectric test
(Clause 5.2.14.5) shall instead consider increased risk of injury to person, fire, or electric shock for
those areas where the voltages are in excess of the hazardous voltage. See Clause 8 of
CSA C22.2 No. 0.23. In the application of Clause 8 of CSA C22.2 No. 0.23, a part that is wetted
during the testing of Clause 5.12.15 shall be considered an accessible part.
- d)
The portions of Clauses 5.3 (Protection against corrosion), 5.4.3 (Connections to live metal parts),
and 5.7.4 (Rigid wiring terminals), that require the spacings not to be smaller than those required
by Clause 5.16, shall instead consider the creepage distances and clearances in Clause 20 of
CSA C22.2 No. 0.23.
- e)
Table 1 and Tables 3 to 10 do not apply.
- f)
Figure 6 does not apply.
A.4
With respect to Indent B of Annex D of CSA C22.2 No. 0.23, users of car wash equipment, high-pressure
washer/cleaners, and watercrafts shall be considered to be wet during the use of these products,
except for wet pick up and extractor-type appliances.

<!-- 第 86 页 -->
A.5
With respect to Indent C of Annex D of CSA C22.2 No. 0.23, LT specification shall be provided for
detachable or separable battery packs for products intended for outdoor use or located or stored
indoors where the temperature can be below 10 °C shall be considered to be exposed to environments
that would require an ELT: –35 °C classification.
A.6
With respect to Indent D of Annex D of CSA C22.2 No. 0.23, during the heating test, appliances shall be
operated under the maximum normal load condition in accordance with Clause 6.2.1.1.
A.7
With respect to Indent E of Annex D of CSA C22.2 No. 0.23, the temperature limits listed in Table 9.1 of
CSA C22.2 No. 0.23 shall be considered suitable.
A.8
With respect to Indent F of Annex D of CSA C22.2 No. 0.23, during the abnormal tests, the appliance
shall be operated at no-load in accordance to Clause 11.1.3 of CSA C22.2 No. 0.23.
A.9
With respect to Indent G of Annex D of CSA C22.2 No. 0.23, additional or alternate safety critical
functions (SCFs) are specified in Tables A.1 and A.2 of this end-product Standard.
A.10
With respect to Indent H of Annex D of CSA C22.2 No. 0.23, the impact shall be on a concrete surface.
A.11
With respect to Indent I of Annex D of CSA C22.2 No. 0.23, products covered by this end-product
Standard are not required to have this special switching arrangement.
A.12
With respect to Indent J of Annex D of CSA C22.2 No. 0.23, battery-operated appliances that may also
be operated or charged by mains or a non-isolated source as described in CSA C22.2 No. 0.23, shall also
meet the requirements of C22.2 No. 68 that apply to the risk of electric shock. For these types of
appliances, the exempted requirements specified in Clause A.3, Items a) and b) of this end product
Standard, might be applicable.

<!-- 第 87 页 -->
Table A.1
Protective devices employing electronics — Required performance levels
(See Clause A.9.)
Type and purpose of SCF
Minimum performance level (PL)
Protective devices employing electronics
Shall be evaluated using the fault conditions of
Clause 11.6 of C22.2 No. 0.23 without the loss of
the protective function
Table A.2
Motorized chairs, beds, and exercise appliances — Required performance levels
(See Clause A.9.)
Type and purpose of SCF
Minimum performance level (PL)
Control switches or devices employing electronics
C
Provide desired switch-off of the appliance if
continued operation exposes the user to a risk of
injury due to entrapment
C
Note: See Clause 11.6.5 of CSA C22.2 No. 0.23 for minimum performance levels.

<!-- 第 88 页 -->
Annex B (normative)
French translations of markings
Note: This Annex is a mandatory part of this Standard.
Clause
Marking
7.7
FOR HOUSEHOLD USE ONLY
POUR USAGE DOMESTIQUE SEULEMENT
7.8
DISCONNECT FROM SUPPLY CIRCUIT BEFORE OPENING
DÉBRANCHER DU CIRCUIT D’ALIMENTATION AVANT D’OUVRIR
7.9
DO NOT USE BELOW GARAGE FLOOR OR GRADE LEVEL
7.13
USE SUPPLY WIRES SUITABLE FOR ___°C
UTILISER DES FILS D’ALIMENTATION QUI CONVIENNENT À ___°C
7.15
WARNING: USE A _______ FLUID HAVING A FLASH POINT HIGHER THAN 60 °C
7.16.1 b)
7.16.1
C22.2 No. 68-18
Motor-operated appliances (household and commercial)
Table B.1
Marking translations
(See Clause 7.)
NE PAS UTILISER SOUS UN SOL DE GARAGE OU AU-DESSOUS DU NIVEAU DU SOL
7.11
IF CONNECTED TO A CIRCUIT PROTECTED BY FUSES, USE TIME-DELAY FUSE MARKED “D”
SI RACCORDÉ À UN CIRCUIT PROTÉGÉ PAR DES FUSIBLES, UTILISER UN FUSIBLE
TEMPORISÉ MARQUÉ “D”
AVERTISSEMENT: UTILISER UN LIQUIDE _______ DONT LE POINT D’ÉCLAIR EST
SUPÉRIEUR À 60 °C
WARNING: WHEN A COMBUSTIBLE LIQUID IS SPRAYED THERE CAN BE DANGER OF FIRE
OR EXPLOSION, ESPECIALLY IN A CLOSED AREA. READ INSTRUCTION MANUAL BEFORE
OPERATING
AVERTISSEMENT : LOSQU’UN LIQUIDE COMBUSTIBLE EST VAPORISÉ, IL Y A RISQUE DE
FEU OU D’EXPLOSION, SURTOUT DANS UN ENDROIT CLOS. LIRE LE MANUEL
D’INSTRUCTIONS AVANT DE FAIRE FONCTIONNER
WARNING: ARCING PARTS. USE SPRAY GUN HOSE AT LEAST 7.6 m LONG AND KEEP THE
COMPRESSOR/MOTOR/_______ AT LEAST 6 m AWAY FROM EXPLOSIVE VAPOURS
AVERTISSEMENT : PIÈCES SUJETTES À DÉCHARGE. UTILISER UN TUYAU DE PISTOLET DE
PULVÉRISATION D’AU MOINS 7,6 m DE LONGUEUR ET MAINTENIR LE COMPRESSEUR/
MOTEUR/ _______À AU MOINS 6 m À L’ÉCART DES VAPEURS EXPLOSIVES
7.16.2 a) i)
INJECTION HAZARD: EQUIPMENT CAN CAUSE SERIOUS INJURY IF THE SPRAY PERMEATES
THE SKIN. DO NOT POINT THE GUN AT ANYONE OR ANY PART OF THE BODY. IN CASE OF
PERMEATION, SEEK MEDICAL AID IMMEDIATELY
(Continued)

<!-- 第 89 页 -->
Table B.1 (Continued)
RISQUE D’INJECTION : L’ÉQUIPEMENT PEUT CAUSER DES BLESSURES GRAVES SI LE
LIQUIDE PULVÉRISÉ PÉNÈTRE LA PEAU. NE PAS POINTER LE PISTOLET VERS QUICONQUE
OU VERS UNE PARTIE QUELCONQUE DU CORPS. EN CAS DE PÉNÉTRATION, DEMANDER
UNE AIDE MÉDICALE IMMÉDIATEMENT
THIS SYSTEM IS CAPABLE OF PRODUCING ___ kPa. TO AVOID RUPTURE AND INJURY, DO
NOT OPERATE THIS PUMP WITH COMPONENTS RATED LESS THAN ___ kPa WORKING
PRESSURE (INCLUDING BUT NOT LIMITED TO SPRAY GUNS, HOSE, AND HOSE
CONNECTIONS)
7.16.2 a) ii)
CE SYSTÈME PEUT EXERCER UNE PRESSION DE ___ kPa. POUR ÉVITER UNE RUPTURE ET
DES BLESSURES, NE PAS UTILISER CETTE POMPE AVEC DES COMPOSANTS ÉTALONNÉS
DONT LA PRESSION DE SERVICE EST INFÉRIEURE À ___ kPa (Y COMPRIS, MAIS SANS Y
ÊTRE LIMITÉ, DES PISTOLETS DE PULVÉRISATION, DES CONDUITES ET DES CONNEXIONS
DE CONDUITE)
BEFORE SERVICING, CLEANING, OR REMOVAL OF ANY PART, SHUT OFF POWER AND
RELIEVE PRESSURE
7.16.2 a)
iii)
COUPER LE COURANT ÉLECTRIQUE ET RELÂCHER LA PRESSION AVANT L’ENTRETIEN, LE
NETTOYAGE OU LA DÉPOSE D’UNE PIÈCE QUELCONQUE
7.16.2 b)
WARNING: HIGH PRESSURE. KEEP CLEAR OF NOZZLE
AVERTISSEMENT: HAUTE PRESSION. DEMEURER À L’ÉCART DE LA BUSE
HIGH-PRESSURE DEVICE. READ INSTRUCTION MANUAL BEFORE OPERATING AND
OBSERVE ALL WARNINGS
7.16.2 c)
APPAREIL À HAUTE PRESSION, LIRE LE MANUEL D’INSTRUCTIONS AVANT L’UTILISATION
ET OBSERVER TOUS LES AVERTISSEMENTS
7.16.3
WARNING: DO NOT SPRAY ELECTRICAL APPARATUS AND WIRING
AVERTISSEMENT: NE PAS VAPORISER SUR DES APPAREILS ET DES FILS ÉLECTRIQUES
7.16.4
RAINPROOF” or “SUITABLE FOR WET LOCATIONS”
“À L’ÉPREUVE DE LA PLUIE” or “CONVIENT AUX ENDROITS HUMIDES”
7.17 a)
DO NOT IMMERSE IN WATER OR SOLVENT
NE PAS IMMERGER DANS DE L’EAU OU DU SOLVANT
7.17 b)
FOR USE WITH WATER-BASED LIQUIDS ONLY
À UTILISER AVEC DES LIQUIDES AQUEUX SEULEMENT
CAUTION:
- (1) MOTOR NOT PROTECTED — EXTERNAL OVERHEAT PROTECTION IN ACCORDANCE
WITH CE CODE, PART I, SHALL BE PROVIDED.
- (2) MINIMUM CIRCUIT AMPACITY OF CONDUCTOR IS ________ A.
- (3) MAXIMUM BRANCH CIRCUIT FUSE IS ________ A.
7.18
ATTENTION:
- (1) MOTEUR NON PROTÉGÉ — UNE PROTECTION EXTERNE CONTRE LA SURCHAUFFE
CONFORME AU CODE CÉ, PARTIE I, DOIT ÊTRE FOURNIE.
- (2) L’INTENSITÉ MINIMALE DU CIRCUIT DES CONDUCTEURS EST DE ________ A.
- (3) L’INTENSITÉ MAXIMALE DU FUSIBLE DU CIRCUIT DE DÉRIVATION EST DE ________ A.
(Continued)

<!-- 第 90 页 -->
Table B.1 (Concluded)
WARNING: REMOVE CONTROL BOX (OR KEY, OR SAFETY PIN, AS APPLICABLE) WHEN
NOT IN USE, AND STORE OUT OF REACH OF CHILDREN
7.19
AVERTISSEMENT : RETIRER LA BOÎTE DE COMMANDE (OU LA CLÉ OU LA GOUPILLE DE
SÛRETÉ, LE CAS ÉCHÉANT) QUAND ELLE NE SERT PAS, ET LA RANGER HORS DE PORTÉE
DES ENFANTS
WARNING: IF CONNECTION IS MADE TO A POTABLE WATER SYSTEM, THE SYSTEM SHALL
BE PROTECTED AGAINST BACKFLOW
7.20
AVERTISSEMENT: SI L’APPAREIL EST RACCORDÉ À UN RÉSEAU D’EAU POTABLE, IL DOIT
ÊTRE PROTÉGÉ CONTRE LES REFOULEMENTS
COMPRESSOR ___ W (OR HP), AT AIR PRESSURE ___ Pa (OR PSI) AND AIR VOLUME
FLOW RATE ___ dm3/s (OR CFM)
7.21.1
COMPRESSEUR ___ W (OU HP), À UNE PRESSION D’AIR DE ___ Pa (OU lb/po2) ET À UN
DÉBIT D’AIR DE ___ dm3/s (OU pi3/minute)
7.21.2
WARNING: HOT SURFACE — DO NOT TOUCH
AVERTISSEMENT : SURFACE CHAUDE – NE PAS TOUCHER
7.21.3
“CAUTION” and “RISK OF BURSTING — TILT TANK TO DRAIN”
“ATTENTION” and “RISQUE D’ÉCLATEMENT — INCLINER LE RÉSERVOIR POUR LE
DRAINER”
