"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [21167], {
        821167: (t, e, r) => {
            r.d(e, {
                c: () => C
            });
            const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                o = "=".charCodeAt(0),
                n = new Uint8Array(256);
            for (let t = 0; t < i.length; t++) n[i.charCodeAt(t)] = t;

            function a(t) {
                const e = t.length;
                let r = "";
                for (let o = 0; o < e; o += 3) {
                    const e = t[o + 0],
                        n = t[o + 1],
                        a = t[o + 2];
                    r += i.charAt(e >>> 2), r += i.charAt((3 & e) << 4 | n >>> 4), r += i.charAt((15 & n) << 2 | a >>> 6), r += i.charAt(63 & a)
                }
                return e % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : e % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r
            }
            const A = '<circle cx="12" cy="12" r="8" stroke-width="3" stroke-dasharray="15 10" fill="none" stroke-linecap="round" transform="rotate(0 12 12)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9s" values="0 12 12;360 12 12"/></circle>',
                s = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>';

            function l(t, e, r, i, o, n, a = !1, A, s) {
                return `<div class="frc-container${s?" "+s:""}">\n<svg class="frc-icon"${r?' aria-hidden="true"':""} role="img" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24">${e}</svg>\n<div class="frc-content">\n    <span class="frc-text" ${A?`title="${A}"`:""}>${i}</span>\n    ${n?`<button type="button" class="frc-button">${n}</button>`:""}\n    ${a?'<progress class="frc-progress" value="0">0%</progress>':""}\n</div>\n</div><span class="frc-banner"><a lang="en" href="https://friendlycaptcha.com/" rel="noopener" target="_blank"><b>Friendly</b>Captcha \u21d7</a></span>\n<input name="${t}" class="frc-captcha-solution" type="hidden" value="${o}">`
            }

            function c(t, e, r, i = !0, o = !1) {
                return l(t, s, !0, `<b>${e.text_error}</b><br>${r}`, o ? ".HEADLESS_ERROR" : ".ERROR", i ? e.button_retry : void 0)
            }
            let u, g;
            "undefined" !== typeof navigator && (u = navigator, g = u.userAgent.toLowerCase());

            function h(t) {
                const e = t.split("."),
                    r = e[1],
                    i = function(t) {
                        const e = t.length;
                        let r = 3 * e >>> 2;
                        t.charCodeAt(e - 1) === o && r--, t.charCodeAt(e - 2) === o && r--;
                        const i = new Uint8Array(r);
                        for (let r = 0, o = 0; r < e; r += 4) {
                            const e = n[t.charCodeAt(r + 0)],
                                a = n[t.charCodeAt(r + 1)],
                                A = n[t.charCodeAt(r + 2)],
                                s = n[t.charCodeAt(r + 3)];
                            i[o++] = e << 2 | a >> 4, i[o++] = (15 & a) << 4 | A >> 2, i[o++] = (3 & A) << 6 | 63 & s
                        }
                        return i
                    }(r);
                return {
                    signature: e[0],
                    base64: r,
                    buffer: i,
                    n: i[14],
                    threshold: (a = i[15], a > 255 ? a = 255 : a < 0 && (a = 0), Math.pow(2, (255.999 - a) / 8) >>> 0),
                    expiry: 3e5 * i[13]
                };
                var a
            }
            async function p(t, e, r) {
                let i = 1e3;
                return fetch(t, e).catch((async o => {
                    if (0 === r) throw o;
                    return await new Promise((t => setTimeout(t, i))), i *= 4, p(t, e, r - 1)
                }))
            }
            const d = {
                    text_init: " Aktiverer...",
                    text_ready: "Jeg er ikke en robot",
                    button_start: "Klikk for \xe5 starte verifiseringen",
                    text_fetching: "Henter data",
                    text_solving: "Sjekker at du er et menneske...",
                    text_completed: "Jeg er et menneske",
                    text_completed_sr: "Automatisk spam-sjekk fullf\xf8rt",
                    text_expired: "Verifisering kunne ikke fullf\xf8res",
                    button_restart: "Omstart",
                    text_error: "Bekreftelsen mislyktes",
                    button_retry: "Pr\xf8v p\xe5 nytt",
                    text_fetch_error: "Tilkoblingen mislyktes"
                },
                _ = {
                    en: {
                        text_init: "Initializing..",
                        text_ready: "Anti-Robot Verification",
                        button_start: "Click to start verification",
                        text_fetching: "Fetching Challenge",
                        text_solving: "Verifying you are human..",
                        text_completed: "I am human",
                        text_completed_sr: "Automatic spam check completed",
                        text_expired: "Anti-Robot verification expired",
                        button_restart: "Restart",
                        text_error: "Verification failed",
                        button_retry: "Retry",
                        text_fetch_error: "Failed to connect to"
                    },
                    de: {
                        text_init: "Initialisierung..",
                        text_ready: "Anti-Roboter-Verifizierung",
                        button_start: "Hier klicken",
                        text_fetching: "Herausforderung laden..",
                        text_solving: "Verifizierung, dass Sie ein Mensch sind..",
                        text_completed: "Ich bin ein Mensch",
                        text_completed_sr: "Automatische Spampr\xfcfung abgeschlossen",
                        text_expired: "Verifizierung abgelaufen",
                        button_restart: "Erneut starten",
                        text_error: "Verifizierung fehlgeschlagen",
                        button_retry: "Erneut versuchen",
                        text_fetch_error: "Verbindungsproblem mit"
                    },
                    nl: {
                        text_init: "Initializeren..",
                        text_ready: "Anti-robotverificatie",
                        button_start: "Klik om te starten",
                        text_fetching: "Aan het laden..",
                        text_solving: "Anti-robotverificatie bezig..",
                        text_completed: "Ik ben een mens",
                        text_completed_sr: "Automatische anti-spamcheck voltooid",
                        text_expired: "Verificatie verlopen",
                        button_restart: "Opnieuw starten",
                        text_error: "Verificatie mislukt",
                        button_retry: "Opnieuw proberen",
                        text_fetch_error: "Verbinding mislukt met"
                    },
                    fr: {
                        text_init: "Chargement..",
                        text_ready: "Verification Anti-Robot",
                        button_start: "Cliquez ici pour v\xe9rifier",
                        text_fetching: "Chargement du challenge",
                        text_solving: "V\xe9rification que vous \xeates humain..",
                        text_completed: "Je suis humain",
                        text_completed_sr: "V\xe9rification automatique des spams termin\xe9e",
                        text_expired: "Verification \xe9chue",
                        button_restart: "Recommencer",
                        text_error: "Echec de verification",
                        button_retry: "Recommencer",
                        text_fetch_error: "Probl\xe8me de connexion avec"
                    },
                    it: {
                        text_init: "Inizializzazione...",
                        text_ready: "Verifica Anti-Robot",
                        button_start: "Clicca per iniziare",
                        text_fetching: "Caricamento...",
                        text_solving: "Verificando che sei umano...",
                        text_completed: "Non sono un robot",
                        text_completed_sr: "Controllo automatico dello spam completato",
                        text_expired: "Verifica Anti-Robot scaduta",
                        button_restart: "Ricomincia",
                        text_error: "Verifica fallita",
                        button_retry: "Riprova",
                        text_fetch_error: "Problema di connessione con"
                    },
                    pt: {
                        text_init: "Inicializando..",
                        text_ready: "Verifica\xe7\xe3o Anti-Rob\xf4",
                        button_start: "Clique para iniciar verifica\xe7\xe3o",
                        text_fetching: "Carregando..",
                        text_solving: "Verificando se voc\xea \xe9 humano..",
                        text_completed: "Eu sou humano",
                        text_completed_sr: "Verifica\xe7\xe3o autom\xe1tica de spam conclu\xedda",
                        text_expired: "Verifica\xe7\xe3o Anti-Rob\xf4 expirada",
                        button_restart: "Reiniciar",
                        text_error: "Verifica\xe7\xe3o falhou",
                        button_retry: "Tentar novamente",
                        text_fetch_error: "Falha de conex\xe3o com"
                    },
                    es: {
                        text_init: "Inicializando..",
                        text_ready: "Verificaci\xf3n Anti-Robot",
                        button_start: "Haga clic para iniciar la verificaci\xf3n",
                        text_fetching: "Cargando desaf\xedo",
                        text_solving: "Verificando que eres humano..",
                        text_completed: "Soy humano",
                        text_completed_sr: "Verificaci\xf3n autom\xe1tica de spam completada",
                        text_expired: "Verificaci\xf3n Anti-Robot expirada",
                        button_restart: "Reiniciar",
                        text_error: "Ha fallado la verificaci\xf3n",
                        button_retry: "Intentar de nuevo",
                        text_fetch_error: "Error al conectarse a"
                    },
                    ca: {
                        text_init: "Inicialitzant...",
                        text_ready: "Verificaci\xf3 Anti-Robot",
                        button_start: "Fes clic per comen\xe7ar la verificaci\xf3",
                        text_fetching: "Carregant repte",
                        text_solving: "Verificant que ets hum\xe0..",
                        text_completed: "Soc hum\xe0",
                        text_completed_sr: "Verificaci\xf3 autom\xe0tica de correu brossa completada",
                        text_expired: "La verificaci\xf3 Anti-Robot ha expirat",
                        button_restart: "Reiniciar",
                        text_error: "Ha fallat la verificaci\xf3",
                        button_retry: "Tornar a provar",
                        text_fetch_error: "Error connectant a"
                    },
                    ja: {
                        text_init: "\u958b\u59cb\u3057\u3066\u3044\u307e\u3059...",
                        text_ready: "\u30a2\u30f3\u30c1\u30ed\u30dc\u30c3\u30c8\u8a8d\u8a3c",
                        button_start: "\u30af\u30ea\u30c3\u30af\u3057\u3066\u8a8d\u8a3c\u3092\u958b\u59cb",
                        text_fetching: "\u30ed\u30fc\u30c9\u3057\u3066\u3044\u307e\u3059",
                        text_solving: "\u8a8d\u8a3c\u4e2d...",
                        text_completed: "\u79c1\u306f\u30ed\u30dc\u30c3\u30c8\u3067\u306f\u3042\u308a\u307e\u305b\u3093",
                        text_completed_sr: "\u81ea\u52d5\u30b9\u30d1\u30e0\u30c1\u30a7\u30c3\u30af\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f",
                        text_expired: "\u8a8d\u8a3c\u306e\u671f\u9650\u304c\u5207\u308c\u3066\u3044\u307e\u3059",
                        button_restart: "\u518d\u5ea6\u8a8d\u8a3c\u3092\u884c\u3046",
                        text_error: "\u8a8d\u8a3c\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f",
                        button_retry: "\u518d\u5ea6\u8a8d\u8a3c\u3092\u884c\u3046",
                        text_fetch_error: "\u63a5\u7d9a\u304c\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f"
                    },
                    da: {
                        text_init: "Aktiverer...",
                        text_ready: "Jeg er ikke en robot",
                        button_start: "Klik for at starte verifikationen",
                        text_fetching: "Henter data",
                        text_solving: "Kontrollerer at du er et menneske...",
                        text_completed: "Jeg er et menneske.",
                        text_completed_sr: "Automatisk spamkontrol gennemf\xf8rt",
                        text_expired: "Verifikationen kunne ikke fuldf\xf8res",
                        button_restart: "Genstart",
                        text_error: "Bekr\xe6ftelse mislykkedes",
                        button_retry: "Pr\xf8v igen",
                        text_fetch_error: "Forbindelsen mislykkedes"
                    },
                    ru: {
                        text_init: "\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f..",
                        text_ready: "\u0410\u043d\u0442\u0438\u0420\u043e\u0431\u043e\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                        button_start: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443",
                        text_fetching: "\u041f\u043e\u043b\u0443\u0447\u0430\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
                        text_solving: "\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u044e, \u0447\u0442\u043e \u0432\u044b \u0447\u0435\u043b\u043e\u0432\u0435\u043a..",
                        text_completed: "\u042f \u0447\u0435\u043b\u043e\u0432\u0435\u043a",
                        text_completed_sr: "A\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0441\u043f\u0430\u043c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430",
                        text_expired: "\u0421\u0440\u043e\u043a \u0410\u043d\u0442\u0438\u0420\u043e\u0431\u043e\u0442\u043d\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0441\u0442\u0451\u043a",
                        button_restart: "\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e",
                        text_error: "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",
                        button_retry: "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437",
                        text_fetch_error: "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"
                    },
                    sv: {
                        text_init: "Aktiverar...",
                        text_ready: "Jag \xe4r inte en robot",
                        button_start: "Klicka f\xf6r att verifiera",
                        text_fetching: "H\xe4mtar data",
                        text_solving: "Kontrollerar att du \xe4r m\xe4nniska...",
                        text_completed: "Jag \xe4r en m\xe4nniska",
                        text_completed_sr: "Automatisk spamkontroll slutf\xf6rd",
                        text_expired: "Anti-robot-verifieringen har l\xf6pt ut",
                        button_restart: "B\xf6rja om",
                        text_error: "Verifiering kunde inte slutf\xf6ras",
                        button_retry: "Omstart",
                        text_fetch_error: "Verifiering misslyckades"
                    },
                    tr: {
                        text_init: "Ba\u015flat\u0131l\u0131yor..",
                        text_ready: "Anti-Robot Do\u011frulamas\u0131",
                        button_start: "Do\u011frulamay\u0131 ba\u015flatmak i\xe7in t\u0131klay\u0131n",
                        text_fetching: "Y\xfckleniyor",
                        text_solving: "Robot olmad\u0131\u011f\u0131n\u0131z do\u011frulan\u0131yor..",
                        text_completed: "Ben bir insan\u0131m",
                        text_completed_sr: "Otomatik spam kontrol\xfc tamamland\u0131",
                        text_expired: "Anti-Robot do\u011frulamas\u0131n\u0131n s\xfcresi doldu",
                        button_restart: "Yeniden ba\u015flat",
                        text_error: "Do\u011frulama ba\u015far\u0131s\u0131z oldu",
                        button_retry: "Tekrar dene",
                        text_fetch_error: "Ba\u011flant\u0131 ba\u015far\u0131s\u0131z oldu"
                    },
                    el: {
                        text_init: "\u03a0\u03c1\u03bf\u03b5\u03c4\u03bf\u03b9\u03bc\u03b1\u03c3\u03af\u03b1..",
                        text_ready: "Anti-Robot \u0395\u03c0\u03b1\u03bb\u03ae\u03b8\u03b5\u03c5\u03c3\u03b7",
                        button_start: " \u039a\u03ac\u03bd\u03c4\u03b5 \u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03be\u03b5\u03ba\u03b9\u03bd\u03ae\u03c3\u03b5\u03b9 \u03b7 \u03b5\u03c0\u03b1\u03bb\u03ae\u03b8\u03b5\u03c5\u03c3\u03b7\u03c2",
                        text_fetching: " \u039b\u03ae\u03c8\u03b7 \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2",
                        text_solving: " \u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03b1\u03bd\u03b8\u03c1\u03ce\u03c0\u03bf\u03c5..",
                        text_completed: "\u0395\u03af\u03bc\u03b1\u03b9 \u03ac\u03bd\u03b8\u03c1\u03c9\u03c0\u03bf\u03c2",
                        text_completed_sr: " \u039f \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03ad\u03bb\u03b5\u03b3\u03c7\u03bf\u03c2 \u03b1\u03bd\u03b5\u03c0\u03b9\u03b8\u03cd\u03bc\u03b7\u03c4\u03bf\u03c5 \u03c0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03b8\u03b7\u03ba\u03b5",
                        text_expired: " \u0397 \u03b5\u03c0\u03b1\u03bb\u03ae\u03b8\u03b5\u03c5\u03c3\u03b7 Anti-Robot \u03ad\u03bb\u03b7\u03be\u03b5",
                        button_restart: " \u0395\u03c0\u03b1\u03bd\u03b5\u03ba\u03ba\u03af\u03bd\u03b7\u03c3\u03b7",
                        text_error: " \u0397 \u03b5\u03c0\u03b1\u03bb\u03ae\u03b8\u03b5\u03c5\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5",
                        button_retry: " \u0394\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03b5\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac",
                        text_fetch_error: " \u0391\u03c0\u03bf\u03c4\u03c5\u03c7\u03af\u03b1 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2 \u03bc\u03b5"
                    },
                    uk: {
                        text_init: "\u0406\u043d\u0456\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f..",
                        text_ready: "\u0410\u043d\u0442\u0438\u0440\u043e\u0431\u043e\u0442 \u0432\u0435\u0440\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u044f",
                        button_start: "\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u0440\u043e\u0437\u043f\u043e\u0447\u0430\u0442\u0438 \u0432\u0435\u0440\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u044e",
                        text_fetching: "\u0417\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f",
                        text_solving: "\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430, \u0449\u043e \u0432\u0438 \u043d\u0435 \u0440\u043e\u0431\u043e\u0442..",
                        text_completed: "\u042f \u043d\u0435 \u0440\u043e\u0431\u043e\u0442",
                        text_completed_sr: "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430 \u0441\u043f\u0430\u043c\u0443 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430",
                        text_expired: "\u0427\u0430\u0441 \u0432\u0438\u0447\u0435\u0440\u043f\u0430\u043d\u043e",
                        button_restart: "\u041f\u043e\u0447\u0430\u0442\u0438 \u0437\u043d\u043e\u0432\u0443",
                        text_error: "\u0412\u0435\u0440\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u044f \u043d\u0435 \u0432\u0434\u0430\u043b\u0430\u0441\u044c",
                        button_retry: "\u0421\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u043d\u043e\u0432\u0443",
                        text_fetch_error: "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u2019\u0454\u0434\u043d\u0430\u0442\u0438\u0441\u044c"
                    },
                    bg: {
                        text_init: "\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0435...",
                        text_ready: "\u0410\u043d\u0442\u0438-\u0440\u043e\u0431\u043e\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                        button_start: "\u0429\u0440\u0430\u043a\u043d\u0435\u0442\u0435, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043f\u043e\u0447\u043d\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u0442\u0430",
                        text_fetching: "\u041f\u0440\u0435\u0434\u0438\u0437\u0432\u0438\u043a\u0430\u0442\u0435\u043b\u0441\u0442\u0432\u043e",
                        text_solving: "\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0432\u0430\u043c\u0435 \u0434\u0430\u043b\u0438 \u0441\u0438 \u0447\u043e\u0432\u0435\u043a...",
                        text_completed: "\u0410\u0437 \u0441\u044a\u043c \u0447\u043e\u0432\u0435\u043a",
                        text_completed_sr: "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0430\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0437\u0430 \u0441\u043f\u0430\u043c \u0435 \u0437\u0430\u0432\u044a\u0440\u0448\u0435\u043d\u0430",
                        text_expired: "\u0410\u043d\u0442\u0438-\u0420\u043e\u0431\u043e\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u0442\u0430 \u0438\u0437\u0442\u0435\u0447\u0435",
                        button_restart: "\u0420\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u0439\u0442\u0435",
                        text_error: "\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                        button_retry: "\u041e\u043f\u0438\u0442\u0430\u0439\u0442\u0435 \u043f\u0430\u043a",
                        text_fetch_error: "\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u0432\u044a\u0440\u0437\u0432\u0430\u043d\u0435 \u0441"
                    },
                    cs: {
                        text_init: "Inicializace..",
                        text_ready: "Ov\u011b\u0159en\xed proti robot\u016fm",
                        button_start: "Klikn\u011bte pro ov\u011b\u0159en\xed",
                        text_fetching: "Probl\xe9m p\u0159i na\u010d\xedt\xe1n\xed",
                        text_solving: "Ov\u011b\u0159en\xed, \u017ee jste \u010dlov\u011bk..",
                        text_completed: "Jsem \u010dlov\u011bk",
                        text_completed_sr: "Automatick\xe1 kontrola spamu dokon\u010dena",
                        text_expired: "Ov\u011b\u0159en\xed proti robot\u016fm vypr\u0161elo",
                        button_restart: "Restartovat",
                        text_error: "Ov\u011b\u0159en\xed se nezda\u0159ilo",
                        button_retry: "Zkusit znovu",
                        text_fetch_error: "P\u0159ipojen\xed se nezda\u0159ilo"
                    },
                    sk: {
                        text_init: "Inicializ\xe1cia..",
                        text_ready: "Overenie proti robotom",
                        button_start: "Kliknite pre overenie",
                        text_fetching: "Probl\xe9m pri na\u010d\xedtan\xed",
                        text_solving: "Overenie, \u017ee ste \u010dlovek..",
                        text_completed: "Som \u010dlovek",
                        text_completed_sr: "Automatick\xe1 kontrola spamu dokon\u010den\xe1",
                        text_expired: "Overenie proti robotom vypr\u0161alo",
                        button_restart: "Re\u0161tartova\u0165",
                        text_error: "Overenie sa nepodarilo",
                        button_retry: "Sk\xfasi\u0165 znova",
                        text_fetch_error: "Pripojenie sa nepodarilo"
                    },
                    no: d,
                    fi: {
                        text_init: "Aktivoidaan...",
                        text_ready: "En ole robotti",
                        button_start: "Aloita vahvistus klikkaamalla",
                        text_fetching: "Haetaan tietoja",
                        text_solving: "Tarkistaa, ett\xe4 olet ihminen...",
                        text_completed: "Olen ihminen",
                        text_completed_sr: "Automaattinen roskapostin tarkistus suoritettu",
                        text_expired: "Vahvistusta ei voitu suorittaa loppuun",
                        button_restart: "Uudelleenk\xe4ynnistys",
                        text_error: "Vahvistus ep\xe4onnistui",
                        button_retry: "Yrit\xe4 uudelleen",
                        text_fetch_error: "Yhteys ep\xe4onnistui"
                    },
                    lv: {
                        text_init: "Notiek inicializ\u0113\u0161ana..",
                        text_ready: "Verifik\u0101cija, ka neesat robots",
                        button_start: "Noklik\u0161\u0137iniet, lai s\u0101ktu verifik\u0101ciju",
                        text_fetching: "Notiek dro\u0161\u012bbas uzdevuma izg\u016b\u0161ana",
                        text_solving: "Notiek p\u0101rbaude, vai esat cilv\u0113ks..",
                        text_completed: "Es esmu cilv\u0113ks",
                        text_completed_sr: "Autom\u0101tiska surog\u0101tpasta p\u0101rbaude pabeigta",
                        text_expired: "Verifik\u0101cijas, ka neesat robots, der\u012bgums beidzies",
                        button_restart: "Restart\u0113t",
                        text_error: "Verifik\u0101cija neizdev\u0101s",
                        button_retry: "M\u0113\u0123in\u0101t v\u0113lreiz",
                        text_fetch_error: "Neizdev\u0101s izveidot savienojumu ar"
                    },
                    lt: {
                        text_init: "Inicijuojama..",
                        text_ready: "Patikrinimas, ar nesate robotas",
                        button_start: "Spustel\u0117kite patikrinimui prad\u0117ti",
                        text_fetching: "Gavimo i\u0161\u0161\u016bkis",
                        text_solving: "Tikrinama, ar esate \u017emogus..",
                        text_completed: "Esu \u017emogus",
                        text_completed_sr: "Automatin\u0117 patikra d\u0117l pa\u0161to \u0161iuk\u0161li\u0173 atlikta",
                        text_expired: "Patikrinimas, ar nesate robotas, baig\u0117 galioti",
                        button_restart: "Prad\u0117ti i\u0161 naujo",
                        text_error: "Patikrinimas nepavyko",
                        button_retry: "Kartoti",
                        text_fetch_error: "Nepavyko prisijungti prie"
                    },
                    pl: {
                        text_init: "Inicjowanie..",
                        text_ready: "Weryfikacja antybotowa",
                        button_start: "Kliknij, aby rozpocz\u0105\u0107 weryfikacj\u0119",
                        text_fetching: "Pobieranie",
                        text_solving: "Weryfikacja, czy nie jeste\u015b robotem..",
                        text_completed: "Nie jestem robotem",
                        text_completed_sr: "Zako\u0144czono automatyczne sprawdzanie spamu",
                        text_expired: "Weryfikacja antybotowa wygas\u0142a",
                        button_restart: "Uruchom ponownie",
                        text_error: "Weryfikacja nie powiod\u0142a si\u0119",
                        button_retry: "Spr\xf3buj ponownie",
                        text_fetch_error: "Nie uda\u0142o si\u0119 po\u0142\u0105czy\u0107 z"
                    },
                    et: {
                        text_init: "Initsialiseerimine..",
                        text_ready: "Robotivastane kinnitus",
                        button_start: "Kinnitamisega alustamiseks kl\xf5psake",
                        text_fetching: "V\xe4ljakutse toomine",
                        text_solving: "Kinnitatakse, et sa oled inimene..",
                        text_completed: "Ma olen inimene",
                        text_completed_sr: "Automaatne r\xe4mpsposti kontroll on l\xf5petatud",
                        text_expired: "Robotivastane kinnitus aegus",
                        button_restart: "Taask\xe4ivita",
                        text_error: "Kinnitamine nurjus",
                        button_retry: "Proovi uuesti",
                        text_fetch_error: "\xdchenduse loomine nurjus"
                    },
                    hr: {
                        text_init: "Po\u010detno postavljanje...",
                        text_ready: "Provjera protiv robota",
                        button_start: "Kliknite za po\u010detak provjere",
                        text_fetching: "Dohva\u0107anje izazova",
                        text_solving: "Provjeravamo jeste li \u010dovjek..",
                        text_completed: "Nisam robot",
                        text_completed_sr: "Automatska provjera je zavr\u0161ena",
                        text_expired: "Vrijeme za provjeru protiv robota je isteklo",
                        button_restart: "Osvje\u017ei",
                        text_error: "Provjera nije uspjlela",
                        button_retry: " Ponovo pokreni",
                        text_fetch_error: "Nije mogu\u0107e uspostaviti vezu"
                    },
                    sr: {
                        text_init: "Pokretanje...",
                        text_ready: "Anti-Robot Verifikacija",
                        button_start: "Kliknite da biste zapo\u010deli verifikaciju",
                        text_fetching: "U\u010ditavanje izazova",
                        text_solving: "Verifikacija da ste \u010dovek...",
                        text_completed: "Ja sam \u010dovek",
                        text_completed_sr: "Automatska provera ne\u017eeljene po\u0161te je zavr\u0161ena",
                        text_expired: "Anti-Robot verifikacija je istekla",
                        button_restart: "Ponovo pokrenuti",
                        text_error: "Verifikacija nije uspela",
                        button_retry: "Poku\u0161ajte ponovo",
                        text_fetch_error: "Neuspelo povezivanje sa..."
                    },
                    sl: {
                        text_init: "Inicializiranje..",
                        text_ready: "Preverjanje robotov",
                        button_start: "Kliknite za za\u010detek preverjanja",
                        text_fetching: "Prena\u0161anje izziva",
                        text_solving: "Preverjamo, ali ste \u010dlovek",
                        text_completed: "Nisem robot",
                        text_completed_sr: "Avtomatsko preverjanje je zaklju\u010deno",
                        text_expired: "Preverjanje robotov je poteklo",
                        button_restart: "Osve\u017ei",
                        text_error: "Preverjanje ni uspelo",
                        button_retry: "Poskusi ponovno",
                        text_fetch_error: "Povezave ni bilo mogo\u010de vzpostaviti"
                    },
                    hu: {
                        text_init: "Inicializ\xe1l\xe1s...",
                        text_ready: "Robotellenes ellen\u0151rz\xe9s",
                        button_start: "Kattintson az ellen\u0151rz\xe9s megkezd\xe9s\xe9hez",
                        text_fetching: "Feladv\xe1ny lek\xe9r\xe9se",
                        text_solving: "Annak igazol\xe1sa, hogy \xd6n nem robot...",
                        text_completed: "Nem vagyok robot",
                        text_completed_sr: "Automatikus spam ellen\u0151rz\xe9s befejez\u0151d\xf6tt",
                        text_expired: "Robotellenes ellen\u0151rz\xe9s lej\xe1rt",
                        button_restart: "\xdajraind\xedt\xe1s",
                        text_error: "Az ellen\u0151rz\xe9s nem siker\xfclt",
                        button_retry: "Pr\xf3b\xe1lja \xfajra",
                        text_fetch_error: "Nem siker\xfclt csatlakozni"
                    },
                    ro: {
                        text_init: "Se ini\u021bializeaz\u0103..",
                        text_ready: "Verificare anti-robot",
                        button_start: "Click pentru a \xeencepe verificarea",
                        text_fetching: "Downloading",
                        text_solving: "Verificare ca e\u0219ti om..",
                        text_completed: "Sunt om",
                        text_completed_sr: "Verificarea automat\u0103 a spam-ului a fost finalizat\u0103",
                        text_expired: "Verificarea anti-robot a expirat",
                        button_restart: "Restart",
                        text_error: "Verificare e\u0219uat\u0103",
                        button_retry: "Re\xeencearc\u0103",
                        text_fetch_error: "Nu s-a putut conecta la"
                    },
                    zh: {
                        text_init: "\u521d\u59cb\u5316\u4e2d\u2026\u2026",
                        text_ready: "\u4eba\u673a\u9a8c\u8bc1",
                        button_start: "\u70b9\u51fb\u5f00\u59cb",
                        text_fetching: "\u6b63\u5728\u52a0\u8f7d",
                        text_solving: "\u4eba\u673a\u6821\u9a8c\u4e2d\u2026\u2026",
                        text_completed: "\u6211\u4e0d\u662f\u673a\u5668\u4eba",
                        text_completed_sr: "\u4eba\u673a\u9a8c\u8bc1\u5b8c\u6210",
                        text_expired: "\u9a8c\u8bc1\u5df2\u8fc7\u671f",
                        button_restart: "\u91cd\u65b0\u5f00\u59cb",
                        text_error: "\u6821\u9a8c\u5931\u8d25",
                        button_retry: "\u91cd\u8bd5",
                        text_fetch_error: "\u65e0\u6cd5\u8fde\u63a5\u5230"
                    },
                    nb: d
                };

            function f(t, e) {
                const r = new Uint8Array(3),
                    i = new DataView(r.buffer);
                return i.setUint8(0, t), i.setUint16(1, e), r
            }
            let x;
            "undefined" !== typeof window && (x = window.URL || window.webkitURL);
            class I {
                constructor() {
                    this.workers = [], this.puzzleNumber = 0, this.numPuzzles = 0, this.threshold = 0, this.startTime = 0, this.progress = 0, this.totalHashes = 0, this.puzzleSolverInputs = [], this.puzzleIndex = 0, this.solutionBuffer = new Uint8Array(0), this.solverType = 1, this.readyCount = 0, this.startCount = 0, this.progressCallback = () => 0, this.readyCallback = () => 0, this.startedCallback = () => 0, this.doneCallback = () => 0, this.errorCallback = () => 0
                }
                init() {
                    this.terminateWorkers(), this.progress = 0, this.totalHashes = 0, this.readyCount = 0, this.startCount = 0, this.workers = new Array(4);
                    const t = new Blob(['!function(){"use strict";const A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",I="=".charCodeAt(0),g=new Uint8Array(256);for(let I=0;I<A.length;I++)g[A.charCodeAt(I)]=I;function C(A){const I={},g=A.exports,C=g.memory,Q=g.__alloc,t=g.__retain,B=g.__rtti_base||-1;return I.__allocArray=(A,I)=>{const g=function(A){return new Uint32Array(C.buffer)[(B+4>>>2)+2*A]}(A),e=31-Math.clz32(g>>>6&31),o=I.length,i=Q(o<<e,0),r=Q(12,A),n=new Uint32Array(C.buffer);n[r+0>>>2]=t(i),n[r+4>>>2]=i,n[r+8>>>2]=o<<e;const E=C.buffer,s=new Uint8Array(E);if(16384&g)for(let A=0;A<o;++A)s[(i>>>e)+A]=t(I[A]);else s.set(I,i>>>e);return r},I.__getUint8Array=A=>{const I=new Uint32Array(C.buffer),g=I[A+4>>>2];return new Uint8Array(C.buffer,g,I[g-4>>>2]>>>0)},function(A,I={}){const g=A.__argumentsLength?I=>{A.__argumentsLength.value=I}:A.__setArgumentsLength||A.__setargc||(()=>({}));for(const C in A){if(!Object.prototype.hasOwnProperty.call(A,C))continue;const Q=A[C],t=C.split(".")[0];"function"==typeof Q&&Q!==g?(I[t]=(...A)=>(g(A.length),Q(...A))).original=Q:I[t]=Q}return I}(g,I)}class Q{constructor(A){this.b=new Uint8Array(128),this.h=new Uint32Array(16),this.t=0,this.c=0,this.v=new Uint32Array(32),this.m=new Uint32Array(32),this.outlen=A}}function t(A,I){return A[I]^A[I+1]<<8^A[I+2]<<16^A[I+3]<<24}function B(A,I,g,C,Q,t,B,e){const o=I[B],i=I[B+1],r=I[e],n=I[e+1];let E,s,w,c,a=A[g],D=A[g+1],h=A[C],f=A[C+1],y=A[Q],l=A[Q+1],u=A[t],N=A[t+1];E=a+h,s=(a&h|(a|h)&~E)>>>31,a=E,D=D+f+s,E=a+o,s=(a&o|(a|o)&~E)>>>31,a=E,D=D+i+s,w=u^a,c=N^D,u=c,N=w,E=y+u,s=(y&u|(y|u)&~E)>>>31,y=E,l=l+N+s,w=h^y,c=f^l,h=w>>>24^c<<8,f=c>>>24^w<<8,E=a+h,s=(a&h|(a|h)&~E)>>>31,a=E,D=D+f+s,E=a+r,s=(a&r|(a|r)&~E)>>>31,a=E,D=D+n+s,w=u^a,c=N^D,u=w>>>16^c<<16,N=c>>>16^w<<16,E=y+u,s=(y&u|(y|u)&~E)>>>31,y=E,l=l+N+s,w=h^y,c=f^l,h=c>>>31^w<<1,f=w>>>31^c<<1,A[g]=a,A[g+1]=D,A[C]=h,A[C+1]=f,A[Q]=y,A[Q+1]=l,A[t]=u,A[t+1]=N}const e=[4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],o=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6,22,16,24,0,10,4,30,26,20,28,6,12,14,2,18,8,14,18,6,2,26,24,22,28,4,12,10,20,8,0,30,16,18,0,10,14,4,8,20,30,28,2,22,24,12,16,6,26,4,24,12,20,0,22,16,6,8,26,14,10,30,28,2,18,24,10,2,30,28,26,8,20,0,14,12,6,18,4,16,22,26,22,14,28,24,2,6,18,10,0,30,8,16,12,4,20,12,30,28,18,22,6,0,16,24,4,26,14,2,8,20,10,20,4,16,8,14,12,2,10,30,22,18,28,6,24,26,0,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6];function i(A,I){const g=A.v,C=A.m;for(let I=0;I<16;I++)g[I]=A.h[I],g[I+16]=e[I];g[24]=g[24]^A.t,g[25]=g[25]^A.t/4294967296,I&&(g[28]=~g[28],g[29]=~g[29]);for(let I=0;I<32;I++)C[I]=t(A.b,4*I);for(let A=0;A<12;A++)B(g,C,0,8,16,24,o[16*A+0],o[16*A+1]),B(g,C,2,10,18,26,o[16*A+2],o[16*A+3]),B(g,C,4,12,20,28,o[16*A+4],o[16*A+5]),B(g,C,6,14,22,30,o[16*A+6],o[16*A+7]),B(g,C,0,10,20,30,o[16*A+8],o[16*A+9]),B(g,C,2,12,22,24,o[16*A+10],o[16*A+11]),B(g,C,4,14,16,26,o[16*A+12],o[16*A+13]),B(g,C,6,8,18,28,o[16*A+14],o[16*A+15]);for(let I=0;I<16;I++)A.h[I]=A.h[I]^g[I]^g[I+16]}function r(A,I){for(let I=0;I<16;I++)A.h[I]=e[I];A.b.set(I),A.h[0]^=16842752^A.outlen}async function n(){return(A,I,g=4294967295)=>{const C=function(A,I,g){if(128!=A.length)throw Error("Invalid input");const C=A.buffer,t=new DataView(C),B=new Q(32);B.t=128;const e=t.getUint32(124,!0),o=e+g;for(let g=e;g<o;g++)if(t.setUint32(124,g,!0),r(B,A),i(B,!0),B.h[0]<I)return 0==ASC_TARGET?new Uint8Array(B.h.buffer):Uint8Array.wrap(B.h.buffer);return new Uint8Array(0)}(A,I,g);return[A,C]}}let E,s;Uint8Array.prototype.slice||Object.defineProperty(Uint8Array.prototype,"slice",{value:function(A,I){return new Uint8Array(Array.prototype.slice.call(this,A,I))}}),self.ASC_TARGET=0;const w=new Promise((A=>s=A));self.onerror=A=>{self.postMessage({type:"error",message:JSON.stringify(A)})},self.onmessage=async A=>{const Q=A.data;try{if("solver"===Q.type){if(Q.forceJS){E=1;const A=await n();s(A)}else try{E=2;const A=WebAssembly.compile(function(A){const C=A.length;let Q=3*C>>>2;A.charCodeAt(C-1)===I&&Q--,A.charCodeAt(C-2)===I&&Q--;const t=new Uint8Array(Q);for(let I=0,Q=0;I<C;I+=4){const C=g[A.charCodeAt(I+0)],B=g[A.charCodeAt(I+1)],e=g[A.charCodeAt(I+2)],o=g[A.charCodeAt(I+3)];t[Q++]=C<<2|B>>4,t[Q++]=(15&B)<<4|e>>2,t[Q++]=(3&e)<<6|63&o}return t}("AGFzbQEAAAABKghgAABgAn9/AGADf39/AX9gAX8AYAR/f39/AGAAAX9gAX8Bf2ACf38BfwINAQNlbnYFYWJvcnQABAMMCwcGAwAAAQIFAQIABQMBAAEGFgR/AUEAC38BQQALfwBBAwt/AEHgDAsHbgkGbWVtb3J5AgAHX19hbGxvYwABCF9fcmV0YWluAAIJX19yZWxlYXNlAAMJX19jb2xsZWN0AAQHX19yZXNldAAFC19fcnR0aV9iYXNlAwMNVWludDhBcnJheV9JRAMCDHNvbHZlQmxha2UyYgAKCAELCvQSC5IBAQV/IABB8P///wNLBEAACyMBQRBqIgQgAEEPakFwcSICQRAgAkEQSxsiBmoiAj8AIgVBEHQiA0sEQCAFIAIgA2tB//8DakGAgHxxQRB2IgMgBSADShtAAEEASARAIANAAEEASARAAAsLCyACJAEgBEEQayICIAY2AgAgAkEBNgIEIAIgATYCCCACIAA2AgwgBAsEACAACwMAAQsDAAELBgAjACQBC7sCAQF/AkAgAUUNACAAQQA6AAAgACABakEEayICQQA6AAMgAUECTQ0AIABBADoAASAAQQA6AAIgAkEAOgACIAJBADoAASABQQZNDQAgAEEAOgADIAJBADoAACABQQhNDQAgAEEAIABrQQNxIgJqIgBBADYCACAAIAEgAmtBfHEiAmpBHGsiAUEANgIYIAJBCE0NACAAQQA2AgQgAEEANgIIIAFBADYCECABQQA2AhQgAkEYTQ0AIABBADYCDCAAQQA2AhAgAEEANgIUIABBADYCGCABQQA2AgAgAUEANgIEIAFBADYCCCABQQA2AgwgACAAQQRxQRhqIgFqIQAgAiABayEBA0AgAUEgTwRAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCABQSBrIQEgAEEgaiEADAELCwsLcgACfyAARQRAQQxBAhABIQALIAALQQA2AgAgAEEANgIEIABBADYCCCABQfD///8DIAJ2SwRAQcAKQfAKQRJBORAAAAsgASACdCIBQQAQASICIAEQBiAAKAIAGiAAIAI2AgAgACACNgIEIAAgATYCCCAAC88BAQJ/QaABQQAQASIAQQxBAxABQYABQQAQBzYCACAAQQxBBBABQQhBAxAHNgIEIABCADcDCCAAQQA2AhAgAEIANwMYIABC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")),Q=await async function(A){const I=await async function(A){const I={env:{abort(){throw Error("Wasm aborted")}}};return{exports:C(await WebAssembly.instantiate(A,I))}}(A),g=I.exports.__retain(I.exports.__allocArray(I.exports.Uint8Array_ID,new Uint8Array(128)));let Q=I.exports.__getUint8Array(g);return(A,C,t=4294967295)=>{Q.set(A);const B=I.exports.solveBlake2b(g,C,t);Q=I.exports.__getUint8Array(g);const e=I.exports.__getUint8Array(B);return I.exports.__release(B),[Q,e]}}(await A);s(Q)}catch(A){console.log("FriendlyCaptcha failed to initialize WebAssembly, falling back to Javascript solver: "+A.toString()),E=1;const I=await n();s(I)}self.postMessage({type:"ready",solver:E})}else if("start"===Q.type){const A=await w;self.postMessage({type:"started"});let I,g=0;for(let C=0;C<256;C++){Q.puzzleSolverInput[123]=C;const[t,B]=A(Q.puzzleSolverInput,Q.threshold);if(0!==B.length){I=t;break}console.warn("FC: Internal error or no solution found"),g+=Math.pow(2,32)-1}g+=new DataView(I.slice(-4).buffer).getUint32(0,!0),self.postMessage({type:"done",solution:I.slice(-8),h:g,puzzleIndex:Q.puzzleIndex,puzzleNumber:Q.puzzleNumber})}}catch(A){setTimeout((()=>{throw A}))}}}();'], {
                        type: "text/javascript"
                    });
                    for (let e = 0; e < this.workers.length; e++) this.workers[e] = new Worker(x.createObjectURL(t)), this.workers[e].onerror = t => this.errorCallback(t), this.workers[e].onmessage = t => {
                        const r = t.data;
                        if (r)
                            if ("ready" === r.type) this.readyCount++, this.solverType = r.solver, this.readyCount == this.workers.length && this.readyCallback();
                            else if ("started" === r.type) this.startCount++, 1 == this.startCount && (this.startTime = Date.now(), this.startedCallback());
                        else if ("done" === r.type) {
                            if (r.puzzleNumber !== this.puzzleNumber) return;
                            if (this.puzzleIndex < this.puzzleSolverInputs.length && (this.workers[e].postMessage({
                                    type: "start",
                                    puzzleSolverInput: this.puzzleSolverInputs[this.puzzleIndex],
                                    threshold: this.threshold,
                                    puzzleIndex: this.puzzleIndex,
                                    puzzleNumber: this.puzzleNumber
                                }), this.puzzleIndex++), this.progress++, this.totalHashes += r.h, this.progressCallback({
                                    n: this.numPuzzles,
                                    h: this.totalHashes,
                                    t: (Date.now() - this.startTime) / 1e3,
                                    i: this.progress
                                }), this.solutionBuffer.set(r.solution, 8 * r.puzzleIndex), this.progress == this.numPuzzles) {
                                const t = (Date.now() - this.startTime) / 1e3;
                                this.doneCallback({
                                    solution: this.solutionBuffer,
                                    h: this.totalHashes,
                                    t: t,
                                    diagnostics: f(this.solverType, t),
                                    solver: this.solverType
                                })
                            }
                        } else "error" === r.type && this.errorCallback(r)
                    }
                }
                setupSolver(t = !1) {
                    const e = {
                        type: "solver",
                        forceJS: t
                    };
                    for (let t = 0; t < this.workers.length; t++) this.workers[t].postMessage(e)
                }
                start(t) {
                    this.puzzleSolverInputs = function(t, e) {
                        const r = [];
                        for (let i = 0; i < e; i++) {
                            const e = new Uint8Array(128);
                            e.set(t), e[120] = i, r.push(e)
                        }
                        return r
                    }(t.buffer, t.n), this.solutionBuffer = new Uint8Array(8 * t.n), this.numPuzzles = t.n, this.threshold = t.threshold, this.puzzleIndex = 0, this.puzzleNumber++;
                    for (let t = 0; t < this.workers.length && this.puzzleIndex !== this.puzzleSolverInputs.length; t++) this.workers[t].postMessage({
                        type: "start",
                        puzzleSolverInput: this.puzzleSolverInputs[t],
                        threshold: this.threshold,
                        puzzleIndex: this.puzzleIndex,
                        puzzleNumber: this.puzzleNumber
                    }), this.puzzleIndex++
                }
                terminateWorkers() {
                    if (0 != this.workers.length) {
                        for (let t = 0; t < this.workers.length; t++) this.workers[t].terminate();
                        this.workers = []
                    }
                }
            }
            class C {
                constructor(t, e = {}) {
                    if (this.workerGroup = new I, this.valid = !1, this.needsReInit = !1, this.hasBeenStarted = !1, this.hasBeenDestroyed = !1, this.opts = Object.assign({
                            forceJSFallback: !1,
                            skipStyleInjection: !1,
                            startMode: "focus",
                            puzzleEndpoint: t.dataset.puzzleEndpoint || "https://api.friendlycaptcha.com/api/v1/puzzle",
                            startedCallback: () => 0,
                            readyCallback: () => 0,
                            doneCallback: () => 0,
                            errorCallback: () => 0,
                            sitekey: t.dataset.sitekey || "",
                            language: t.dataset.lang || "en",
                            solutionFieldName: t.dataset.solutionFieldName || "frc-captcha-solution"
                        }, e), this.e = t, this.e.friendlyChallengeWidget = this, "string" === typeof this.opts.language) {
                        let t = _[this.opts.language.toLowerCase()];
                        void 0 === t && (console.error('FriendlyCaptcha: language "' + this.opts.language + '" not found.'), t = _.en), this.lang = t
                    } else this.lang = Object.assign(Object.assign({}, _.en), this.opts.language);
                    t.innerText = this.lang.text_init, this.opts.skipStyleInjection || function() {
                        if (!document.querySelector("#frc-style")) {
                            const t = document.createElement("style");
                            t.id = "frc-style", t.innerHTML = ".frc-captcha *{margin:0;padding:0;border:0;text-align:initial;border-radius:px;filter:none!important;transition:none!important;font-weight:400;font-size:14px;line-height:1.2;text-decoration:none;background-color:initial;color:#222}.frc-captcha{position:relative;min-width:250px;max-width:312px;border:1px solid #f4f4f4;padding-bottom:12px;background-color:#fff}.frc-captcha b{font-weight:700}.frc-container{display:flex;align-items:center;min-height:52px}.frc-icon{fill:#222;stroke:#222;flex-shrink:0;margin:8px 8px 0}.frc-icon.frc-warning{fill:#c00}.frc-success .frc-icon{animation:1s ease-in both frc-fade-in}.frc-content{white-space:nowrap;display:flex;flex-direction:column;margin:4px 6px 0 0;overflow-x:auto;flex-grow:1}.frc-banner{position:absolute;bottom:0;right:6px;line-height:1}.frc-banner *{font-size:10px;opacity:.8;text-decoration:none}.frc-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:3px 0;height:4px;border:none;background-color:#eee;color:#222;width:100%;transition:.5s linear}.frc-progress::-webkit-progress-bar{background:#eee}.frc-progress::-webkit-progress-value{background:#222}.frc-progress::-moz-progress-bar{background:#222}.frc-button{cursor:pointer;padding:2px 6px;background-color:#f1f1f1;border:1px solid transparent;text-align:center;font-weight:600;text-transform:none}.frc-button:focus{border:1px solid #333}.frc-button:hover{background-color:#ddd}.frc-captcha-solution{display:none}.frc-err-url{text-decoration:underline;font-size:.9em}.dark.frc-captcha{color:#fff;background-color:#222;border-color:#333}.dark.frc-captcha *{color:#fff}.dark.frc-captcha button{background-color:#444}.dark .frc-icon{fill:#fff;stroke:#fff}.dark .frc-progress{background-color:#444}.dark .frc-progress::-webkit-progress-bar{background:#444}.dark .frc-progress::-webkit-progress-value{background:#ddd}.dark .frc-progress::-moz-progress-bar{background:#ddd}@keyframes frc-fade-in{from{opacity:0}to{opacity:1}}", document.head.appendChild(t)
                        }
                    }(), this.init("auto" === this.opts.startMode || "auto" === this.e.dataset.start)
                }
                init(t) {
                    var e;
                    if (this.hasBeenDestroyed) console.error("FriendlyCaptcha widget has been destroyed using destroy(), it can not be used anymore.");
                    else if (this.initWorkerGroup(), t) this.start();
                    else if ("none" !== this.e.dataset.start && ("focus" === this.opts.startMode || "focus" === this.e.dataset.start)) {
                        const t = function(t) {
                            for (;
                                "FORM" !== t.tagName;)
                                if (!(t = t.parentElement)) return null;
                            return t
                        }(this.e);
                        t ? (e = () => this.start(), t.addEventListener("focusin", e, {
                            once: !0,
                            passive: !0
                        })) : console.log("FriendlyCaptcha div seems not to be contained in a form, autostart will not work")
                    }
                }
                makeButtonStart() {
                    const t = this.e.querySelector("button");
                    t && (t.addEventListener("click", (t => this.start()), {
                        once: !0,
                        passive: !0
                    }), t.addEventListener("touchstart", (t => this.start()), {
                        once: !0,
                        passive: !0
                    }))
                }
                onWorkerError(t) {
                    this.hasBeenStarted = !1, this.needsReInit = !0, this.expiryTimeout && clearTimeout(this.expiryTimeout), console.error("[FRC]", t), this.e.innerHTML = c(this.opts.solutionFieldName, this.lang, "Background worker error " + t.message), this.makeButtonStart(), this.opts.forceJSFallback = !0
                }
                initWorkerGroup() {
                    this.workerGroup.progressCallback = t => {
                        ! function(t, e) {
                            const r = t.querySelector(".frc-progress"),
                                i = (e.i + 1) / e.n;
                            r && (r.value = i, r.innerText = i.toFixed(2) + "%", r.title = e.i + 1 + "/" + e.n + " (" + (e.h / e.t * .001).toFixed(0) + "K/s)")
                        }(this.e, t)
                    }, this.workerGroup.readyCallback = () => {
                        var t, e;
                        this.e.innerHTML = (t = this.opts.solutionFieldName, e = this.lang, l(t, '<path d="M17,11c0.34,0,0.67,0.04,1,0.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55 C11.41,19.47,11,18.28,11,17C11,13.69,13.69,11,17,11z"/><path d="M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38"/>', !0, e.text_ready, ".UNSTARTED", e.button_start, !1)), this.makeButtonStart(), this.opts.readyCallback()
                    }, this.workerGroup.startedCallback = () => {
                        var t, e;
                        this.e.innerHTML = (t = this.opts.solutionFieldName, e = this.lang, l(t, A, !0, e.text_solving, ".UNFINISHED", void 0, !0)), this.opts.startedCallback()
                    }, this.workerGroup.doneCallback = t => {
                        const e = this.handleDone(t);
                        this.opts.doneCallback(e);
                        const r = this.e.dataset.callback;
                        r && window[r](e)
                    }, this.workerGroup.errorCallback = t => {
                        this.onWorkerError(t)
                    }, this.workerGroup.init(), this.workerGroup.setupSolver(this.opts.forceJSFallback)
                }
                expire() {
                    var t, e;
                    this.hasBeenStarted = !1, !1 !== this.e.isConnected && (this.e.innerHTML = (t = this.opts.solutionFieldName, e = this.lang, l(t, s, !0, e.text_expired, ".EXPIRED", e.button_restart)), this.makeButtonStart())
                }
                async start() {
                    if (this.hasBeenDestroyed) return void console.error("Can not start FriendlyCaptcha widget which has been destroyed");
                    if (this.hasBeenStarted) return void console.warn("Can not start FriendlyCaptcha widget which has already been started");
                    const t = this.opts.sitekey || this.e.dataset.sitekey;
                    if (!t) return console.error("FriendlyCaptcha: sitekey not set on frc-captcha element"), void(this.e.innerHTML = c(this.opts.solutionFieldName, this.lang, "Website problem: sitekey not set", !1));
                    if (function() {
                            let t = !0;
                            try {
                                u.plugins.length > 0 && (t = Plugin.prototype === u.plugins[0].__proto__)
                            } catch (t) {}
                            return -1 !== g.indexOf("headless") || -1 !== u.appVersion.indexOf("Headless") || -1 !== g.indexOf("bot") || -1 !== g.indexOf("crawl") || !0 === u.webdriver || !u.language || void 0 !== u.languages && !u.languages.length || !t
                        }()) this.e.innerHTML = c(this.opts.solutionFieldName, this.lang, "Browser check failed, try a different browser", !1, !0);
                    else {
                        if (this.needsReInit) return this.needsReInit = !1, void this.init(!0);
                        this.hasBeenStarted = !0;
                        try {
                            this.e.innerHTML = (e = this.opts.solutionFieldName, r = this.lang, l(e, A, !0, r.text_fetching, ".FETCHING", void 0, !0)), this.puzzle = h(await async function(t, e, r) {
                                const i = t.split(",");
                                for (let t = 0; t < i.length; t++) try {
                                    const r = await p(i[t] + "?sitekey=" + e, {
                                        headers: [
                                            ["x-frc-client", "js-0.9.8"]
                                        ],
                                        mode: "cors"
                                    }, 2);
                                    if (r.ok) return (await r.json()).data.puzzle; {
                                        let e;
                                        try {
                                            e = await r.json()
                                        } catch (t) {}
                                        if (e && e.errors && "endpoint_not_enabled" === e.errors[0]) throw Error(`Endpoint not allowed (${r.status})`);
                                        if (t === i.length - 1) throw Error(`Response status ${r.status} ${r.statusText} ${e?e.errors:""}`)
                                    }
                                } catch (e) {
                                    console.error("[FRC Fetch]:", e);
                                    const o = new Error(`${r.text_fetch_error} <a class="frc-err-url" href="${i[t]}">${i[t]}</a>`);
                                    throw o.rawError = e, o
                                }
                                throw Error("Internal error")
                            }(this.opts.puzzleEndpoint, t, this.lang)), this.expiryTimeout && clearTimeout(this.expiryTimeout), this.expiryTimeout = setTimeout((() => this.expire()), this.puzzle.expiry - 3e4)
                        } catch (t) {
                            console.error("[FRC]", t), this.hasBeenStarted = !1, this.expiryTimeout && clearTimeout(this.expiryTimeout), this.e.innerHTML = c(this.opts.solutionFieldName, this.lang, t.message), this.makeButtonStart();
                            const e = "error_getting_puzzle";
                            this.opts.errorCallback({
                                code: e,
                                description: t.toString(),
                                error: t
                            });
                            const r = this.e.dataset["callback-error"];
                            return void(r && window[r](this))
                        }
                        var e, r;
                        this.workerGroup.start(this.puzzle)
                    }
                }
                handleDone(t) {
                    this.valid = !0;
                    const e = `${this.puzzle.signature}.${this.puzzle.base64}.${a(t.solution)}.${a(t.diagnostics)}`;
                    return this.e.innerHTML = function(t, e, r, i) {
                        const o = `${i.t.toFixed(0)}s (${(i.h/i.t*.001).toFixed(0)}K/s)${1===i.solver?" JS Fallback":""}`;
                        return l(t, `<title>${e.text_completed_sr}</title><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>`, !1, e.text_completed, r, void 0, !1, o, "frc-success")
                    }(this.opts.solutionFieldName, this.lang, e, t), this.needsReInit = !0, e
                }
                destroy() {
                    this.workerGroup.terminateWorkers(), this.needsReInit = !1, this.hasBeenStarted = !1, this.expiryTimeout && clearTimeout(this.expiryTimeout), this.e && (this.e.remove(), delete this.e), this.hasBeenDestroyed = !0
                }
                reset() {
                    this.hasBeenDestroyed ? console.error("FriendlyCaptcha widget has been destroyed, it can not be used anymore") : (this.workerGroup.terminateWorkers(), this.needsReInit = !1, this.hasBeenStarted = !1, this.expiryTimeout && clearTimeout(this.expiryTimeout), this.init("auto" === this.opts.startMode || "auto" === this.e.dataset.start))
                }
            }
        }
    }
]);
//# sourceMappingURL=../21167-8575b97936aeb6e294c9.js.map