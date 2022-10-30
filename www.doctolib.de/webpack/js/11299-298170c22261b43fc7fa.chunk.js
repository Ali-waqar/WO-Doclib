"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [11299], {
        951787: (e, t, a) => {
            a.d(t, {
                Z: () => h
            });
            var n = a(184481),
                l = a(15377),
                i = a(288306),
                o = a.n(i),
                r = a(519303),
                s = a.n(r),
                d = a(738502),
                c = a(136591),
                u = a(653471),
                _ = a(37741),
                m = a(785893);
            const p = (0, n.createContext)(),
                f = o()((e => (0, n.forwardRef)(((t, a) => (0, m.jsx)(p.Consumer, {
                    children: n => (0, m.jsx)(e, { ...t,
                        query: n,
                        ref: a
                    })
                }))))),
                b = (0, n.forwardRef)(((e, t) => {
                    let {
                        debounceDelay: a,
                        children: i,
                        id: o,
                        className: r,
                        container: b,
                        itemComponent: h = _.Z,
                        onChange: v,
                        onSelect: y,
                        valueSelector: Z,
                        value: g,
                        defaultIndex: N,
                        onFocus: x,
                        fetchOnFocus: C,
                        minAutocomplete: j,
                        stopOnEmptyResults: E,
                        dataFetcher: k,
                        onFirstSuggestionChange: S,
                        onSuggestionToggle: O,
                        agendaId: V,
                        context: F,
                        onActive: w,
                        preventBlur: A,
                        listClassName: R,
                        selectorListOverlayRef: T,
                        listHeader: q,
                        manuallyHideDropdown: I = !1,
                        style: $ = {},
                        onEditClick: L
                    } = e;
                    const [P, U] = (0, n.useState)([]), [B, D] = (0, n.useState)({
                        value: g || "",
                        pristine: !0
                    }), {
                        value: G
                    } = B, z = !!(q && (null === G || void 0 === G ? void 0 : G.length) > 0), [K, Y] = (0, n.useState)(z), W = (0, d.Z)(B, a), H = (0, n.useRef)(null), M = (0, c.Z)();
                    (0, n.useEffect)((() => {
                        const e = e => {
                            e.keyCode === l.Mf && (D((e => ({ ...e,
                                pristine: !0
                            }))), Y(!1))
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }), []), (0, n.useEffect)((() => {
                        S && P.length > 0 && S(P[0])
                    }), [P]), (0, n.useEffect)((() => {
                        O && O(K)
                    }), [K]), (0, n.useEffect)((() => {
                        G !== g && D((e => ({ ...e,
                            value: g
                        })))
                    }), [g]);
                    const Q = (0, n.useRef)((e => {
                            D({
                                value: e,
                                pristine: !1
                            }), v && v(e)
                        })),
                        J = () => {
                            const e = String(W.value),
                                t = e.toLowerCase();
                            k(t, {
                                agendaId: V,
                                context: F,
                                originalSearch: e
                            }).then((e => {
                                H.current = (null === e || void 0 === e ? void 0 : e.length) > 0 ? null : t, M.current && (s()(e, P) || U(e), Y((null === e || void 0 === e ? void 0 : e.length) > 0 || z))
                            }))
                        },
                        X = (0, n.useCallback)((() => {
                            J()
                        }), [k, W]);
                    (0, n.useEffect)((() => {
                        if (W.pristine) return;
                        const e = String(W.value).toLowerCase();
                        if (e.length < j || E && e.startsWith(H.current) && H.current) return Y(z), void U([]);
                        X()
                    }), [W]), (0, n.useImperativeHandle)(t, (() => ({
                        forceDataFetch: () => J(),
                        setValue: Q.current
                    })));
                    const ee = (0, n.useCallback)((() => {
                            x && x(), C && X()
                        }), [x, X]),
                        te = (0, n.useCallback)((e => {
                            D({
                                value: Z(e),
                                pristine: !0
                            }), Y(!1), U([]), y && y(e)
                        }), [y, Z]);
                    return (0, m.jsx)(p.Provider, {
                        value: G,
                        children: (0, m.jsxs)("div", {
                            className: r,
                            "data-design-system": "base",
                            children: [(0, n.cloneElement)(i, {
                                onClick: () => Y((null === P || void 0 === P ? void 0 : P.length) > 0),
                                onChange: Q.current,
                                onFocus: ee,
                                value: G
                            }), (0, m.jsx)(u.Z, {
                                className: R,
                                id: o,
                                onActive: w,
                                defaultIndex: N,
                                container: b,
                                itemComponent: f(h),
                                items: P,
                                onHide: () => Y(!1),
                                onSelect: te,
                                onEditClick: L,
                                show: K && !I,
                                preventBlur: A,
                                selectorListOverlayRef: T,
                                listHeader: q,
                                style: $
                            })]
                        })
                    })
                }));
            b.defaultProps = {
                minAutocomplete: 2,
                stopOnEmptyResults: !0
            };
            const h = (0, n.memo)(b)
        },
        78776: (e, t, a) => {
            a.d(t, {
                Z: () => r
            });
            var n = a(838273),
                l = a(984368),
                i = a(462814),
                o = a(785893);
            const r = (0, i.g)((e => {
                let {
                    disabled: t,
                    errorMessage: a,
                    pristine: i,
                    required: r,
                    valid: s,
                    value: d,
                    ...c
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(n.Z, {
                        value: d,
                        required: r,
                        disabled: t,
                        ...c,
                        "data-design-system": "base"
                    }), !c.formConfig.validityIndicators && void 0 !== s && !t && (0, o.jsx)(l.Z, {
                        value: d,
                        required: r,
                        valid: s,
                        pristine: i
                    })]
                })
            }))
        },
        799610: (e, t, a) => {
            a.d(t, {
                Z: () => g
            });
            var n = a(184481),
                l = a(294184),
                i = a.n(l),
                o = a(47760),
                r = a(5212),
                s = a(509250),
                d = a(585347),
                c = a(445884),
                u = a(929014),
                _ = a(453040),
                m = a(755440),
                p = a(797664),
                f = a(657907),
                b = a(892397),
                h = a(999997),
                v = a(785893);
            const y = e => {
                    let {
                        mainSelected: t,
                        showShorterLabel: a
                    } = e;
                    return (0, v.jsx)("div", {
                        className: "dc-form-field-set-title dl-text-left",
                        "data-design-system": "base",
                        children: a ? (0, v.jsx)("label", {
                            className: "dc-label",
                            children: (0, v.jsx)(_.Z, {
                                uiStyle: "body-s-bold",
                                className: "dl-gray-dark-font",
                                children: c.Z.t("common.place_of_birth.label")
                            })
                        }) : (0, v.jsxs)("label", {
                            className: "dc-label",
                            children: [(0, v.jsx)(_.Z, {
                                uiStyle: "body-s-bold",
                                className: "dl-gray-dark-font",
                                children: t ? c.Z.t("appointments.appointment_details.myself.place_of_birth") : c.Z.t("appointments.appointment_details.relative.place_of_birth")
                            }), (0, v.jsx)(_.Z, {
                                uiStyle: "body-xs-regular",
                                className: "dl-gray-font",
                                children: c.Z.t("common.place_of_birth.explanation")
                            })]
                        })
                    })
                },
                Z = e => {
                    let {
                        autoComplete: t,
                        disabled: a,
                        kind: l,
                        mainSelected: Z,
                        patient: g,
                        source: N,
                        readOnly: x,
                        required: C,
                        showShorterLabel: j
                    } = e;
                    const {
                        account: E
                    } = (0, n.useContext)(s.Z), [k, S] = (0, n.useState)(d.Cy.FRANCE), [O, V] = (0, n.useState)(null), [F, w] = (0, n.useState)(null), [A, R] = (0, n.useState)(""), T = (0, o.XQ)(), q = "appointment_modal" === N ? "patient." : "";
                    (0, n.useEffect)((() => {
                        T.setValue(`${q}place_of_birth_type`, d.Cy.FRANCE)
                    }), []);
                    (0, n.useEffect)((() => {
                        (e => {
                            let {
                                city_of_birth_id: t,
                                country_of_birth_id: a,
                                place_of_birth_unknown: n,
                                place_of_birth_name: l,
                                source: i
                            } = e;
                            l || "appointment_modal" !== i || R(""), t && l ? (S(d.Cy.FRANCE), V({
                                value: t,
                                label: l
                            }), w(null)) : a && l ? (S(d.Cy.FOREIGN_COUNTRY), V(null), w({
                                value: a,
                                label: l
                            })) : n && (S(d.Cy.UNKNOWN), V(null), w(null))
                        })({
                            city_of_birth_id: null === g || void 0 === g ? void 0 : g.city_of_birth_id,
                            country_of_birth_id: null === g || void 0 === g ? void 0 : g.country_of_birth_id,
                            place_of_birth_unknown: null === g || void 0 === g ? void 0 : g.place_of_birth_unknown,
                            place_of_birth_name: null === g || void 0 === g ? void 0 : g.place_of_birth_name,
                            source: N
                        })
                    }), [null === g || void 0 === g ? void 0 : g.city_of_birth_id, null === g || void 0 === g ? void 0 : g.country_of_birth_id, null === g || void 0 === g ? void 0 : g.place_of_birth_unknown, null === g || void 0 === g ? void 0 : g.place_of_birth_name, N]), (0, n.useEffect)((() => {
                        T.setTouched(`${q}place_of_birth_name`, !1)
                    }), [k, q]);
                    (0, n.useEffect)((() => {
                        var e, t, a;
                        t = O, a = F, (e = k) === d.Cy.FRANCE ? (T.setValue(`${q}city_of_birth_id`, null === t || void 0 === t ? void 0 : t.value), T.setValue(`${q}country_of_birth_id`, null), T.setValue(`${q}place_of_birth_unknown`, null), T.setValue(`${q}place_of_birth_name`, null === t || void 0 === t ? void 0 : t.label)) : e === d.Cy.FOREIGN_COUNTRY ? (T.setValue(`${q}city_of_birth_id`, null), T.setValue(`${q}country_of_birth_id`, null === a || void 0 === a ? void 0 : a.value), T.setValue(`${q}place_of_birth_unknown`, null), T.setValue(`${q}place_of_birth_name`, null === a || void 0 === a ? void 0 : a.label)) : e === d.Cy.UNKNOWN ? (T.setValue(`${q}city_of_birth_id`, null), T.setValue(`${q}country_of_birth_id`, null), T.setValue(`${q}place_of_birth_unknown`, !0), T.setValue(`${q}place_of_birth_name`, null)) : T.setValue(`${q}place_of_birth_type`, d.Cy.FRANCE), R("")
                    }), [k, O, F]);
                    const I = e => {
                            T.getValue(e) && T.setValue(e, null)
                        },
                        $ = () => {
                            I(`${q}city_of_birth_id`), I(`${q}country_of_birth_id`), I(`${q}place_of_birth_unknown`)
                        },
                        L = e => {
                            k === d.Cy.FRANCE ? (T.setValue(`${q}city_of_birth_id`, e.value), T.setValue(`${q}country_of_birth_id`, null)) : (T.setValue(`${q}city_of_birth_id`, null), T.setValue(`${q}country_of_birth_id`, e.value)), T.setValue(`${q}place_of_birth_unknown`, null), T.setValue(`${q}place_of_birth_name`, e.label), T.setError(`${q}place_of_birth_name`, ""), R("")
                        },
                        P = "appointment_modal" === N && (0, r.rl)(),
                        U = "appointment_modal" !== N && "doctor_referral" !== N,
                        B = "patient" === l,
                        D = !B && U ? c.Z.t("common.place_of_birth.label") : "doctor_referral" === N ? c.Z.t("common.place_of_birth.patient_referral") : null,
                        G = k === d.Cy.FRANCE || k === d.Cy.FOREIGN_COUNTRY;
                    return (0, v.jsxs)(v.Fragment, {
                        children: [U && B && (0, v.jsx)(y, {
                            mainSelected: Z,
                            showShorterLabel: j
                        }), (0, v.jsxs)(m.Z, {
                            className: i()({
                                "dc-form-field-set-horizontal": "doctor" === l && "appointment_modal" !== N && "doctor_referral" !== N,
                                "dl-margin-y-0": !P,
                                "dl-place-of-birth-margin": P
                            }),
                            label: D,
                            labelFor: "place_of_birth",
                            "data-design-system": "base",
                            children: [(0, v.jsxs)(p.Z, {
                                className: i()({
                                    "flex dl-full-width": (0, r.Zz)(),
                                    "dl-flex-column": (0, r.rl)(),
                                    "dl-form-row-place-of-birth": "appointment_modal" === N
                                }),
                                uiStyle: B && A ? "error" : null,
                                children: [(0, v.jsx)(f.Z, {
                                    className: i()({
                                        "dl-full-width": (0, r.rl)(),
                                        "dl-border-b-grey": (0, r.rl)() && "appointment_modal" !== N
                                    }),
                                    children: (0, v.jsx)(b.Z, {
                                        disabled: !(!a && !x),
                                        onChange: S,
                                        prefix: q,
                                        value: k,
                                        account: E
                                    })
                                }), G && (0, v.jsxs)(f.Z, {
                                    className: i()("block dl-full-width", {
                                        " dl-border-none ": (0, r.rl)()
                                    }),
                                    children: [k === d.Cy.FRANCE && (0, v.jsx)(h.Z, {
                                        autoComplete: t,
                                        defaultValue: O,
                                        disabled: !(!a && !x),
                                        kind: l,
                                        fieldName: `${q}place_of_birth_name`,
                                        required: C,
                                        setError: R,
                                        source: N,
                                        onChange: $,
                                        onSelect: L,
                                        type: "city",
                                        name: "searchFrancePlaceOfBirth",
                                        patient: g,
                                        account: E
                                    }), k === d.Cy.FOREIGN_COUNTRY && (0, v.jsx)(h.Z, {
                                        autoComplete: t,
                                        defaultValue: F,
                                        disabled: !(!a && !x),
                                        kind: l,
                                        fieldName: `${q}place_of_birth_name`,
                                        required: C,
                                        setError: R,
                                        source: N,
                                        onChange: $,
                                        onSelect: L,
                                        type: "country",
                                        name: "searchForeignPlaceOfBirth",
                                        patient: g,
                                        account: E
                                    })]
                                })]
                            }), A && ("appointment_modal" === N ? (0, v.jsx)(u.Z, {
                                variant: "deprecated-alert-interface",
                                uiStyle: "error",
                                className: "dc-form-field-notice-content",
                                children: A
                            }) : (0, v.jsx)("div", {
                                className: i()({
                                    "dl-flex-row-reverse": (0, r.Zz)()
                                }),
                                children: (0, v.jsx)(_.Z, {
                                    block: !0,
                                    uiStyle: "body-xs-regular",
                                    color: "error-090",
                                    "aria-live": "polite",
                                    className: i()("dl-padding-t-8", {
                                        "dl-width-50": (0, r.Zz)()
                                    }),
                                    children: A
                                })
                            }))]
                        })]
                    })
                };
            Z.defaultProps = {
                required: !0
            };
            const g = Z
        },
        999997: (e, t, a) => {
            a.d(t, {
                Z: () => Z
            });
            var n = a(184481),
                l = a(294184),
                i = a.n(l),
                o = a(445884),
                r = a(136591),
                s = a(47760),
                d = a(5212),
                c = a(951787),
                u = a(755440),
                _ = a(797664),
                m = a(585347),
                p = (a(880495), a(845126)),
                f = a(78776),
                b = a(653591),
                h = a(990626),
                v = a(785893);
            const y = e => {
                    var t;
                    let {
                        autoComplete: a,
                        dataFetcher: l,
                        defaultValue: i,
                        disabled: s,
                        errorMessage: d,
                        fieldApi: u,
                        isCity: _,
                        isPatient: m,
                        fieldName: y,
                        required: Z,
                        setError: g,
                        source: N,
                        className: x,
                        onChange: C,
                        onSelect: j,
                        patient: E,
                        account: k
                    } = e;
                    const S = (0, r.Z)(),
                        [{
                            inputValue: O,
                            selectedValue: V,
                            shouldValidate: F
                        }, w] = (0, n.useState)({
                            inputValue: null === i || void 0 === i ? void 0 : i.label,
                            selectedValue: null === i || void 0 === i ? void 0 : i.label,
                            shouldValidate: !1
                        }),
                        A = "appointment_modal" === N || "doctor_referral" === N ? !u.error : F ? !!O && O === V : void 0,
                        R = e => {
                            u.setError(e), g(e)
                        };
                    (0, n.useEffect)((() => (void 0 !== A && R(A ? "" : d), () => {
                        R("")
                    })), [A]);
                    const T = e => {
                            u.setTouched(), e && R(d), C(e), e || u.setValue(""), w((t => ({ ...t,
                                inputValue: e,
                                selectedValue: void 0,
                                shouldValidate: m || !!e
                            })))
                        },
                        q = e => {
                            j(e), w({
                                inputValue: e.label,
                                selectedValue: e.label,
                                shouldValidate: !0
                            })
                        },
                        I = (0, v.jsx)(p.Z, {
                            name: _ ? "location-dot" : "earth-europe"
                        }),
                        $ = h.ZP.PATIENT_FILE_INS_INTEGRATION_V0_ENABLED && (null === k || void 0 === k ? void 0 : k.insi_teleservice_enabled),
                        [L, P] = (0, n.useState)(null === E || void 0 === E ? void 0 : E.place_of_birth_insee_code),
                        U = $ && (0, v.jsx)(b.Z, {
                            placement: "top",
                            className: "dl-pointer-events-all",
                            tooltip: `${o.Z.t("api.accounts.index.root.modals.patient.body.profile.insee_code")}: ${L}`,
                            children: I
                        }),
                        B = $ ? e => P(null) || T(e) : T,
                        D = $ ? e => P(null === e || void 0 === e ? void 0 : e.inseeCode) || q(e) : q,
                        G = L && $ ? U : I;
                    return (0, v.jsx)(c.Z, {
                        value: (null === (t = u.value) || void 0 === t ? void 0 : t.label) || (null === i || void 0 === i ? void 0 : i.label),
                        dataFetcher: l,
                        valueSelector: e => {
                            let {
                                label: t
                            } = e;
                            return t
                        },
                        minAutocomplete: _ ? 2 : 1,
                        onSelect: D,
                        onChange: B,
                        stopOnEmptyResults: !!_,
                        className: "dl-flex-grow",
                        "data-design-system": "base",
                        children: (0, v.jsx)(f.Z, {
                            type: "string",
                            autoComplete: a || "none",
                            disabled: s,
                            name: y,
                            field: y,
                            icon: G,
                            onBlur: () => {
                                u.setTouched(), setTimeout((() => S.current && w((e => ({ ...e,
                                    shouldValidate: m || !!O
                                })))), 200)
                            },
                            placeholder: _ ? o.Z.t("common.place_of_birth.city_of_birth") : o.Z.t("common.place_of_birth.country_of_birth"),
                            pristine: !u.touched,
                            required: Z,
                            valid: A,
                            className: x
                        })
                    })
                },
                Z = e => {
                    let {
                        autoComplete: t,
                        defaultValue: a,
                        disabled: l,
                        kind: o,
                        fieldName: r,
                        required: c,
                        type: p,
                        setError: f,
                        source: b,
                        onChange: h,
                        onSelect: Z,
                        patient: g,
                        account: N
                    } = e;
                    const [x, C] = (0, n.useState)([]), j = "city" === p, E = "patient" === o, k = "appointment_modal" === b && (0, d.rl)(), S = j ? e => (0, m.gT)({
                        kind: o,
                        query: e
                    }) : e => (0, m._s)({
                        kind: o,
                        query: e,
                        options: x,
                        setOptions: C
                    });
                    return (0, v.jsx)(s.gN, {
                        field: r,
                        fixMeLater: l,
                        children: e => (0, v.jsx)(u.Z, {
                            className: "dl-margin-y-0",
                            children: (0, v.jsx)(_.Z, {
                                className: i()("dl-input-container dc-form-group dc-form-row-group", {
                                    "city-of-birth-form-row": j,
                                    "dl-border-none": !k,
                                    "dl-border-t-grey block": k
                                }),
                                children: (0, v.jsx)(y, {
                                    autoComplete: t,
                                    dataFetcher: S,
                                    defaultValue: a,
                                    disabled: l,
                                    errorMessage: (0, m.N3)({
                                        isPatient: E,
                                        isCity: j
                                    }),
                                    fieldApi: e,
                                    isCity: j,
                                    isPatient: E,
                                    fieldName: r,
                                    required: c,
                                    setError: f,
                                    source: b,
                                    onChange: h,
                                    onSelect: Z,
                                    patient: g,
                                    account: N
                                })
                            })
                        })
                    })
                }
        },
        892397: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var n = a(838273),
                l = a(585347),
                i = (a(880495), a(445884)),
                o = a(990626),
                r = a(785893);
            const s = e => {
                let {
                    disabled: t,
                    onChange: a,
                    prefix: s,
                    value: d,
                    account: c
                } = e;
                const u = o.ZP.PATIENT_FILE_INS_INTEGRATION_V0_ENABLED && (null === c || void 0 === c ? void 0 : c.insi_teleservice_enabled) && d === l.Cy.UNKNOWN ? {
                    leftIcon: "earth-europe",
                    leftIconTooltip: `${i.Z.t("api.accounts.index.root.modals.patient.body.profile.insee_code")}: 99999`
                } : {};
                return (0, r.jsx)(n.Z, {
                    value: d,
                    field: `${s}place_of_birth_type`,
                    options: l.JY,
                    placeHolder: l.Cy.FRANCE,
                    onChange: a,
                    disabled: t,
                    ...u,
                    "data-design-system": "base"
                })
            }
        },
        511299: (e, t, a) => {
            a.d(t, {
                Z: () => K
            });
            var n = a(184481),
                l = a(441609),
                i = a.n(l),
                o = a(957557),
                r = a.n(o),
                s = a(763105),
                d = a.n(s),
                c = a(445884),
                u = a(990626),
                _ = a(516590),
                m = a(462814),
                p = a(366699),
                f = a(755440),
                b = a(799610),
                h = a(545763),
                v = a(929014),
                y = a(169339),
                Z = a(383915),
                g = a(797664),
                N = a(838273),
                x = a(785893);
            const C = e => {
                let {
                    required: t,
                    mustDisable: a
                } = e;
                return (0, x.jsxs)(f.Z, {
                    label: c.Z.t("common.address"),
                    labelFor: "address ",
                    children: [(0, x.jsx)(g.Z, {
                        children: (0, x.jsx)(N.Z, {
                            scope: "common",
                            field: "address",
                            required: t,
                            disabled: a("address")
                        })
                    }), (0, x.jsxs)(g.Z, {
                        children: [(0, x.jsx)(N.Z, {
                            scope: "common",
                            field: "zipcode",
                            type: "zipcode",
                            required: t,
                            disabled: a("zipcode")
                        }), (0, x.jsx)(N.Z, {
                            scope: "common",
                            field: "city",
                            required: t,
                            disabled: a("city")
                        })]
                    })]
                })
            };
            var j = a(152817),
                E = a(887256),
                k = a(800274),
                S = a(923663),
                O = a(761054),
                V = a(539453),
                F = a(710270),
                w = a(580163),
                A = a(5212),
                R = a(414293),
                T = a.n(R),
                q = a(522917),
                I = a(584619),
                $ = a(201477),
                L = a(977629),
                P = a(451421),
                U = a(263448);
            const B = e => {
                    let {
                        disabled: t
                    } = e;
                    return (0, x.jsx)(f.Z, {
                        label: c.Z.t("common.gender"),
                        labelFor: "gender",
                        children: (0, x.jsx)("div", {
                            style: {
                                marginLeft: -14
                            },
                            children: (0, x.jsx)(N.Z, {
                                field: "gender",
                                name: "gender",
                                options: [{
                                    label: c.Z.t("common.long_title.f"),
                                    value: !0
                                }, {
                                    label: c.Z.t("common.long_title.m"),
                                    value: !1
                                }],
                                type: "radio-group",
                                disabled: t,
                                required: !0
                            })
                        })
                    })
                },
                D = e => {
                    let {
                        mustDisableField: t
                    } = e;
                    return (0, u.LA)("ins") && (0, u.cr)("ins_for_master_patients") ? (0, x.jsx)(U.T, {
                        disabled: t("biological_sex"),
                        label: c.Z.t("common.biological_sex"),
                        required: !0
                    }) : (0, u.JT)("legal_gender") || !(0, u.LA)("legal_gender") ? (0, x.jsx)(B, {
                        disabled: t("gender")
                    }) : null
                },
                G = (e, t, a, n) => {
                    if ("main" === e.kind) return !1;
                    const l = a && (0, S.th)(t),
                        i = (o = t.phone_number, r = t.email, !((0, q.OQ)((0, A.rZ)(), o) && (0, I.Z)(r)));
                    var o, r;
                    const s = ((e, t, a) => !a && ((0, S.un)(e.phone_number) === (0, S.un)(t.phone_number) || e.email === t.email))(t, n),
                        d = ((e, t) => (0, S.th)(t) !== (0, S.th)(e))(t, e),
                        c = !e.consented_at;
                    return l && (c || d) && (i || s)
                },
                z = e => {
                    if ((t = e) === Object(t) && !Array.isArray(t)) {
                        const [t] = Object.entries(e);
                        return `${t[0]}: ${Array.isArray(t[1])?t[1][0]:t[1]}`
                    }
                    var t;
                    return c.Z.t("common.error")
                },
                K = e => {
                    let {
                        relative: t = {},
                        title: a,
                        onSaved: l,
                        onHide: o,
                        onFailure: s,
                        show: g,
                        isBookingFunnel: N = !1,
                        appointmentId: R
                    } = e;
                    const q = Boolean(t.id),
                        I = (0, w.ZP)(),
                        U = (0, k.ZP)(),
                        B = (0, V.t0)(t),
                        K = a || ((e, t) => e ? t ? c.Z.t("patient_mobile.root.account.relatives.edit_myself") : c.Z.t("patient_mobile.root.account.relatives.create_myself") : t ? c.Z.t("patient_mobile.root.account.relatives.edit") : c.Z.t("patient_mobile.root.account.relatives.create"))(B, !!t.id),
                        [Y, W] = (0, n.useState)(!1),
                        H = () => {
                            W(!1), o()
                        },
                        {
                            loading: M,
                            error: Q,
                            data: J,
                            save: X
                        } = (0, F.Z)({
                            url: q ? `/account/master_patients/${t.id}.json` : "/account/master_patients.json",
                            method: q ? "put" : "post",
                            trigger: "save",
                            onFailure: e => {
                                T()(s) || (T()(e.data) && (e.data = {}), s(e))
                            },
                            onSuccess: e => {
                                let {
                                    data: t,
                                    input: a
                                } = e;
                                const n = B ? c.Z.t("patient_mobile.root.account.edit.profile.success") : q ? c.Z.t("patient_mobile.root.account.relatives.success_update") : c.Z.t("patient_mobile.root.account.relatives.success_create");
                                setTimeout((() => I({
                                    message: n,
                                    uiStyle: "success"
                                })), 300), l({
                                    data: t
                                }), H(), q || "1" !== (null === a || void 0 === a ? void 0 : a.consented) || (0, _.ZP)({
                                    name: "bypass_mandatory_relative_contact_info_create",
                                    details: {
                                        master_patient_id: t.id,
                                        appointment_id: (0, P.id)(R) || void 0
                                    }
                                }, {
                                    schema: "patient"
                                }), q || (0, _.ZP)({
                                    name: "create_relative",
                                    details: {
                                        master_patient_id: t.id,
                                        account_master_patient_id: t.account_master_patient_id,
                                        source: "relatives_page"
                                    }
                                }, {
                                    schema: "patient"
                                }), !q && (0, S.th)(a.birthdate) && (0, _.ZP)({
                                    name: "mandatory_relative_contact_info_create_displayed",
                                    details: {
                                        master_patient_id: t.id,
                                        appointment_id: (0, P.id)(R) || void 0
                                    }
                                }, {
                                    schema: "patient"
                                })
                            }
                        }),
                        ee = e => e.birthdate && !(0, S.th)(e);
                    let te = () => !1;
                    "limited" === t.kind && (te = e => Boolean(t[e])), t.booker_relative && (te = () => !0);
                    const ae = e => !B && (e.values.birthdate && (0, S.th)(e.values)),
                        ne = e => !!i()(d()(r()(e.values, ["place_of_birth_type"]), (e => null !== e && "" !== e))) || (!(!G(t, e.values, N, U) || !Y || e.values.consented) || (!(!ee(e.values) || e.values.consented) || (Boolean(e.errors) || M || t.booker_relative))),
                        le = t.booker_relative,
                        ie = !le && "limited" === t.kind,
                        oe = !le && !ie,
                        re = e => () => {
                            N && (e => !e.values.consented_at)(e) && (0, S.th)(t) !== (0, S.th)(e.values) ? e.setValue("consented", null) : e.setValue("consented", t.consented_at ? "1" : void 0)
                        },
                        se = e => {
                            let {
                                field: t,
                                formApi: a
                            } = e;
                            return e => {
                                if ((0, O._)(e)) a.setError(t, c.Z.t("appointments.appointment_details.invalid_char_in_name_field"));
                                else if (a.setError(t, null), ["first_name", "maiden_name"].includes(t)) {
                                    const n = a.getValue("maiden_name" === t ? "first_name" : "maiden_name");
                                    e && n && e.toLowerCase() === n.toLowerCase() && a.setError(t, c.Z.t("appointments.appointment_details.identical_first_and_maiden_name"))
                                }
                            }
                        };
                    return (0, x.jsx)(y.Z, {
                        onHide: H,
                        show: g,
                        title: K,
                        size: (0, A.rl)() ? "fullscreen" : "medium",
                        children: (0, x.jsx)(Z.Z, {
                            alignText: "left",
                            children: (0, x.jsx)(m.Z, {
                                defaultValues: t,
                                horizontal: !1,
                                onSubmit: e => {
                                    const a = G(t, e, N, U);
                                    if (a && !Y) return void W(!0);
                                    if (a && Y && !e.consented) return;
                                    if (ee(e) && !e.consented) return;
                                    const n = (0, S.th)(e) ? e : r()(e, ["email", "phone_number"]);
                                    X(n)
                                },
                                children: e => (0, x.jsxs)(x.Fragment, {
                                    children: [oe && (0, x.jsx)(v.Z, {
                                        variant: "deprecated-alert-interface",
                                        uiStyle: "info",
                                        children: c.Z.t("patient_common.root.unified_account.identity_section.common.modal.textbox_html")
                                    }), ie && (0, x.jsx)(v.Z, {
                                        variant: "deprecated-alert-interface",
                                        uiStyle: "info",
                                        children: c.Z.t("patient_mobile.root.account.relatives.info.relative_is_limited")
                                    }), le && (0, x.jsx)(v.Z, {
                                        variant: "deprecated-alert-interface",
                                        uiStyle: "info",
                                        children: c.Z.t("patient_mobile.root.account.relatives.info.relative_is_booker")
                                    }), (0, x.jsx)(D, {
                                        mustDisableField: te
                                    }), (0, u.LA)("legal_gender") && (0, u.cr)("legal_gender") && (0, x.jsx)(L.Z, {
                                        label: c.Z.t("patient_mobile.root.account.relatives.gender")
                                    }), (0, x.jsx)(p.Z, {
                                        field: "first_name",
                                        disabled: te("first_name"),
                                        required: !0,
                                        onChange: se({
                                            field: "first_name",
                                            formApi: e
                                        })
                                    }), (0, x.jsx)(p.Z, {
                                        field: "last_name",
                                        onChange: se({
                                            field: "last_name",
                                            formApi: e
                                        }),
                                        disabled: te("last_name"),
                                        required: !0
                                    }), (0, u.LA)("maiden_name") && (0, x.jsx)(p.Z, {
                                        field: "maiden_name",
                                        label: c.Z.t("patient_mobile.root.account.relatives.maiden_name"),
                                        onChange: se({
                                            field: "maiden_name",
                                            formApi: e
                                        }),
                                        disabled: te("maiden_name"),
                                        required: (0, u.LA)("ins") && (0, u.cr)("ins_for_master_patients")
                                    }), (0, x.jsx)(p.Z, {
                                        field: "birthdate",
                                        name: "birthdate",
                                        placeholder: c.Z.t("common.date_placeholder"),
                                        disabled: te("birthdate"),
                                        required: !0,
                                        hideInputDetails: !0,
                                        onChange: re(e)
                                    }), (0, u.LA)("place_of_birth") && (0, x.jsx)(b.Z, {
                                        disabled: te("country_of_birth_id") || te("city_of_birth_id") || te("place_of_birth_unknown"),
                                        kind: "patient",
                                        patient: t,
                                        showShorterLabel: !0
                                    }), ae(e) ? (0, x.jsxs)(x.Fragment, {
                                        children: [(0, x.jsx)(p.Z, {
                                            field: "email",
                                            disabled: te("email"),
                                            validate: e => B || t.email === e || e !== U.email ? null : c.Z.t("appointments.appointment_details.relative.same_email")
                                        }), (0, x.jsx)(p.Z, {
                                            field: "phone_number",
                                            disabled: te("phone_number"),
                                            validate: e => {
                                                const a = (0, S.un)(e) !== (0, S.un)(t.phone_number),
                                                    n = (0, S.un)(e) === (0, S.un)(U.phone_number);
                                                return !B && a && n ? c.Z.t("appointments.appointment_details.relative.same_phone_number") : null
                                            }
                                        })]
                                    }) : null, (0, x.jsx)(C, {
                                        mustDisable: te
                                    }), (0, u.LA)("insurance_sector") ? (0, x.jsx)(p.Z, {
                                        field: "insurance_sector",
                                        label: c.Z.t("patient_mobile.root.account.edit.profile.insurance_sector.label"),
                                        placeholder: c.Z.t("patient_mobile.root.account.edit.profile.insurance_sector.label"),
                                        options: j.By
                                    }) : null, ee(e.values) && (0, x.jsx)("div", {
                                        className: "dl-margin-y-16",
                                        children: (0, x.jsx)(E.q, {
                                            label: c.Z.t("appointments.appointment_details.relative.minor_parent_consent"),
                                            onChange: t => {
                                                e.setValue("consented", t ? "1" : null)
                                            }
                                        })
                                    }), Y && G(t, e.values, N, U) && (0, x.jsx)(f.Z, {
                                        className: "dl-margin-t-16 dl-margin-b-16",
                                        children: (0, x.jsx)($.Z, {
                                            label: c.Z.t("appointments.appointment_details.relative.mandatory_relative_contact_info.bypass_for_relative"),
                                            onChange: t => {
                                                e.setValue("consented", t.target.checked ? "1" : null)
                                            }
                                        })
                                    }), Q && J && (0, x.jsx)(v.Z, {
                                        variant: "deprecated-alert-interface",
                                        uiStyle: "error",
                                        children: z(J)
                                    }), (0, x.jsx)(h.Z, {
                                        type: "submit",
                                        block: !0,
                                        disabled: ne(e),
                                        children: c.Z.t(q ? "save" : "add", {
                                            scope: "common.actions"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                }
        },
        887256: (e, t, a) => {
            a.d(t, {
                q: () => o
            });
            var n = a(929014),
                l = a(838273),
                i = a(785893);
            const o = e => {
                let {
                    label: t,
                    name: a = "consented",
                    ...o
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l.Z, {
                        required: !0,
                        ...o,
                        label: ` ${t}`,
                        type: "checkbox",
                        rowClassName: "no-border-no-bg",
                        field: a,
                        name: a,
                        onChange: e => {
                            o.onChange && o.onChange(e)
                        }
                    }), o.error && (0, i.jsx)(n.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "error",
                        children: o.error
                    })]
                })
            }
        },
        539453: (e, t, a) => {
            a.d(t, {
                R2: () => n,
                Vs: () => l,
                t0: () => i
            });
            const n = "main",
                l = {
                    ACCOUNT_OWNER_SELECTION: "account_owner_selection",
                    APPOINTMENT_BOOKING: "appointment_booking",
                    APPOINTMENT_REQUEST_BOOKING: "appointment_request_booking",
                    PATIENT_REQUEST_BOOKING: "patient_request_booking"
                },
                i = e => (null === e || void 0 === e ? void 0 : e.kind) === n
        },
        761054: (e, t, a) => {
            a.d(t, {
                _: () => l
            });
            const n = RegExp(/[0-9./]/),
                l = e => n.test(e)
        },
        585347: (e, t, a) => {
            a.d(t, {
                Cy: () => o,
                JY: () => s,
                N3: () => c,
                _s: () => p,
                gT: () => m
            });
            var n = a(445884),
                l = a(600625),
                i = a(437124);
            const o = {
                    FRANCE: "france",
                    FOREIGN_COUNTRY: "foreign_country",
                    UNKNOWN: "unknown"
                },
                r = {
                    FRANCE: n.Z.t("common.place_of_birth.born_in_france"),
                    FOREIGN_COUNTRY: n.Z.t("common.place_of_birth.born_in_foreign_country"),
                    UNKNOWN: n.Z.t("common.place_of_birth.unknown")
                },
                s = [{
                    value: o.FRANCE,
                    label: r.FRANCE
                }, {
                    value: o.FOREIGN_COUNTRY,
                    label: r.FOREIGN_COUNTRY
                }, {
                    value: o.UNKNOWN,
                    label: r.UNKNOWN
                }],
                d = {
                    city: {
                        patient: n.Z.t("common.place_of_birth.city_field_mandatory_error"),
                        doctor: n.Z.t("common.place_of_birth.city_field_error")
                    },
                    country: {
                        patient: n.Z.t("common.place_of_birth.country_field_mandatory_error"),
                        doctor: n.Z.t("common.place_of_birth.country_field_error")
                    }
                },
                c = e => {
                    let {
                        isPatient: t,
                        isCity: a
                    } = e;
                    return d[a ? "city" : "country"][t ? "patient" : "doctor"]
                },
                u = e => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
                _ = e => {
                    let {
                        kind: t,
                        type: a
                    } = e;
                    return {
                        city: {
                            patient: "/patient_app/cities",
                            doctor: "/doctor_app/cities"
                        },
                        country: {
                            patient: "/patient_app/world_countries",
                            doctor: "/doctor_app/world_countries"
                        }
                    }[a][t]
                },
                m = async e => {
                    let {
                        kind: t,
                        query: a
                    } = e;
                    const n = "patient" === t ? i.ZP : l.ZP,
                        {
                            bodyData: o
                        } = await n.get(_({
                            kind: t,
                            type: "city"
                        }), {
                            query: {
                                query: a
                            }
                        });
                    return o.map((e => ({
                        value: e.id,
                        label: e.name,
                        inseeCode: e.insee_code
                    })))
                },
                p = async e => {
                    let {
                        kind: t,
                        query: a,
                        options: n,
                        setOptions: o
                    } = e;
                    const r = "patient" === t ? i.ZP : l.ZP;
                    if (0 === n.length) {
                        const {
                            bodyData: e
                        } = await r.get(_({
                            kind: t,
                            type: "country"
                        }), {
                            query: {
                                query: a
                            }
                        }), n = e.map((e => ({
                            value: e.id,
                            label: e.name,
                            inseeCode: e.insee_code
                        })));
                        return o(n), n.filter((e => -1 !== u(e.label).indexOf(u(a))))
                    }
                    return n.filter((e => -1 !== u(e.label).indexOf(u(a))))
                }
        },
        880495: () => {}
    }
]);
//# sourceMappingURL=../11299-c7038c616467fa03bf57.js.map