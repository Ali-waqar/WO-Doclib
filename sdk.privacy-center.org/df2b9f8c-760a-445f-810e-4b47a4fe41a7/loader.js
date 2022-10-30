! function() {
    try {
        window.didomiRemoteConfig = {
            "notices": [{
                "notice_id": "ezmdbFJC",
                "default": false,
                "platform": "web",
                "targets": ["www-staging.doctolib.de", "www.doctolib.de", "www-dev.doctolib.de", "www-test.doctolib.de", "partners-staging.doctolib.de", "partners-dev.doctolib.de", "partners.doctolib.de"],
                "config": {
                    "app": {
                        "name": "Doctolib",
                        "vendors": {
                            "iab": {
                                "all": false,
                                "stacks": {
                                    "ids": null,
                                    "auto": true
                                },
                                "enabled": true,
                                "exclude": [],
                                "include": [],
                                "version": 1,
                                "restrictions": []
                            },
                            "custom": [{
                                "id": "cloudflare-mYYFMYNT",
                                "name": "Cloudflare",
                                "policyUrl": "https://www.cloudflare.com/privacypolicy/",
                                "purposeIds": ["sicherheit-y8RZhbiJ"],
                                "legIntPurposeIds": [],
                                "usesNonCookieAccess": false
                            }, {
                                "id": "didomi-fYPBYxWa",
                                "name": "Didomi",
                                "policyUrl": "https://privacy.didomi.io/en/policy",
                                "purposeIds": ["einwilligu-J69bp8MF"],
                                "legIntPurposeIds": [],
                                "usesNonCookieAccess": false
                            }, {
                                "id": "doctolibn-Wp87CpXA",
                                "name": "Doctolib - Erforderlich",
                                "policyUrl": "https://doctolib.legal/privacy-policy-B2C-DE",
                                "purposeIds": ["terminbuch-DeziM8xm", "nutzerauth-Rb3VVwk2"],
                                "legIntPurposeIds": [],
                                "usesNonCookieAccess": false
                            }, {
                                "id": "doctoliba-tgtb3W8P",
                                "name": "Doctolib - Analytik",
                                "policyUrl": "https://doctolib.legal/privacy-policy-B2C-DE",
                                "purposeIds": ["analytik-N2ZH9BqQ"],
                                "legIntPurposeIds": [],
                                "usesNonCookieAccess": false
                            }],
                            "google": {
                                "fullATP": false
                            }
                        },
                        "privacyPolicyURL": "https://doctolib.legal/privacy-policy-B2C-DE",
                        "essentialPurposes": ["sicherheit-y8RZhbiJ", "einwilligu-J69bp8MF", "nutzerauth-Rb3VVwk2", "terminbuch-DeziM8xm"],
                        "gdprAppliesGlobally": true,
                        "gdprAppliesWhenUnknown": false,
                        "apiKey": "df2b9f8c-760a-445f-810e-4b47a4fe41a7",
                        "customPurposes": [{
                            "id": "sicherheit-y8RZhbiJ",
                            "name": {
                                "de": "Sicherheit gewährleisten, Performance sicherstellen"
                            },
                            "description": {
                                "de": "Um unsere Website zu schützen, werden Cookies auf den Geräten der Endnutzer platziert, die auf unsere Webseiten zugreifen, um verdächtige Aktivitäten zu erkennen und Angriffe zu verhindern.</br></br>\n\n<b>cf_bm</b></br>\nGesetzt von: Cloudflare</br>\nBeschreibung: Bot-Protection, Schutz vor DDos Attacken</br>\nDauer: 30 minutes</br></br>\n\n<b> _cfduid </b></br>\nGesetzt von: Cloudflare</br>\nBeschreibung: dentifiziert Ihren Browser-Klienten und wendet die Sicherheitseinstellungen an, die zur Verhinderung von Computerangriffen - einschließlich Denial-of-Service-Angriffen - erforderlich sind (DDOS)</br>\nDauer: 13 Monate</br></br>\n\n<b>_cf_clearance</b></br>\nGesetzt von: Cloudflare</br>\nBeschreibung: Authentifizierung des Nutzers des Dienstes / Gewährleistung der Sicherheit des Authentifizierungsmechanismus</br>\nDauer: 30 Minuten</br></br>"
                            }
                        }, {
                            "id": "einwilligu-J69bp8MF",
                            "name": {
                                "de": "Einwilligungen speichern und verwalten"
                            },
                            "description": {
                                "de": "<b>didomi_token</b><br>\nGesetzt von: Didomi<br>\nBeschreibung: Consent management. Erforderlich, um die Zustimmung des Users zu Cookies zu speichern.<br>\nDauer: 6 Monate<br><br>\n\n<b>euconsent</b><br>\nGesetzt von: Didomi<br>\nBeschreibung: Consent management. Erforderlich, um die Zustimmung des Users zu Cookies zu speichern.<br>\nDauer: 1 Jahr"
                            }
                        }, {
                            "id": "terminbuch-DeziM8xm",
                            "name": {
                                "de": "Terminbuchungen durchführen"
                            },
                            "description": {
                                "de": "<b>temp_appointment_id</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Dieses Cookie ermöglicht es, eine Reservierung durch einen Benutzer während aller Phasen der Reservierung zu verfolgen.<br>\nDauer: Sitzungsdauer<br><br>\n\n<b>last_place</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Dieses Cookie ermöglicht die Speicherung Ihrer letzten Suche nach geographischem Sektor (auf kommunaler Ebene).<br>\nDauer: 1 Tag<br><br>\n\n<b>anonymous_appointment_id</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Dieses Cookie wird im Rahmen eines anonymen Pfades nach Verifizierung des Namens (Trigramms) hinterlegt.<br>\nDauer: 13 Monate<br><br>"
                            }
                        }, {
                            "id": "nutzerauth-Rb3VVwk2",
                            "name": {
                                "de": "Nutzerauthentifizierung und Sitzungsverwaltung"
                            },
                            "description": {
                                "de": "Ihnen zu ermöglichen, zwischen Seiten hin und her zu navigieren, ohne Ihre vorherigen Aktionen aus derselben Browsersession zu verlieren <br> <br>\n\n<b>utm_b2b </b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Dies ist ein Session-Cookie, das alle Elemente enthält, die in der URL des aktuellen Benutzers angezeigt werden.<br>\nDauer: 30 Minuten<br><br>\n\n<b>_doctolib_session</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Dies ist ein Session-Cookie. Ermöglicht es festzustellen, ob Sie ein eingeloggter Benutzer sind oder nicht, und Ihre Auswahl von einer Seite der Website zur anderen zu übertragen.<br>\nDauer: Siztungsdauer<br><br>\n\n<b>Auth_session</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Dieses Cookie ermittelt, ob der Benutzer authentifiziert ist.<br>\nDauer: Siztungsdauer<br><br>\n\n<b>JSESSIONID </b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Dieses Cookie identifiziert den Besucher,anhand einer eindeutigen Sitzungsnummer.<br>\nDauer: Siztungsdauer<br><br>\n\n<b>ssid</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Ermöglicht die eindeutige Identifizierung und Nachverfolgung des Nutzers während der gesamten Zeit auf der Website.<br>\nDauer: 13 Monate<br><br>\n\n<b>esid</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Ermöglicht die Identifizierung der Sitzung.<br>\nDauer: Sitzungsdauer<br><br>\n\n<b>_cntModalOpenings</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Dieses Cookie wird verwendet, um sich an die  Anzeige eines Pop-ups auf der Website zu erinnern, um eine konsistente Benutzererfahrung innerhalb derselben Sitzung zu gewährleisten.<br>\nDauer: 30 Minuten<br><br>"
                            }
                        }, {
                            "id": "analytik-N2ZH9BqQ",
                            "name": {
                                "de": "Analytik"
                            },
                            "description": {
                                "de": "<b>patient_awareness_page_seen_at</b><br>\nGesetzt von: Doctolib<br>\nBeschreibung: Cookie ermöglicht es uns zu wissen, wann der Besucher die Informationsseite zur Telekonsultation gesehen hat.<br>\nDauer: 2 Monate<br><br>"
                            }
                        }],
                        "deploymentId": "D29xUqhU",
                        "consentDuration": 15811200
                    },
                    "user": {
                        "bots": {
                            "consentRequired": false
                        }
                    },
                    "theme": {
                        "css": ":export{blue:#107ACA;blueDark:#024C9B;blueLight:#0596DE;lavender:#bebedf;lavenderDark:#9797bb;lavenderLight:#ebebff;grayLighter:#EEF2F7}.didomi-regular-notice{padding:16px!important;border:0!important}.didomi-notice-view-partners-link{display:none!important}.dl-didomi-notice-title{margin:0 0 16px!important;color:#0d2339!important}.didomi-button{padding:8px 16px!important;font-family:Roboto,arial,sans-serif!important;font-weight:700!important;font-size:14px!important;line-height:24px!important;text-transform:uppercase!important;height:auto!important}.didomi-button-highlight{background-color:#107aca!important;border-radius:4px!important;color:#fff!important}.didomi-button-highlight.didomi-disagree-button,.didomi-consent-popup-footer .didomi-button-standard{background-color:#107aca!important;color:#fff!important;border:1px solid #107aca!important;border-radius:4px!important}.didomi-button-standard{border:0!important;background:#107aca!important;color:#fff!important}.didomi-notice-text{color:#2b4660!important;font-family:Roboto,arial,sans-serif!important;font-size:12px!important;line-height:16px!important;margin:0!important}.didomi-border,.didomi-user-information-container{padding:0!important;border:none!important}@media (min-width:950px){.dl-notice-title{margin:0 0 8px!important}.didomi-regular-notice{margin:32px!important;border-radius:8px!important;box-shadow:0 0 16px rgba(34,67,88,.1)!important;padding:24px!important}}@media (min-width:1023px){.didomi-border:before{content:\"\";background-image:url(\"https://assets.doctolib.fr/webpack/15a717fa83fcca2c8098.svg\");min-width:64px;height:64px;margin-right:24px!important}.didomi-notice-text{margin-right:40px!important}}#didomi-consent-popup{font-size:14px!important;text-transform:none!important;color:#2b4660!important}#didomi-consent-popup *{-webkit-tap-highlight-color:transparent}#didomi-host :focus{outline:0!important}.didomi-popup-backdrop{background-color:rgba(0,0,0,.8)!important}.didomi-exterior-border{border:none!important}.didomi-popup-container{border:none!important;border-radius:8px!important}.didomi-consent-popup-body{padding:16px!important}.didomi-popup-header .didomi-popup-title{font-family:Montserrat,arial,sans-serif}.didomi-popup-close{align-self:flex-start}.didomi-consent-popup-body__title,.didomi-popup-title,.didomi-popup-title a,.didomi-user-information-trigger{font-size:14px!important;text-transform:none!important;color:#0d2339!important;font-family:Roboto,arial,sans-serif}.didomi-consent-popup-body__explanation a{font-weight:400!important;color:#2b4660!important}.didomi-consent-popup-body__title{margin-bottom:16px!important}.didomi-consent-popup-view-vendors-list .didomi-consent-popup-body__title,.didomi-popup-body-section{margin-bottom:0!important}.didomi-content{line-height:16px!important;font-size:12px!important;margin-top:0!important;transition-duration:.3s!important;text-align:left!important;color:#2b4660!important}.didomi-consent-popup-data-processing span{font-weight:400!important}.didomi-components-accordion-label-container .label-click{outline:transparent!important}.didomi-components-accordion .trigger-icon{color:#107aca!important;transform:scale(1.2);margin-right:8px;font-weight:700}.didomi-consent-popup-data-processing__essential_purpose_explanation{color:#2b4660!important}.didomi-consent-popup-data-processing__essential_purpose{font-weight:400!important;text-transform:none!important;color:#0d2339!important;justify-content:flex-end!important}.didomi-consent-popup-data-processing__essential_purpose:before{content:\"\";background:asset-url(\"icons/solid/checkmark.svg\");height:16px;width:16px;display:inline-block;vertical-align:middle;transform:scale(.7)}.didomi-components-radio__option{box-shadow:none!important;border-radius:4px!important;border:none!important}.didomi-components-radio__option:first-child{margin-right:8px!important}.didomi-components-radio__option.didomi-components-radio__option--agree{background-color:#17b355!important}.didomi-components-radio__option.didomi-components-radio__option--disagree{background-color:#e62638!important}.didomi-components-radio__option:not(.didomi-components-radio__option--agree):not(.didomi-components-radio__option--disagree){background:#eef2f6!important;color:#7791a2!important;font-weight:400!important}.didomi-consent-popup-preferences .didomi-consent-popup-data-processing{margin-bottom:16px!important}.didomi-consent-popup-view-vendors-list-link{font-size:14px!important;border:none!important;box-shadow:none!important;color:#107aca!important;font-weight:700;padding:0!important}.didomi-consent-popup-body__subtext{margin-bottom:0!important}.didomi-consent-popup-footer{justify-content:flex-end!important;background:#fff!important;width:100%!important}.didomi-consent-popup-footer a{display:none}.didomi-consent-popup-footer .didomi-buttons{padding:0 16px 16px!important}.didomi-learn-more-button{border-radius:4px!important;border:1px solid #107aca!important}.didomi-consent-popup-footer .didomi-button{margin-right:0!important}.didomi-consent-popup-information-save{display:none}.didomi-consent-popup-container-click-all{background:0 0!important;border:1px solid #cfd8dc!important;border-top-left-radius:4px;border-top-right-radius:4px}.didomi-consent-popup-body_vendors-list{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border:1px solid #cfd8dc!important;border-top:none!important}.didomi-consent-popup-vendor__name,.label-click{color:#0d2339!important}.didomi-vendors-disclaimer,.didomi-vendors-disclaimer a{font-size:12px!important;line-height:16px!important;font-weight:400!important;color:#2b4660!important}.didomi-vendors-details-title{font-weight:400!important}.didomi-vendors-details-purposes-consent ul{padding:0!important;margin-bottom:0!important}.didomi-vendors-details-purposes-consent ul li{margin:0!important;display:block!important;font-weight:700!important}.didomi-vendors-details-purposes-consent ul li span{border-bottom-style:solid!important}@media (min-width:950px){.didomi-consent-popup-data-processing{flex-direction:row;align-items:flex-start!important}.didomi-consent-popup-body{padding:16px 24px!important}.didomi-consent-popup-footer .didomi-buttons{padding:0 24px 24px 0!important}.didomi-content.active:not(.didomi-consent-popup-data-processing__essential_purpose_explanation){margin-top:16px!important}.didomi-consent-popup-body__subtext{margin-bottom:40px!important}.didomi-consent-popup-footer .didomi-button{margin-left:8px!important}}@media (max-width:950px){.didomi-exterior-border{margin-top:72px!important}.didomi-consent-popup-footer .didomi-buttons{width:100%;flex-direction:column!important}.didomi-consent-popup-footer .didomi-buttons button{margin-top:8px;margin-left:0;width:100%;border-radius:4px}.didomi-components-radio__option{height:40px!important}.didomi-consent-popup-view-vendors-list{flex-direction:column;align-items:flex-start!important;margin-top:24px}}@media (min-width:599px){#didomi-notice-disagree-button{margin-right:16px!important}}",
                        "font": "Roboto",
                        "color": "#0596DE",
                        "linkColor": "#0596DE"
                    },
                    "notice": {
                        "content": {
                            "notice": {
                                "de": "<h3 class=\"dl-didomi-notice-title\">Informationen zum Einsatz von Cookies auf unserer Webseite!</h3> \n\nWir verwenden <b>Cookies</b> um das ordnungsgemäße Funktionieren unserer Webseite zu gewährleisten (Erforderliche Cookies<). Die Rechtsgrundlage ist  Art. 6 Abs. 1 S. 1 lit. f DSGVO (berechtigte Interessen) in Verbindung mit § 25 Abs. 2 TTDSG. Erforderliche Cookies können nicht abgelehnt werden. </br></br>\n\nDarüber hinaus verwenden wir Cookies oder vergleichbare Technologien, die das Nutzerverhalten messen (Analytik), sofern Sie hierzu Ihre Einwilligung (Art. 6 Abs. S.1 lit. a DSGVO i.V.m. § 25 Abs. 1 TTDSG) erteilt haben. Ihre Einwilligung erteilen Sie wenn Sie auf den Button <b>Erlauben</b> klicken. Wenn Sie auf den Button <b>Ablehnen</b> klicken, werden nur Erforderliche Cookies eingesetzt.</br></br>\n\nSie können Ihre Einwilligung(en) widerrufen und individuelle Präferenzen festzulegen, in dem Sie auf <b>Einstellungen</b> klicken. Der Link wird unten auf jeder Seite der Website angezeigt.</br></br>\n\n<b>Auf Doctolib Webseiten werden grundsätzlich keine Werbe-Cookies eingesetzt</b> (Näheres finden Sie in unserer <a href=\"https://doctolib.legal/Cookie_Policy_B2C_DE\" target=\"_blank\">Cookie-Richtlinie</a>)."
                            },
                            "deny": {
                                "de": "Ablehnen"
                            },
                            "dismiss": {
                                "de": "Erlauben"
                            },
                            "learnMore": {
                                "de": "Einstellungen"
                            }
                        },
                        "position": "bottom",
                        "closeOnClick": false,
                        "closeOnScroll": false,
                        "showDataProcessing": false,
                        "closeOnScrollThreshold": 0,
                        "daysBeforeShowingAgain": 30,
                        "closeOnScrollThresholdType": "",
                        "closeOnClickNavigationDelay": 0,
                        "type": "optin",
                        "denyOptions": {
                            "button": "primary"
                        },
                        "denyAsPrimary": true,
                        "denyAppliesToLI": false,
                        "canCloseAndIgnore": true
                    },
                    "languages": {
                        "default": "de",
                        "enabled": ["de"]
                    },
                    "tagManager": {
                        "provider": "gtm",
                        "dataLayerName": "dataLayer"
                    },
                    "preferences": {
                        "content": {
                            "text": {
                                "de": "Auf dieser Seite können einzelne Cookies verwaltet werden. <br></br>\n\nWenn Sie eine Website besuchen, kann diese Informationen über Ihren Browser abrufen oder speichern. Dies geschieht meist in Form von Cookies. Hierbei kann es sich um Informationen über Sie, Ihre Einstellungen oder Ihr Gerät handeln. </br></br>\n\nErforderliche Cookies stellen das ordnungsgemäße Funktionieren der Website sicher und können deshalb nicht abgelehnt werden.</br></br>\n\nWenn Sie auf <b>Annehmen</b> klicken, willigen Sie in die Nutzung des jeweiligen nicht-erforderlichen Cookies ein, oder Sie klicken auf <b>Ablehnen</b> dann wird dieser Cookie nicht gesetzt. Ihre Einwilligung können Sie jederzeit <b>widerrufen</b>.</br></br>\n\nMit einem Klick auf <b>Partner anzeigen</b> erhalten sie weitere Informationen über Partner und Verarbeitungszwecke der eingesetzten Cookies. Lesen bitte auch unsere <a href=\"https://doctolib.legal/Cookie_Policy_B2C_DE\" target=\"_blank\">Cookie-Richtlinie</a>. <b>Bitte beachten Sie Doctolib setzt  grundsätzlich keine Werbe-Cookies ein.</b>"
                            },
                            "title": {
                                "de": "Datenschutz-Präferenz-Einstellungen"
                            },
                            "textVendors": {
                                "de": "Sie können für jeden aufgeführten Partner Ihre Zustimmungspräferenzen festlegen, wenn der eingesetzte Cookie des Partners nicht zu den Cookies  zwingend erforderlich ist um das ordnungsgemäße Funktionieren unserer Webseite zu ermöglichen. </br></br>\n\nKlicken Sie auf den Partnernamen, um mehr Informationen über <b>Zweck der Datenerhebung</b>, die <b>Kategorien der personenbezogenen Daten</b> oder <b>nicht personenbezogenen Daten</b> und die <b>Speicherdauer</b> zu erhalten.\n"
                            }
                        },
                        "categories": [{
                            "id": "bbHnWR",
                            "name": {
                                "de": "Erforderliche Cookies",
                                "en": "Necessary cookies"
                            },
                            "type": "category",
                            "children": [{
                                "type": "purpose",
                                "purposeId": "sicherheit-y8RZhbiJ"
                            }, {
                                "type": "purpose",
                                "purposeId": "einwilligu-J69bp8MF"
                            }, {
                                "type": "purpose",
                                "purposeId": "nutzerauth-Rb3VVwk2"
                            }, {
                                "type": "purpose",
                                "purposeId": "terminbuch-DeziM8xm"
                            }],
                            "expanded": false,
                            "description": {
                                "de": "Diese Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert",
                                "en": "These cookies are required for the website to work properly"
                            }
                        }, {
                            "id": "AaeHDF",
                            "name": {
                                "de": "Analytik",
                                "en": "Analytics"
                            },
                            "type": "category",
                            "children": [{
                                "type": "purpose",
                                "purposeId": "analytik-N2ZH9BqQ"
                            }],
                            "expanded": false,
                            "description": {
                                "de": "Diese Cookies werden verwendet, um das Publikum auf unserer Website zu messen",
                                "en": "Analytics cookies"
                            }
                        }],
                        "showWhenConsentIsMissing": false,
                        "denyAppliesToLI": true
                    },
                    "regulations": {},
                    "integrations": {
                        "vendors": {
                            "google": {
                                "enable": false,
                                "refresh": true,
                                "eprivacy": false,
                                "passTargetingVariables": false
                            },
                            "salesforce-dmp": {
                                "enable": false,
                                "namespace": null
                            },
                            "refreshOnConsent": false
                        }
                    }
                }
            }]
        }
    } catch (o) {
        console.error("Didomi - Invalid remote config")
    }
}();
! function() {
    try {
        window.didomiCountry = "PK", window.didomiGeoRegulations = []
    } catch (o) {
        console.error("Didomi - Invalid country")
    }
}();
! function(n) {
    var r = {};

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "https://sdk.privacy-center.org/", o(o.s = 0)
}([function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    n = n(2);
    window.Didomi || n(window)
}, function(e, t) {
    e.exports = function e(t) {
        var n, r, o = t.didomiOnLoad ? "54107da99f32815551f74076e6e6a61678ef4609" : "fcb689dfd630062744282cdb948dd8748d730f7f",
            i = t.document.getElementsByTagName("head");
        0 < i.length ? (n = t.document.createElement("script"), r = t.didomiConfig && t.didomiConfig.sdkPath ? t.didomiConfig.sdkPath : "https://sdk.privacy-center.org/", n.type = "text/javascript", n.async = !0, n.src = r + "sdk." + o + ".js", n.charset = "utf-8", i[0].appendChild(n)) : setTimeout(e.bind(this, t), 5)
    }
}]);