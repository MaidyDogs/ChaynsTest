!function(){"use strict";var e,a={1675:function(e,a,t){t(6992),t(1539),t(8783),t(3948),t(1637),t(4916),t(4765);var s,n=t(7294),l=t(3935),r=t(5861),i=t(7757),c=t.n(i),d=(t(7941),t(8674),t(5893)),o=function(e){var a=e.team_data;return(0,d.jsxs)("div",{className:"table__row",children:[(0,d.jsxs)("div",{className:"table__cell table_border_top",children:[e.i,"."]}),(0,d.jsx)("div",{className:"table__cell table_border_top",children:a.team_name}),(0,d.jsx)("div",{className:"table__cell table_border_top",children:a.total.games}),(0,d.jsx)("div",{className:"table__cell table_border_top",children:a.total.points}),(0,d.jsxs)("div",{className:"table__cell table_border_top",children:[a.total.goals_for,":",a.total.goals_against]})]})},h=JSON.parse('{"H":"https://maidydogs.github.io/ChaynsTest/ishd_content/"}');function m(){return(m=(0,r.Z)(c().mark((function e(a){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(""+h.H+a+"/tabelle.json",{mode:"cors",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u,_=function(){var e=new URLSearchParams(window.location.search);if(null==e.get("team"))return(0,d.jsx)("div",{children:" Please specify team with '?team=#TEAMID#'. #TEAMID# could be I_Herren"});var a=(0,n.useState)([]),t=a[0],l=a[1];return(0,n.useEffect)((function(){(function(e){return m.apply(this,arguments)})(e.get("team")).then((function(){l(function(){for(var e=[(0,d.jsxs)("div",{className:"table__row",children:[(0,d.jsx)("div",{className:"table__cell table_headding",children:"PL."}),(0,d.jsx)("div",{className:"table__cell table_headding",children:"TEAM"}),(0,d.jsx)("div",{className:"table__cell table_headding",children:"SP."}),(0,d.jsx)("div",{className:"table__cell table_headding",children:"P."}),(0,d.jsx)("div",{className:"table__cell table_headding",children:"TORE"})]},0)],a=1;a<Object.keys(s.placements).length+1;a++)e.push((0,d.jsx)(o,{team_data:s.placements[a],i:a},a));return(0,d.jsx)("div",{className:"table",children:e})}())}))}),[]),(0,d.jsx)("div",{className:"Tabelle",children:t})},b=t(5946),g=(t(8309),t(8084)),p=function(e){var a=e.element,t="https://www.ishd.de/img/anonymous-club.png?v=2.0.0-dev",s="https://www.ishd.de/img/anonymous-club.png?v=2.0.0-dev";a.home_team.club._links.logo&&(t="https://www.ishd.de"+a.home_team.club._links.logo.href),a.away_team.club._links.logo&&(s="https://www.ishd.de"+a.away_team.club._links.logo.href);var n="",l="";a.away_team.club.website&&(n=a.away_team.club.website.url),a.home_team.club.website&&(l=a.home_team.club.website.url);var r="button";return a.has_game_sheet&&(r="button green_bg"),(0,d.jsxs)("div",{children:[(0,d.jsx)("table",{className:"table_main",children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{className:"table_row",children:[(0,d.jsx)("td",{className:"centered",children:(0,d.jsx)("img",{src:t,alt:"Logo {element.home_team.full_name}",className:"logo_img"})}),(0,d.jsx)("td",{className:"centered",children:(0,d.jsx)("img",{src:s,alt:"Logo {element.away_team.full_name}",className:"logo_img"})})]}),(0,d.jsxs)("tr",{className:"table_row",children:[(0,d.jsx)("td",{className:"centered",children:a.home_team.full_name}),(0,d.jsx)("td",{className:"centered",children:a.away_team.full_name})]}),(0,d.jsxs)("tr",{className:"table_row",children:[(0,d.jsx)("td",{className:"centered",children:(0,d.jsx)("a",{target:"_blank",href:l,children:l})}),(0,d.jsx)("td",{className:"centered",children:(0,d.jsx)("a",{target:"_blank",href:n,children:n})})]})]})}),a.has_result?(0,d.jsxs)("div",{className:"score",children:[a.home_goals," : ",a.away_goals]}):null,(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"centered",children:[(0,d.jsx)("div",{className:"small_headding",children:"Liga"}),(0,d.jsx)("div",{className:"small_element",children:a.league.name}),(0,d.jsx)("div",{className:"small_headding",children:"Spieltermin"}),(0,d.jsx)("div",{className:"small_element",children:(0,d.jsx)(g.Z,{className:"small_element",showTime:!0,showDate:!0,date:a.date_time})}),(0,d.jsx)("div",{className:"small_headding",children:"Spielstätte"}),(0,d.jsx)("div",{className:"small_element",children:a.venue}),(0,d.jsx)("div",{className:"small_headding",children:"Anmerkungen"}),(0,d.jsx)("div",{className:"small_element",children:""==a.comments?"keine":a.comments}),(0,d.jsx)("a",{className:r,target:"_blank",href:"https://www.ishd.de"+a._links.self.href,children:"ISHD Spielbericht"})]})]})},j=function(e){var a=e.element,t=(0,d.jsx)("div",{className:"badge custom_badge",children:(0,d.jsx)(g.Z,{date:a.date_time,showDate:!0})}),s=(new Date(a.date_time).getTime()-(new Date).getTime())/864e5;return a.has_been_cancelled?t=(0,d.jsx)("div",{className:"badge custom_badge red_bg",children:"Spielabsage"}):s<3?t=(0,d.jsx)("div",{className:"badge custom_badge",children:(0,d.jsx)(g.Z,{date:a.date_time,showTime:!0})}):s<30&&(t=(0,d.jsx)("div",{className:"badge custom_badge",children:(0,d.jsx)(g.Z,{date:a.date_time})})),t},f=function(e){var a=e.element,t=(0,d.jsxs)("div",{className:"badge custom_badge",children:[a.home_goals," : ",a.away_goals]});return a.has_game_sheet&&(t="ASV"==a.winning_team.club.short_name?(0,d.jsxs)("div",{className:"badge custom_badge green_bg",children:[a.home_goals," : ",a.away_goals]}):(0,d.jsxs)("div",{className:"badge custom_badge red_bg",children:[a.home_goals," : ",a.away_goals]})),t},x=function(e){var a=e.element;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("nobr",{children:[a.home_team.full_name," - "]}),(0,d.jsx)("nobr",{children:a.away_team.full_name})]})},v=function(){for(var e=[],a=[],t=[],s=0;s<u._embedded.schedule.length;s++){var n=u._embedded.schedule[s];if(n.has_result){var l=(0,d.jsx)(x,{element:n}),r=(0,d.jsx)(p,{element:n}),i=(0,d.jsx)(f,{element:n});t.push({head:l,body:r,badge:i})}}for(var c=0;c<t.length;c++){var o=t[t.length-1-c];c<3?e.push((0,d.jsx)(b.Z,{head:o.head,headMultiline:!0,children:o.body,right:o.badge,dataGroup:"Spielplan"},c)):a.push((0,d.jsx)(b.Z,{head:o.head,headMultiline:!0,isWrapped:!0,children:o.body,right:o.badge,dataGroup:"Spielplan2"},c))}return a.length>=1&&e.push((0,d.jsx)(b.Z,{icon:(0,d.jsx)("i",{className:"fa-solid fa-plus"}),head:"Mehr",headMultiline:!0,children:a,right:(0,d.jsx)("div",{className:"badge custom_badge",children:a.length}),dataGroup:"Spielplan"},"-1")),e},w=function(){for(var e=[],a=[],t=0,s=0;s<u._embedded.schedule.length;s++){var n=u._embedded.schedule[s];if(!n.has_result){var l=(0,d.jsx)(x,{element:n}),r=(0,d.jsx)(j,{element:n}),i=(0,d.jsx)(p,{element:n});t<3?e.push((0,d.jsx)(b.Z,{head:l,headMultiline:!0,children:i,right:r,dataGroup:"Spielplan"},s)):a.push((0,d.jsx)(b.Z,{head:l,isWrapped:!0,headMultiline:!0,children:i,right:r,dataGroup:"Spielplan2"},s)),t++}}return a.length>=1&&e.push((0,d.jsx)(b.Z,{icon:(0,d.jsx)("i",{className:"fa-solid fa-plus"}),head:"Mehr",headMultiline:!0,children:a,right:(0,d.jsx)("div",{className:"badge custom_badge",children:a.length}),dataGroup:"Spielplan"},"-1")),e};function N(){return(N=(0,r.Z)(c().mark((function e(a){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(""+h.H+a+"/spielplan.json",{mode:"cors",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:u=e.sent;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=new URLSearchParams(window.location.search),a=(0,n.useState)([]),t=a[0],s=a[1];return(0,n.useEffect)((function(){(function(e){return N.apply(this,arguments)})(e.get("team")).then((function(){s((0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Letzte Spiele"}),v(),(0,d.jsx)("h3",{children:"Nächste Spiele"}),w()]}))}))}),[]),null==e.get("team")?(0,d.jsx)("div",{}):(0,d.jsx)("div",{className:"Spielplan",children:t})},S=function(){return(0,d.jsxs)("div",{className:"App",children:[(0,d.jsx)("h1",{children:"1. Jugendmannschaft"}),(0,d.jsx)("h2",{children:"Tabelle"}),(0,d.jsx)(_,{}),(0,d.jsx)("h2",{children:"Spielplan"}),(0,d.jsx)(y,{})]})};chayns.ready.then((function(){try{var e=new URLSearchParams(window.location.search);if(console.log(e.get("page")),null==e.get("page"))l.render((0,d.jsx)(S,{}),document.querySelector("#root"));else switch(e.get("page").toLocaleLowerCase()){case"tabelle":l.render((0,d.jsx)(_,{}),document.querySelector("#root"));break;case"spielplan":l.render((0,d.jsx)(y,{}),document.querySelector("#root"));break;default:l.render((0,d.jsx)(S,{}),document.querySelector("#root"))}}catch(e){console.error("Encountered error at `ReactDOM.render`: ",e)}})).catch((function(e){console.warn("No chayns environment found.",e)}))}},t={};function s(e){var n=t[e];if(void 0!==n)return n.exports;var l=t[e]={exports:{}};return a[e](l,l.exports,s),l.exports}s.m=a,e=[],s.O=function(a,t,n,l){if(!t){var r=1/0;for(o=0;o<e.length;o++){t=e[o][0],n=e[o][1],l=e[o][2];for(var i=!0,c=0;c<t.length;c++)(!1&l||r>=l)&&Object.keys(s.O).every((function(e){return s.O[e](t[c])}))?t.splice(c--,1):(i=!1,l<r&&(r=l));if(i){e.splice(o--,1);var d=n();void 0!==d&&(a=d)}}return a}l=l||0;for(var o=e.length;o>0&&e[o-1][2]>l;o--)e[o]=e[o-1];e[o]=[t,n,l]},s.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(a,{a:a}),a},s.d=function(e,a){for(var t in a)s.o(a,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},function(){var e={179:0};s.O.j=function(a){return 0===e[a]};var a=function(a,t){var n,l,r=t[0],i=t[1],c=t[2],d=0;if(r.some((function(a){return 0!==e[a]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(c)var o=c(s)}for(a&&a(t);d<r.length;d++)l=r[d],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(o)},t=self.webpackChunktestapitest=self.webpackChunktestapitest||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var n=s.O(void 0,[916],(function(){return s(1675)}));n=s.O(n)}();