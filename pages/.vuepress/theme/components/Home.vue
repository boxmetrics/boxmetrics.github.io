<template>
  <main class="home" aria-labelledby="main-title">
    <header>
        <nav class="navbar flex-row">
            <div class="container inner-navbar flex-row desktop-nav">
                <router-link class="logo" :to="'/docs/getting-started'" :exact="true"><img src="/assets/images/boxmetrics-logo-full.png" width="150" alt="Logo boxmetrics"></router-link>
                <div class="nav-links flex-row">
                    <div>
                        <a href="#" class="link underlined">Features</a>
                        <a href="#" class="link underlined">Blog</a>          
                        <router-link class="link underlined" :to="'/docs/getting-started'" :exact="true">Docs</router-link>
                        <a href="https://github.com/boxmetrics" class="link underlined" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div class="user-links">
                        <a href="https://app.boxmetrics.io/auth/login" class="link login underlined" target="_blank" rel="noopener noreferrer">Login</a>
                        <a href="https://app.boxmetrics.io/auth/register" class="link register opacity-on-hover" target="_blank" rel="noopener noreferrer">Register</a>
                    </div>
                </div>
            </div>
            <div class="container inner-navbar flex-row mobile-nav">
                <router-link class="logo" :to="'/docs/getting-started'" :exact="true"><img src="/assets/images/boxmetrics-logo-full.png" width="150" alt="Logo boxmetrics"></router-link>
                <button class="nav-button">
                    <img class="icon-menu" src="/assets/images/icon-menu.png" width="22" alt="icon menu">
                    <img class="icon-close" src="/assets/images/icon-close.png" width="16" alt="icon close">
                </button>
                <div class="mobile-nav-links">
                    <div>
                        <a href="#" class="link">Features</a>
                        <a href="#" class="link">Blog</a>          
                        <router-link class="link" :to="'/docs/getting-started'" :exact="true">Docs</router-link>
                        <a href="https://github.com/boxmetrics" class="link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div class="user-links">
                        <a href="https://app.boxmetrics.io/auth/login" class="link login" target="_blank" rel="noopener noreferrer">Login</a>
                        <a href="https://app.boxmetrics.io/auth/register" class="link register opacity-on-hover" target="_blank" rel="noopener noreferrer">Register</a>
                    </div>
                </div>
            </div>
      </nav>
        <div class="container inner-header flex-row">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                        <div class="content">
                            <div class="title">
                                <h1>
                                    Servers monitoring and analytics tools
                                </h1>
                            </div>
                            <div class="subtitle">
                                boxmetrics is a set of services that allows you to monitor and
                                obtain informations on the health, availability and
                                performance of your servers
                            </div>
                            <div class="buttons flex-row">
                                <a href="https://app.boxmetrics.io/auth/register" class="link more opacity-on-hover">Get started</a>
                                <router-link class="link register opacity-on-hover" :to="'/docs/getting-started'" :exact="true">See documentation</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="preview">
                        <img src="/assets/images/boxmetrics-preview.png" width="100%" alt="boxmetrics dashboard preview">
                    </div>
                </div>
            </div>
      </div>
    </header>
  </main>
</template>

<script>
export default {
    mounted() {
        this.setMobileMenuEvents();
    },
    methods: {
        setMobileMenuEvents() {
            var navButton = document.querySelector(".nav-button");
            navButton.addEventListener("click", function() {
            var innerNavbar = document.querySelector(".mobile-nav");
                if (innerNavbar.classList) {
                    innerNavbar.classList.toggle("opened");
                } else {
                    var classes = innerNavbar.className.split(" ");
                    var i = classes.indexOf("opened");

                    if (i >= 0) {
                    classes.splice(i, 1);
                    } else {
                    classes.push("opened");
                    }
                    innerNavbar.className = classes.join(" ");
                }
            });
        }
    },
}
</script>

<style lang="stylus">
header
    height 100vh
    background-position right -120px bottom
    background-repeat no-repeat
    background-size cover
    a
        font-weight 400
    .inner-header
        height 100%
        div
            position relative
        .preview
            margin-bottom -90px
    .navbar
        width 100vw
        height 100px
        z-index 1040
        border none
        position relative
        padding 0
        -webkit-transition height 0.3s ease-out, background 0.3s ease-out,
    box-shadow 0.5s, left 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    -webkit-transform 0.5s
        transition height 0.3s ease-out, background 0.3s ease-out, transform 0.5s,
    box-shadow 0.5s, left 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)
        transition height 0.3s ease-out, background 0.3s ease-out, transform 0.5s,
    box-shadow 0.5s, left 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    -webkit-transform 0.5s
        box-shadow none
        .logo 
            display flex
        .nav-links
            display flex
            a
                color #303133
            .user-links
                margin-left 60px
                .register
                    border 2px solid #2874ed
                    border-radius 3px
                    padding 12px 28px
                    color #ffffff
                    background-color #2874ed
                    margin-right 20px
            .link
                &:not(:last-child)
                    margin-right 20px
        &.fixed
            .nav-links
                .user-links
                    .login
                        background-color transparent
                        color #556282
                        border-color #e7e7e7
                    .register
                        border-color #2874ed
                        color #ffffff
                        background-color #2874ed
        .mobile-nav
            .nav-button
                display flex
                align-items center
                justify-content center
                background none
                border none
                .icon-close
                    opacity 0
                    width 0
                    height 0
                    transition opacity 0.3s ease 0s
                    visibility hidden
            &.opened
                .nav-button
                    .icon-menu
                        opacity 0
                        width 0
                        height 0
                        transition opacity 0.3s ease 0s
                        visibility hidden
                    .icon-close
                        opacity 1
                        width 16px
                        height 16px
                        visibility visible
                .mobile-nav-links
                    height calc(100vh - 80px)
                    opacity 1
                    visibility inherit
                    height calc(100vh - 80px)
                    opacity 1
                    visibility inherit
            .mobile-nav-links
                position absolute
                width 100%
                font-size 18px
                padding 20px 5%
                background #ffffff
                bottom 0
                top 80px
                left 0px
                right 0px
                height 0px
                opacity 0
                transition all 0.3s ease 0s
                visibility hidden
                z-index 10
        .mobile-nav-links
            a 
                color #303133
            .link
                display block
                &:not(:last-child)
                    margin-bottom 20px
            .user-links
                margin-top 20px
    .inner-navbar
        justify-content space-between
        position fixed
        z-index 1040
        height 80px
        width 80%
        margin auto
    .buttons
        justify-content center
        .more
            border 2px solid #2874ed
            padding 14px 22px
            border-radius 3px
            color #ffffff
            background-color #2874ed
            margin-right 20px
        .register
            border 1px solid #b9c4d7
            padding 16px 22px
            border-radius 3px
            color #556282
            background-color transparent
    .intro
        max-width 860px
        margin auto
        margin-bottom 50px
        margin-top 160px
        text-align center
        .subtitle
            font-size 18px
            line-height 1.65
            color #556282
            width 90%
            margin-bottom 40px
            margin-right auto
            margin-left auto
        .description
            font-size 16px
            font-weight 500
            color #303133
            margin-bottom 40px

header .intro .title,
header .intro .title h1
    font-size 48px
    color #303133
    margin-top 0
    margin-bottom 12px
    font-weight 600

@media only screen and (max-width: 767.98px)
    header
        .inner-navbar
            width 100%
            padding 0 5%
            &.desktop-nav
                display none
        .intro
            margin-top 0 !important
            .subtitle
                font-size 16px
                margin-bottom 40px
                line-height initial
        .buttons
            flex-direction column
            margin-bottom 30px
            a
                width 100%
                margin 0
                margin-right 0 !important
                margin 0 !important
                text-align center !important
                &:not(:last-child)
                    margin-bottom 10px !important

@media only screen and (max-width: 767.98px)   
    header .intro .title,
    header .intro .title h1
        font-size 32px

@media only screen and (min-width: 768px)
    header
        .navbar
            .mobile-nav
                display none
</style>
