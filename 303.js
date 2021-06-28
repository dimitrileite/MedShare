(self.webpackChunkmedshare=self.webpackChunkmedshare||[]).push([[303],{6303:(t,n,e)=>{"use strict";e.r(n),e.d(n,{ProviderListModule:()=>A});var o=e(1116),i=e(7761),r=e(2852),s=e(1138),a=e(114);const c=[{name:"Angular",version:a.N.versions.angular,description:"mds.providers.angular",github:"https://github.com/angular/angular",documentation:"https://angular.io/docs/ts/latest/"},{name:"Angular Material",version:a.N.versions.material,description:"mds.providers.angular-material",github:"https://github.com/angular/material2/",documentation:"https://material.angular.io/"},{name:"Angular Cli",version:a.N.versions.angularCli,description:"mds.providers.angular-cli",github:"https://github.com/angular/angular-cli",documentation:"https://cli.angular.io/"},{name:"NgRx",version:a.N.versions.ngrx,description:"mds.providers.ngrx",github:"https://github.com/ngrx/platform",documentation:"http://ngrx.github.io/",medium:"https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0"},{name:"RxJS",version:a.N.versions.rxjs,description:"mds.providers.rxjs",github:"https://github.com/ReactiveX/RxJS",documentation:"http://reactivex.io/rxjs/",medium:"https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293"},{name:"Bootstrap",version:a.N.versions.bootstrap,description:"mds.providers.bootstrap",github:"https://github.com/twbs/bootstrap",documentation:"https://getbootstrap.com/docs/4.4/getting-started/introduction/",medium:"https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b"},{name:"Typescript",version:a.N.versions.typescript,description:"mds.providers.typescript",github:"https://github.com/Microsoft/TypeScript",documentation:"https://www.typescriptlang.org/docs/home.html"},{name:"I18n",version:a.N.versions.ngxtranslate,description:"mds.providers.ngxtranslate",github:"https://github.com/ngx-translate/core",documentation:"http://www.ngx-translate.com/"},{name:"Font Awesome 5",version:a.N.versions.fontAwesome,description:"mds.providers.fontawesome",github:"https://github.com/FortAwesome/Font-Awesome",documentation:"https://fontawesome.com/icons"},{name:"Cypress",version:a.N.versions.cypress,description:"mds.providers.cypress",github:"https://github.com/cypress-io/cypress",documentation:"https://www.cypress.io/"},{name:"mds.providers.themes.title",description:"mds.providers.themes.description",documentation:"https://material.angular.io/guide/theming",medium:"https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1"},{name:"mds.providers.lazyloading.title",description:"mds.providers.lazyloading.description",documentation:"https://angular.io/guide/router#lazy-loading-route-configuration"},{name:"Eslint",version:a.N.versions.eslint,description:"mds.providers.eslint",github:"https://github.com/eslint/eslint",documentation:"https://eslint.org/docs/user-guide/getting-started"}];var m=e(5366),d=e(2862),p=e(2797),g=e(4369),u=e(1608),l=e(649);function h(t,n){if(1&t&&(m.TgZ(0,"code"),m._uU(1),m.qZA()),2&t){const t=m.oxw().$implicit;m.xp6(1),m.Oqu(t.version)}}const v=function(){return["fab","github"]};function b(t,n){if(1&t&&(m.TgZ(0,"a",13),m._UZ(1,"fa-icon",14),m.qZA()),2&t){const t=m.oxw().$implicit;m.Q6J("href",t.github,m.LSH),m.xp6(1),m.Q6J("icon",m.DdM(2,v))}}const f=function(){return["fab","medium-m"]};function x(t,n){if(1&t&&(m.TgZ(0,"a",10),m._UZ(1,"fa-icon",14),m._uU(2),m.ALo(3,"translate"),m.qZA()),2&t){const t=m.oxw().$implicit;m.Q6J("href",t.medium,m.LSH),m.xp6(1),m.Q6J("icon",m.DdM(5,f)),m.xp6(1),m.hij("",m.lcZ(3,3,"mds.providers.guide")," ")}}function Z(t,n){if(1&t&&(m.TgZ(0,"div",6),m.TgZ(1,"mat-card"),m.TgZ(2,"mat-card-title"),m.YNc(3,h,2,1,"code",7),m._uU(4),m.ALo(5,"translate"),m.qZA(),m.TgZ(6,"mat-card-subtitle",8),m._uU(7),m.ALo(8,"translate"),m.qZA(),m.TgZ(9,"mat-card-actions"),m.YNc(10,b,2,3,"a",9),m.TgZ(11,"a",10),m._UZ(12,"fa-icon",11),m._uU(13),m.ALo(14,"translate"),m.qZA(),m.YNc(15,x,4,6,"a",12),m.qZA(),m.qZA(),m.qZA()),2&t){const t=n.$implicit,e=m.oxw();m.Q6J("ngClass",e.routeAnimationsElements),m.xp6(3),m.Q6J("ngIf",t.version),m.xp6(1),m.hij("",m.lcZ(5,8,t.name)," "),m.xp6(3),m.hij(" ",m.lcZ(8,10,t.description)," "),m.xp6(3),m.Q6J("ngIf",t.github),m.xp6(1),m.Q6J("href",t.documentation,m.LSH),m.xp6(2),m.hij("",m.lcZ(14,12,"mds.providers.documentation")," "),m.xp6(2),m.Q6J("ngIf",t.medium)}}const w=[{path:"",component:(()=>{class t{constructor(){this.routeAnimationsElements=s.rd,this.providers=c}ngOnInit(){}openLink(t){window.open(t,"_blank")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m.Xpm({type:t,selectors:[["mds-provider-list"]],decls:8,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],["rtl","",1,"main-heading"],[1,"row","align-items-end"],["class","col-md-6 col-lg-4",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4",3,"ngClass"],[4,"ngIf"],["rtl",""],["mat-icon-button","","rel","noopener noreferrer","target","_blank",3,"href",4,"ngIf"],["mat-button","","rel","noopener noreferrer","target","_blank",3,"href"],["icon","book"],["mat-button","","rel","noopener noreferrer","target","_blank",3,"href",4,"ngIf"],["mat-icon-button","","rel","noopener noreferrer","target","_blank",3,"href"],[3,"icon"]],template:function(t,n){1&t&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"h1",3),m._uU(4),m.ALo(5,"translate"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(6,"div",4),m.YNc(7,Z,16,14,"div",5),m.qZA(),m.qZA()),2&t&&(m.xp6(4),m.Oqu(m.lcZ(5,2,"mds.providers.title")),m.xp6(3),m.Q6J("ngForOf",n.providers))},directives:[d.N,o.sg,o.mk,p.a8,p.n5,o.O5,p.$j,p.hq,g.zs,u.BN],pipes:[l.X$],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase}.main-heading[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{margin:0 0 20px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{position:absolute;top:11px;right:0;float:right;font-size:10px}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:60px}@media (max-width:576px){mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:auto}}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:2px;font-size:16px;margin:6px}mat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{position:relative;left:5px}"],changeDetection:0}),t})(),data:{title:"mds.menu.providers"}}];let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[r.Bz.forChild(w)],r.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[o.ez,i.m,_]]}),t})()}}]);