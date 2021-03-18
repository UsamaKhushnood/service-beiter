import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Dashboard from "../views/Dashboard.vue";
import NewRequest from "../views/NewRequest.vue";
import AllProjects from "../views/Activity/AllProjects.vue";
import AllContracts from "../views/Activity/AllContracts.vue";
import Reviews from "../views/Activity/Reviews.vue";
import Appointments from "../views/Activity/Appointments.vue";
import AllServices from "../views/Activity/PurchaseServices/AllServices.vue";
import SaleHistory from "../views/Activity/PurchaseServices/SaleHistory.vue";
import JobOffers from "../views/Activity/Jobs/JobOffers.vue";
import SearchJobs from "../views/Activity/Jobs/SearchJobs.vue";
import NewsLetter from "../views/Marketing/NewsLetter.vue";
import PopupsSeting from "../views/Marketing/PopupsSeting.vue";
import Discount from "../views/Marketing/Discount.vue";
import UpfrontRequest from "../views/Payments/UpfrontRequest.vue";
import RefundRequest from "../views/Payments/RefundRequest.vue";
import ReleaseRequest from "../views/Payments/ReleaseRequest.vue";
import EscrowAccounts from "../views/Payments/EscrowAccounts.vue";
import PayAccounts from "../views/Payments/PayAccounts.vue";
import Payouts from "../views/Payments/Payouts.vue";
import Invoice from "../views/Payments/Invoice.vue";
import PortalClients from "../views/Customer/PortalClients.vue";
import PortalUsers from "../views/Customer/PortalUsers.vue";
import ClientIncome from "../views/Income/ClientIncome.vue";
import PortalIncome from "../views/Income/PortalIncome.vue";

import AccountUpgradeClient from "../views/PortalSetings/AccountUpgradeClient.vue";
import AddCountry from "../views/PortalSetings/AddCountry.vue";
import Administrator from "../views/PortalSetings/Administrator.vue";
import BidsAmountClient from "../views/PortalSetings/BidsAmountClient.vue";
import CompanyCharacter from "../views/PortalSetings/CompanyCharacter.vue";
import CompanySkill from "../views/PortalSetings/CompanySkill.vue";
import CompanyType from "../views/PortalSetings/CompanyType.vue";
import ManageLanguages from "../views/PortalSetings/ManageLanguages.vue";
import Policy from "../views/PortalSetings/Policy.vue";
import Reasons from "../views/PortalSetings/Reasons.vue";
import ServiceComission from "../views/PortalSetings/ServiceComission.vue";
import WebsiteSettings from "../views/PortalSetings/WebsiteSettings.vue";
import TextModule from "../views/PortalSetings/TextModule.vue";
import OurServices from "../views/PortalSetings/OurServices.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    { path: "*", name: "PageNotFound", component: PageNotFound },
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            breadcrumb: "Dashboard",
        },
    },
    {
        path: "/NewRequest",
        name: "NewRequest",
        component: NewRequest,
        meta: {
            breadcrumb: "New Request",
        },
    },
    { path: "/AllProjects", name: "AllProjects", component: AllProjects },
    { path: "/AllContracts", name: "AllContracts", component: AllContracts },
    { path: "/Reviews", name: "Reviews", component: Reviews },
    { path: "/Appointments", name: "Appointments", component: Appointments },
    { path: "/OurServices", name: "OurServices", component: OurServices },
    { path: "/AllServices", name: "AllServices", component: AllServices },
    { path: "/SaleHistory", name: "SaleHistory", component: SaleHistory },
    { path: "/JobOffers", name: "JobOffers", component: JobOffers },
    { path: "/SearchJobs", name: "SearchJobs", component: SearchJobs },
    { path: "/NewsLetter", name: "NewsLetter", component: NewsLetter },
    { path: "/PopupsSeting", name: "PopupsSeting", component: PopupsSeting },
    { path: "/Discount", name: "Discount", component: Discount },
    {
        path: "/UpfrontRequest",
        name: "UpfrontRequest",
        component: UpfrontRequest,
    },
    { path: "/RefundRequest", name: "RefundRequest", component: RefundRequest },
    {
        path: "/ReleaseRequest",
        name: "ReleaseRequest",
        component: ReleaseRequest,
    },
    {
        path: "/EscrowAccounts",
        name: "EscrowAccounts",
        component: EscrowAccounts,
    },
    { path: "/PayAccounts", name: "PayAccounts", component: PayAccounts },
    { path: "/Payouts", name: "Payouts", component: Payouts },
    { path: "/Invoice", name: "Invoice", component: Invoice },
    { path: "/PortalClients", name: "PortalClients", component: PortalClients },
    { path: "/PortalUsers", name: "PortalUsers", component: PortalUsers },
    { path: "/ClientIncome", name: "ClientIncome", component: ClientIncome },
    { path: "/PortalIncome", name: "PortalIncome", component: PortalIncome },

    {
        path: "/AccountUpgradeClient",
        name: "AccountUpgradeClient",
        component: AccountUpgradeClient,
    },
    { path: "/AddCountry", name: "AddCountry", component: AddCountry },
    { path: "/Administrator", name: "Administrator", component: Administrator },
    {
        path: "/BidsAmountClient",
        name: "BidsAmountClient",
        component: BidsAmountClient,
    },
    {
        path: "/CompanyCharacter",
        name: "CompanyCharacter",
        component: CompanyCharacter,
    },
    { path: "/CompanySkill", name: "CompanySkill", component: CompanySkill },
    { path: "/CompanyType", name: "CompanyType", component: CompanyType },
    {
        path: "/ManageLanguages",
        name: "ManageLanguages",
        component: ManageLanguages,
    },
    { path: "/Policy", name: "Policy", component: Policy },
    { path: "/Reasons", name: "Reasons", component: Reasons },
    {
        path: "/ServiceComission",
        name: "ServiceComission",
        component: ServiceComission,
    },
    {
        path: "/WebsiteSettings",
        name: "WebsiteSettings",
        component: WebsiteSettings,
    },
    { path: "/TextModule", name: "TextModule", component: TextModule },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;