/* ====================== SPN223 Appendix 4 Catalogue ====================== */
/* fluid: "red" for red cells; "yellow" for all other components */

const CATALOGUE_FULL = [
  // --- Core red cell products ---
  { name: "Red Cells in Additive Solution, LD",                                    barcode: "a0043333b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD, Irradiated",                       barcode: "a0443333b", fluid: "red" },
  { name: "Red Cells Thawed and Washed, LD",                                      barcode: "a0064603b", fluid: "red" },
  { name: "Red Cells Thawed and Washed, LD (Closed System Preparation)",          barcode: "a0542633b", fluid: "red" },
  { name: "Red Cells, Washed, LD (Manual wash in SAGM)",                          barcode: "a0465313b", fluid: "red" },
  { name: "Red Cells, Washed, LD, Irradiated (Manual wash in SAGM)",              barcode: "a0465323b", fluid: "red" },

  // --- Platelets, Apheresis, LD ---
  { name: "Platelets, Apheresis, LD — Single unit",                               barcode: "a0542883b", fluid: "yellow" },
  { name: "Platelets, Apheresis, LD — Pack 1",                                    barcode: "a0542893b", fluid: "yellow" },
  { name: "Platelets, Apheresis, LD — Pack 2",                                    barcode: "a0542903b", fluid: "yellow" },
  { name: "Platelets, Apheresis, LD — Pack 3",                                    barcode: "a0542913b", fluid: "yellow" },

  // --- Platelets, Apheresis, LD, Irradiated ---
  { name: "Platelets, Apheresis, LD, Irradiated — Single unit",                   barcode: "a0542923b", fluid: "yellow" },
  { name: "Platelets, Apheresis, LD, Irradiated — Pack 1",                        barcode: "a0542933b", fluid: "yellow" },
  { name: "Platelets, Apheresis, LD, Irradiated — Pack 2",                        barcode: "a0542943b", fluid: "yellow" },
  { name: "Platelets, Apheresis, LD, Irradiated — Pack 3",                        barcode: "a0542953b", fluid: "yellow" },

  // --- Platelets Apheresis in Additive Solution, LD ---
  { name: "Platelets Apheresis in Additive Solution, LD — Pack 1",                barcode: "a0542433b", fluid: "yellow" },
  { name: "Platelets Apheresis in Additive Solution, LD — Pack 2",                barcode: "a0542443b", fluid: "yellow" },
  { name: "Platelets Apheresis in Additive Solution, LD — Pack 3",                barcode: "a0542453b", fluid: "yellow" },
  { name: "Platelets Apheresis in Additive Solution, LD — Single unit",           barcode: "a0542463b", fluid: "yellow" },

  // --- Platelets Apheresis in Additive Solution, LD, Irradiated ---
  { name: "Platelets Apheresis in Additive Solution, LD, Irradiated — Pack 1",    barcode: "a0542333b", fluid: "yellow" },
  { name: "Platelets Apheresis in Additive Solution, LD, Irradiated — Pack 2",    barcode: "a0542343b", fluid: "yellow" },
  { name: "Platelets Apheresis in Additive Solution, LD, Irradiated — Pack 3",    barcode: "a0542353b", fluid: "yellow" },
  { name: "Platelets Apheresis in Additive Solution, LD, Irradiated — Single unit",barcode: "a0542363b", fluid: "yellow" },

  // --- Platelets Pooled in Additive Solution and Plasma, LD ---
  { name: "Platelets Pooled in Additive Solution and Plasma, LD",                 barcode: "a0544773b", fluid: "yellow" },
  { name: "Platelets Pooled in Additive Solution and Plasma, LD, Irradiated",     barcode: "A0544783b", fluid: "yellow" },

  // --- Fresh Frozen Plasma, LD (adult) ---
  { name: "Fresh Frozen Plasma, LD — Whole blood",                                barcode: "a0183003b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD — Single unit",                                barcode: "a0183203b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD — Pack 1",                                     barcode: "a0183213b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD — Pack 2",                                     barcode: "a0183223b", fluid: "yellow" },

  // --- Cryoprecipitate, pooled ---
  { name: "Cryoprecipitate, Pooled, LD",                                          barcode: "a0101903b", fluid: "yellow" },

  // --- Red cells for special use (IUT / neonatal / exchange) ---
  { name: "Red Cells, CPD, LD, Irradiated, for Intrauterine Transfusion",         barcode: "a0400183b", fluid: "red" },

  { name: "Red Cells in Additive Solution, LD for Neonatal Use — Pack 1",         barcode: "a0568303b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD for Neonatal Use — Pack 2",         barcode: "a0568313b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD for Neonatal Use — Pack 3",         barcode: "a0568323b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD for Neonatal Use — Pack 4",         barcode: "a0568333b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD for Neonatal Use — Pack 5",         barcode: "a0568343b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD for Neonatal Use — Pack 6",         barcode: "a0568353b", fluid: "red" },

  { name: "Red Cells in Additive Solution, LD, Irradiated, for Neonatal Use — Pack 1", barcode: "a0468303b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD, Irradiated, for Neonatal Use — Pack 2", barcode: "a0468313b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD, Irradiated, for Neonatal Use — Pack 3", barcode: "a0468323b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD, Irradiated, for Neonatal Use — Pack 4", barcode: "a0468333b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD, Irradiated, for Neonatal Use — Pack 5", barcode: "a0468343b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD, Irradiated, for Neonatal Use — Pack 6", barcode: "a0468353b", fluid: "red" },

  { name: "Red Cells (CPD), LD, Irradiated for Exchange Transfusion",             barcode: "a0403503b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD for Neonates and Infants",          barcode: "a0544813b", fluid: "red" },
  { name: "Red Cells in Additive Solution, LD, Irradiated for Neonates and Infants", barcode: "a0544823b", fluid: "red" },

  // --- Platelets / plasma / cryo for neonatal & infant use ---
  { name: "Platelets, Hyperconcentrated, Irradiated, for Neonatal Use",          barcode: "a0429643b", fluid: "yellow" },

  { name: "Platelets in Plasma and Additive Solution, LD for Neonatal Use — Pack 1", barcode: "a0300313b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD for Neonatal Use — Pack 2", barcode: "A0300323b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD for Neonatal Use — Pack 3", barcode: "A0300333b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD for Neonatal Use — Pack 4", barcode: "A0300343b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD for Neonatal Use — Pack 5", barcode: "A0300353b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD for Neonatal Use — Pack 6", barcode: "A0300363b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD for Neonatal Use — Pack 7", barcode: "A0300373b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD for Neonatal Use — Pack 8", barcode: "A0300383b", fluid: "yellow" },

  { name: "Platelets in Plasma and Additive Solution, LD Irradiated, for Neonatal Use — Pack 1", barcode: "A0300513b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD Irradiated, for Neonatal Use — Pack 2", barcode: "A0300523b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD Irradiated, for Neonatal Use — Pack 3", barcode: "A0300533b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD Irradiated, for Neonatal Use — Pack 4", barcode: "A0300543b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD Irradiated, for Neonatal Use — Pack 5", barcode: "A0300553b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD Irradiated, for Neonatal Use — Pack 6", barcode: "A0300563b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD Irradiated, for Neonatal Use — Pack 7", barcode: "A0300573b", fluid: "yellow" },
  { name: "Platelets in Plasma and Additive Solution, LD Irradiated, for Neonatal Use — Pack 8", barcode: "A0300583b", fluid: "yellow" },

  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 1",                   barcode: "A0696013b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 2",                   barcode: "A0696023b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 3",                   barcode: "A0696033b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 4",                   barcode: "A0696043b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 5",                   barcode: "A0597113b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 6",                   barcode: "A0597123b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 7",                   barcode: "A0597133b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 8",                   barcode: "A0597143b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 9",                   barcode: "A0597153b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 10",                  barcode: "A0597163b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 11",                  barcode: "A0597173b", fluid: "yellow" },
  { name: "Fresh Frozen Plasma, LD for Neonatal Use — Pack 12",                  barcode: "A0597183b", fluid: "yellow" },

  { name: "Cryoprecipitate, LD for Neonatal Use",                                barcode: "A0299813b", fluid: "yellow" },

  // --- Granulocytes ---
  { name: "Granulocytes, Pooled, in Additive Solution/Plasma Mix, Irradiated",   barcode: "a0543953b", fluid: "yellow" },
];

