


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>purl/purl.js at master · allmarkedup/purl</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="allmarkedup/purl" name="twitter:title" /><meta content="purl - [NO LONGER MAINTAINED] A JS utility for for parsing URLs and extracting information out of them." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/126726?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/126726?v=3&amp;s=400" property="og:image" /><meta content="allmarkedup/purl" property="og:title" /><meta content="https://github.com/allmarkedup/purl" property="og:url" /><meta content="purl - [NO LONGER MAINTAINED] A JS utility for for parsing URLs and extracting information out of them." property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="6A330E7A:72CA:1BF04575:54E6E97F" name="octolytics-dimension-request_id" /><meta content="2443798" name="octolytics-actor-id" /><meta content="jsrraman" name="octolytics-actor-login" /><meta content="c7bc2321452e085d0ade192a9b398fc56aff61f8bc42d55698a9a02f8d41b0ce" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="B0JqvPuUYYVbEhUNXFJ9CO5Qm/z4W9aSGfS6BkLkYzmB151AGaBJBcYp/XsyIjCkPdFGaNA+4W6awdYyQkztJQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-554de21a71e1d82d8eb0c2e84b812ff1d19b151d6de024f3f4b02e60b2e40682.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-a34ea5f36919335b720f812ba66ac87065665d8d6d759d6f237e7129ba34edb6.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="94724f66361c1a35f71dc5387a9888b7">

      
  <meta name="description" content="purl - [NO LONGER MAINTAINED] A JS utility for for parsing URLs and extracting information out of them.">
  <meta name="go-import" content="github.com/allmarkedup/purl git https://github.com/allmarkedup/purl.git">

  <meta content="126726" name="octolytics-dimension-user_id" /><meta content="allmarkedup" name="octolytics-dimension-user_login" /><meta content="854624" name="octolytics-dimension-repository_id" /><meta content="allmarkedup/purl" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="854624" name="octolytics-dimension-repository_network_root_id" /><meta content="allmarkedup/purl" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/allmarkedup/purl/commits/master.atom" rel="alternate" title="Recent Commits to purl:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/allmarkedup/purl/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/allmarkedup/purl/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/jsrraman" data-ga-click="Header, go to profile, text:username">
      <img alt="Rajaraman" class="avatar" data-user="2443798" height="20" src="https://avatars0.githubusercontent.com/u/2443798?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">jsrraman</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="k/m3GO7jx9JyTOEjRyhzgKn4CTb3sQOsCqGKBc6+OCHMiKva96A86DBXXTum4MXRaIRoox9NZw3IBr31f4ULsA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="XEceuSlB8AxqZ0Tt083exIk0tYOV4nytraWLQZiKf1NyD3qYN6zw2G5yuSGZ0L6NGxKh+Dh9gpDLLmTyvJRNfw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="854624" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/allmarkedup/purl/watchers">
          99
        </a>
        <a href="/allmarkedup/purl/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>

  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/allmarkedup/purl/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ttpw1V5YJvvK6pobk8TRsaLiMvsJ0AOAyumNmLy80T2Rh2pfxabdkNWDuz2FysFDsKSBYbI2WN2kgAjxdOBE6Q==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar allmarkedup/purl">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/allmarkedup/purl/stargazers">
          1,698
        </a>
</form>
    <form accept-charset="UTF-8" action="/allmarkedup/purl/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0VgtZ6gDlE4gzM3e3ffeWww900jHicZTUzlV/deel9doQgrQOhqpWMolGCWGCI7VWtnSl5ardSMJUr6/LottHw==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star allmarkedup/purl">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/allmarkedup/purl/stargazers">
          1,698
        </a>
</form>  </div>

  </li>

        <li>
          <a href="/allmarkedup/purl/fork" class="minibutton with-count js-toggler-target tooltipped-n" title="Fork your own copy of allmarkedup/purl to your account" aria-label="Fork your own copy of allmarkedup/purl to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/allmarkedup/purl/network" class="social-count">388</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/allmarkedup" class="url fn" itemprop="url" rel="author"><span itemprop="title">allmarkedup</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/allmarkedup/purl" class="js-current-repository" data-pjax="#js-repo-pjax-container">purl</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/allmarkedup/purl/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/allmarkedup/purl" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /allmarkedup/purl">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/allmarkedup/purl/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /allmarkedup/purl/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/allmarkedup/purl/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /allmarkedup/purl/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/allmarkedup/purl/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /allmarkedup/purl/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/allmarkedup/purl/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /allmarkedup/purl/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/allmarkedup/purl.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:allmarkedup/purl.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/allmarkedup/purl" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/allmarkedup/purl" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save allmarkedup/purl to your computer and use it in GitHub Desktop." aria-label="Save allmarkedup/purl to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/allmarkedup/purl/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of allmarkedup/purl as a zip file"
                   title="Download the contents of allmarkedup/purl as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/allmarkedup/purl/blob/9e26fcec66b0d3a3f604503159d1af7a9aab3610/purl.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:30c34bc82f6a237789c992619bb1fcdd -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/allmarkedup/purl/blob/master/purl.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/allmarkedup/purl/blob/no-jquery/purl.js"
               data-name="no-jquery"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="no-jquery">
                no-jquery
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/allmarkedup/purl/tree/v2.3.1/purl.js"
                 data-name="v2.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.3.1">v2.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/allmarkedup/purl/tree/v2.3/purl.js"
                 data-name="v2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.3">v2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/allmarkedup/purl/tree/v2.2.1/purl.js"
                 data-name="v2.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2.1">v2.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/allmarkedup/purl/tree/v2.2/purl.js"
                 data-name="v2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2">v2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/allmarkedup/purl/tree/v2.0/purl.js"
                 data-name="v2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0">v2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/allmarkedup/purl/tree/v1.1/purl.js"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/allmarkedup/purl/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/allmarkedup/purl" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">purl</span></a></span></span><span class="separator">/</span><strong class="final-path">purl.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Matt Oates" class="avatar" data-user="1164696" height="24" src="https://avatars2.githubusercontent.com/u/1164696?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/MattOates" rel="contributor">MattOates</a></span>
        <time datetime="2013-08-13T16:03:34Z" is="relative-time">Aug 13, 2013</time>
        <div class="commit-title">
            <a href="/allmarkedup/purl/commit/c100b9feb4e5e22eca94b375e0df9f89568c36d5" class="message" data-pjax="true" title="Update purl.js

Added mappings for embed and object tags to be SVG friendly">Update purl.js</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>3</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="allmarkedup" href="/allmarkedup/purl/commits/master/purl.js?author=allmarkedup"><img alt="Mark Perkins" class="avatar" data-user="126726" height="20" src="https://avatars1.githubusercontent.com/u/126726?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joncotton" href="/allmarkedup/purl/commits/master/purl.js?author=joncotton"><img alt="Jon Cotton" class="avatar" data-user="375109" height="20" src="https://avatars3.githubusercontent.com/u/375109?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="MattOates" href="/allmarkedup/purl/commits/master/purl.js?author=MattOates"><img alt="Matt Oates" class="avatar" data-user="1164696" height="20" src="https://avatars0.githubusercontent.com/u/1164696?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Mark Perkins" data-user="126726" height="24" src="https://avatars3.githubusercontent.com/u/126726?v=3&amp;s=48" width="24" />
            <a href="/allmarkedup">allmarkedup</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jon Cotton" data-user="375109" height="24" src="https://avatars1.githubusercontent.com/u/375109?v=3&amp;s=48" width="24" />
            <a href="/joncotton">joncotton</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Matt Oates" data-user="1164696" height="24" src="https://avatars2.githubusercontent.com/u/1164696?v=3&amp;s=48" width="24" />
            <a href="/MattOates">MattOates</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-info">
        268 lines (227 sloc)
        <span class="file-info-divider"></span>
      8.83 kb
    </div>
    <div class="file-actions">
      <div class="button-group">
        <a href="/allmarkedup/purl/raw/master/purl.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/allmarkedup/purl/blame/master/purl.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/allmarkedup/purl/commits/master/purl.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
           href="http://mac.github.com"
           data-url="github-mac://openRepo/https://github.com/allmarkedup/purl?branch=master&amp;filepath=purl.js"
           aria-label="Open this file in GitHub for Mac"
           data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
               aria-label="Clicking this button will fork this project so you can edit the file"
               href="/allmarkedup/purl/edit/master/purl.js"
               data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger tooltipped tooltipped-s"
             href="/allmarkedup/purl/delete/master/purl.js"
             aria-label="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
        <span class="octicon octicon-trashcan"></span>
      </a>
    </div><!-- /.actions -->
  </div>
  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * Purl (A JavaScript URL parser) v2.3.1</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * Developed and maintanined by Mark Perkins, mark@allmarkedup.com</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">;(<span class="pl-st">function</span>(<span class="pl-vpf">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> define.amd) {</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">        define(factory);</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">        <span class="pl-s3">window</span>.purl <span class="pl-k">=</span> factory();</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">})(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">    <span class="pl-s">var</span> tag2attr <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">            a       <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">            img     <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">            form    <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>action<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">            base    <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">            script  <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">            iframe  <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">            link    <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">            embed   <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">            object  <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>data<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">        key <span class="pl-k">=</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>source<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>protocol<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>authority<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>userInfo<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>user<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>password<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>host<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>port<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>relative<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>path<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>directory<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>file<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>query<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>fragment<span class="pl-pds">&#39;</span></span>], <span class="pl-c">// keys available to query</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">        aliases <span class="pl-k">=</span> { <span class="pl-s1"><span class="pl-pds">&#39;</span>anchor<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fragment<span class="pl-pds">&#39;</span></span> }, <span class="pl-c">// aliases for backwards compatability</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">        parser <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">            strict <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(?:(<span class="pl-c1">[<span class="pl-k">^</span>:<span class="pl-cce">\/</span>?#]</span><span class="pl-k">+</span>):)<span class="pl-k">?</span>(?:<span class="pl-cce">\/\/</span>((?:((<span class="pl-c1">[<span class="pl-k">^</span>:@]</span><span class="pl-k">*</span>):<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-k">^</span>:@]</span><span class="pl-k">*</span>))<span class="pl-k">?</span>@)<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-k">^</span>:<span class="pl-cce">\/</span>?#]</span><span class="pl-k">*</span>)(?::(<span class="pl-c1">\d</span><span class="pl-k">*</span>))<span class="pl-k">?</span>))<span class="pl-k">?</span>((((?:<span class="pl-c1">[<span class="pl-k">^</span>?#<span class="pl-cce">\/</span>]</span><span class="pl-k">*</span><span class="pl-cce">\/</span>)<span class="pl-k">*</span>)(<span class="pl-c1">[<span class="pl-k">^</span>?#]</span><span class="pl-k">*</span>))(?:<span class="pl-cce">\?</span>(<span class="pl-c1">[<span class="pl-k">^</span>#]</span><span class="pl-k">*</span>))<span class="pl-k">?</span>(?:#(<span class="pl-c1">.</span><span class="pl-k">*</span>))<span class="pl-k">?</span>)<span class="pl-pds">/</span></span>,  <span class="pl-c">//less intuitive, more accurate to the specs</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">            loose <span class="pl-k">:</span><span class="pl-sr">  <span class="pl-pds">/</span><span class="pl-k">^</span>(?:(?!<span class="pl-c1">[<span class="pl-k">^</span>:@]</span><span class="pl-k">+</span>:<span class="pl-c1">[<span class="pl-k">^</span>:@<span class="pl-cce">\/</span>]</span><span class="pl-k">*</span>@)(<span class="pl-c1">[<span class="pl-k">^</span>:<span class="pl-cce">\/</span>?#<span class="pl-c1">.</span>]</span><span class="pl-k">+</span>):)<span class="pl-k">?</span>(?:<span class="pl-cce">\/\/</span>)<span class="pl-k">?</span>((?:((<span class="pl-c1">[<span class="pl-k">^</span>:@]</span><span class="pl-k">*</span>):<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-k">^</span>:@]</span><span class="pl-k">*</span>))<span class="pl-k">?</span>@)<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-k">^</span>:<span class="pl-cce">\/</span>?#]</span><span class="pl-k">*</span>)(?::(<span class="pl-c1">\d</span><span class="pl-k">*</span>))<span class="pl-k">?</span>)(((<span class="pl-cce">\/</span>(?:<span class="pl-c1">[<span class="pl-k">^</span>?#]</span>(?!<span class="pl-c1">[<span class="pl-k">^</span>?#<span class="pl-cce">\/</span>]</span><span class="pl-k">*</span><span class="pl-cce">\.</span><span class="pl-c1">[<span class="pl-k">^</span>?#<span class="pl-cce">\/</span><span class="pl-c1">.</span>]</span><span class="pl-k">+</span>(?:<span class="pl-c1">[?#]</span><span class="pl-k">|</span><span class="pl-k">$</span>)))<span class="pl-k">*</span><span class="pl-cce">\/</span><span class="pl-k">?</span>)<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-k">^</span>?#<span class="pl-cce">\/</span>]</span><span class="pl-k">*</span>))(?:<span class="pl-cce">\?</span>(<span class="pl-c1">[<span class="pl-k">^</span>#]</span><span class="pl-k">*</span>))<span class="pl-k">?</span>(?:#(<span class="pl-c1">.</span><span class="pl-k">*</span>))<span class="pl-k">?</span>)<span class="pl-pds">/</span></span> <span class="pl-c">// more intuitive, fails on relative paths and deviates from specs</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">        isint <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">parseUri</span>( <span class="pl-vpf">url</span>, <span class="pl-vpf">strictMode</span> ) {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">        <span class="pl-s">var</span> str <span class="pl-k">=</span> decodeURI( url ),</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">        res   <span class="pl-k">=</span> parser[ strictMode <span class="pl-k">||</span> <span class="pl-c1">false</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>strict<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>loose<span class="pl-pds">&#39;</span></span> ].<span class="pl-s3">exec</span>( str ),</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">        uri <span class="pl-k">=</span> { attr <span class="pl-k">:</span> {}, param <span class="pl-k">:</span> {}, seg <span class="pl-k">:</span> {} },</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">        i   <span class="pl-k">=</span> <span class="pl-c1">14</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">        <span class="pl-k">while</span> ( i<span class="pl-k">--</span> ) {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">            uri.attr[ key[i] ] <span class="pl-k">=</span> res[i] <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">        <span class="pl-c">// build query and fragment parameters</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">        uri.param[<span class="pl-s1"><span class="pl-pds">&#39;</span>query<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> parseString(uri.attr[<span class="pl-s1"><span class="pl-pds">&#39;</span>query<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">        uri.param[<span class="pl-s1"><span class="pl-pds">&#39;</span>fragment<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> parseString(uri.attr[<span class="pl-s1"><span class="pl-pds">&#39;</span>fragment<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">        <span class="pl-c">// split path and fragement into segments</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">        uri.seg[<span class="pl-s1"><span class="pl-pds">&#39;</span>path<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> uri.attr.path.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-cce">\/</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">        uri.seg[<span class="pl-s1"><span class="pl-pds">&#39;</span>fragment<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> uri.attr.fragment.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-cce">\/</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">        <span class="pl-c">// compile a &#39;base&#39; domain attribute</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">        uri.attr[<span class="pl-s1"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> uri.attr.<span class="pl-sc">host</span> <span class="pl-k">?</span> (uri.attr.<span class="pl-sc">protocol</span> <span class="pl-k">?</span>  uri.attr.<span class="pl-sc">protocol</span><span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>://<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>uri.attr.<span class="pl-sc">host</span> <span class="pl-k">:</span> uri.attr.<span class="pl-sc">host</span>) <span class="pl-k">+</span> (uri.attr.<span class="pl-sc">port</span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>uri.attr.<span class="pl-sc">port</span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">        <span class="pl-k">return</span> uri;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">getAttrName</span>( <span class="pl-vpf">elm</span> ) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">        <span class="pl-s">var</span> tn <span class="pl-k">=</span> elm.<span class="pl-sc">tagName</span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">        <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> tn <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">return</span> tag2attr[tn.<span class="pl-s3">toLowerCase</span>()];</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">        <span class="pl-k">return</span> tn;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">promote</span>(<span class="pl-vpf">parent</span>, <span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">        <span class="pl-k">if</span> (parent[key].<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) <span class="pl-k">return</span> parent[key] <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">        <span class="pl-s">var</span> t <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">        <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">in</span> parent[key]) t[i] <span class="pl-k">=</span> parent[key][i];</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">        parent[key] <span class="pl-k">=</span> t;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">        <span class="pl-k">return</span> t;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">parse</span>(<span class="pl-vpf">parts</span>, <span class="pl-vpf">parent</span>, <span class="pl-vpf">key</span>, <span class="pl-vpf">val</span>) {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">        <span class="pl-s">var</span> part <span class="pl-k">=</span> parts.<span class="pl-s3">shift</span>();</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>part) {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">            <span class="pl-k">if</span> (isArray(parent[key])) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">                parent[key].<span class="pl-s3">push</span>(val);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> parent[key]) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">                parent[key] <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> parent[key]) {</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">                parent[key] <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">                parent[key] <span class="pl-k">=</span> [parent[key], val];</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">            <span class="pl-s">var</span> obj <span class="pl-k">=</span> parent[key] <span class="pl-k">=</span> parent[key] <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span> <span class="pl-k">==</span> part) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">                <span class="pl-k">if</span> (isArray(obj)) {</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">                    <span class="pl-k">if</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">!==</span> val) obj.<span class="pl-s3">push</span>(val);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">                } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> obj) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">                    obj[keys(obj).<span class="pl-sc">length</span>] <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">                    obj <span class="pl-k">=</span> parent[key] <span class="pl-k">=</span> [parent[key], val];</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">~</span>part.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">                part <span class="pl-k">=</span> part.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>, part.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>isint.<span class="pl-s3">test</span>(part) <span class="pl-k">&amp;&amp;</span> isArray(obj)) obj <span class="pl-k">=</span> promote(parent, key);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">                <span class="pl-s3">parse</span>(parts, obj, part, val);</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">                <span class="pl-c">// key</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>isint.<span class="pl-s3">test</span>(part) <span class="pl-k">&amp;&amp;</span> isArray(obj)) obj <span class="pl-k">=</span> promote(parent, key);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">                <span class="pl-s3">parse</span>(parts, obj, part, val);</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">merge</span>(<span class="pl-vpf">parent</span>, <span class="pl-vpf">key</span>, <span class="pl-vpf">val</span>) {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">~</span>key.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">            <span class="pl-s">var</span> parts <span class="pl-k">=</span> key.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">            <span class="pl-s3">parse</span>(parts, parent, <span class="pl-s1"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span>, val);</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>isint.<span class="pl-s3">test</span>(key) <span class="pl-k">&amp;&amp;</span> isArray(parent.base)) {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">                <span class="pl-s">var</span> t <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">                <span class="pl-k">for</span> (<span class="pl-s">var</span> k <span class="pl-k">in</span> parent.base) t[k] <span class="pl-k">=</span> parent.base[k];</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">                parent.base <span class="pl-k">=</span> t;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">            <span class="pl-k">if</span> (key <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">                set(parent.base, key, val);</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">        <span class="pl-k">return</span> parent;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">parseString</span>(<span class="pl-vpf">str</span>) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">        <span class="pl-k">return</span> reduce(<span class="pl-s3">String</span>(str).<span class="pl-s3">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>&amp;<span class="pl-k">|</span>;<span class="pl-pds">/</span></span>), <span class="pl-st">function</span>(<span class="pl-vpf">ret</span>, <span class="pl-vpf">pair</span>) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">            <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">                pair <span class="pl-k">=</span> decodeURIComponent(pair.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">            } <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">                <span class="pl-c">// ignore</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">            <span class="pl-s">var</span> eql <span class="pl-k">=</span> pair.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">                brace <span class="pl-k">=</span> lastBraceInKey(pair),</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">                key <span class="pl-k">=</span> pair.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>, brace <span class="pl-k">||</span> eql),</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">                val <span class="pl-k">=</span> pair.<span class="pl-s3">substr</span>(brace <span class="pl-k">||</span> eql, pair.<span class="pl-sc">length</span>);</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">            val <span class="pl-k">=</span> val.<span class="pl-s3">substr</span>(val.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>, val.<span class="pl-sc">length</span>);</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">            <span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">                key <span class="pl-k">=</span> pair;</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">                val <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">            <span class="pl-k">return</span> merge(ret, key, val);</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">        }, { base<span class="pl-k">:</span> {} }).base;</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">set</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">key</span>, <span class="pl-vpf">val</span>) {</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">        <span class="pl-s">var</span> v <span class="pl-k">=</span> obj[key];</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> v <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">            obj[key] <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (isArray(v)) {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">            v.<span class="pl-s3">push</span>(val);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">            obj[key] <span class="pl-k">=</span> [v, val];</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">lastBraceInKey</span>(<span class="pl-vpf">str</span>) {</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">        <span class="pl-s">var</span> len <span class="pl-k">=</span> str.<span class="pl-sc">length</span>,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">            brace,</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">            c;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">        <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> len; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">            c <span class="pl-k">=</span> str[i];</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span> <span class="pl-k">==</span> c) brace <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span> <span class="pl-k">==</span> c) brace <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-s1"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span> <span class="pl-k">==</span> c <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>brace) <span class="pl-k">return</span> i;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">reduce</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">accumulator</span>){</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">        <span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">            l <span class="pl-k">=</span> obj.<span class="pl-sc">length</span> <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">            curr <span class="pl-k">=</span> arguments[<span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">        <span class="pl-k">while</span> (i <span class="pl-k">&lt;</span> l) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">            <span class="pl-k">if</span> (i <span class="pl-k">in</span> obj) curr <span class="pl-k">=</span> accumulator.<span class="pl-s3">call</span>(<span class="pl-c1">undefined</span>, curr, obj[i], i, obj);</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">            <span class="pl-k">++</span>i;</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">        <span class="pl-k">return</span> curr;</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">isArray</span>(<span class="pl-vpf">vArg</span>) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-s3">Object</span>.<span class="pl-sc">prototype</span>.toString.<span class="pl-s3">call</span>(vArg) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>[object Array]<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">keys</span>(<span class="pl-vpf">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">        <span class="pl-s">var</span> key_array <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">        <span class="pl-k">for</span> ( <span class="pl-s">var</span> prop <span class="pl-k">in</span> obj ) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">            <span class="pl-k">if</span> ( obj.hasOwnProperty(prop) ) key_array.<span class="pl-s3">push</span>(prop);</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">        <span class="pl-k">return</span> key_array;</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">purl</span>( <span class="pl-vpf">url</span>, <span class="pl-vpf">strictMode</span> ) {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">        <span class="pl-k">if</span> ( arguments.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> url <span class="pl-k">===</span> <span class="pl-c1">true</span> ) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">            strictMode <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">            url <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">        strictMode <span class="pl-k">=</span> strictMode <span class="pl-k">||</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">        url <span class="pl-k">=</span> url <span class="pl-k">||</span> <span class="pl-s3">window</span>.<span class="pl-sc">location</span>.<span class="pl-s3">toString</span>();</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">        <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">            data <span class="pl-k">:</span> parseUri(url, strictMode),</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">            <span class="pl-c">// get various attributes from the URI</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">            <span class="pl-en">attr</span> : <span class="pl-st">function</span>( <span class="pl-vpf">attr</span> ) {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">                attr <span class="pl-k">=</span> aliases[attr] <span class="pl-k">||</span> attr;</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-k">typeof</span> attr <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.attr[attr] <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.attr;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">            <span class="pl-c">// return query string parameters</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">            <span class="pl-en">param</span> : <span class="pl-st">function</span>( <span class="pl-vpf">param</span> ) {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-k">typeof</span> param <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.param.query[param] <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.param.query;</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">            <span class="pl-c">// return fragment parameters</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">            <span class="pl-en">fparam</span> : <span class="pl-st">function</span>( <span class="pl-vpf">param</span> ) {</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">                <span class="pl-k">return</span> <span class="pl-k">typeof</span> param <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.param.fragment[param] <span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.param.fragment;</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">            <span class="pl-c">// return path segments</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">            <span class="pl-en">segment</span> : <span class="pl-st">function</span>( <span class="pl-vpf">seg</span> ) {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">                <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> seg <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">                    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.seg.path;</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">                    seg <span class="pl-k">=</span> seg <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.seg.path.<span class="pl-sc">length</span> <span class="pl-k">+</span> seg <span class="pl-k">:</span> seg <span class="pl-k">-</span> <span class="pl-c1">1</span>; <span class="pl-c">// negative segments count from the end</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">                    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.seg.path[seg];</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">            <span class="pl-c">// return fragment segments</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">            <span class="pl-en">fsegment</span> : <span class="pl-st">function</span>( <span class="pl-vpf">seg</span> ) {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">                <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> seg <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">                    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.seg.fragment;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">                    seg <span class="pl-k">=</span> seg <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.seg.fragment.<span class="pl-sc">length</span> <span class="pl-k">+</span> seg <span class="pl-k">:</span> seg <span class="pl-k">-</span> <span class="pl-c1">1</span>; <span class="pl-c">// negative segments count from the end</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">                    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">data</span>.seg.fragment[seg];</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">    <span class="pl-s3">purl</span>.<span class="pl-en">jQuery</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">$</span>){</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">        <span class="pl-k">if</span> ($ <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">            <span class="pl-s3">$.fn</span>.<span class="pl-en">url</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">strictMode</span> ) {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">                <span class="pl-s">var</span> url <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">                <span class="pl-k">if</span> ( <span class="pl-v">this</span>.<span class="pl-sc">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">                    url <span class="pl-k">=</span> $(<span class="pl-v">this</span>).attr( getAttrName(<span class="pl-v">this</span>[<span class="pl-c1">0</span>]) ) <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">                <span class="pl-k">return</span> purl( url, strictMode );</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">            $.url <span class="pl-k">=</span> purl;</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">    purl.jQuery(<span class="pl-s3">window</span>.jQuery);</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">    <span class="pl-k">return</span> purl;</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="http://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="http://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05497s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-9643b0378c6bcb216adcdaaaa703eed77aa239aaf1c2ae44cadb2fb5099ec172.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-df43b1353e973de5b95b33142ab31dd9a7e86649b0e2d09a2ce4f3ce6bb0d2a4.js"></script>
      
      

  </body>
</html>

