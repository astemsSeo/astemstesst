/*
 * Copyright (c) 2021 JFLab All rights reserved.
 * File Name : app-routing.module.ts
 * Author : jbh5310
 * Lastupdate : 2021-09-21 16:08:12
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ChangePasswordFormComponent,
  CreateAccountFormComponent,
  LoginFormComponent,
  ResetPasswordFormComponent
} from './shared/components';
import {AuthGuardService} from './shared/services';
import {HomeComponent} from './pages/home/home.component';
// import { AstemsComponent } from './pages/astems/astems.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DevExtremeModule, DxDataGridModule, DxFormModule} from 'devextreme-angular';

/************
 *  기준정보
 *************/
import {PgmauthorityComponent} from './pages/mm/pgmauthority/pgmauthority.component';
import {MenuComponent} from './pages/mm/menu/menu.component';
import {CodeComponent} from './pages/mm/code/code.component';
import {MessageComponent} from './pages/mm/message/message.component';
import {TermComponent} from './pages/mm/term/term.component';
import {GradeComponent} from './pages/mm/grade/grade.component';
import {OnboardComponent} from './pages/mm/onboard/onboard.component';
import {UsermanagementComponent} from './pages/mm/usermanagement/usermanagement.component';
import {UserComponent} from './pages/mm/user/user.component';
import {CarComponent} from './pages/mm/car/car.component';
import {CompanyComponent} from './pages/mm/company/company.component';
import {PrecardComponent} from './pages/mm/precard/precard.component';
import {TranComponent} from './pages/mm/tran/tran.component';
import {UserprofileComponent} from './pages/mm/userprofile/userprofile.component';
/************
*  기준정보
*************/

/************
 *  운송관리
 *************/
/* 관리자 */
import {TranordComponent} from './pages/admin/tranord/tranord.component';
import {TranordstatusComponent} from './pages/admin/tranordstatus/tranordstatus.component';
import {TranordallocateComponent} from './pages/admin/tranordallocate/tranordallocate.component';
import {TranordmassComponent} from './pages/admin/tranordmass/tranordmass.component';
import {TranordaccidentComponent} from './pages/admin/tranordaccident/tranordaccident.component';
import { AstemstestComponent } from './pages/admin/astemstest/astemstest.component';

/* 관리자 */

/* 화주 */
import {TranordComponent as TranordONComponent} from './pages/owner/tranord/tranord.component';
/* 화주 */

/* 차주 */
import {TranordstatusComponent as TranordstatusCOComponent} from './pages/carowner/tranordstatus/tranordstatus.component';

// import {TranordallocateComponent as TranordallocateCOComponent} from './pages/carowner/tranordallocate/tranordallocate.component';
// import {TranordmassComponent as TranordmassCOComponent} from './pages/carowner/tranordmass/tranordmass.component';
// import {TranordaccidentComponent as TranordaccidentCOComponent} from './pages/carowner/tranordaccident/tranordaccident.component';
/* 차주 */

/* 운송사 */
import {TranordstatusComponent as TranordstatusCRComponent} from './pages/carrier/tranordstatus/tranordstatus.component';

// import {TranordallocateComponent as TranordallocateCRComponent} from './pages/carrier/tranordallocate/tranordallocate.component';
// import {TranordmassComponent as TranordmassCRComponent} from './pages/carrier/tranordmass/tranordmass.component';
// import {TranordaccidentComponent as TranordaccidentCRComponent} from './pages/carrier/tranordaccident/tranordaccident.component';
/* 운송사 */
/************
 *  운송관리
 *************/

import { Layout0Component } from './pages/common/layout0/layout0.component';
import { Layout1Component } from './pages/common/layout1/layout1.component';
import { Layout2Component } from './pages/common/layout2/layout2.component';
import { Layout3Component } from './pages/common/layout3/layout3.component';
import { Layout4Component } from './pages/common/layout4/layout4.component';
import { Layout5Component } from './pages/common/layout5/layout5.component';
import { Layout6Component } from './pages/common/layout6/layout6.component';
import { Layout7Component } from './pages/common/layout7/layout7.component';
import { Layout8Component } from './pages/common/layout8/layout8.component';
import { Layout9Component } from './pages/common/layout9/layout9.component';
import { Layout10Component } from './pages/common/layout10/layout10.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService]
  },

  /************
   *  기준정보
   *************/
  {
    path: 'mm/pgmauthority',
    component: PgmauthorityComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/menu',
    component: MenuComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/code',
    component: CodeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/mfmessage',
    component: MessageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/term',
    component: TermComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/grade',
    component: GradeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/onboard',
    component: OnboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/user',
    component: UserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/usermanagement',
    component: UsermanagementComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/car',
    component: CarComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/company',
    component: CompanyComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mm/precard',
    component: PrecardComponent,
    canActivate: [AuthGuardService]
  },
  {
    component: TranComponent,
    path: 'mm/tran',
    canActivate: [AuthGuardService]
  },
  {
    component: UserprofileComponent,
    path: 'mm/userprofile',
    canActivate: [AuthGuardService]
  },
  /************
   *  기준정보
   *************/


  /************
   *  운송관리
   *************/
    /* 관리자 */
    {
      path: 'tr/admin/tranord',
      component: TranordComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'tr/admin/tranordstatus',
      component: TranordstatusComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'tr/admin/tranordmass',
      component: TranordmassComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'tr/admin/tranordallocate',
      component: TranordallocateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'tr/admin/tranordaccident',
      component: TranordaccidentComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'tr/admin/astemstest',
      component: AstemstestComponent,
      canActivate: [AuthGuardService]
    },
   
    /* 관리자 */

    /* 화주 */
    {
      path: 'tr/owner/tranord',
      component: TranordONComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'tr/owner/tranordstatus',
      component: TranordstatusComponent,
      canActivate: [AuthGuardService]
    },
    /* 화주 */

    /* 차주 */
    {
      path: 'tr/carowner/tranordstatus',
      component: TranordstatusCOComponent,
      canActivate: [AuthGuardService]
    },
    // {
    //   path: 'tr/carowner/tranordmass',
    //   component: TranordmassComponent,
    //   canActivate: [AuthGuardService]
    // },
    // {
    //   path: 'tr/carowner/tranordallocate',
    //   component: TranordallocateComponent,
    //   canActivate: [AuthGuardService]
    // },
    // {
    //   path: 'tr/carowner/tranordaccident',
    //   component: TranordaccidentComponent,
    //   canActivate: [AuthGuardService]
    // },
    /* 차주 */

    /* 운송사 */
    {
      path: 'tr/carrier/tranordstatus',
      component: TranordstatusCRComponent,
      canActivate: [AuthGuardService]
    },
    // {
    //   path: 'tr/carrier/tranordmass',
    //   component: TranordmassComponent,
    //   canActivate: [AuthGuardService]
    // },
    // {
    //   path: 'tr/carrier/tranordallocate',
    //   component: TranordallocateComponent,
    //   canActivate: [AuthGuardService]
    // },
    // {
    //   path: 'tr/carrier/tranordaccident',
    //   component: TranordaccidentComponent,
    //   canActivate: [AuthGuardService]
    // },
    /* 운송사 */
  /************
   *  운송관리
   *************/

  /************
   *  정산관리
   *************/
  /************
   *  정산관리
   *************/

  /*공통 템플릿*/
  {
    path: 'common/layout0',
    component: Layout0Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout1',
    component: Layout1Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout2',
    component: Layout2Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout3',
    component: Layout3Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout4',
    component: Layout4Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout5',
    component: Layout5Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout6',
    component: Layout6Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout7',
    component: Layout7Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout8',
    component: Layout8Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout9',
    component: Layout9Component,
    canActivate: [AuthGuardService]
  },
  {
    path: 'common/layout10',
    component: Layout10Component,
    canActivate: [AuthGuardService]
  },
  /* 기준정보 */
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, DevExtremeModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent]
})
export class AppRoutingModule {
}
