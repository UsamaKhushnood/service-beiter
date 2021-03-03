<template>
  <div id="app">
    <div class="row" style="width: 100%; margin: 0 !important;">
      <div class="col-md-12 p-0" style="min-height: 55px; max-height: 60px;">
        <ThemeNavigation />
      </div>
      <div class="col-md-2 p-0">
        <ThemeSidebar />
      </div>
      <div class="col-md-10 ">
        <div class="row" style="min-height: calc(100vh - 60px);">
          <div class="col-md-12 p-0" style="min-height: 30px; max-height: 30px; overflow: hidden">
            <ThemeBreadCrumb />   
          </div>
          <div class="col-md-12 p-0" id="ROUTER-VIEW" style="min-height: calc(100vh - 130px)">
            <RouterView />
        </div>
        
            
          
          <div class="col-md-12 p-0" style="min-height: 40px; max-height: 40px;">
            <ThemeFooter />
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>
<script>
// import Home from '@/views/Home'
import ThemeNavigation from '@/components/ThemeNavigation'
import ThemeSidebar from '@/components/ThemeSidebar'
import ThemeBreadCrumb from '@/components/ThemeBreadCrumb'
import ThemeFooter from '@/components/ThemeFooter'


export default {
  components: {
    ThemeNavigation, ThemeSidebar, ThemeBreadCrumb, ThemeFooter,
   
  }
}
</script>
