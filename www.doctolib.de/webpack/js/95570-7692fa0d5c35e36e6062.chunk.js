"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [95570], {
        409595: (e, t, i) => {
            const a = "conditions",
                r = "procedures",
                o = "obstetrical_conditions",
                s = "allergy_intolerances",
                n = "medical_gynecology_conditions",
                _ = {
                    PERINATAL_INFORMATION: "perinatal_information",
                    MEDICAL_HISTORY: "medical_history",
                    SURGICAL_HISTORY: "surgical_history",
                    ALLERGIES: "allergies",
                    FAMILY_HISTORY: "family_history",
                    OBSTETRICS: "obstetrics",
                    MEDICAL_GYNECOLOGY_HISTORY: "medical_gynecology_history",
                    LIFESTYLE: "lifestyle"
                },
                c = (Object.values(_), [a, r, s, o, n].map((e => e + "_icd_gm_entries")), {
                    APGAR_SCORE_1_MINUTE: "apgar_score_1_minute",
                    APGAR_SCORE_5_MINUTES: "apgar_score_5_minutes",
                    BIRTH_HEAD_CIRCUMFERENCE: "birth_head_circumference",
                    BIRTH_MODE: "birth_mode",
                    BIRTH_SIZE: "birth_size",
                    BIRTH_WEIGHT: "birth_weight",
                    FOETAL_POSITION: "foetal_position",
                    GESTATIONAL_AGE: "gestational_age",
                    NUTRITION_MODE: "nutrition_mode",
                    PERINATAL: "perinatal"
                });
            Object.values(c).map((e => `${e}_attributes`)).map((e => ({
                [e]: ["value"]
            })))
        },
        361749: (e, t, i) => {
            i(441609), i(35815);
            const a = Object.freeze({
                    physiotherapist: "physiotherapist",
                    nurse: "nurse",
                    pedicure: "pedicure",
                    speech_therapist: "speech_therapist",
                    orthoptist: "orthoptist",
                    other: "other"
                }),
                r = (Object.freeze({
                    [a.physiotherapist]: "Ordonnance bizone de kin\xe9sith\xe9rapie",
                    [a.nurse]: "Ordonnance bizone de soins infirmiers",
                    [a.pedicure]: "Ordonnance bizone de soins p\xe9dicurie",
                    [a.speech_therapist]: "Ordonnance bizone d'orthophonie",
                    [a.orthoptist]: "Ordonnance bizone d'orthoptie",
                    [a.other]: ""
                }), Object.freeze({
                    [a.physiotherapist]: "Ordonnance de kin\xe9sith\xe9rapie",
                    [a.nurse]: "Ordonnance de soins infirmiers",
                    [a.pedicure]: "Ordonnance de soins p\xe9dicurie",
                    [a.speech_therapist]: "Ordonnance d'orthophonie",
                    [a.orthoptist]: "Ordonnance d'orthoptie",
                    [a.other]: ""
                }), Object.freeze({
                    [a.physiotherapist]: "api.accounts.index.root.modals.patient.body.care_act.paramedical_care_kind_options.physiotherapist",
                    [a.nurse]: "api.accounts.index.root.modals.patient.body.care_act.paramedical_care_kind_options.nurse",
                    [a.pedicure]: "api.accounts.index.root.modals.patient.body.care_act.paramedical_care_kind_options.pedicure",
                    [a.speech_therapist]: "api.accounts.index.root.modals.patient.body.care_act.paramedical_care_kind_options.speech_therapist",
                    [a.orthoptist]: "api.accounts.index.root.modals.patient.body.care_act.paramedical_care_kind_options.orthoptist",
                    [a.other]: "api.accounts.index.root.modals.patient.body.care_act.paramedical_care_kind_options.other"
                })),
                o = Object.freeze({
                    [a.physiotherapist]: "KINE",
                    [a.nurse]: "INFIRMIER",
                    [a.pedicure]: "PEDICURE",
                    [a.speech_therapist]: "ORTHOPHONISTE",
                    [a.orthoptist]: "ORTHOPTISTE",
                    [a.other]: ""
                });
            Object.keys(a).map((e => ({
                value: a[e],
                label: r[e],
                ePrescriptionValue: o[e]
            })))
        },
        849500: (e, t, i) => {
            var a = i(65872);
            Object.values(a.nx).map((e => e.kind))
        },
        191401: (e, t, i) => {
            i(445884), i(409595);
            ["alcohol_use_attributes", "allergy_intolerances_attributes", "birth_mode_attributes", "breastfeeding_attributes", "conditions_attributes", "contraception_histories_attributes", "cycle_length_attributes", "family_member_histories_attributes", "family_situation_attributes", "gravida_count_attributes", "last_period_date_attributes", "lifestyle_attributes", "medical_gynecology_conditions_attributes", "menopause_attributes", "number_of_fetuses_attributes", "obstetrical_conditions_attributes", "parity_count_attributes", "pregnancy_attributes", "pregnancy_start_date_attributes", "procedures_attributes", "profession_attributes", "sports_activity_attributes", "tobacco_use_attributes"].map((e => ({
                [e]: ["title", "note", "value", "vidal_code", "cim10", "relation", "start_year", "long_term_condition"]
            })))
        },
        959361: (e, t, i) => {
            i(445884), i(132697)
        },
        20878: (e, t, i) => {
            i(445884), i(191401), i(959361), i(977954)
        },
        862970: (e, t, i) => {
            i.d(t, {
                eU: () => r
            });
            i(184481), i(445884);
            var a = i(990626);
            i(509250), i(849500), i(20878), i(171493);
            const r = () => (0, a.cr)("ehr_timeline_redesign")
        },
        132697: (e, t, i) => {
            Object.freeze({
                _code: "F",
                _codeSystem: "2.16.840.1.113883.5.1",
                _displayName: "F\xe9minin"
            }), Object.freeze({
                _code: "M",
                _codeSystem: "2.16.840.1.113883.5.1",
                _displayName: "Masculin"
            }), Object.freeze({
                _code: "UN",
                _codeSystem: "2.16.840.1.113883.5.1",
                _displayName: "Inconnu"
            })
        },
        659128: (e, t, i) => {
            var a = i(862970);
            (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)(), (0, a.eU)()
        }
    }
]);
//# sourceMappingURL=../95570-d392dce1be3ef459bc2d.js.map