const NAMES=["Kristian Jay Raganas","Arianne Korrene Sabellano","Jose Isaac Puig","Kobe Brent Quisido","John Repunte"]; // put each reporter's name here
const P=["Article IX · Constitutional Commissions","Article X · Local Government","Article XI · Accountability of Public Officers","Impeachment history · Sara Duterte, first case","Second case and trial · Sara Duterte (2026)"];
const S=[
{type:"title",fx:"flag",title:"Articles IX, X & XI of the 1987 Constitution",text:"Constitutional Commissions\nLocal Government\nAccountability of Public Officers\nand with the Sara Duterte impeachment case",note:"Facts as of November 13, 2026. The Senate trial is ongoing, so recheck before presenting."},
{tag:"Who reports what",cls:"agenda",title:"Today's reporters",cols:[
 {h:NAMES[0],l:["Article IX","Constitutional Commissions"]},
 {h:NAMES[1],l:["Article X","Local Government"]},
 {h:NAMES[2],l:["Article XI","Accountability of Public Officers"]},
 {h:NAMES[3],l:["Impeachment history","Sara Duterte, first case (2022 to 2026)"]},
 {h:NAMES[4],l:["Sara Duterte, second case and trial (2026)","Wrap-up"]}],n:3},
{tag:P[0],fx:"pillars",title:"Article IX: Constitutional Commissions",sub:"Three independent commissions: CSC, COMELEC and COA",cols:[
 {h:"Four parts",ic:"build",l:["Common Provisions (7 sections)","CSC (8)","COMELEC (11)","COA (4)"]},
 {h:"Current heads",ic:"person",l:["COMELEC: George Erwin M. Garcia","CSC: Marilyn B. Barua-Yap","COA: Vacant since Nov 13, 2026 (Cordoba was named to the Supreme Court)"]}]},
{tag:P[0],fx:"members",title:"Members and special rules",cols:[
 {h:"CSC: Chair + 2",ic:"person",l:["Must have proven capacity for public administration"]},
 {h:"COMELEC: Chair + 6",ic:"ballot",l:["College graduates","Most, including the Chair, lawyers of 10 years"]},
 {h:"COA: Chair + 2",ic:"audit",l:["CPA (10 years auditing) or lawyer (10 years)","Not all the same profession"]}],n:3},
{tag:P[0],fx:"roles",title:"Main roles and rules for all three",cols:[
 {h:"Main roles",ic:"scales",l:["CSC: central personnel agency; merit and fitness; no removal except for cause","COMELEC: enforces election laws and decides election contests","COA: audits all government funds; no entity can be exempted by law"]},
 {h:"Rules for all three",ic:"list",l:["Natural-born, 35 or older, not a candidate in the last election","Appointed by the President with Commission on Appointments consent","7 years, no reappointment, no acting appointments","Sec. 2: no other job, profession, or government contract","Sec. 5: fiscal autonomy; funds released automatically","Sec. 7: decide in 60 days; certiorari to the Supreme Court in 30 days"]}]},
{tag:P[0],fx:"election",title:"Specific rules",cols:[
 {h:"CSC",ic:"person",l:["Sec. 6: a losing candidate cannot be appointed for 1 year"]},
 {h:"COMELEC",ic:"ballot",l:["Exclusive original jurisdiction over regional, provincial and city contests; appellate over municipal and barangay (final, not appealable)","Election period: 90 days before to 30 days after the election, unless the Commission fixes otherwise in special cases","Religious sects cannot be registered as political parties"]}]},
{tag:P[0],fx:"audit",title:"COA and the OVP funds",cols:[
 {h:"₱73.287M disallowed (Dec 2022)",ic:"audit",l:["Decision Apr 10, 2026","Denied with finality Oct 5, 2026","Liable: Sara Duterte, Gina Acosta, Julieta Villadelrey; must refund under the Administrative Code"],hot:1},
 {h:"Another ₱375M (2023)",ic:"coin",l:["Disallowed; Col. Lachica also named liable","Still open to appeal"]}],note:"An audit finding, not a conviction."},
{tag:P[1],fx:"lgu",title:"Article X: Local Government",sub:"Basics (Secs. 1 to 7)",cols:[
 {h:"Units",ic:"map",l:["Provinces, cities, municipalities, barangays","Plus autonomous regions"]},
 {h:"Autonomy and powers",ic:"build",l:["Sec. 2: local autonomy","Sec. 3: Local Government Code (RA 7160, effective Jan 1, 1992)","Sec. 4: the President has general supervision, not control"]},
 {h:"Money",ic:"coin",l:["Sec. 5: own taxes","Sec. 6: just share in national taxes","Sec. 7: share in national wealth"]}],n:3},
{tag:P[1],title:"Terms and representation",sub:"Secs. 8 and 9",cols:[
 {h:"Sec. 8: Terms",ic:"cal",l:["3-year term, max 3 consecutive terms","Barangay term set by law","Voluntary renunciation does not break continuity"]},
 {h:"Sec. 9: Sectoral representation",ic:"person",l:["Local legislative bodies include sectoral representatives, as provided by law"]}]},
{tag:P[1],title:"Creating and grouping LGUs",sub:"Secs. 10 to 14",cols:[
 {h:"Sec. 10: Creating LGUs",ic:"build",l:["Creating, dividing, merging or abolishing an LGU needs Code criteria plus a majority plebiscite in the units directly affected"]},
 {h:"Sec. 11: Metropolitan areas",ic:"map",l:["Metropolitan political subdivisions may be created, subject to a plebiscite"]},
 {h:"Sec. 12: Independent cities",ic:"shield",l:["Highly urbanized cities, and component cities whose charters bar voting for provincial officials, are independent of the province"]},
 {h:"Secs. 13 and 14",ic:"list",l:["LGUs may group or coordinate with each other","The President provides for regional development councils"]}]},
{tag:P[1],title:"Autonomous regions",sub:"Secs. 15 to 21",cols:[
 {h:"The rules",ic:"doc",l:["Muslim Mindanao and the Cordilleras: Congress passes an organic act, then a plebiscite (Sec. 18)","Only areas voting yes are included","Sec. 17: powers not granted stay with the National Government","Sec. 21: defense too"]},
 {h:"What happened",ic:"map",l:["ARMM: RA 6734 (1989); 4 provinces voted yes","Cordillera: plebiscite Jan 30, 1990; rejected; only Ifugao voted yes","Bangsamoro Organic Law (RA 11054): signed Jul 26, 2018; plebiscites Jan 21 and Feb 6, 2019"]}]},
{tag:P[1],title:"Latest developments",steps:[
 {d:"Jul 3, 2018",t:"Mandanas ruling (final Apr 10, 2019): LGU share computed on all national taxes"},
 {d:"Sep 14, 2026",t:"First BARMM parliament election; no majority"},
 {d:"Oct 30, 2026",t:"Abdulraof Macacua elected Chief Minister, 51 to 27 over Murad Ebrahim"},
 {d:"Pending",t:"RA 12326 moved the next barangay elections to Nov 2028 (5-year term); challenge pending at the Supreme Court"}]},
{tag:P[2],title:"Article XI: Accountability of Public Officers",sub:"Impeachment basics (Secs. 1 and 2)",cols:[
 {h:"Sec. 1",ic:"shield",l:["Public office is a public trust"]},
 {h:"Impeachable (5)",ic:"person",l:["President","Vice President","Supreme Court Members","Constitutional Commission Members","Ombudsman"]},
 {h:"Grounds (6)",ic:"scales",l:["Culpable violation of the Constitution","Treason","Bribery","Graft and corruption","Other high crimes","Betrayal of public trust"]}],n:3,note:"Everyone else is removed as provided by law."},
{tag:P[2],fx:"journey",title:"How impeachment works (Sec. 3)",steps:[
 {d:"Complaint",t:"Verified complaint by any House Member, or a citizen with a Member's endorsement"},
 {d:"House",t:"Order of Business in 10 session days; committee in 3 more; committee report in 60 session days; House calendars it in 10"},
 {d:"Vote",t:"At least 1/3 of all Members (affirming the committee's favorable resolution or overriding its contrary one) sends the Articles to the Senate. If 1/3 sign the complaint itself, trial proceeds forthwith"},
 {d:"Senate trial",t:"Chief Justice presides if the President is on trial. 2/3 of all Members (16 of 24) convicts"},
 {d:"Penalty",t:"Removal and disqualification only; criminal prosecution still possible"},
 {d:"One-year bar",t:"No impeachment initiated against the same official more than once in a year"}]},
{tag:P[2],title:"Ombudsman and Sandiganbayan",sub:"Secs. 4 to 14",cols:[
 {h:"The Ombudsman",ic:"shield",l:["Independent Ombudsman (Tanodbayan): one overall Deputy plus a Deputy each for Luzon, Visayas, Mindanao","Natural-born, 40 or older, recognized probity, lawyer; Ombudsman also needs 10+ years as judge or lawyer; not a candidate in the last election","Appointed from a JBC list of at least 6; no confirmation; 7 years, no reappointment; cannot run for any office in the next election"]},
 {h:"Powers and current head",ic:"scales",l:["Powers: investigate, direct, recommend discipline or prosecution, publicize","Sec. 14: fiscal autonomy","Sandiganbayan stays the anti-graft court","Current Ombudsman: Jesus Crispin Remulla (oath Oct 9, 2025)"]}]},
{tag:P[2],title:"Other rules",sub:"Secs. 15 to 18",cols:[
 {h:"Sec. 15",ic:"coin",l:["Recovery of ill-gotten wealth never barred by prescription, laches or estoppel"]},
 {h:"Sec. 16",ic:"bank",l:["No government bank loans to top officials or their firms"]},
 {h:"Sec. 17",ic:"doc",l:["Sworn SALN on taking office; public disclosure for top officials","Basis of the Corona case and Sara Duterte's Article II"]},
 {h:"Sec. 18",ic:"flag",l:["Allegiance to the State; seeking immigrant status abroad is dealt with by law"]}]},
{tag:P[3],fx:"envstory",title:"Past impeachments",cols:[
 {h:"Estrada (President)",ic:"person",l:["Impeached Nov 13, 2000","Senate voted 11 to 10 not to open the second envelope (Jan 16, 2001)","EDSA II; left Jan 20, 2001"]},
 {h:"Gutierrez (Ombudsman)",ic:"person",l:["Impeached Mar 22, 2011","Resigned Apr 29, 2011"]},
 {h:"Corona (Chief Justice)",ic:"scales",l:["Impeached Dec 12, 2011 (188 signed)","Convicted May 29, 2012, 20 to 3, on Article II (SALN)"]}],n:3,note:"Francisco v. House (Nov 10, 2003): “initiated” means filing plus referral to committee."},
{tag:P[3],fx:"funds",title:"Sara Duterte, first case: background",cols:[
 {h:"2022",ic:"person",l:["Elected Vice President","Also Education Secretary (resigned June 2024)"]},
 {h:"Confidential funds: ₱612.5M",ic:"coin",l:["OVP ₱500M (₱125M in 2022 + ₱375M in 2023)","DepEd ₱112.5M"]},
 {h:"2024",ic:"doc",l:["House probe; questioned receipts","Dec 9: PSA found no records for 60% of 677 names","Nov 22 to 23: remarks about having Marcos, Liza Araneta-Marcos and Romualdez killed"]}],n:3},
{tag:P[3],title:"First case: from complaints to the Senate",steps:[
 {d:"Dec 2, 4, 19, 2024",t:"Three impeachment complaints filed"},
 {d:"Feb 5, 2025",t:"Fourth complaint signed by 215 House members (240 after Feb 6); 7 articles"},
 {d:"Jun 10, 2025",t:"Senate sent the Articles back to the House, 18 to 5"},
 {d:"Jun 11, 2025",t:"House certified it complied with the Constitution"}]},
{tag:P[3],title:"First case: Supreme Court ruling",steps:[
 {d:"Jul 25, 2025",t:"Duterte v. House (G.R. 278353 and 278359), Justice Leonen, unanimous, 13 to 0 (Caguioa inhibited, Singh on leave): Articles unconstitutional (one-year bar, Sec. 3(5), and due process). Not an acquittal; no new complaint until Feb 6, 2026"},
 {d:"Aug 6, 2025",t:"Senate archived the case, 19 to 4 to 1"},
 {d:"Jan 28, 2026",t:"Supreme Court denied reconsideration with finality"}]},
{tag:P[4],title:"Second impeachment (2026)",steps:[
 {d:"Feb 2 to 23",t:"Four complaints filed (two on Feb 2, one Feb 9, one Feb 18); the first two reached Speaker Dy on Feb 5; all referred to the Justice Committee Feb 23. The one-year bar ended Feb 6"},
 {d:"Apr 29",t:"Justice Committee found probable cause, 53 to 0"},
 {d:"May 11",t:"House impeached, 257 to 25 with 9 abstentions"},
 {d:"May 13 and 18",t:"Articles sent to the Senate; Senate became the impeachment court"},
 {d:"Jul 6",t:"Trial opened; 92 trial days approved"}]},
{tag:P[4],fx:"gavel",title:"The trial so far",steps:[
 {d:"Oct 13",t:"Prosecution withdrew Articles I, III and IV; court accepted"},
 {d:"Oct 21",t:"Prosecution formally offered evidence (it had rested its case on Oct 13, Day 39)"},
 {d:"Nov 9 to 12",t:"Defense presented witnesses on Article II, including Duterte's alleged GenCorp stake and other business ties (Days 40 to 43)"},
 {d:"Nov 13",t:"Hearings continued. The court's spokesperson expects the defense to finish before the end of November; the court then rules on the formal offer of evidence within 10 days at most"},
 {d:"Next",t:"Nov 19, 20, 23 (from the notes; recheck the schedule)"}],note:"Facts as of November 13, 2026. Recheck before presenting."},
{tag:P[4],title:"The four articles",cols:[
 {h:"Article I: Misuse of confidential funds",b:"WITHDRAWN",bc:"w",l:["Withdrawn Oct 13, 2026 (with prejudice)"]},
 {h:"Article II: Unexplained wealth",b:"REMAINS",bc:"g",l:["SALN, prohibited business: prosecution estimates ₱817.87M to ₱1.5B in undeclared assets, 2022 to 2025 (the defense disputes this)","Remains"],hot:1},
 {h:"Article III: Bribery at DepEd",b:"WITHDRAWN",bc:"w",l:["Withdrawn Oct 13, 2026 (without prejudice)"]},
 {h:"Article IV: Grave threats",b:"WITHDRAWN",bc:"w",l:["Against Marcos, Liza Araneta-Marcos, Romualdez","Withdrawn Oct 13, 2026 (with prejudice)"]}]},
{tag:P[4],fx:"gavel",title:"Trial and what it means",cols:[
 {h:"The trial",ic:"person",l:["Lead prosecutor: Rep. Gerville Luistro","Defense: Sheila Sison, Michael Poa","Duterte denies the charges and says she will not resign","Conviction needs 16 of 24 senators; the court's spokesperson says a decision would come 20 to 25 days after the defense rests"]},
 {h:"If convicted",ic:"scales",l:["Removal and disqualification from any office (no 2028 run); can still be prosecuted","New VP: nominated by the President from Members of the Senate and House; confirmed by a majority of all Members of both Houses, voting separately (Art. VII, Sec. 9)","Same kind of charge that convicted Corona in 2012: SALN"]}]},
{tag:P[4],title:"Conviction needs 16 of 24 senators",seats:1,stats:[{n:"16 of 24",l:"Senators needed to convict (2/3 of all Members)"},{n:"20 to 3",l:"Corona convicted, May 2012"}],note:"Penalty: removal and disqualification only; criminal prosecution is still possible."},
{tag:"Votes",fx:"ballotmini",title:"How the votes went",votes:[
 {l:"House impeaches Sara Duterte (May 2026)",v:[257,25,9],t:"257 to 25 to 9"},
 {l:"Senate returns the Articles (Jun 2025)",v:[18,5],t:"18 to 5"},
 {l:"Senate archives the case (Aug 2025)",v:[19,4,1],t:"19 to 4 to 1"},
 {l:"Corona convicted (May 2012)",v:[20,3],t:"20 to 3"},
 {l:"Estrada second envelope (Jan 2001)",v:[11,10],t:"11 to 10, not opened"}],note:"Bar segments follow the order of the numbers shown."},
{tag:"Key numbers",title:"Key numbers",stats:[
 {n:"215",l:"House signatures, Feb 5, 2025"},{n:"18 to 5",l:"Senate returned the Articles, Jun 2025"},{n:"13 to 0",l:"Supreme Court, Jul 2025"},
 {n:"19 to 4 to 1",l:"Senate archived the case, Aug 2025"},{n:"257 to 25 to 9",l:"House impeachment, May 2026"},{n:"16 of 24",l:"Senators needed to convict"}]},
{tag:P[4],title:"Wrap-up: what to remember",cols:[
 {h:"Article IX",ic:"build",l:["CSC, COMELEC and COA are independent, with 7-year terms and no reappointment","COA's ₱73.287M disallowance of OVP funds is final"]},
 {h:"Article X",ic:"map",l:["Local autonomy under the Local Government Code","Plebiscites for new LGUs; autonomous regions such as BARMM"]},
 {h:"Article XI",ic:"shield",l:["Public office is a public trust","5 impeachable officers; House 1/3 to impeach, Senate 16 of 24 to convict"]},
 {h:"Sara Duterte case",ic:"scales",l:["First case voided by the Supreme Court (Jul 2025)","Second case: only Article II remains; trial ongoing"]}]},
{type:"title",cls:"closing",fx:"flag",title:"Public office is a public trust",text:"Thank you for listening. Questions?"}
];
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const words=t=>esc(t).split(" ").map((w,k)=>`<span class="w" style="--i:${k}">${w}</span>`).join(" ");
const LGUIC=[
 '<svg viewBox="0 0 64 64" fill="#0a2a6e"><path d="M32 5v11" stroke="#0a2a6e" stroke-width="2"/><path class="cflag" d="M32 5h10l-3 3.5 3 3.5H32z" fill="#ce1126"/><path d="M20 31c0-9 5-14 12-14s12 5 12 14z"/><rect x="31" y="21" width="2" height="8" fill="#fcd116"/><rect x="18" y="31" width="28" height="3"/><rect x="21" y="36" width="4" height="11"/><rect x="28" y="36" width="4" height="11"/><rect x="35" y="36" width="4" height="11"/><rect x="42" y="36" width="3" height="11"/><rect x="16" y="47" width="32" height="4"/><rect x="13" y="51" width="38" height="3"/></svg>',
 '<svg viewBox="0 0 64 64" fill="#0a2a6e"><ellipse class="gnd" cx="32" cy="54" rx="15" ry="3.5" opacity=".35"/><g class="pinp"><path d="M32 8c-9 0-15 6-15 14 0 11 15 27 15 27s15-16 15-27c0-8-6-14-15-14z"/><circle cx="32" cy="22" r="6" fill="#fcd116"/></g></svg>',
 '<svg viewBox="0 0 64 64" fill="#0a2a6e"><rect x="7" y="30" width="15" height="24"/><rect x="24" y="11" width="16" height="43"/><rect x="42" y="23" width="15" height="31"/><g class="win" fill="#fcd116"><rect x="10" y="34" width="3" height="3"/><rect x="16" y="34" width="3" height="3"/><rect x="10" y="42" width="3" height="3"/><rect x="16" y="42" width="3" height="3"/><rect x="28" y="16" width="3" height="3"/><rect x="34" y="16" width="3" height="3"/><rect x="28" y="24" width="3" height="3"/><rect x="34" y="24" width="3" height="3"/><rect x="28" y="32" width="3" height="3"/><rect x="34" y="32" width="3" height="3"/><rect x="45" y="27" width="3" height="3"/><rect x="51" y="27" width="3" height="3"/><rect x="45" y="35" width="3" height="3"/><rect x="51" y="35" width="3" height="3"/></g><rect x="4" y="54" width="56" height="3"/></svg>',
 '<svg viewBox="0 0 64 64" fill="#0a2a6e"><path d="M19 26V14" stroke="#0a2a6e" stroke-width="2"/><path class="cflag" d="M19 14h8l-2.4 3 2.4 3h-8z" fill="#ce1126"/><path d="M6 37l13-11 13 11z"/><rect x="9" y="37" width="20" height="15"/><rect x="16" y="43" width="6" height="9" fill="#fcd116"/><path d="M34 41l11-9 11 9z"/><rect x="36" y="41" width="18" height="11"/><rect x="42" y="45" width="5" height="7" fill="#fcd116"/><rect x="4" y="52" width="56" height="3"/></svg>'];
/* realistic icons for the impeachment journey: complaint, house committee, house vote, senate trial, verdict */
const JDOTS=(()=>{let s="";for(let r=0;r<4;r++)for(let c=0;c<8;c++){const n=r*8+c,yea=n%7!==3;s+=`<circle cx="${(13+c*5.43).toFixed(1)}" cy="${26+r*6}" r="1.9" fill="${yea?"#3ddc84":"#ff5a5f"}" style="--d:${(n*.07).toFixed(2)}s"/>`}return s})();
const JPERSON=(x,y,suit)=>`<path d="M${x-10} 44c0-9 4-13 10-13s10 4 10 13z" fill="${suit}" stroke="#0a2a6e" stroke-width="1.4"/><path d="M${x} 32l-2.2 4.2 2.2 6 2.2-6z" fill="#ce1126"/><circle cx="${x}" cy="${y}" r="5.6" fill="#f1c9a5" stroke="#0a2a6e" stroke-width="1.5"/><path d="M${x-5.6} ${y-1.2}c0-6.6 11.2-6.6 11.2 0c-3.2-2.4-8-2.4-11.2 0z" fill="#3a2410"/>`;
const JIC=[
 `<svg viewBox="0 0 64 64"><path d="M14 6h26l10 10v42H14z" fill="#fff" stroke="#0a2a6e" stroke-width="2" stroke-linejoin="round"/><path d="M40 6v10h10" fill="#cfd9ee" stroke="#0a2a6e" stroke-width="2" stroke-linejoin="round"/><path d="M20 22h14M20 28h24M20 34h24M20 40h14" stroke="#0a2a6e" stroke-width="2" stroke-linecap="round"/><g class="jseal"><circle cx="24" cy="49" r="6.5" fill="#ce1126" stroke="#7d0a18" stroke-width="1.6"/><path d="M24 44.5l1.4 2.9 3.2.4-2.3 2.2.6 3.2-2.9-1.5-2.9 1.5.6-3.2-2.3-2.2 3.2-.4z" fill="#fcd116"/></g><g class="jpen"><g transform="translate(32 51) rotate(-45)"><rect x="0" y="-3" width="26" height="6" rx="1" fill="#0038a8" stroke="#0a2a6e" stroke-width="1.4"/><path d="M0-3L-6 0L0 3z" fill="#f1c9a5" stroke="#0a2a6e" stroke-width="1.2" stroke-linejoin="round"/><rect x="19" y="-3" width="3" height="6" fill="#fcd116"/></g></g></svg>`,
 `<svg viewBox="0 0 64 64">${JPERSON(14,23,"#0a2a6e")}${JPERSON(32,20,"#0038a8")}${JPERSON(50,23,"#0a2a6e")}<path d="M3 44h58v4l-3 10H6l-3-10z" fill="#8a5326" stroke="#0a2a6e" stroke-width="2" stroke-linejoin="round"/><path d="M3 44h58v4H3z" fill="#b87a3e" stroke="#0a2a6e" stroke-width="1.5"/><path d="M14 44v-4M32 44v-4M50 44v-4" stroke="#0a2a6e" stroke-width="1.8"/><circle cx="14" cy="39" r="1.8" fill="#0a2a6e"/><circle cx="32" cy="39" r="1.8" fill="#0a2a6e"/><circle cx="50" cy="39" r="1.8" fill="#0a2a6e"/><rect x="8" y="51" width="12" height="4" rx=".6" fill="#fff"/><rect x="26" y="51" width="12" height="4" rx=".6" fill="#fff"/><rect x="44" y="51" width="12" height="4" rx=".6" fill="#fff"/></svg>`,
 `<svg viewBox="0 0 64 64"><path d="M22 48v10M42 48v10" stroke="#0a2a6e" stroke-width="3" stroke-linecap="round"/><rect x="16" y="57" width="32" height="3.5" rx="1.7" fill="#0a2a6e"/><rect x="6" y="6" width="52" height="42" rx="4" fill="#0a2a6e" stroke="#06143a" stroke-width="2"/><rect x="9" y="9" width="46" height="10" rx="2" fill="#16399a"/><text x="32" y="16.6" text-anchor="middle" font-size="6.4" font-weight="800" fill="#fcd116" font-family="Libre Franklin,Arial,sans-serif" letter-spacing=".8">ROLL CALL</text><g class="jdots">${JDOTS}</g></svg>`,
 `<svg viewBox="0 0 64 64"><circle cx="32" cy="5.5" r="2.6" fill="#ce1126" stroke="#0a2a6e" stroke-width="1.2"/><path d="M32 8v28M14 11h36" stroke="#0a2a6e" stroke-width="2.6" stroke-linecap="round"/><path d="M14 11L7 21M14 11l7 10M50 11l-7 10M50 11l7 10" stroke="#0a2a6e" stroke-width="1.3"/><path d="M5 21h18c0 5-4 8-9 8s-9-3-9-8zM41 21h18c0 5-4 8-9 8s-9-3-9-8z" fill="#0a2a6e"/><g class="jgav"><g transform="rotate(-28 32 40)"><rect x="30.3" y="30" width="3.6" height="13" rx="1.6" fill="#8a5326" stroke="#0a2a6e" stroke-width="1.2"/><rect x="24.5" y="23" width="15" height="9" rx="2.2" fill="#5b3412" stroke="#0a2a6e" stroke-width="1.5"/><rect x="24.5" y="25.5" width="15" height="1.8" fill="#b87a3e"/></g></g><rect x="3" y="38" width="58" height="6" rx="1.5" fill="#b87a3e" stroke="#0a2a6e" stroke-width="2"/><path d="M6 44h52v14H6z" fill="#8a5326" stroke="#0a2a6e" stroke-width="2" stroke-linejoin="round"/><path d="M16 48v7M28 48v7M40 48v7M52 48v7" stroke="#6b3d17" stroke-width="1.6"/></svg>`,
 `<svg viewBox="0 0 64 64"><path d="M10 5h30l9 9v45H10z" fill="#fff" stroke="#0a2a6e" stroke-width="2" stroke-linejoin="round"/><path d="M40 5v9h9" fill="#cfd9ee" stroke="#0a2a6e" stroke-width="2" stroke-linejoin="round"/><rect x="15" y="12" width="21" height="6" rx="1" fill="#0a2a6e"/><path d="M15 25h28M15 31h24M15 37h16" stroke="#0a2a6e" stroke-width="2" stroke-linecap="round"/><g class="jros"><path d="M36 49l-5 12 6-3 3 5 2-11z" fill="#ce1126" stroke="#7d0a18" stroke-width="1.2" stroke-linejoin="round"/><path d="M48 49l5 12-6-3-3 5-2-11z" fill="#0038a8" stroke="#06143a" stroke-width="1.2" stroke-linejoin="round"/><circle cx="42" cy="44" r="10" fill="#ce1126" stroke="#7d0a18" stroke-width="1.6"/><circle cx="42" cy="44" r="6.8" fill="none" stroke="#fcd116" stroke-width="1.4"/><path d="M38 44.2l3.2 3.2 6-6.6" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`];
const bld=(n,name,emb)=>{
 const p="b"+n,E={csc:'<circle cx="160" cy="46.5" r="3.4" fill="#0a2a6e"/><path d="M153 58c0-5.2 3.4-8 7-8s7 2.8 7 8z" fill="#0a2a6e"/>',comelec:'<rect x="154" y="43" width="12" height="14" rx="1.5" fill="#fff"/><path d="M156.5 50.5l2.5 2.5 4.5-5.5" stroke="#0a2a6e" stroke-width="1.8" fill="none"/>',coa:'<circle cx="158.5" cy="48.5" r="4.8" fill="none" stroke="#0a2a6e" stroke-width="1.9"/><path d="M162 52l4.5 4.5" stroke="#0a2a6e" stroke-width="2.2"/>'}[emb];
 let sh="",cols="";
 for(let i=0;i<8;i++){const x=45+i*30;
  sh+=`<rect x="${x+20}" y="95" width="7" height="75" fill="#000" opacity=".17"/>`;
  cols+=`<g class="col" style="--k:${i}"><rect x="${x}" y="95" width="20" height="75" fill="url(#${p}c)"/><path d="M${x+4} 95V170M${x+8} 95V170M${x+12} 95V170M${x+16} 95V170" stroke="#6f7c99" stroke-opacity=".4" stroke-width=".8"/><rect x="${x-2}" y="90" width="24" height="5" fill="#dde4f1"/><rect x="${x-3}" y="86" width="26" height="4" fill="#c1cadd"/><rect x="${x-2}" y="169" width="24" height="4" fill="#a7b2ca"/></g>`}
 return `<svg class="bld" viewBox="0 0 320 210" aria-hidden="true"><defs>
 <linearGradient id="${p}c" x1="0" x2="1"><stop offset="0" stop-color="#8e9ab5"/><stop offset=".25" stop-color="#d8dfee"/><stop offset=".45" stop-color="#fff"/><stop offset=".72" stop-color="#c8d0e2"/><stop offset="1" stop-color="#7d8aa9"/></linearGradient>
 <linearGradient id="${p}w" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7a88a8"/><stop offset="1" stop-color="#47547a"/></linearGradient>
 <linearGradient id="${p}p" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f7f9fd"/><stop offset="1" stop-color="#a9b5cf"/></linearGradient>
 <linearGradient id="${p}t" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#65739a"/><stop offset="1" stop-color="#8e9bbb"/></linearGradient>
 <linearGradient id="${p}e" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f3fa"/><stop offset="1" stop-color="#aeb9d2"/></linearGradient>
 <linearGradient id="${p}s" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#e6ebf5"/><stop offset="1" stop-color="#97a3be"/></linearGradient>
 <linearGradient id="${p}h" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".4"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
 <linearGradient id="${p}l" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient>
 <linearGradient id="${p}g" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
 <radialGradient id="${p}o" cx=".38" cy=".3" r=".8"><stop offset="0" stop-color="#fff6b0"/><stop offset=".5" stop-color="#fcd116"/><stop offset="1" stop-color="#c99a00"/></radialGradient>
 <linearGradient id="${p}d" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#1b2547"/><stop offset="1" stop-color="#e9b94a"/></linearGradient>
 <clipPath id="${p}k"><polygon points="29,64 160,22 291,64"/><rect x="29" y="64" width="262" height="136"/></clipPath></defs>
 <ellipse cx="160" cy="203" rx="150" ry="6" fill="#000" opacity=".5"/>
 <rect x="41" y="86" width="238" height="87" fill="url(#${p}w)"/>
 <rect x="141" y="118" width="38" height="55" rx="2" fill="url(#${p}d)" stroke="#c9a227" stroke-width="2"/><path d="M160 118v55" stroke="#c9a227"/>
 ${sh}${cols}
 <rect x="41" y="90" width="238" height="12" fill="url(#${p}h)"/>
 <rect x="14" y="190" width="292" height="10" fill="url(#${p}s)"/><rect x="22" y="181" width="276" height="9" fill="url(#${p}s)"/><rect x="30" y="173" width="260" height="8" fill="url(#${p}s)"/>
 <path d="M14 190H306M22 181H298M30 173H290" stroke="#fff" stroke-opacity=".75"/><path d="M14 200H306" stroke="#000" stroke-opacity=".3"/>
 <rect x="35" y="70" width="250" height="16" fill="url(#${p}e)"/><rect x="29" y="63" width="262" height="7" fill="url(#${p}e)" stroke="#fff" stroke-opacity=".5" stroke-width=".6"/>
 <text x="160.7" y="81.2" text-anchor="middle" font-size="9" letter-spacing="1.6" font-family="Fraunces,Georgia,serif" font-weight="800" fill="#fff" opacity=".7">${name}</text>
 <text x="160" y="80.5" text-anchor="middle" font-size="9" letter-spacing="1.6" font-family="Fraunces,Georgia,serif" font-weight="800" fill="#2f3f6c">${name}</text>
 <polygon points="29,63 160,21 291,63" fill="url(#${p}p)" stroke="#fff" stroke-opacity=".6"/><polygon points="52,60 160,30 268,60" fill="url(#${p}t)"/><path d="M52 60L160 30L268 60" stroke="#000" stroke-opacity=".25" fill="none"/>
 <circle cx="160" cy="50" r="12" fill="url(#${p}o)" stroke="#fff" stroke-opacity=".6"/>${E}
 <path d="M160 21V3" stroke="#8e98af" stroke-width="1.2"/><g class="cflag"><rect x="160" y="3" width="17" height="5" fill="#0038a8"/><rect x="160" y="8" width="17" height="5" fill="#ce1126"/><path d="M160 3l8.5 5-8.5 5z" fill="#fff"/></g>
 <rect x="14" y="21" width="292" height="179" fill="url(#${p}l)" clip-path="url(#${p}k)"/>
 <g clip-path="url(#${p}k)"><rect class="gleam" x="-90" y="0" width="70" height="210" fill="url(#${p}g)" style="animation-delay:calc(var(--i,0) * -2s)"/></g></svg>`};
const PILLARS=[["CSC","CIVIL SERVICE COMMISSION","Central personnel agency","csc"],["COMELEC","COMMISSION ON ELECTIONS","Enforces election laws","comelec"],["COA","COMMISSION ON AUDIT","Audits all government funds","coa"]];
const slipH='<div class="bslip b#"><i></i><i></i><i></i><svg viewBox="0 0 24 24"><path d="M4 13l5 5L20 6"/></svg></div>';
const ballot=c=>`<div class="fx ballot${c}"><div class="scene"><div class="glow"></div>${[1,2,3].map(k=>slipH.replace("#",k)).join("")}<div class="bbox"><div class="lid"><span></span></div><div class="body"><em>&#9733;</em><b>VOTE</b></div></div><div class="plus">+1</div></div></div>`;
const IC={
 person:'<circle cx="24" cy="15" r="8"/><path d="M8 42c0-10 7-16 16-16s16 6 16 16z"/>',
 ballot:'<rect x="9" y="6" width="30" height="36" rx="3"/><path d="M16 26l6 6 11-13"/>',
 audit:'<circle cx="21" cy="21" r="12"/><path d="M30 30l12 12M16 21h10M18 17h5a3 3 0 010 6h-5v6"/>',
 scales:'<path d="M24 6v34M12 40h24M8 14h32M8 14l-5 12h10zM40 14l-5 12h10z"/>',
 list:'<path d="M10 12l3 3 6-7M10 26l3 3 6-7M10 40l3 3 6-7M26 13h14M26 27h14M26 41h14"/>',
 cal:'<rect x="7" y="10" width="34" height="32" rx="3"/><path d="M7 20h34M16 5v8M32 5v8"/>',
 build:'<path d="M6 42h36M10 42V18l14-9 14 9v24M18 42V28h12v14"/>',
 coin:'<circle cx="24" cy="24" r="16"/><path d="M19 33V15h7a5 5 0 010 10h-7M17 21h12"/>',
 doc:'<path d="M12 5h18l8 8v30H12zM30 5v8h8M18 24h14M18 32h14"/>',
 flag:'<path d="M12 6v38M12 8h26l-6 9 6 9H12"/>',
 bank:'<path d="M6 18L24 7l18 11zM10 40h28M12 20v16M20 20v16M28 20v16M36 20v16"/>',
 shield:'<path d="M24 5l15 6v13c0 10-7 16-15 19C16 40 9 34 9 24V11zM17 24l5 5 9-10"/>',
 map:'<path d="M24 43S11 30 11 20a13 13 0 0126 0c0 10-13 23-13 23z"/><circle cx="24" cy="20" r="5"/>'};
const rays=(()=>{let s="";for(let i=0;i<8;i++)s+=`<path d="M0 -96L8 -60L-8 -60Z" transform="rotate(${i*45})"/><path d="M0 -84L5 -62L-5 -62Z" transform="rotate(${i*45+22.5})"/>`;return s})();
const star='<path d="M0-12L3.5-3.7L12-3.7L5.2 1.5L7.4 10L0 5L-7.4 10L-5.2 1.5L-12-3.7L-3.5-3.7Z"/>';
const WIDE=["ballot","pillars","audit","lgu","journey","funds","envstory","members","roles","election"];
const pil=(a,b,n)=>`<div class="pil" style="--i:${n}"><div class="ped"></div><div class="cols4">${[0,1,2,3].map(k=>`<i style="--k:${k}"></i>`).join("")}</div><div class="base"></div><b>${a}</b><small>${b}</small></div>`;
const paper=(t,rows,stamp,cls)=>`<div class="paper"><h4>${t}</h4>${rows.map(r=>`<div class="ln"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}<div class="st ${cls}">${stamp}</div></div>`;
/* builders for the Article IX effects (slides 4 to 6) */
const person=(c,k)=>`<svg class="${c}" style="--k:${k}" viewBox="0 0 24 30"><circle cx="12" cy="8" r="6.5"/><path d="M1 30c0-10 5-15 11-15s11 5 11 15z"/></svg>`;
const mg=(g,n)=>`<div class="mg" style="--g:${g}"><div class="row">${Array.from({length:n},(_,k)=>person(k?"":"chair",k)).join("")}</div><div class="bench"></div><div class="num">${n}<small>members</small></div><div class="key"><i></i>Chair</div></div>`;
const rsvg=p=>`<svg viewBox="0 0 48 48">${p}</svg>`;
const FX_ART9={
 members:`<div class="fx wide members">${mg(0,3)}${mg(1,7)}${mg(2,3)}</div>`,
 roles:`<div class="fx wide roles"><div class="rn" style="--d:.7s"><span class="ri">${rsvg(IC.person)}</span><b>The President</b><small>appoints</small></div><i class="rar" style="--d:1.1s"></i><div class="rn" style="--d:1.3s"><span class="ri">${rsvg(IC.shield)}</span><b>Commission on Appointments</b><small>must consent</small></div><i class="rar" style="--d:1.8s"></i><div class="term" style="--d:2s"><div class="yrs">${[1,2,3,4,5,6,7].map(n=>`<u style="--k:${n}">${n}</u>`).join("")}</div><b>7-year term</b><div class="stampn">NO REAPPOINTMENT</div></div></div>`,
 election:`<div class="fx wide election"><div class="ep"><h5>Sec. 6 (CSC): a candidate who lost an election</h5><div class="mon">${Array.from({length:12},(_,k)=>`<u style="--k:${k}"></u>`).join("")}</div><div class="big">cannot be appointed for 12 months</div></div><div class="ep"><h5>Election period</h5><div class="etl"><span class="s b" style="--f:90">90 days before</span><span class="d">&#9733;</span><span class="s a" style="--f:30">30 days after</span></div><div class="big">The star is Election Day</div><div class="nosect"><span class="ban"><svg viewBox="0 0 48 48"><path d="${IC.build}"/><circle cx="24" cy="24" r="20"/><path d="M10 38L38 10"/></svg></span>Religious sects cannot be registered as political parties</div></div></div>`
};
const FX={
 ballot:ballot(""),ballotmini:ballot(" mini"),
 sun:`<div class="fx sun"><svg viewBox="-110 -110 220 220"><g class="rays">${rays}</g><circle class="disc" r="44"/><g class="stars"><g transform="translate(-92 -78)">${star}</g><g transform="translate(92 -78)">${star}</g><g transform="translate(0 100)">${star}</g></g></svg></div>`,
 pillars:`<div class="fx wide pillars">${PILLARS.map((x,n)=>`<div class="pil" style="--i:${n}">${bld(n,x[1],x[3])}<b>${x[0]}</b><small>${x[2]}</small></div>`).join("")}</div>`,
 audit:`<div class="fx wide audit">${paper("OVP confidential funds",[["Disallowed","Dec 2022"],["Amount","₱73.287M"],["Final","Oct 5, 2026"]],"DISALLOWED<br>final","red")}${paper("Another amount",[["Year","2023"],["Amount","₱375M"],["Also liable","Col. Lachica"]],"DISALLOWED<br>can appeal","gold")}<div class="lens"></div></div>`,
 lgu:`<div class="fx wide lgu"><div class="row">${["National Government","Provinces","Cities and municipalities","Barangays"].map((t,k)=>`${k?`<i class="ar" style="--k:${k}"></i>`:""}<div class="nd" style="--k:${k}"><span class="ico">${LGUIC[k]}</span><b>${t}</b></div>`).join("")}</div><p class="cap">Local autonomy (Sec. 2). The President has general supervision, not control (Sec. 4). Plus autonomous regions.</p></div>`,
 journey:`<div class="fx wide journey"><div class="trk"><u></u></div>${["Complaint","House committee","House vote (1/3)","Senate trial (16 of 24)","Verdict"].map((t,k)=>`<div class="sn" style="--p:${k*25};--k:${k}"><span class="ico">${JIC[k]}</span><b>${t}</b></div>`).join("")}</div>`,
 funds:`<div class="fx wide funds"><div class="fb"><span style="--f:125">OVP 2022<b>₱125M</b></span><span style="--f:375">OVP 2023<b>₱375M</b></span><span class="dp" style="--f:112.5">DepEd<b>₱112.5M</b></span></div><p>Confidential funds, 2022 to 2023: <b>₱612.5M</b> in total</p></div>`,
 gavel:`<div class="fx gavelc"><svg viewBox="0 0 120 100"><ellipse class="rip" cx="85" cy="90" rx="24" ry="5"/><rect class="blk" x="55" y="88" width="60" height="9" rx="3"/><g class="swing"><rect class="gs" x="18" y="66" width="62" height="8" rx="3"/><rect class="gh" x="68" y="50" width="24" height="38" rx="4"/></g></svg><b>ORDER!</b></div>`,
 envstory:`<div class="fx wide story"><div class="stp" style="--d:.6s"><div class="env2"><div class="sl">&#9733;</div><b>SECOND ENVELOPE</b></div><p><span class="n">1</span>The second envelope holds evidence the prosecutors want opened</p></div><i class="ar2" style="--d:1.6s">&#8594;</i><div class="stp" style="--d:2s"><div class="tally"><div class="t o" style="--j:0"><span>Open it</span><div class="tbar"><u style="--w:91"></u></div><em>10</em></div><div class="t n" style="--j:1"><span>Keep sealed</span><div class="tbar"><u style="--w:100"></u></div><em>11</em></div></div><p><span class="n">2</span>The Senate votes 11 to 10 not to open it</p></div><i class="ar2" style="--d:3.8s">&#8594;</i><div class="stp s3" style="--d:4s"><div class="env2"><div class="sl">&#9733;</div><b>SECOND ENVELOPE</b><div class="stamp2">NOT OPENED</div></div><p><span class="n">3</span>The envelope stays sealed</p></div><i class="ar2" style="--d:6s">&#8594;</i><div class="stp" style="--d:6.2s"><div class="edsa"><div class="bn">EDSA II</div><div class="pp">${[0,1,2,3,4,5,6,7,8].map(k=>`<i style="--k:${k}"></i>`).join("")}</div></div><p><span class="n">4</span>People take to the streets. Estrada leaves on Jan 20, 2001</p></div></div>`,
 sealed:'<div class="fx sealed"><div class="eb"></div><div class="ef"></div><div class="seal">&#9733;</div><div class="stamp">NOT OPENED<br>11 to 10</div></div>'};
const flagSvg=(()=>{let r="";for(let i=0;i<8;i++){const a=i*45;r+=`<path d="M0-64L6.5-30L-6.5-30Z" transform="rotate(${a})"/><path d="M0-50L4.5-30L-4.5-30Z" transform="rotate(${a-14})"/><path d="M0-50L4.5-30L-4.5-30Z" transform="rotate(${a+14})"/>`}
 const st=(x,y,a)=>`<path transform="translate(${x} ${y}) rotate(${a}) scale(1.6)" d="M0-12L3.5-3.7L12-3.7L5.2 1.5L7.4 10L0 5L-7.4 10L-5.2 1.5L-12-3.7L-3.5-3.7Z"/>`;
 return `<svg xmlns="http://www.w3.org/2000/svg" width="1240" height="620" viewBox="0 0 600 300"><defs><radialGradient id="g" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#fff6b0"/><stop offset=".45" stop-color="#fcd116"/><stop offset="1" stop-color="#d4a400"/></radialGradient></defs><rect width="600" height="150" fill="#0038a8"/><rect y="150" width="600" height="150" fill="#ce1126"/><path d="M0 0L260 150L0 300Z" fill="#fff"/><g fill="url(#g)"><g transform="translate(86.7 150)">${r}<circle r="26"/></g>${st(30,48,-30)}${st(30,252,210)}${st(226,150,90)}</g></svg>`})();
const flagHTML=`<div class="fx flagfx"><div class="pole"></div><canvas class="flagcv" width="1240" height="700"></canvas></div>`;
Object.assign(FX,FX_ART9);
/* ===== extra topic effects ===== */
const pips=(n,lit)=>Array.from({length:n},(_,k)=>`<i class="pp2${k<lit?" on":""}" style="--k:${k}"></i>`).join("");
Object.assign(FX,{
 terms:`<div class="fx wide terms">${[1,2,3].map(n=>`<div class="tm" style="--k:${n-1}"><b>Term ${n}</b><div class="yr">${pips(3,3)}</div><small>3 years</small></div>`).join("")}<div class="tm no" style="--k:3"><b>Term 4</b><div class="yr">${pips(3,0)}</div><div class="stampn">NOT ALLOWED</div></div></div>`,
 plebi:`<div class="fx wide plebi"><div class="pb"><div class="pf"><span>YES: more than half of votes cast</span></div><div class="pm"><span>50%</span></div></div><p class="cap">Plebiscite in the political units directly affected (illustrative bar)</p></div>`,
 autreg:`<div class="fx wide autreg"><div class="ar3"><b>ARMM (1989)</b><div class="pr">${pips(4,4)}</div><small>4 provinces voted yes</small></div><div class="ar3"><b>Cordillera (Jan 30, 1990)</b><div class="pr">${pips(1,1)}</div><small>Only Ifugao voted yes; region not created</small></div></div>`,
 ombud:`<div class="fx wide ombud"><div class="ob top">Ombudsman (Tanodbayan)</div><div class="orow">${["Overall Deputy","Deputy for Luzon","Deputy for Visayas","Deputy for Mindanao"].map((t,k)=>`<div class="ob" style="--k:${k}">${t}</div>`).join("")}</div></div>`,
 court:`<div class="fx wide court"><div class="cj">${Array.from({length:15},(_,k)=>`<i class="pp2 ${k<13?"on":"off"}" style="--k:${k}"></i>`).join("")}</div><p class="cap">13 to 0 · Caguioa inhibited · Singh on leave</p></div>`
});
WIDE.push("terms","plebi","autreg","ombud","court");
S[8].fx="terms";S[9].fx="plebi";S[10].fx="autreg";S[14].fx="ombud";S[19].fx="court";
FX.flag=FX.sun.replace('class="fx sun"','class="fx sun burst"')+flagHTML;
const stage=document.getElementById("stage");
stage.innerHTML=S.map(s=>{
 if(s.type==="title")return `<section class="slide title${s.cls?" "+s.cls:""}">${FX[s.fx]||""}<h1>${words(s.title)}</h1><div class="rule"></div><p class="lines">${s.text.split("\n").map((l,k)=>`<span style="--k:${k}">${esc(l)}</span>`).join("")}</p>${s.note?`<div class="note">${esc(s.note)}</div>`:""}</section>`;
 let b="";
 if(s.cols)b=`<div class="cols" style="--n:${s.n||2}">${s.cols.map((c,ci)=>`<div class="card${c.hot?" hot":""}" data-n="${ci+1}">${c.ic?`<svg class="ic" viewBox="0 0 48 48">${IC[c.ic]}</svg>`:""}${c.b?`<span class="badge ${c.bc}">${c.b}</span>`:""}<h3>${esc(c.h)}</h3><ul>${c.l.map(i=>`<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}</div>`;
 if(s.steps)b=`<div class="steps${s.fx==="journey"?" compact":""}">${s.steps.map(t=>`<div class="step"><b>${esc(t.d)}</b><span>${esc(t.t)}</span></div>`).join("")}</div>`;
 if(s.stats&&!s.seats)b=`<div class="stats">${s.stats.map(t=>`<div class="stat"><b>${esc(t.n)}</b><span>${esc(t.l)}</span></div>`).join("")}</div>`;
 if(s.seats){const pts=[];[[14,250],[10,170]].forEach(([c,r])=>{for(let k=0;k<c;k++)pts.push({a:Math.PI*k/(c-1),r})});pts.sort((p,q)=>p.a-q.a||q.r-p.r);
  b=`<div class="seatwrap"><div class="hemi">${pts.map((p,k)=>`<i class="seat${k<16?" lit":""}" style="--k:${k};left:${290-p.r*Math.cos(p.a)-17}px;top:${270-p.r*Math.sin(p.a)-17}px"></i>`).join("")}</div><div class="stats side">${s.stats.map(t=>`<div class="stat"><b>${esc(t.n)}</b><span>${esc(t.l)}</span></div>`).join("")}</div></div>`}
 if(s.votes)b=`<div class="votes">${s.votes.map(r=>`<div class="vrow"><span>${esc(r.l)}</span><div class="vbar">${r.v.map(v=>`<i style="--v:${v}"></i>`).join("")}</div><b>${esc(r.t)}</b></div>`).join("")}</div>`;
 return `<section class="slide${s.cls?" "+s.cls:""}"><span class="tag">${esc(s.tag)}</span>${WIDE.includes(s.fx)?"":FX[s.fx]||""}<h2>${esc(s.title)}</h2>${s.sub?`<p class="sub">${esc(s.sub)}</p>`:""}${b}${WIDE.includes(s.fx)?FX[s.fx]:""}${s.note?`<div class="note">${esc(s.note)}</div>`:""}</section>`;
}).join("");
const slides=[...stage.children],N=slides.length;
stage.insertAdjacentHTML("beforeend",'<div class="envov" id="envov"><div class="rep"><div class="half a"></div><div class="half b"></div></div><div class="shards"></div><div class="env"><div class="e-back"></div><div class="letter"><b id="envh"></b></div><div class="e-front"></div><div class="e-flap"></div><div class="e-seal">&#9733;</div></div></div>');
const envEl=document.getElementById("envov");let envT;
{const cs=["#fcd116","#ce1126","#0038a8","#ffffff"];envEl.querySelector(".shards").innerHTML=Array.from({length:36},(_,k)=>{const a=Math.random()*6.283,d=140+Math.random()*340;return `<i style="--dx:${(Math.cos(a)*d).toFixed(0)}px;--dy:${(Math.sin(a)*d*.7+70).toFixed(0)}px;--r:${(Math.random()*720-360).toFixed(0)}deg;--w:${8+(Math.random()*14|0)}px;--h:${8+(Math.random()*14|0)}px;--c:${cs[k%4]}"></i>`}).join("")}
stage.insertAdjacentHTML("beforeend",`<div class="bgsun" aria-hidden="true"><svg viewBox="-110 -110 220 220"><g class="rays">${rays}</g><circle r="44"/></svg></div>`);
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){let h="";for(let k=0;k<18;k++){const s=6+Math.random()*14,d=16+Math.random()*18;h+=`<i class="sp" style="left:${(Math.random()*100).toFixed(1)}%;width:${s.toFixed(1)}px;height:${s.toFixed(1)}px;animation-duration:${d.toFixed(1)}s;animation-delay:-${(Math.random()*d).toFixed(1)}s;opacity:${(.12+s/70).toFixed(2)};filter:blur(${s>14?2:0}px)"></i>`}stage.insertAdjacentHTML("beforeend",h)}

/* section each slide belongs to: the intro card plays only on the first slide of a section */
let sec=null;const SEC=S.map(s=>{if(P.includes(s.tag))sec=s.tag;return sec});
let ready=false;
let i=0;
const COMPACT=matchMedia("(max-width:820px),(max-height:500px),(orientation:portrait)");
const $=id=>document.getElementById(id);
const calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function countUp(cur,d=0){
 if(calm)return;
 cur.querySelectorAll(".stat b").forEach(b=>{
  const t=b.dataset.t||(b.dataset.t=b.textContent),nums=t.match(/\d+/g).map(Number);
  b.textContent=t.replace(/\d+/g,"0");
  setTimeout(()=>{const t0=performance.now();(function f(now){
   const p=Math.min(1,(now-t0)/1300),e=1-Math.pow(1-p,3);let k=0;
   b.textContent=t.replace(/\d+/g,()=>Math.round(nums[k++]*e));
   if(p<1)requestAnimationFrame(f)})(t0)},650+d);
 });
}
function show(n){
 n=Math.max(0,Math.min(N-1,n));
 const old=slides[i],from=i,dir=n>=i?1:-1;
 stage.style.setProperty("--dx",(COMPACT.matches?30:70)*dir+"px");stage.style.setProperty("--dr",dir*30+"deg");stage.classList.toggle("istitle",S[n].type==="title");
 if(n!==i){old.classList.remove("on");old.classList.add("out");setTimeout(()=>old.classList.remove("out"),450)}
 i=n;
 const cur=slides[i];cur.classList.remove("out");cur.classList.add("on");
 cur.querySelectorAll(".card,.step,.stat,.vrow").forEach((e,k)=>e.style.setProperty("--i",k));
 cur.scrollTop=0;
 clearTimeout(envT);envEl.classList.remove("play");slides.forEach(s=>s.classList.remove("hold"));
 const held=!calm&&ready&&dir>0&&n!==from&&SEC[n]&&SEC[n-1]!==SEC[n];
 if(held){const k=P.indexOf(SEC[n]),nm=NAMES[k]||"",ini=/^Presenter/.test(nm)?nm.replace(/\D/g,""):nm.split(" ").filter(Boolean).map((w,j,a)=>j===0||j===a.length-1?w[0]:"").join("").toUpperCase();
  const card=`<div class="rc"><div class="rbar"></div><div class="rnum">${k+1}</div><div class="rav">${ini}</div><div class="rtxt"><span class="rtag"><i></i>NOW REPORTING</span><b>${esc(nm)}</b><small>${esc(SEC[n])}</small></div></div>`;
  envEl.querySelectorAll(".half").forEach(h=>{h.innerHTML=card});
  {const eh=$("envh"),lab=SEC[n].split(" · ")[0];eh.textContent=lab;eh.style.whiteSpace="nowrap";eh.style.fontSize=lab.length>12?"1.3em":""}
  void envEl.offsetWidth;envEl.classList.add("play");cur.classList.add("hold");
  envT=setTimeout(()=>cur.classList.remove("hold"),3700)}
 countUp(cur,held?3700:0);
 $("count").textContent=`${i+1} / ${N}`;
 $("prog").style.width=((i+1)/N*100)+"%";
 $("prev").disabled=i===0;$("next").disabled=i===N-1;
 history.replaceState(null,"","#"+(i+1));
}
function fit(){
 if(COMPACT.matches){stage.style.transform="";return}
 const k=Math.min(innerWidth/1280,innerHeight/720);
 stage.style.transform=`translate(-50%,-50%) scale(${k})`;
}
$("prev").onclick=()=>show(i-1);
$("next").onclick=()=>show(i+1);
$("full").onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.();
const ov=$("overview");
ov.innerHTML=S.map((s,k)=>`<button data-k="${k}"><small>${k+1}</small>${esc(s.title)}</button>`).join("");
function toggleOv(f){ov.hidden=f===undefined?!ov.hidden:!f;ov.querySelectorAll("button").forEach((b,k)=>b.classList.toggle("cur",k===i))}
$("grid").onclick=()=>toggleOv();
ov.onclick=e=>{const b=e.target.closest("button");if(b){show(+b.dataset.k);toggleOv(false)}else toggleOv(false)};
addEventListener("keydown",e=>{
 if(e.key==="ArrowRight"||e.key==="PageDown"||e.key===" "){e.preventDefault();show(i+1)}
 else if(e.key==="ArrowLeft"||e.key==="PageUp"){show(i-1)}
 else if(e.key==="Home")show(0);else if(e.key==="End")show(N-1);
 else if(e.key==="f"||e.key==="F")$("full").click();
 else if(e.key==="o"||e.key==="O")toggleOv();
 else if(e.key==="Escape")toggleOv(false);
});
let x0=null,y0=0;
addEventListener("touchstart",e=>{if(!ov.hidden){x0=null;return}x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
addEventListener("touchend",e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0,v=e.changedTouches[0].clientY-y0;if(Math.abs(d)>60&&Math.abs(d)>Math.abs(v)*1.5)show(i+(d<0?1:-1));x0=null});
addEventListener("resize",fit);
addEventListener("orientationchange",()=>setTimeout(fit,250));
COMPACT.addEventListener?.("change",fit);
window.visualViewport?.addEventListener("resize",fit);
if(!document.documentElement.requestFullscreen)$("full").style.display="none";
fit();
show((parseInt(location.hash.slice(1))||1)-1);
ready=true;

/* soft hover light only: nothing moves, tilts or shifts with the cursor */
stage.addEventListener("mousemove",e=>{
 const c=e.target.closest(".card,.stat");if(!c)return;
 const r=c.getBoundingClientRect();
 c.style.setProperty("--mx",((e.clientX-r.left)/r.width*100)+"%");
 c.style.setProperty("--my",((e.clientY-r.top)/r.height*100)+"%");
});

/* waving cloth: every column of the flag is shifted and lit like real fabric */
let flagReady=false;const flagImg=new Image();flagImg.onload=()=>{flagReady=true};flagImg.src="data:image/svg+xml,"+encodeURIComponent(flagSvg);
function drawFlag(c,t){
 const g=c.getContext("2d"),W=1240,H=620,oy=40,STEP=COMPACT.matches?4:2;g.clearRect(0,0,c.width,c.height);g.imageSmoothingQuality="high";
 const dy=x=>26*Math.pow(x/W,.9)*Math.sin(x/W*Math.PI*2.3-t*2.4);
 for(let x=0;x<W;x+=STEP){
  const y=dy(x),s=(dy(x+STEP)-dy(x-STEP))/(2*STEP),h=H*(1-Math.abs(s)*.25),top=oy+y+(H-h)/2;
  g.drawImage(flagImg,x,0,STEP,H,x,top,STEP+.6,h);
  g.fillStyle=s>0?`rgba(0,10,40,${Math.min(.55,s*2.4)})`:`rgba(255,255,255,${Math.min(.3,-s*1.4)})`;
  g.fillRect(x,top,STEP+.6,h);
 }
}
let lastF=0;
(function flagLoop(ts){requestAnimationFrame(flagLoop);if(!flagReady)return;if(COMPACT.matches&&ts-lastF<33)return;lastF=ts;document.querySelectorAll(".flagcv").forEach(c=>{if(c.offsetParent)drawFlag(c,calm?1:ts/1000)})})(0);