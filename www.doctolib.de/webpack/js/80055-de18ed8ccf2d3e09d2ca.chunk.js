"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [80055], {
        366851: (o, t, e) => {
            e.d(t, {
                HK: () => r,
                p3: () => c
            });
            e(977954), e(13553);
            var n = e(985056);
            const i = o => "EquipmentAgenda" === o.type,
                c = (o, t) => t && o && Number(t.organization_id) === Number(o.organization_id) && (Number(t.speciality_id) === Number(o.speciality_id) || i(o) && !o.speciality_id) && (!i(o) || (o.room_visit_motive_ids || []).includes(t.id)) && !(0, n.pK)(t, {
                    agenda: o
                }),
                r = (o, t) => t[`${o}_write`]
        },
        640415: (o, t, e) => {
            e.d(t, {
                iE: () => r,
                m4: () => c
            });
            var n = e(977954),
                i = e.n(n);
            e(445884);
            const c = o => i()(o.start_date).subtract(5, "day").isBefore(),
                r = o => !o.telehealth.pricing || c(o)
        },
        171493: (o, t, e) => {
            e.d(t, {
                E4: () => s,
                Id: () => a,
                KQ: () => f,
                MU: () => m,
                U$: () => k,
                fO: () => g,
                s_: () => l,
                vE: () => p
            });
            e(549995), e(3674), e(875472), e(943174), e(478718), e(545578), e(944908), e(252628), e(441609), e(225325);
            var n, i, c = e(990626),
                r = e(445884),
                d = (e(659128), e(451421));
            e(646823), e(824560), e(849500), e(361749), e(775608), e(253565), e(633559);
            null === (n = c.ZP.DOCUMENTS) || void 0 === n || null === (i = n.DOCTOR_KINDS) || void 0 === i || i.filter((o => /prescription/.test(o)));
            const a = "snapshot",
                m = {
                    medicine_prescription: "prescription",
                    biological_prescription: "prescription",
                    paramedics_prescription: "prescription",
                    medical_imaging_prescription: "prescription",
                    biological_exam: "biological",
                    biometrics: "results",
                    paramedical_care: "paramedical",
                    imaging_exam: "imaging",
                    lab_results: "results",
                    medical_imaging: "results",
                    medical_synthesis: "medical_synthesis",
                    results: "results",
                    referral: "correspondence",
                    transfer: "transfer",
                    report: "correspondence",
                    invoice: "invoice",
                    certificate: "certificate",
                    letter: "correspondence",
                    treatment_form: "certificate",
                    medical_certificate: "certificate",
                    snapshot: "snapshot",
                    other: "other",
                    kbv_other: "kbv_other",
                    incapacity_of_work: "incapacity_of_work",
                    medical_plan: "prescription",
                    pedagogical_material: "correspondence",
                    computer_document: "upload",
                    clear: "correspondence",
                    document: "correspondence",
                    medical_history: "other",
                    picture: "snapshot",
                    sick_leave_certificate: "certificate",
                    signature: "snapshot",
                    result: "results",
                    prescription: "prescription",
                    data_recovery: "data_recovery",
                    procedure: "procedure"
                },
                s = {
                    biological_exam: "doctor_common.documents.kind_group.biological_exam",
                    certificate: "doctor_common.documents.kind_group.certificate",
                    consultation: "doctor_common.documents.kind_group.consultation",
                    correspondence: "doctor_common.documents.kind_group.correspondence",
                    data_recovery: "doctor_common.documents.kind_group.data_recovery",
                    imaging_exam: "doctor_common.documents.kind_group.imaging_exam",
                    invoice: "doctor_common.documents.kind_group.invoice",
                    medicine_prescription: "doctor_common.documents.kind_group.medicine_prescription",
                    medical_synthesis: "doctor_common.documents.kind_group.medical_synthesis",
                    other: "doctor_common.documents.kind_group.other",
                    paramedical_care: "doctor_common.documents.kind_group.paramedical_care",
                    prescription: "doctor_common.documents.kind_group.prescription",
                    procedure: "doctor_common.documents.kind_group.procedure",
                    results: "doctor_common.documents.kind_group.results",
                    snapshot: "doctor_common.documents.kind_group.snapshot",
                    omim_chain: "doctor_common.documents.kind_group.omim_chain"
                },
                _ = {
                    appointment_request: "doctor_common.documents.kind.biological_prescription.appointment_request",
                    biological_prescription: "doctor_common.documents.kind.biological_prescription",
                    biological_exam: "doctor_common.documents.kind.biological_exam",
                    biometrics: "doctor_common.documents.kind.biometrics",
                    cerfa: "doctor_common.documents.kind.cerfa",
                    certificate: "doctor_common.documents.kind.certificate",
                    clear: "doctor_common.documents.kind.clear",
                    data_recovery: "doctor_common.documents.kind.data_recovery",
                    document: "doctor_common.documents.kind.document",
                    ehpad_file: "doctor_common.documents.kind.ehpad_file",
                    exception_medication: "doctor_common.documents.kind.exception_medication",
                    identity_proof: "doctor_common.documents.kind.identity_proof",
                    incapacity_of_work: "doctor_common.documents.kind.incapacity_of_work",
                    imaging_exam: "doctor_common.documents.kind.imaging_exam",
                    invoice: "doctor_common.documents.kind.invoice",
                    lab_results: "doctor_common.documents.kind.lab_results",
                    letter: "doctor_common.documents.kind.letter",
                    long_term_disease_declaration: "doctor_common.documents.kind.long_term_disease_declaration",
                    mdph_file: "doctor_common.documents.kind.mdph_file",
                    medical_certificate: "doctor_common.documents.kind.medical_certificate",
                    medical_document: "doctor_common.documents.kind.medical_document",
                    medical_history: "doctor_common.documents.kind.medical_history",
                    medical_imaging: "doctor_common.documents.kind.medical_imaging",
                    medical_imaging_prescription: "doctor_common.documents.kind.medical_imaging_prescription",
                    medical_plan: "doctor_common.documents.kind.medical_plan",
                    medical_synthesis: "doctor_common.documents.kind.medical_synthesis",
                    medicine_prescription: "doctor_common.documents.kind.medicine_prescription",
                    paramedical_care: "doctor_common.documents.kind.paramedical_care",
                    nursing_care_procedure: "doctor_common.documents.kind.nursing_care_procedure",
                    other: "doctor_common.documents.kind.other",
                    paramedics_prescription: "doctor_common.documents.kind.paramedics_prescription",
                    patient_master_data: "doctor_common.documents.kind.patient_master_data",
                    patient_request_attachment: "doctor_common.documents.kind.patient_request_attachment",
                    pedagogical_material: "doctor_common.documents.kind.pedagogical_material",
                    picture: "doctor_common.documents.kind.picture",
                    public_insurance_proof: "doctor_common.documents.kind.public_insurance_proof",
                    prescription: "doctor_common.documents.kind.prescription",
                    private_insurance_proof: "doctor_common.documents.kind.private_insurance_proof",
                    procedure: "doctor_common.documents.kind.procedure",
                    psychotherapy_agreement: "doctor_common.documents.kind.psychotherapy_agreement",
                    referral: "doctor_common.documents.kind.referral",
                    report: "doctor_common.documents.kind.report",
                    result: "doctor_common.documents.kind.result",
                    results: "doctor_common.documents.kind.results",
                    sick_leave_certificate: "doctor_common.documents.kind.sick_leave_certificate",
                    signature: "doctor_common.documents.kind.signature",
                    snapshot: "doctor_common.documents.kind.snapshot",
                    spa_treatment: "doctor_common.documents.kind.spa_treatment",
                    transfer: "doctor_common.documents.kind.transfer",
                    transport_voucher: "doctor_common.documents.kind.transport_voucher",
                    treatment_form: "doctor_common.documents.kind.treatment_form",
                    vaccination_certificate_ibm: "doctor_common.documents.kind.vaccination_certificate_ibm",
                    work_accident: "doctor_common.documents.kind.work_accident",
                    work_stoppage: "doctor_common.documents.kind.work_stoppage",
                    one: "doctor_common.documents.kind.one",
                    third_party_payment_card: "doctor_common.documents.kind.third_party_payment_card"
                },
                p = o => {
                    let {
                        kind: t
                    } = o;
                    return t && /treatment_form/.test(t)
                },
                u = async (o, t) => {
                    const e = o.getReader(),
                        n = new TextDecoder(...t);
                    let i = "";
                    const c = o => {
                        let {
                            done: t,
                            value: r
                        } = o;
                        return t ? i : (i += n.decode(r), e.read().then(c))
                    };
                    return e.read().then(c)
                },
                l = async o => (async o => {
                    const [t, e] = o.body.tee();
                    return u(t, ["utf-8", {
                        fatal: !0
                    }]).catch((() => u(e, ["iso-8859-1"])))
                })(await fetch(o)),
                g = o => r.Z.t(_[o]),
                k = (o, t) => {
                    var e, n;
                    return null === (e = o.accesses) || void 0 === e || null === (n = e.find((o => {
                        let {
                            patient_id: e
                        } = o;
                        return (0, d.fH)(e, t)
                    }))) || void 0 === n ? void 0 : n.title
                },
                f = (o, t) => ({ ...o,
                    title: k(o, t)
                })
        },
        633559: (o, t, e) => {
            e.d(t, {
                HS: () => _,
                Qc: () => a,
                at: () => r,
                mV: () => c,
                pr: () => m,
                tE: () => s
            });
            var n = e(990626);
            e(397769);
            const i = ["jpg", "jpeg", "png", "gif"],
                c = function() {
                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.entries({ ...n.ZP.ALLOWED_DOCUMENT_TYPES,
                        ...o
                    }).reduce(((o, t) => {
                        let [e, n] = t;
                        return { ...o,
                            [n]: (o[n] || []).concat([e])
                        }
                    }), {})
                },
                r = () => Object.keys(n.ZP.ALLOWED_DOCUMENT_TYPES),
                d = (o, t) => {
                    const e = (null === o || void 0 === o ? void 0 : o.content_type) || (null === o || void 0 === o ? void 0 : o.type);
                    return "image/" === t ? !(null === e || void 0 === e || !e.startsWith("image/")) : "audio/" === t ? !(null === e || void 0 === e || !e.startsWith("audio/")) : (null === e || void 0 === e ? void 0 : e.toLowerCase()) === t
                },
                a = o => d(o, "application/pdf"),
                m = o => d(o, "image/"),
                s = {
                    pdf: "pdf",
                    image: "image",
                    tiff: "tiff",
                    docx: "docx",
                    rtf: "rtf",
                    html: "html",
                    text: "text",
                    audio: "audio",
                    xml: "xml",
                    unsupported: "unsupported"
                },
                _ = o => a(o) ? s.pdf : (o => {
                    const t = (null === o || void 0 === o ? void 0 : o.content_type) || (null === o || void 0 === o ? void 0 : o.type);
                    if (!t) return !1;
                    const [e, n] = t.split("/");
                    return "image" === e && i.includes(n)
                })(o) ? s.image : (o => d(o, "image/tiff"))(o) ? s.tiff : (o => d(o, "application/vnd.openxmlformats-officedocument.wordprocessingml.document"))(o) ? s.docx : (o => d(o, "text/rtf") || d(o, "application/rtf"))(o) ? s.rtf : (o => d(o, "text/html"))(o) ? s.html : (o => d(o, "application/xml"))(o) ? s.xml : (o => d(o, "text/plain") || d(o, "application/hpm") || d(o, "application/x-hprimnet"))(o) ? s.text : (o => d(o, "audio/"))(o) ? s.audio : o.content_type ? s.unsupported : null
        },
        893853: (o, t, e) => {
            e.d(t, {
                H0: () => u,
                JO: () => l,
                Of: () => _,
                Rx: () => s,
                VM: () => p
            });
            e(5212), e(977954);
            var n = e(840087),
                i = e.n(n),
                c = (e(227361), e(478718), e(441609), e(13553)),
                r = (e(445884), e(152817)),
                d = e(366851),
                a = e(493222);
            const m = "open",
                s = "waiting",
                _ = "in_progress",
                p = "done",
                u = "no_show",
                l = "no_show_but_ok",
                g = "temporary",
                k = "rescheduled",
                f = (["public", "private"].map((o => ({
                    label: r.$w[o],
                    value: o
                }))), Object.keys(a.V).filter((o => ![g, k].includes(o))), o => "appt" === o.type),
                h = o => [o.type, o.kind].includes(m);
            i()(((o, t, e) => o.start_date >= t && o.end_date <= e)), i()(((o, t) => t ? t.filter((t => (0, c.Nm)(o, t))) : null)), i()(((o, t) => {
                const e = e => o && Number(o.id) === Number(t[e]);
                return h(t) ? e("agenda_id") || e("practitioner_agenda_id") : e("agenda_id") || e("equipment_agenda_id") || e("lab_tech_agenda_id")
            })), i()(((o, t, e) => !!o && (f(e) ? o.id === e.visit_motive_id : !!h(e) && (e.all_visit_motives ? !!t && (0, d.p3)(t, o) : e.visit_motive_ids.includes(String(o.id)))))), i()(((o, t) => t.agenda_id === o.id && (0, d.HK)(t.type, o)))
        },
        646823: (o, t, e) => {
            e.d(t, {
                fJ: () => c
            });
            var n = e(893853),
                i = e(857152);
            n.Rx, n.Of, n.VM, n.JO, n.H0, n.Rx, n.Of, n.VM, n.JO, n.H0;
            const c = o => {
                let {
                    appointment: t,
                    future: e
                } = o;
                const n = e && !t.canceled;
                return t.telehealth ? n && !t.needs_preparation && !(0, i.Yc)(t) && !(0, i.ZF)(t) : n
            }
        },
        493222: (o, t, e) => {
            e.d(t, {
                V: () => i
            });
            var n = e(445884);
            const i = {
                confirmed: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.confirmed"),
                waiting: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.waiting"),
                in_progress: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.in_progress"),
                done: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.done"),
                no_show: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.no_show"),
                no_show_but_ok: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.no_show_but_ok"),
                suspended: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.suspended"),
                deleted: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.cancelled_by_patient"),
                awaiting_confirmation_by_practitioner: n.Z.t("api.accounts.index.root.booking.fields.appointment_status.awaiting_confirmation_by_practitioner"),
                temporary: null,
                rescheduled: null
            }
        }
    }
]);
//# sourceMappingURL=../80055-d21dccb9a90d53c21c55.js.map