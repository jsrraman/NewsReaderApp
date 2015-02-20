


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jquery-mobile-iscrollview/jquery.mobile.iscrollview.js at master · watusi/jquery-mobile-iscrollview</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="watusi/jquery-mobile-iscrollview" name="twitter:title" /><meta content="jquery-mobile-iscrollview - JQuery Mobile widget plug-in for easy use of the iScroll javascript scroller." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/1042704?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/1042704?v=3&amp;s=400" property="og:image" /><meta content="watusi/jquery-mobile-iscrollview" property="og:title" /><meta content="https://github.com/watusi/jquery-mobile-iscrollview" property="og:url" /><meta content="jquery-mobile-iscrollview - JQuery Mobile widget plug-in for easy use of the iScroll javascript scroller." property="og:description" />
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

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="6A330E7A:72C7:2A75CD5C:54E6942B" name="octolytics-dimension-request_id" /><meta content="2443798" name="octolytics-actor-id" /><meta content="jsrraman" name="octolytics-actor-login" /><meta content="c7bc2321452e085d0ade192a9b398fc56aff61f8bc42d55698a9a02f8d41b0ce" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="onGUkMSr21qO2TQ5VPeChJTfxvHf0pA8WZTG4TWcm0YmsE5iBrwSIpCDwMX1aPYAq2N8WDLxzfjiQNgOhtvBvQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-5babf25e3161fe5231c33e09fef433d57ceb643fe0850efd515f6139e9a2419b.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-a34ea5f36919335b720f812ba66ac87065665d8d6d759d6f237e7129ba34edb6.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="c37e13d674ae404af2a6b94216ec321a">

      
  <meta name="description" content="jquery-mobile-iscrollview - JQuery Mobile widget plug-in for easy use of the iScroll javascript scroller.">
  <meta name="go-import" content="github.com/watusi/jquery-mobile-iscrollview git https://github.com/watusi/jquery-mobile-iscrollview.git">

  <meta content="1042704" name="octolytics-dimension-user_id" /><meta content="watusi" name="octolytics-dimension-user_login" /><meta content="3987791" name="octolytics-dimension-repository_id" /><meta content="watusi/jquery-mobile-iscrollview" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3987791" name="octolytics-dimension-repository_network_root_id" /><meta content="watusi/jquery-mobile-iscrollview" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/watusi/jquery-mobile-iscrollview/commits/master.atom" rel="alternate" title="Recent Commits to jquery-mobile-iscrollview:master" type="application/atom+xml">

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
          <form accept-charset="UTF-8" action="/watusi/jquery-mobile-iscrollview/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/watusi/jquery-mobile-iscrollview/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
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


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="watusi/jquery-mobile-iscrollview">This repository</span>
    </li>
      <li>
        <a href="/watusi/jquery-mobile-iscrollview/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
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
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9dgGHXvVGiTSsLhgvy9O8u7GALuZLKSN3iwZeAsLqjNp2dVTIWqT1qqNbJSGozv2nFRzH1yByatoWgmqLREN6w==" /></div>
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
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yOp/fIHoqn9ca/9rJW44NG3LgtDKn46zMZO8h51TEltwQlf7x8ll/BIzPNA1V7zL+xmhX59pML4WzdAFDH3uXw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="3987791" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/watusi/jquery-mobile-iscrollview/watchers">
          71
        </a>
        <a href="/watusi/jquery-mobile-iscrollview/subscription"
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

    <form accept-charset="UTF-8" action="/watusi/jquery-mobile-iscrollview/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bJ+AFY8StcRa+HyoKXM8ssbVVmiCusGb+1wKI2sjagL2MYcjHM36iCFeHEUR8I6FgvZN2LXN1v7ZumVvvVyRsg==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar watusi/jquery-mobile-iscrollview">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/watusi/jquery-mobile-iscrollview/stargazers">
          388
        </a>
</form>
    <form accept-charset="UTF-8" action="/watusi/jquery-mobile-iscrollview/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="D63El00Rz0dF80EG7wmoouo+Q2Wx0xOwEaEP2p0grNEO2YRROl5G8ORLpSJdJBDbpKwdoNQXor/azh1XCBZ3Mw==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star watusi/jquery-mobile-iscrollview">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/watusi/jquery-mobile-iscrollview/stargazers">
          388
        </a>
</form>  </div>

  </li>

        <li>
          <a href="/watusi/jquery-mobile-iscrollview/fork" class="minibutton with-count js-toggler-target tooltipped-n" title="Fork your own copy of watusi/jquery-mobile-iscrollview to your account" aria-label="Fork your own copy of watusi/jquery-mobile-iscrollview to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/watusi/jquery-mobile-iscrollview/network" class="social-count">180</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/watusi" class="url fn" itemprop="url" rel="author"><span itemprop="title">watusi</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/watusi/jquery-mobile-iscrollview" class="js-current-repository" data-pjax="#js-repo-pjax-container">jquery-mobile-iscrollview</a></strong>

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
     data-issue-count-url="/watusi/jquery-mobile-iscrollview/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/watusi/jquery-mobile-iscrollview" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /watusi/jquery-mobile-iscrollview">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/watusi/jquery-mobile-iscrollview/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /watusi/jquery-mobile-iscrollview/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/watusi/jquery-mobile-iscrollview/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /watusi/jquery-mobile-iscrollview/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/watusi/jquery-mobile-iscrollview/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /watusi/jquery-mobile-iscrollview/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/watusi/jquery-mobile-iscrollview/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /watusi/jquery-mobile-iscrollview/graphs">
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
           value="https://github.com/watusi/jquery-mobile-iscrollview.git" readonly="readonly">
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
           value="git@github.com:watusi/jquery-mobile-iscrollview.git" readonly="readonly">
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
           value="https://github.com/watusi/jquery-mobile-iscrollview" readonly="readonly">
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

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/watusi/jquery-mobile-iscrollview" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save watusi/jquery-mobile-iscrollview to your computer and use it in GitHub Desktop." aria-label="Save watusi/jquery-mobile-iscrollview to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/watusi/jquery-mobile-iscrollview/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of watusi/jquery-mobile-iscrollview as a zip file"
                   title="Download the contents of watusi/jquery-mobile-iscrollview as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/watusi/jquery-mobile-iscrollview/blob/f964a2fa7f430ba897806429cab4246cf6bfd253/demo/build/javascripts/jquery.mobile.iscrollview.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5e2c66e04b2c08463c50ae1de35675e9 -->

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
               href="/watusi/jquery-mobile-iscrollview/blob/master/demo/build/javascripts/jquery.mobile.iscrollview.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/v1.1/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/v1.0/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.3.6/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.3.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.6">1.3.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.3.5/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.3.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.5">1.3.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.3.4/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.3.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.4">1.3.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.3.3/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.3">1.3.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.3.2/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.2">1.3.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.3.1/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.1">1.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.3.0/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2pre2/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2pre2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2pre2">1.2pre2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2pre1/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2pre1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2pre1">1.2pre1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.9/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.9">1.2.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1_2_8/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1_2_8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1_2_8">1_2_8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.8/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.8">1.2.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.7/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.7">1.2.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.6/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.6">1.2.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.5/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.5">1.2.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.4/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.4">1.2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.3/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.3">1.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.2/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.2">1.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2.1/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.1">1.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/watusi/jquery-mobile-iscrollview/tree/1.2/demo/build/javascripts/jquery.mobile.iscrollview.js"
                 data-name="1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2">1.2</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/watusi/jquery-mobile-iscrollview/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/watusi/jquery-mobile-iscrollview" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery-mobile-iscrollview</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/watusi/jquery-mobile-iscrollview/tree/master/demo" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">demo</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/watusi/jquery-mobile-iscrollview/tree/master/demo/build" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">build</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/watusi/jquery-mobile-iscrollview/tree/master/demo/build/javascripts" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">javascripts</span></a></span><span class="separator">/</span><strong class="final-path">jquery.mobile.iscrollview.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="" class="avatar" height="24" src="https://2.gravatar.com/avatar/a234d414eef67f6b9e1510d1187f4d98?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
        <span class="author"><span>Jon Tara</span></span>
        <time datetime="2013-11-09T14:10:46Z" is="relative-time">Nov 9, 2013</time>
        <div class="commit-title">
            <a href="/watusi/jquery-mobile-iscrollview/commit/5c9a3c9c5e9e3cfc89bd8072fcf9148ba2deaf41" class="message" data-pjax="true" title="Removed unneeded and confusing data-ajax=&quot;false&quot; from fast click links in demo">Removed unneeded and confusing data-ajax="false" from fast click link…</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>0</strong>
           contributors
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-info">
        1936 lines (1686 sloc)
        <span class="file-info-divider"></span>
      84.414 kb
    </div>
    <div class="file-actions">
      <div class="button-group">
        <a href="/watusi/jquery-mobile-iscrollview/raw/master/demo/build/javascripts/jquery.mobile.iscrollview.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/watusi/jquery-mobile-iscrollview/blame/master/demo/build/javascripts/jquery.mobile.iscrollview.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/watusi/jquery-mobile-iscrollview/commits/master/demo/build/javascripts/jquery.mobile.iscrollview.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
           href="http://mac.github.com"
           data-url="github-mac://openRepo/https://github.com/watusi/jquery-mobile-iscrollview?branch=master&amp;filepath=demo%2Fbuild%2Fjavascripts%2Fjquery.mobile.iscrollview.js"
           aria-label="Open this file in GitHub for Mac"
           data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
               aria-label="Clicking this button will fork this project so you can edit the file"
               href="/watusi/jquery-mobile-iscrollview/edit/master/demo/build/javascripts/jquery.mobile.iscrollview.js"
               data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger tooltipped tooltipped-s"
             href="/watusi/jquery-mobile-iscrollview/delete/master/demo/build/javascripts/jquery.mobile.iscrollview.js"
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
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/******************************************************************************</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c">  jslint directives. In case you hate yourself, and need that reinforced...</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c">  You will still get a few warnings that can&#39;t be turned off, or that I&#39;m just</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c">  too stubborn to &quot;fix&quot;</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c">  sloppy, white: let me indent any way I damn please! I like to line things</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c">                 up nice and purty.</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c">  nomen: tolerate leading _ for variable names. Leading _ is a requirement for</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c">         JQuery Widget Factory private members</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c">*******************************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="pl-c">/*jslint browser: true, sloppy: true, white: true, nomen: true, regexp: true, todo: true,</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="pl-c">maxerr: 50, indent: 2 */</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="pl-c">/*global jQuery:false, iScroll:false, console:false, Event:false*/</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="pl-c">/*******************************************************************************</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"><span class="pl-c">  But instead, be kind to yourself, and use jshint.</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"><span class="pl-c">  Note jshint nomen and white options are opposite of jslint</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line"><span class="pl-c">  You can&#39;t specify an indent of you use white: false, otherwise it will</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line"><span class="pl-c">  still complain</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line"><span class="pl-c">*******************************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line"><span class="pl-c">/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true,</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line"><span class="pl-c">curly:true, browser:true, jquery:true, indent:2, maxerr:50, sloppy:true, white:false, nomen:false,</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line"><span class="pl-c">regexp:false, todo:true */</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line"><span class="pl-c">jquery.mobile.iscrollview.js</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line"><span class="pl-c">Version: 1.3.6</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line"><span class="pl-c">jQuery Mobile iScroll4 view widget</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line"><span class="pl-c">Copyright (c), 2012, 2013 Watusiware Corporation</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line"><span class="pl-c">Distributed under the MIT License</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line"><span class="pl-c">Permission is hereby granted, free of charge, to any person obtaining a copy of this</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line"><span class="pl-c">software and associated documentation files (the &quot;Software&quot;), to deal in the Software</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line"><span class="pl-c">without restriction, including without limitation the rights to use, copy, modify,</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line"><span class="pl-c">merge, publish, distribute, sublicense, and/or sell copies of the Software, and to</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line"><span class="pl-c">permit persons to whom the Software is furnished to do so, subject to the following</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line"><span class="pl-c">conditions: NO ADDITIONAl CONDITIONS.</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line"><span class="pl-c">The above copyright notice and this permission notice shall be included in all copies</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line"><span class="pl-c">or substantial portions of the Software.</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line"><span class="pl-c">THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line"><span class="pl-c">INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line"><span class="pl-c">PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line"><span class="pl-c">FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line"><span class="pl-c">OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line"><span class="pl-c">DEALINGS IN THE SOFTWARE.</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line"><span class="pl-c">Derived in part from jquery.mobile.iscroll.js:</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line"><span class="pl-c">Portions Copyright (c) Kazuhiro Osawa</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line"><span class="pl-c">Dual licensed under the MIT or GPL Version 2 licenses.</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line"><span class="pl-c">Derived in part from (jQuery mobile) jQuery UI Widget-factory</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line"><span class="pl-c">plugin boilerplate (for 1.8/9+)</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line"><span class="pl-c">Author: @scottjehl</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line"><span class="pl-c">Further changes: @addyosmani</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line"><span class="pl-c">Licensed under the MIT license</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line"><span class="pl-c">dependency:  iScroll 4.1.9 https://github.com/cubiq/iscroll or later (4.2 provided in demo)</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line"><span class="pl-c">             jQuery - see jQuery Mobile documentation, depends on JQM version</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line"><span class="pl-c">             JQuery Mobile = 1.0.1 through 1.3.1</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">;   <span class="pl-c">// Ignore jslint/jshint warning - for safety - terminate previous file if unterminated</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line"><span class="pl-c">// Prevent annoying &quot;layerX/Y is deprecated&quot; console messages when running in some Webkit browsers</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line"><span class="pl-c">// See also _doCallback() function.</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line"><span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line"><span class="pl-c">// This needs to be a global function, (well, outside of the widget self-invoking function, anyway),</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line"><span class="pl-c">// because this code will generate warnings (&quot;cannot delete&quot;) if executed  within a strict function.</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line"><span class="pl-c">// The warnings are not generated, though, if executed within a non-strict function CALLED from a</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line"><span class="pl-c">// strict function.</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line"><span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line"><span class="pl-c">// (Other than this little bit, the entirety of this widget is strict.)</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">jqmIscrollviewRemoveLayerXYProps</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">  <span class="pl-k">delete</span> e.<span class="pl-sc">layerX</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">  <span class="pl-k">delete</span> e.layerY;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">}</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">(<span class="pl-st">function</span> (<span class="pl-vpf">$</span>, <span class="pl-vpf">window</span>, <span class="pl-vpf">document</span>, <span class="pl-vpf">undefined</span>) {   <span class="pl-c">/* Ignore jslint warning on &quot;undefined&quot; */</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">   <span class="pl-s1"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;    <span class="pl-c">// Comment this out whilst debugging with Safari Web Inspector</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">                    <span class="pl-c">// Otherwise, you will not be able to see variables when stopped at breakpoints</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">  <span class="pl-c">//----------------------------------</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">  <span class="pl-c">// &quot;class constants&quot;</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">  <span class="pl-c">//----------------------------------</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">  <span class="pl-s">var</span> HasTouch <span class="pl-k">=</span> <span class="pl-s3">document</span>.ontouchend <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>,</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">      IsWebkit <span class="pl-k">=</span>  (<span class="pl-sr"><span class="pl-pds">/</span>webkit<span class="pl-pds">/</span>i</span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>),</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">      IsAndroid <span class="pl-k">=</span> (<span class="pl-sr"><span class="pl-pds">/</span>android<span class="pl-pds">/</span>gi</span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>),</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">      IsFirefox <span class="pl-k">=</span> (<span class="pl-sr"><span class="pl-pds">/</span>firefox<span class="pl-pds">/</span>i</span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">userAgent</span>),</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">      IsTouchPad <span class="pl-k">=</span> (<span class="pl-sr"><span class="pl-pds">/</span>hp-tablet<span class="pl-pds">/</span>gi</span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>),</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">      IsIDevice <span class="pl-k">=</span> (<span class="pl-sr"><span class="pl-pds">/</span>(iPhone<span class="pl-k">|</span>iPad<span class="pl-k">|</span>iPod)<span class="pl-c1">.</span><span class="pl-k">*</span>AppleWebKit<span class="pl-pds">/</span></span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>),</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">      IsIPad <span class="pl-k">=</span> (<span class="pl-sr"><span class="pl-pds">/</span>iPad<span class="pl-c1">.</span><span class="pl-k">*</span>AppleWebKit<span class="pl-pds">/</span></span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>),</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">      <span class="pl-c">// IDevice running Mobile Safari - not embedded UIWebKit or Standalone (= saved to desktop)</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">      IsMobileSafari <span class="pl-k">=</span> (<span class="pl-sr"><span class="pl-pds">/</span>(iPhone<span class="pl-k">|</span>iPad<span class="pl-k">|</span>iPod)<span class="pl-c1">.</span><span class="pl-k">*</span>AppleWebKit<span class="pl-c1">.</span><span class="pl-k">*</span>Safari<span class="pl-pds">/</span></span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>),</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">      <span class="pl-c">// IDevice native app using embedded UIWebView</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">      IsUIWebView <span class="pl-k">=</span> (<span class="pl-sr"><span class="pl-pds">/</span>(iPhone<span class="pl-k">|</span>iPad<span class="pl-k">|</span>iPod)<span class="pl-c1">.</span><span class="pl-k">*</span>AppleWebKit<span class="pl-c1">.</span>(?!<span class="pl-c1">.</span><span class="pl-k">*</span>Safari)<span class="pl-pds">/</span></span>).<span class="pl-s3">test</span>(<span class="pl-s3">navigator</span>.<span class="pl-sc">appVersion</span>),</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">      <span class="pl-c">// Standalone is when running a website saved to the desktop (SpringBoard)</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">      IsIDeviceStandalone <span class="pl-k">=</span> IsIDevice <span class="pl-k">&amp;&amp;</span> (<span class="pl-s3">window</span>.<span class="pl-s3">navigator</span>.Standalone <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>),</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">      <span class="pl-c">// Kludgey way to seeing if we have JQM v1.0.x, since there apparently is no</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">      <span class="pl-c">// way to access the version number!</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">      JQMIsV1_0 <span class="pl-k">=</span> $.mobile.ignoreContentEnabled <span class="pl-k">===</span> <span class="pl-c1">undefined</span>,</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">      nextPageID <span class="pl-k">=</span> <span class="pl-c1">1</span>;      <span class="pl-c">// Used to generate event namespaces</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">   <span class="pl-c">/* Placed here instead of anonymous functions to facilitate debugging.</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line"><span class="pl-c">      No logging, because these events are too frequent */</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">_pageTouchmoveFunc</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">    e.preventDefault();</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">  <span class="pl-c">//===============================================================================</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">  <span class="pl-c">// This essentially subclasses iScroll. Originally, this was just so that we could</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">  <span class="pl-c">// inject an iscrollview variable at the time of construction (so that it is</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">  <span class="pl-c">// available from the refresh callback which is first called during construction).</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">  <span class="pl-c">// But now we override several iScroll methods, as well.</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">  <span class="pl-c">//===============================================================================</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">    <span class="pl-c">// See: www.golimojo.com/etc/js-subclass.html</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">_subclass</span>(<span class="pl-vpf">constructor</span>, <span class="pl-vpf">superConstructor</span>) {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">SurrogateConstructor</span>() {}</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">    <span class="pl-s3">SurrogateConstructor</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> superConstructor.<span class="pl-sc">prototype</span>;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">    <span class="pl-s">var</span> prototypeObject <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SurrogateConstructor</span>();</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">    prototypeObject.<span class="pl-sc">constructor</span> <span class="pl-k">=</span> constructor;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">    <span class="pl-s3">constructor</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> prototypeObject;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">IScroll</span>(<span class="pl-vpf">iscrollview</span>, <span class="pl-vpf">scroller</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">    <span class="pl-c">// We need to add an iscrollview member to iScroll, so that we can efficiently</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">    <span class="pl-c">// pass the iscrollview when triggering jQuery events. Otherwise, we&#39;d have to</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">    <span class="pl-c">// make a call to $(wrapper).jqmData() on each event trigger, which could have an impact</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">    <span class="pl-c">// on performance for high-frequency events.</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">    <span class="pl-v">this</span>.iscrollview <span class="pl-k">=</span> iscrollview;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">    <span class="pl-c">// The following functions are called from the proxy event functions. These are things</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">    <span class="pl-c">// we want to do in certain iScroll4 events.</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">    <span class="pl-c">// Emulate bottomOffset functionality in case iScroll doesn&#39;t have patch for bottomOffset</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">_emulateBottomOffset</span> <span class="pl-k">=</span>  <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.iscrollview.<span class="pl-sc">options</span>.emulateBottomOffset) {</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">        <span class="pl-v">this</span>.maxScrollY <span class="pl-k">=</span> <span class="pl-v">this</span>.wrapperH <span class="pl-k">-</span> <span class="pl-v">this</span>.scrollerH <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">          <span class="pl-v">this</span>.minScrollY <span class="pl-k">+</span> <span class="pl-v">this</span>.iscrollview.<span class="pl-sc">options</span>.bottomOffset;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">    <span class="pl-c">// Allow mouse clicks through to input elements</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">    <span class="pl-c">// Note that this is not an issue for touch devices, just mouse</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">_fixInput</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">     <span class="pl-k">if</span> (<span class="pl-v">this</span>.iscrollview.<span class="pl-sc">options</span>.fixInput ) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">       <span class="pl-s">var</span> tagName,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">           target <span class="pl-k">=</span> e.<span class="pl-sc">target</span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">       <span class="pl-k">while</span> (target.<span class="pl-sc">nodeType</span> <span class="pl-k">!==</span> <span class="pl-c1">1</span>) { target <span class="pl-k">=</span> target.<span class="pl-sc">parentNode</span>; }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">         tagName <span class="pl-k">=</span> target.<span class="pl-sc">tagName</span>.<span class="pl-s3">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">         <span class="pl-k">if</span> (tagName <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>select<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> tagName <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>input<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> tagName <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>textarea<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">           <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">         }</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">       }</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">      <span class="pl-c">// If preventTouchHover, stop hover from occuring inside scroller for jQuery Mobile 1.0</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">      <span class="pl-c">// (Not used for 1.1)</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.iscrollview.<span class="pl-sc">options</span>.preventTouchHover) { e.stopImmediatePropagation(); }</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">      <span class="pl-k">else</span>                                            { e.preventDefault(); }</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">    <span class="pl-c">// Perform an iScroll callback.</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">_doCallback</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">callbackName</span>, <span class="pl-vpf">e</span>, <span class="pl-vpf">f</span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> e <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span>) {  <span class="pl-c">// Prevent annoying &quot;layerX/layerY is deprecated&quot; console messages</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">        jqmIscrollviewRemoveLayerXYProps(e);</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">      <span class="pl-s">var</span> v <span class="pl-k">=</span> <span class="pl-v">this</span>.iscrollview,</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">          then <span class="pl-k">=</span> v._logCallback(callbackName, e);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">      <span class="pl-k">if</span> (f) { f.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, e); }                          <span class="pl-c">// Perform passed function if present</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">      v._trigger(callbackName.<span class="pl-s3">toLowerCase</span>(), e, {<span class="pl-s1"><span class="pl-pds">&quot;</span>iscrollview<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> v}); <span class="pl-c">// Then trigger widget event</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">      v._logCallback(callbackName, e, then);</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">    <span class="pl-c">// Override _bind and _unbind functions in iScroll, so that we can monitor performance,</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">    <span class="pl-c">// gain control over events reaching/not reaching iScroll, and potentially use jQuery events</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">    <span class="pl-c">// instead of addEventListener().</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">    <span class="pl-c">// As of v1.2, using jQuery events is an experimental feature, and does not work in all</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">    <span class="pl-c">// scenarios. For example, jQuery 1.7.1 breaks mousewheel support. This feature is left in</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">    <span class="pl-c">// only to permit further experimentation.</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">    <span class="pl-c">// If using jQuery events, we ignore bubble (really, useCapture) parameter. Fortunately,</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">    <span class="pl-c">// iScroll never uses it.</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">    <span class="pl-c">// If using jQuery events, we substitute jQuery&#39;s mouseleave for mouseout, to prevent iScroll</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">    <span class="pl-c">// from getting a cascade of events when the mouse enters some inner element within the</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">    <span class="pl-c">// scroller. iScroll is only interested in the mouse leaving the scroller to the OUTSIDE.</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">    <span class="pl-c">// While iScroll doesn&#39;t spend much time in the callback if moving to an inner element,</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">    <span class="pl-c">// the cascade of events is annoying when monitoring performance with the debug option.</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">_bind</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">type</span>, <span class="pl-vpf">el</span>, <span class="pl-vpf">bubble</span>) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">      <span class="pl-s">var</span> jqEvents <span class="pl-k">=</span> <span class="pl-v">this</span>.iscrollview.<span class="pl-sc">options</span>.bindIscrollUsingJqueryEvents,</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">          _type <span class="pl-k">=</span>  jqEvents <span class="pl-k">&amp;&amp;</span> type <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mouseout<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mouseleave<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> type;</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">      <span class="pl-c">// Ignore attempt to bind to orientationchange or resize, since the widget handles that</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>orientationchange<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> type <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">        <span class="pl-v">this</span>.iscrollview._logIscrollEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>iScroll bind (ignored)<span class="pl-pds">&quot;</span></span>, type);</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">      <span class="pl-v">this</span>.iscrollview._logIscrollEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>iScroll bind<span class="pl-pds">&quot;</span></span>, type);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">      <span class="pl-k">if</span> (jqEvents) { (el <span class="pl-k">?</span> $(el) <span class="pl-k">:</span> <span class="pl-v">this</span>.iscrollview.$scroller).bind(_type, $.proxy(<span class="pl-v">this</span>.handleEvent, <span class="pl-v">this</span>)); }</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">      <span class="pl-k">else</span>          { (el <span class="pl-k">||</span> <span class="pl-v">this</span>.scroller).addEventListener(_type, <span class="pl-v">this</span>, <span class="pl-k">!!</span>bubble); }</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">_unbind</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">type</span>, <span class="pl-vpf">el</span>, <span class="pl-vpf">bubble</span>) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">      <span class="pl-s">var</span> jqEvents <span class="pl-k">=</span> <span class="pl-v">this</span>.iscrollview.<span class="pl-sc">options</span>.bindIscrollUsingJqueryEvents,</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">          _type <span class="pl-k">=</span> jqEvents <span class="pl-k">&amp;&amp;</span> type <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mouseout<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mouseleave<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> type;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>orientationchange<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> type <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">        <span class="pl-v">this</span>.iscrollview._logIscrollEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>iScroll unbind (ignored)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">      <span class="pl-v">this</span>.iscrollview._logIscrollEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>iScroll unbind<span class="pl-pds">&quot;</span></span>, type);</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">      <span class="pl-k">if</span> (jqEvents) { $(el <span class="pl-k">||</span> <span class="pl-v">this</span>.iscrollview.$scroller).unbind(_type, <span class="pl-v">this</span>.handleEvent); }</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">      <span class="pl-k">else</span>          {  (el <span class="pl-k">||</span> <span class="pl-v">this</span>.scroller).removeEventListener(_type, <span class="pl-v">this</span>, <span class="pl-k">!!</span>bubble); }</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">    <span class="pl-c">// Save a reference to the original handleEvent in iScroll. We&#39;ll need to call it from our</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">    <span class="pl-c">// override.</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">    <span class="pl-v">this</span>._origHandleEvent <span class="pl-k">=</span> iScroll.<span class="pl-sc">prototype</span>.handleEvent;</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">    <span class="pl-c">// Shim around iScroll.handleEvent, allows us to trace</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">handleEvent</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">      <span class="pl-s">var</span> jqEvents <span class="pl-k">=</span> <span class="pl-v">this</span>.iscrollview.<span class="pl-sc">options</span>.bindIscrollUsingJqueryEvents,</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">          then;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">      then <span class="pl-k">=</span> <span class="pl-v">this</span>.iscrollview._logIscrollEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>iScroll.handleEvent<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">      <span class="pl-c">// If jQuery mouseleave, make iScroll think we are handling a mouseout event</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">      <span class="pl-k">if</span> (jqEvents <span class="pl-k">&amp;&amp;</span> e.<span class="pl-sc">type</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mouseleave<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">        e.<span class="pl-sc">type</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mouseout<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">        <span class="pl-v">this</span>._origHandleEvent(e);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">        e.<span class="pl-sc">type</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mouseleave<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">      <span class="pl-k">else</span> { <span class="pl-v">this</span>._origHandleEvent(e); }</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">      <span class="pl-v">this</span>.iscrollview._logIscrollEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>iScroll.handleEvent<span class="pl-pds">&quot;</span></span>, e, then);</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">    <span class="pl-c">// Override _resize function in iScroll, which calls refresh() and is only called on resize</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">    <span class="pl-c">// and orientationchange events. We call refresh() when necessary, so these are redundant.</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">    <span class="pl-c">// As well, some refreshes are deferred, and the user will need to refresh any jQuery Mobile</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">    <span class="pl-c">// widgets using a callbackBefore. So, it makes no sense to have iScroll do event-based</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">    <span class="pl-c">// refresh.</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">_resize</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() { };</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">    iScroll.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, scroller, options);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">  _subclass(IScroll, iScroll);</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">  $.widget(<span class="pl-s1"><span class="pl-pds">&quot;</span>mobile.iscrollview<span class="pl-pds">&quot;</span></span>, $.mobile.widget, {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">  widgetEventPrefix<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll_<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">  <span class="pl-c">//=========================================================</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">  <span class="pl-c">// All instance variables are declared here. This is not</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">  <span class="pl-c">// strictly necessary, but is helpful to document the use</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">  <span class="pl-c">// of instance variables.</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">  <span class="pl-c">//=========================================================</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">  iscroll<span class="pl-k">:</span>            <span class="pl-c1">null</span>,  <span class="pl-c">// The underlying iScroll object</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">  $<span class="pl-s3">window</span><span class="pl-k">:</span>            $(<span class="pl-s3">window</span>),</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">  $wrapper<span class="pl-k">:</span>           [],  <span class="pl-c">// The wrapper element</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">  $scroller<span class="pl-k">:</span>          [],  <span class="pl-c">// The scroller element (first child of wrapper)</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">  $scrollerContent<span class="pl-k">:</span>   [],  <span class="pl-c">// Content of scroller, sandwitched between any pull-down/pull-up</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">  $pullDown<span class="pl-k">:</span>          [],  <span class="pl-c">// The pull-down element (if any)</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">  $pullUp<span class="pl-k">:</span>            [],  <span class="pl-c">// The pull-up element (if any)</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">  $pullUpSpacer<span class="pl-k">:</span>      [],</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">  $page<span class="pl-k">:</span>              [],  <span class="pl-c">// The page element that contains the wrapper</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">  _wrapperHeightAdjustForBoxModel<span class="pl-k">:</span> <span class="pl-c1">0</span>,  <span class="pl-c">// This is set in _create</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">  _firstScrollerExpand<span class="pl-k">:</span>    <span class="pl-c1">true</span>,  <span class="pl-c">// True on first scroller expand, so we can capture original CSS</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">  createdAt<span class="pl-k">:</span>          <span class="pl-c1">null</span>,   <span class="pl-c">// Time when created - used as unique ID</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">  pageID<span class="pl-k">:</span>             <span class="pl-c1">null</span>,   <span class="pl-c">// Each page that has 1 or more iscrollviews gets a unique page ID #</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">  instanceID<span class="pl-k">:</span>         <span class="pl-c1">null</span>,   <span class="pl-c">// Each isntance of iscrollview created on a page gets a unique instance ID #</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">  <span class="pl-c">// True if this scroller content is &quot;dirty&quot; - i.e. needs refresh because refresh</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">  <span class="pl-c">// was deferred when the page was not the active page. This does NOT imply that the wrapper</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">  <span class="pl-c">// needs to be refreshed - see _sizeDirty, below.</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">  _dirty<span class="pl-k">:</span>               <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">  _dirtyCallbackBefore<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">  _dirtyCallbackAfter<span class="pl-k">:</span>  <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">  _sizeDirty<span class="pl-k">:</span>     <span class="pl-c1">false</span>,  <span class="pl-c">// True if wrapper resize is needed because page size or fixed content</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">                          <span class="pl-c">//  size changed</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">  <span class="pl-c">//----------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">  <span class="pl-c">// Options to be used as defaults</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">  <span class="pl-c">//----------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">  options<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">    <span class="pl-c">// iScroll4 options</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">    <span class="pl-c">// We only define those options here which have values that differ from</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">    <span class="pl-c">// iscroll4 defaults.</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">    hScroll<span class="pl-k">:</span>    <span class="pl-c1">false</span>,   <span class="pl-c">// iScroll4 default is true</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">    hScrollbar<span class="pl-k">:</span> <span class="pl-c1">false</span>,   <span class="pl-c">// iScroll4 default is true</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">    <span class="pl-c">// Additional iScroll4 options will be back-filled from iscroll4</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">    <span class="pl-c">// iscrollview widget options</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">    debug<span class="pl-k">:</span> <span class="pl-c1">false</span>,                      <span class="pl-c">// Enable some messages to console</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">                                       <span class="pl-c">// Debug true needed for any trace options</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">    traceResizeWrapper<span class="pl-k">:</span> <span class="pl-c1">false</span>,         <span class="pl-c">// Enable to trace resize wrapper</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">    traceRefresh<span class="pl-k">:</span> <span class="pl-c1">false</span>,               <span class="pl-c">// Enable to trace refresh</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">    traceCreateDestroy<span class="pl-k">:</span> <span class="pl-c1">false</span>,         <span class="pl-c">// Enable to trace create/destroy</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">    traceIscrollEvents<span class="pl-k">:</span> <span class="pl-c1">false</span>,         <span class="pl-c">// Enable to trace events handled by iScroll</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">    tracedIscrollEvents<span class="pl-k">:</span> [],           <span class="pl-c">// List of specific iScroll events to trace, empty list for all</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">                                       <span class="pl-c">// Items are strings, like &quot;touchstart&quot;</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">    traceWidgetEvents<span class="pl-k">:</span> <span class="pl-c1">false</span>,          <span class="pl-c">// Enable to trace events registered by widget</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">    <span class="pl-c">// Note: in some cases we might bind to multiple events. You will have to include the multiple</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">    <span class="pl-c">// events in one string to filter on such a bind. For example, &quot;resize orientationchange&quot;</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">    tracedWidgetEvents<span class="pl-k">:</span> [],            <span class="pl-c">// List of specific widget events to trace</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">    traceIscrollCallbacks<span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// Enable to trace iScroll callbacks to the widget</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">    tracedIscrollCallbacks<span class="pl-k">:</span> [],        <span class="pl-c">// List of specific iScroll callbacks to trace, empty list for all</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">                                       <span class="pl-c">// Items are strings, like &quot;onRefresh&quot;</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">    traceWidgetCallbacks<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">    tracedWidgetCallbacks<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">    <span class="pl-c">// bottomOffset is currently only in Watusi-patched iScroll. We emulate it in case it isn&#39;t</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">    <span class="pl-c">// there.</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">    bottomOffset<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">    emulateBottomOffset<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">    pageClass<span class="pl-k">:</span>            <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-page<span class="pl-pds">&quot;</span></span>,          <span class="pl-c">// Class to be applied to pages containing this widget</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">    wrapperClass<span class="pl-k">:</span>         <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-wrapper<span class="pl-pds">&quot;</span></span>,       <span class="pl-c">// Class to be applied to wrapper containing this widget</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">    scrollerClass<span class="pl-k">:</span>        <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-scroller<span class="pl-pds">&quot;</span></span>,      <span class="pl-c">// Class to be applied to scroller within wrapper</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">    pullDownClass<span class="pl-k">:</span>        <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-pulldown<span class="pl-pds">&quot;</span></span>,      <span class="pl-c">// Class for pulldown element (if any)</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">    pullUpClass<span class="pl-k">:</span>          <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-pullup<span class="pl-pds">&quot;</span></span>,        <span class="pl-c">// Class for pullup element (if any)</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">    pullLabelClass<span class="pl-k">:</span>       <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-pull-label<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">// Class for pull element label span</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">    pullUpSpacerClass<span class="pl-k">:</span>    <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-pullup-spacer<span class="pl-pds">&quot;</span></span>, <span class="pl-c">// Class added to generated pullup spacer</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">    topSpacerClass<span class="pl-k">:</span>       <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-top-spacer<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">    bottomSpacerClass<span class="pl-k">:</span>    <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-bottom-spacer<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">    scrollerContentClass<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-content<span class="pl-pds">&quot;</span></span>,       <span class="pl-c">// Real content of scroller, not including pull-up, pull-down</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">    fixedHeightClass<span class="pl-k">:</span>     <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-fixed<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Class applied to elements that match fixedHeightSelector</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">    <span class="pl-c">// The widget adds the fixedHeightClass to all elements that match fixedHeightSelector.</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">    <span class="pl-c">// Don&#39;t add the fixedHeightClass to elements manually. Use data-iscroll-fixed instead.</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">    fixedHeightSelector<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>:jqmData(role=&#39;header&#39;), :jqmData(role=&#39;footer&#39;), :jqmData(iscroll-fixed)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">    <span class="pl-c">// true to resize the wrapper to take all viewport space after fixed-height elements</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">    <span class="pl-c">// (typically header/footer)</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">    <span class="pl-c">// false to not change the size of the wrapper</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">    <span class="pl-c">// For example, if using multiple iscrollview widgets on the same page, a maximum</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">    <span class="pl-c">// of one of them could resize to remaining space. You would need to explicitly</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">    <span class="pl-c">// set the height of additional iscrollviews and give them the fixed height class.</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">    resizeWrapper<span class="pl-k">:</span>  <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">    <span class="pl-c">// Space-separated list of events on which to resize/refresh iscroll4</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">    <span class="pl-c">// On some mobile devices you may wish to add/substitute orientationchange event</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">    <span class="pl-c">// iOS 4.x will trigger resize twice then orientationchange</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">    <span class="pl-c">// iOS 5.x will trigger resize once then orientationchange</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">    <span class="pl-c">// Android devices can trigger multiple events, but generally orientationchange before resize</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">    <span class="pl-c">// Devices are inconsistent as to when they first report the new width/height</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">    <span class="pl-c">// Android tends to first trigger orientationchange with the width/height unchanged, the</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">    <span class="pl-c">//  orientationchange with the new width/height.</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">    <span class="pl-c">// Experimentation with other devices would be useful</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">    resizeEvents<span class="pl-k">:</span>  <span class="pl-s1"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ($.support.orientation <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> orientationchange<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">    <span class="pl-c">// Refresh iscrollview on page show event. This should be true if content inside a</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">    <span class="pl-c">// scrollview might change while the page is cached but not shown, and application hasn&#39;t</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">    <span class="pl-c">// called refresh(), or deferRefresh is false.</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">    refreshOnPageBeforeShow<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">    <span class="pl-c">// true to fix iscroll4 input element focus problem in the widget.</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">    <span class="pl-c">// false if you are using a patched iscroll4 with different fix or to</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">    <span class="pl-c">// disable for some other reason</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">    fixInput<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">    wrapperAdd<span class="pl-k">:</span> <span class="pl-c1">0</span>,      <span class="pl-c">// Shouldn&#39;t be necessary, but in case user needs to fudge</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">                        <span class="pl-c">// Can be + or -</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">    <span class="pl-c">// Timeout to allow page to render prior to refresh()</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">    refreshDelay<span class="pl-k">:</span>  IsAndroid <span class="pl-k">?</span> <span class="pl-c1">200</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>,   <span class="pl-c">// Wild-ass guesses</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">    <span class="pl-c">// true to set the minimum height of scroller content (not including</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">    <span class="pl-c">// any pull-down or pull-up) to the height of the wrapper. Note that</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">    <span class="pl-c">// if there is a pull-down or pull-up, then this is done regardless of</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">    <span class="pl-c">// this option, because you have to be able to scroll the empty content</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">    <span class="pl-c">// to access the pull-down or pull-up. Set this option false if you do</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">    <span class="pl-c">// not want to show a scrollbar on short content. However, this will have</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">    <span class="pl-c">// the side-effect of making the &quot;empty&quot; part of the scroller non-draggable.</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">    <span class="pl-c">// Leaving this true provides a more consistent UI behaviour.</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">    scrollShortContent<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">    <span class="pl-c">// Normally, we need the wrapper to have no padding. Otherwise, the result will look awkward,</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">    <span class="pl-c">// you won&#39;t be able to grab the padded area to scroll, etc.</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">    removeWrapperPadding<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">    <span class="pl-c">// But we want to add that padding back inside the scroller. We add a div around the content</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">    <span class="pl-c">// inside any pull-down/pull-up to replace the padding removed from the wrapper.</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">    addScrollerPadding<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">    <span class="pl-c">// Add convenient spacer divs at top and bottom of content.</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">    <span class="pl-c">// These initially have no height. They are useful in situations</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">    <span class="pl-c">// where padding collapses into the document. For example, can be</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">    <span class="pl-c">// used to work with fullscreen header/footer</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">    addSpacers<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">    <span class="pl-c">// On some platforms (iOS, for example) we need to scroll to top after orientation change,</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">    <span class="pl-c">// because the address bar pushed the window down. jQuery Mobile handles this for page links,</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">    <span class="pl-c">// but doesn&#39;t for orientationchange.</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">    <span class="pl-c">// If you have multiple scrollers, only enable this for one of them</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">    scrollTopOnResize<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">    scrollTopOnOrientationChange<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">    <span class="pl-c">// iScroll scrolls the first child of the wrapper. I don&#39;t see a use case for having more</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">    <span class="pl-c">// than one child. What kind of mess is going to be shown in that case? So, by default, we</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">    <span class="pl-c">// just wrap ALL of the children of the wrapper with a new &lt;div&gt; that will be the scroller.</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">    <span class="pl-c">// This way you don&#39;t need to worry about wrapping all the elements to be scrolled if there</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">    <span class="pl-c">// is more than one. If there is only one child, we create this &lt;div&gt; unnecessarily, but -</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">    <span class="pl-c">// big deal. If, for some reason, you want to create the markup for the scroller yourself,</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">    <span class="pl-c">// set this to false.</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">    createScroller<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">    <span class="pl-c">// True to defer refresh() on non-active pages until pagebeforeshow. This avoids</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">    <span class="pl-c">// unnecessary refresh in case of resize/orientation change when pages are cached,</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">    <span class="pl-c">// as well as unnecessary refresh when pages are updated when they are not the active</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">    <span class="pl-c">// page.</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">    deferNonActiveRefresh<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">    <span class="pl-c">// Same deal, for re-sizing the wrapper</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">    deferNonActiveResize<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">    <span class="pl-c">// True to prevent hover in scroller touch devices.  If this is false, you will get</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">    <span class="pl-c">//  &quot;piano keyboard&quot; effect in JQM &lt;1.1 when scrolling due to hover, which is both</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">    <span class="pl-c">// time-consuming and distracting. A negative is that with the current implementation, you will</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">    <span class="pl-c">// never get a &quot;hover&quot; visual effect within a scroller on touch devices, even when not scrolling.</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">    <span class="pl-c">// But you still will on desktop browser with mouse, and you will still get &quot;down&quot; effect</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">    <span class="pl-c">// when a link is selected. This really is a jQuery Mobile problem with listview, and is</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">    <span class="pl-c">// fixed in JQM 1.1.</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">    preventTouchHover<span class="pl-k">:</span> JQMIsV1_0 <span class="pl-k">&amp;&amp;</span> HasTouch,   <span class="pl-c">// Enable if touch device and JQM version is &lt; 1.1</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">    <span class="pl-c">// This is an experimental feature under development and DOES NOT WORK completely!</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">    <span class="pl-c">// For one, it breaks mousewheel with jQuery Mobile 1.1 (because jQuery Mobile 1.1 breaks</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">    <span class="pl-c">// mousewheel...)</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">    bindIscrollUsingJqueryEvents<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">    <span class="pl-c">// If fastDestroy is true, don&#39;t tear down the widget on destroy. The assumption is destroy</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">    <span class="pl-c">// will only be called when the page is removed, so there is no need. Is anyone really</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">    <span class="pl-c">// going to un-enhance a scroller? If so, set this to false, but then you will have to</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">    <span class="pl-c">// fix the unbind issue...</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">    fastDestroy<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">    <span class="pl-c">// Prevent scrolling the page by grabbing areas outside of the scroller.</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">    <span class="pl-c">// Normally, this should be true. Set this false if you are NOT using a fixed-height page,</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">    <span class="pl-c">// but instead are using iScroll to scroll an area within a scollable page. If you have</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">    <span class="pl-c">// multiple scrollers on a scrollable page, then set this false for all of them.</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">    <span class="pl-c">// Note that we ALWAYS prevent scrolling the page by dragging inside the scroller.</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">    preventPageScroll<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">    pullDownResetText   <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Pull down to refresh...<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">    pullDownPulledText  <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Release to refresh...<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">    pullDownLoadingText <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Loading...<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">    pullUpResetText     <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Pull up to refresh...<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">    pullUpPulledText    <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Release to refresh...<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">    pullUpLoadingText   <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Loading...<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">    pullPulledClass     <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-pull-pulled<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">    pullLoadingClass    <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-pull-loading<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">    <span class="pl-c">//-------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">    <span class="pl-c">// For better or worse, widgets have two mechanisms for dealing</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">    <span class="pl-c">// with events. The needs to be a set of options that correspond</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">    <span class="pl-c">// to each event. If present, the option is a function. As</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">    <span class="pl-c">// well, the widget prepends the widget event prefix (&quot;iscroll_&quot;)</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">    <span class="pl-c">// to each event name and triggers a jQuery event by that name.</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">    <span class="pl-c">// BOTH mechanisms can be used simultaneously, though not sure</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">    <span class="pl-c">// why you&#39;d want to. If you need to handle an event during</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">    <span class="pl-c">// iScroll4 instantiation, (only one I know about that might be</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">    <span class="pl-c">// called is refresh) then you have to use a function option.</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">    <span class="pl-c">//-------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">    onrefresh<span class="pl-k">:</span>           <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">    onbeforescrollstart<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">    onscrollstart<span class="pl-k">:</span>       <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">    onbeforescrollmove<span class="pl-k">:</span>  <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">    onscrollmove<span class="pl-k">:</span>        <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">    onbeforescrollend<span class="pl-k">:</span>   <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">    onscrollend<span class="pl-k">:</span>         <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">    ontouchend<span class="pl-k">:</span>          <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">    ondestroy<span class="pl-k">:</span>           <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">    onzoomstart<span class="pl-k">:</span>         <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">    onzoom<span class="pl-k">:</span>              <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">    onzoomend<span class="pl-k">:</span>           <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">    onpulldownreset<span class="pl-k">:</span>     <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">    onpulldownpulled<span class="pl-k">:</span>    <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">    onpulldown<span class="pl-k">:</span>          <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">    onpullupreset<span class="pl-k">:</span>       <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">    onpulluppulled<span class="pl-k">:</span>      <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">    onpullup<span class="pl-k">:</span>            <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">    onbeforerefresh<span class="pl-k">:</span>     <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">    onafterrefresh<span class="pl-k">:</span>      <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">    <span class="pl-c">//---------------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">    <span class="pl-c">// Array of keys of options that are widget-only options (not options in iscroll4 object)</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">    <span class="pl-c">//---------------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">    _widgetOnlyOptions<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>debug<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>traceIscrollEvents<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>tracedIscrollEvents<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>traceIscrollCallbacks<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>tracedIscrollCallbacks<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>traceWidgetEvents<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>tracedWidgetEvents<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>traceWidgetCallbacks<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>tracedWidgetCallbacks<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>traceResizeWrapper<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>traceRefresh<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>traceCreateDestroy<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>bottomOffset<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>emulateBottomOffset<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pageClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>wrapperClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>scrollerClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullDownClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullUpClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>scrollerContentClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullLabelClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullUpSpacerClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>topSpacerClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>bottomSpacerClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>addSpacer<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>fixedHeightSelector<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>resizeWrapper<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>resizeEvents<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>refreshOnPageBeforeShow<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>fixInput<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>wrapperAdd<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>refreshDelay<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>scrollShortContent<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>removeWrapperPadding<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>addScrollerPadding<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>createScroller<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>deferNonActiveRefresh<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>preventTouchHover<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>deferNonActiveResize<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>bindIscrollUsingJqueryEvents<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>scrollTopOnResize<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>scrollTopOnOrientationChange<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullDownResetText<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullDownPulledText<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullDownLoadingText<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullUpResetText<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullUpPulledText<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullUpLoadingText<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullPulledClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>pullLoadingClass<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>onpulldownreset<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>onpulldownpulled<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>onpulldown<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>onpullupreset<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>onpulluppulled<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>onpullup<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>onbeforerefresh<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>onafterrefresh<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>fastDestroy<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>preventPageScroll<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">    <span class="pl-c">//-----------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">    <span class="pl-c">// Map of widget event names to corresponding iscroll4 object event names</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">    <span class="pl-c">//-----------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line">    _event_map<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line">      onrefresh<span class="pl-k">:</span>           <span class="pl-s1"><span class="pl-pds">&quot;</span>onRefresh<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line">      onbeforescrollstart<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>onBeforeScrollStart<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line">      onscrollstart<span class="pl-k">:</span>       <span class="pl-s1"><span class="pl-pds">&quot;</span>onScrollStart<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line">      onbeforescrollmove<span class="pl-k">:</span>  <span class="pl-s1"><span class="pl-pds">&quot;</span>onBeforeScrollMove<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line">      onscrollmove<span class="pl-k">:</span>        <span class="pl-s1"><span class="pl-pds">&#39;</span>onScrollMove<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line">      onbeforescrollend<span class="pl-k">:</span>   <span class="pl-s1"><span class="pl-pds">&#39;</span>onBeforeScrollEnd<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line">      onscrollend<span class="pl-k">:</span>         <span class="pl-s1"><span class="pl-pds">&quot;</span>onScrollEnd<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line">      ontouchend<span class="pl-k">:</span>          <span class="pl-s1"><span class="pl-pds">&quot;</span>onTouchEnd<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">      ondestroy<span class="pl-k">:</span>           <span class="pl-s1"><span class="pl-pds">&quot;</span>onDetroy<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">      onzoomstart<span class="pl-k">:</span>         <span class="pl-s1"><span class="pl-pds">&quot;</span>onZoomStart<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">      onzoom<span class="pl-k">:</span>              <span class="pl-s1"><span class="pl-pds">&quot;</span>onZoom<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">      onzoomend<span class="pl-k">:</span>           <span class="pl-s1"><span class="pl-pds">&quot;</span>onZoomEnd<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">    <span class="pl-c">//------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">    <span class="pl-c">// Functions that adapt iscroll callbacks to Widget Factory conventions.</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">    <span class="pl-c">// These are copied to the iscroll object&#39;s options object on instantiation.</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">    <span class="pl-c">// They  call the private _trigger method provided by the widget factory</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">    <span class="pl-c">// base object. Normally, iscroll4 callbacks can be null or omitted. But since</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">    <span class="pl-c">// we can&#39;t know in advance whether the corresponding widget events might be bound</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">    <span class="pl-c">// or delegated in the future, we have set a callback for each that calls _trigger.</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">    <span class="pl-c">// This will call the corresponding widget callback as well as trigger the</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">    <span class="pl-c">// corresponding widget event if bound.</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">    <span class="pl-c">// Event callbacks are passed two values:</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">    <span class="pl-c">//  e   The underlying DOM event (if any) associated with this event</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">    <span class="pl-c">//  d   Data map</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line">    <span class="pl-c">//        iscrollview : The iscrollview object</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line">    <span class="pl-c">//------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line">    _proxy_event_funcs<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">      <span class="pl-en">onRefresh</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">        <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onRefresh<span class="pl-pds">&quot;</span></span>, e, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">          <span class="pl-v">this</span>._emulateBottomOffset();</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">          <span class="pl-v">this</span>.iscrollview._pullOnRefresh.<span class="pl-s3">call</span>(<span class="pl-v">this</span>.iscrollview,e);</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">      <span class="pl-en">onBeforeScrollStart</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">        <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onBeforeScrollStart<span class="pl-pds">&quot;</span></span>, e, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">          <span class="pl-v">this</span>._fixInput(e);</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">      <span class="pl-en">onScrollStart</span>:       <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) { <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onScrollStart<span class="pl-pds">&quot;</span></span>,      e); },</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">      <span class="pl-en">onBeforeScrollMove</span>:  <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">        <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onBeforeScrollMove<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">        e.preventDefault();    <span class="pl-c">// Don&#39;t scroll the page for touchmove inside scroller</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">      <span class="pl-en">onScrollMove</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">        <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onScrollMove<span class="pl-pds">&quot;</span></span>, e, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">          <span class="pl-v">this</span>.iscrollview._pullOnScrollMove.<span class="pl-s3">call</span>(<span class="pl-v">this</span>.iscrollview, e);</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">      <span class="pl-en">onBeforeScrollEnd</span>:   <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) { <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onBeforeScrollEnd<span class="pl-pds">&quot;</span></span>, e); },</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">      <span class="pl-en">onScrollEnd</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">        <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onScrollEnd<span class="pl-pds">&quot;</span></span>, e, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">          <span class="pl-v">this</span>.iscrollview._pullOnScrollEnd.<span class="pl-s3">call</span>(<span class="pl-v">this</span>.iscrollview, e);</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">      <span class="pl-en">onTouchEnd</span>:          <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) { <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onTouchEnd<span class="pl-pds">&quot;</span></span>,  e); },</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">      <span class="pl-en">onDestroy</span>:           <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) { <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onDestroy<span class="pl-pds">&quot;</span></span>,   e); },</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">      <span class="pl-en">onZoomStart</span>:         <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) { <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onZoomStart<span class="pl-pds">&quot;</span></span>, e); },</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">      <span class="pl-en">onZoom</span>:              <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) { <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onZoom<span class="pl-pds">&quot;</span></span>,      e); },</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">      <span class="pl-en">onZoomEnd</span>:           <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) { <span class="pl-v">this</span>._doCallback(<span class="pl-s1"><span class="pl-pds">&quot;</span>onZoomEnd<span class="pl-pds">&quot;</span></span>,   e); }</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">  <span class="pl-c">// Merge options from the iscroll object into the widget options</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">  <span class="pl-c">// So, this will backfill iscroll4 defaults that we don&#39;t set in</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">  <span class="pl-c">// the widget, giving a full set of iscroll options, and leaving</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">  <span class="pl-c">// widget-only options untouched.</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">  <span class="pl-en">_merge_from_iscroll_options</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">    <span class="pl-s">var</span> options <span class="pl-k">=</span> $.extend(<span class="pl-c1">true</span>, {}, <span class="pl-v">this</span>.iscroll.<span class="pl-sc">options</span>);</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">    <span class="pl-c">// Delete event options from the temp options</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line">    $.each(<span class="pl-v">this</span>._proxy_event_funcs, <span class="pl-st">function</span>(<span class="pl-vpf">k</span>,<span class="pl-vpf">v</span>) {<span class="pl-k">delete</span> options[k];});</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.emulateBottomOffset) { <span class="pl-k">delete</span> options.bottomOffset; }</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line">    $.extend(<span class="pl-v">this</span>.<span class="pl-sc">options</span>, options);   <span class="pl-c">// Merge result into widget options</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line">  <span class="pl-c">// Create a set of iscroll4 object options from the widget options.</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line">  <span class="pl-c">// We have to omit any widget-specific options that are</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line">  <span class="pl-c">// not also iscroll4 options. Also, copy the proxy event functions to the</span></td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line">  <span class="pl-c">// iscroll4 options.</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line">  <span class="pl-en">_create_iscroll_options</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line">    <span class="pl-s">var</span> options <span class="pl-k">=</span> $.extend(<span class="pl-c1">true</span>, {}, <span class="pl-v">this</span>.<span class="pl-sc">options</span>);  <span class="pl-c">// temporary copy of widget options</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line">    <span class="pl-c">// Remove options that are widget-only options</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">    $.each(<span class="pl-v">this</span>._widgetOnlyOptions, <span class="pl-st">function</span>(<span class="pl-vpf">i</span>,<span class="pl-vpf">v</span>) {<span class="pl-k">delete</span> options[v];});</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">    <span class="pl-c">// Remove widget event options</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">    $.each(<span class="pl-v">this</span>._event_map, <span class="pl-st">function</span>(<span class="pl-vpf">k</span>,<span class="pl-vpf">v</span>) {<span class="pl-k">delete</span> options[k];});</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.emulateBottomOffset) { <span class="pl-k">delete</span> options.bottomOffset; }</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">    <span class="pl-c">// Add proxy event functions</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">    <span class="pl-k">return</span> $.extend(options, <span class="pl-v">this</span>._proxy_event_funcs);</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">  <span class="pl-c">// Formats number with fixed digits</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">  <span class="pl-en">_pad</span>: <span class="pl-st">function</span>(<span class="pl-vpf">num</span>, <span class="pl-vpf">digits</span>, <span class="pl-vpf">padChar</span>) {</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">    <span class="pl-s">var</span> str <span class="pl-k">=</span> num.<span class="pl-s3">toString</span>(),</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">        _padChar <span class="pl-k">=</span> padChar <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">    <span class="pl-k">while</span> (str.<span class="pl-sc">length</span> <span class="pl-k">&lt;</span> digits) { str <span class="pl-k">=</span> _padChar <span class="pl-k">+</span> str; }</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line">    <span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line">  <span class="pl-c">// Format time for logging</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">  <span class="pl-en">_toTime</span>: <span class="pl-st">function</span>(<span class="pl-vpf">date</span>) {</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._pad(date.<span class="pl-s3">getHours</span>(), <span class="pl-c1">2</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line">           <span class="pl-v">this</span>._pad(date.<span class="pl-s3">getMinutes</span>(), <span class="pl-c1">2</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line">           <span class="pl-v">this</span>._pad(date.<span class="pl-s3">getSeconds</span>(), <span class="pl-c1">2</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line">           <span class="pl-v">this</span>._pad(date.<span class="pl-s3">getMilliseconds</span>(), <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">  <span class="pl-c">// Log a message to console</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">  <span class="pl-c">// text - message to log</span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">  <span class="pl-c">// now - optional timestamp, if missing generates new timestamp</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">  <span class="pl-c">// Returns timestamp</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line">  <span class="pl-en">_log</span>: <span class="pl-st">function</span>(<span class="pl-vpf">text</span>, <span class="pl-vpf">now</span>) {</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">    <span class="pl-s">var</span> _now, id, idStr;</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug) { <span class="pl-k">return</span> <span class="pl-c1">null</span>; }</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">    _now <span class="pl-k">=</span> now <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">    id <span class="pl-k">=</span> <span class="pl-v">this</span>.$wrapper.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">    idStr <span class="pl-k">=</span> id <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> id <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">    <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-v">this</span>._toTime(_now) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line">                $.mobile.path.parseUrl(<span class="pl-v">this</span>.$page.jqmData(<span class="pl-s1"><span class="pl-pds">&quot;</span>url<span class="pl-pds">&quot;</span></span>)).<span class="pl-sc">filename</span> <span class="pl-k">+</span> idStr <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">                text );</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">    <span class="pl-k">return</span> _now;</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line">  <span class="pl-c">// Log elapsed time from then to now</span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line">  <span class="pl-en">_logInterval</span>: <span class="pl-st">function</span>(<span class="pl-vpf">text</span>, <span class="pl-vpf">then</span>) {</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">    <span class="pl-s">var</span> now;</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug) { <span class="pl-k">return</span> <span class="pl-c1">null</span>; }</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">    now <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._log(text <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (now <span class="pl-k">-</span> then) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mS from <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>._toTime(then), now );</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">  <span class="pl-c">// Log an event</span></td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">  <span class="pl-c">// Like _logInterval, but additional optional parameter e</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">  <span class="pl-c">// If e is present, additionally show interval from original event to now</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">  <span class="pl-en">_logEvent</span>: <span class="pl-st">function</span>(<span class="pl-vpf">text</span>, <span class="pl-vpf">e</span>, <span class="pl-vpf">then</span>) {</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">    <span class="pl-s">var</span> now,</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">        eventTime,</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">        haveEvent <span class="pl-k">=</span> e <span class="pl-k">&amp;&amp;</span> e <span class="pl-k">instanceof</span> <span class="pl-s3">Object</span>,</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">        type <span class="pl-k">=</span> haveEvent <span class="pl-k">?</span> e.<span class="pl-sc">type</span> <span class="pl-k">:</span> e,</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">        _text <span class="pl-k">=</span> type <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> text;</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug) { <span class="pl-k">return</span> <span class="pl-c1">null</span>; }</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">    now <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line">    <span class="pl-k">if</span> (then) {</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line">      _text <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> end <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-k">+</span>(now<span class="pl-k">-</span>then)) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mS from <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>._toTime(then);</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">    <span class="pl-k">else</span> <span class="pl-k">if</span> (haveEvent) {</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">      _text <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> begin<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">    <span class="pl-k">if</span> (haveEvent) {</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line">      eventTime <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(e.timeStamp);</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line">      _text <span class="pl-k">+=</span>  <span class="pl-s1"><span class="pl-pds">&quot;</span> (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span>  (now <span class="pl-k">-</span> eventTime) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mS from <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span>e.<span class="pl-sc">type</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> @ <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>._toTime(eventTime) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._log(_text, now);</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">  <span class="pl-c">// Log a callback issued by iScroll</span></td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">  <span class="pl-en">_logCallback</span>: <span class="pl-st">function</span>(<span class="pl-vpf">callbackName</span>, <span class="pl-vpf">e</span>, <span class="pl-vpf">then</span>) {</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">        <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceIscrollCallbacks <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line">       (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.tracedIscrollCallbacks.<span class="pl-sc">length</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line">        $.inArray(callbackName, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.tracedIscrollCallbacks) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) ) {</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line">    <span class="pl-k">if</span> (e)         { <span class="pl-k">return</span> <span class="pl-v">this</span>._logEvent(callbackName, e, then); }</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">    <span class="pl-k">if</span> (then)      { <span class="pl-k">return</span> <span class="pl-v">this</span>._logInterval(callbackName <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> end<span class="pl-pds">&quot;</span></span>, then); }</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._log(callbackName <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> begin<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line">  <span class="pl-c">// Log an event handled by Iscroll</span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line">  <span class="pl-c">// e can be Event or event name</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">  <span class="pl-en">_logIscrollEvent</span>: <span class="pl-st">function</span>(<span class="pl-vpf">text</span>, <span class="pl-vpf">e</span>, <span class="pl-vpf">then</span>) {</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line">    <span class="pl-s">var</span> haveEvent <span class="pl-k">=</span> e <span class="pl-k">instanceof</span> Event,</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">        type <span class="pl-k">=</span> haveEvent <span class="pl-k">?</span> e.<span class="pl-sc">type</span> <span class="pl-k">:</span> e;</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">        <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceIscrollEvents <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">        (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.tracedIscrollEvents.<span class="pl-sc">length</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">         $.inArray(type, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.tracedIscrollEvents) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)) {</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._logEvent(text, e, then);</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line">  <span class="pl-c">// Log an event handled by the widget</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line">  <span class="pl-en">_logWidgetEvent</span>: <span class="pl-st">function</span>(<span class="pl-vpf">text</span>, <span class="pl-vpf">e</span>, <span class="pl-vpf">then</span>) {</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code js-file-line">    <span class="pl-s">var</span> haveEvent <span class="pl-k">=</span> e <span class="pl-k">instanceof</span> <span class="pl-s3">Object</span>,</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code js-file-line">        type <span class="pl-k">=</span> haveEvent <span class="pl-k">?</span> e.<span class="pl-sc">type</span> <span class="pl-k">:</span> e;</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code js-file-line">        <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceWidgetEvents <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code js-file-line">        (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.tracedWidgetEvents.<span class="pl-sc">length</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code js-file-line">         $.inArray(type, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.tracedWidgetEvents) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>)) {</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._logEvent(text, e, then);</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code js-file-line">  <span class="pl-c">// Log a callback issued by the widtet</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code js-file-line">  <span class="pl-en">_logWidgetCallback</span>: <span class="pl-st">function</span>(<span class="pl-vpf">callbackName</span>, <span class="pl-vpf">e</span>, <span class="pl-vpf">then</span>) {</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code js-file-line">        <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceWidgetCallbacks <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code js-file-line">       (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.tracedWidgetCallbacks.<span class="pl-sc">length</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code js-file-line">        $.inArray(callbackName, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.tracedWidgetCallbacks) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) ) {</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code js-file-line">    <span class="pl-k">if</span> (e)         { <span class="pl-k">return</span> <span class="pl-v">this</span>._logEvent(callbackName, e, then); }</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code js-file-line">    <span class="pl-k">if</span> (then)      { <span class="pl-k">return</span> <span class="pl-v">this</span>._logInterval(callbackName <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> end<span class="pl-pds">&quot;</span></span>, then); }</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._log(callbackName <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> begin<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code js-file-line">  <span class="pl-c">// Log elapsed time from then to now and later to now</span></td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code js-file-line">  <span class="pl-en">_logInterval2</span>: <span class="pl-st">function</span>(<span class="pl-vpf">text</span>, <span class="pl-vpf">then</span>, <span class="pl-vpf">later</span>) {</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code js-file-line">    <span class="pl-s">var</span> now;</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code js-file-line">    now <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code js-file-line">    <span class="pl-v">this</span>._log(text <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code js-file-line">              (now <span class="pl-k">-</span> later) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mS from <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>._toTime(later) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code js-file-line">              <span class="pl-s1"><span class="pl-pds">&quot;</span> (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (now <span class="pl-k">-</span> then) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mS from <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>._toTime(then) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code js-file-line">  <span class="pl-en">_startTiming</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug) { <span class="pl-k">return</span> <span class="pl-c1">null</span>; }</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code js-file-line">  <span class="pl-c">// Returns the event namespace for the page containing this widget</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code js-file-line">  <span class="pl-en">_pageEventNamespace</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.iscroll_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.pageID;</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code js-file-line">   <span class="pl-c">// Returns the event namespace for this widget</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code js-file-line">  <span class="pl-en">_instanceEventNamespace</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._pageEventNamespace() <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.instanceID;</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code js-file-line">  <span class="pl-c">// Takes a space-separated list of event types, and appends the given namespace to each</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code js-file-line">  <span class="pl-en">_addEventsNamespace</span>: <span class="pl-st">function</span>(<span class="pl-vpf">types_in</span>, <span class="pl-vpf">namespace</span>) {</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code js-file-line">    <span class="pl-s">var</span> types <span class="pl-k">=</span> types_in.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code js-file-line">    $.each(types, <span class="pl-st">function</span>(<span class="pl-vpf">k</span>,<span class="pl-vpf">v</span>) {types[k] <span class="pl-k">+=</span> namespace;});</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code js-file-line">    <span class="pl-k">return</span> types.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code js-file-line">  <span class="pl-c">// All bind/unbind done by the widget goes through here, to permit logging</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code js-file-line">  <span class="pl-c">// Note: this used to be called _bind, but starting with JQM 1.2, this is a naming conflict with</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code js-file-line">  <span class="pl-c">// the Widget Factory code in JQM</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code js-file-line">  <span class="pl-en">_isvBind</span>: <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">types_in</span>, <span class="pl-vpf">func</span>, <span class="pl-vpf">objName</span>) {</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code js-file-line">    <span class="pl-s">var</span> types <span class="pl-k">=</span> <span class="pl-v">this</span>._addEventsNamespace(types_in, <span class="pl-v">this</span>._instanceEventNamespace());</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code js-file-line">    <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>bind <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> objName, types);</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code js-file-line">    obj.bind(types, $.proxy(func, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code js-file-line">  <span class="pl-en">_bindPage</span>: <span class="pl-st">function</span>(<span class="pl-vpf">types_in</span>, <span class="pl-vpf">func</span>) {</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code js-file-line">    <span class="pl-s">var</span> types <span class="pl-k">=</span> <span class="pl-v">this</span>._addEventsNamespace(types_in, <span class="pl-v">this</span>._pageEventNamespace());</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code js-file-line">    <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>bind $page<span class="pl-pds">&quot;</span></span>, types);</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code js-file-line">    <span class="pl-v">this</span>.$page.bind(types, $.proxy(func, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code js-file-line">  <span class="pl-en">_isvUnbind</span>: <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">types_in</span>, <span class="pl-vpf">objName</span>) {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code js-file-line">    <span class="pl-s">var</span> types <span class="pl-k">=</span> <span class="pl-v">this</span>._addEventsNamespace(types_in, <span class="pl-v">this</span>._instanceEventNamespace());</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code js-file-line">    <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>unbind <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> objName, types);</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code js-file-line">    obj.unbind(types);</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code js-file-line">  <span class="pl-en">_unbindPage</span>: <span class="pl-st">function</span>(<span class="pl-vpf">types_in</span>) {</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code js-file-line">    <span class="pl-s">var</span> types <span class="pl-k">=</span> <span class="pl-v">this</span>._addEventsNamespace(types_in, <span class="pl-v">this</span>._pageEventNamespace());</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code js-file-line">    <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>unbind  $page<span class="pl-pds">&quot;</span></span>, types);</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code js-file-line">    <span class="pl-v">this</span>.$page.unbind(types);</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code js-file-line">  <span class="pl-c">// Currently unused - just in case we need it</span></td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code js-file-line">  <span class="pl-en">_delegate</span>: <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">selector</span>, <span class="pl-vpf">type</span>, <span class="pl-vpf">func</span>, <span class="pl-vpf">objName</span>) {</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code js-file-line">    <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>delegate <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> objName <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> selector, type);</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code js-file-line">    obj.delegate(selector, type, $.proxy(func, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code js-file-line">  <span class="pl-en">_triggerWidget</span>: <span class="pl-st">function</span>(<span class="pl-vpf">type</span>, <span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code js-file-line">    <span class="pl-s">var</span> then <span class="pl-k">=</span> <span class="pl-v">this</span>._logWidgetCallback(type);</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code js-file-line">    <span class="pl-v">this</span>._trigger(type, e, {<span class="pl-s1"><span class="pl-pds">&quot;</span>iscrollview<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-v">this</span>});</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code js-file-line">    <span class="pl-v">this</span>._logWidgetCallback(type, e, then);</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code js-file-line">  <span class="pl-c">//-------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code js-file-line">  <span class="pl-c">// Returns status of dirty flag, indicating that refresh() was called</span></td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code js-file-line">  <span class="pl-c">// while the page was not active, and refresh will be deferred until</span></td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code js-file-line">  <span class="pl-c">// pagebeforeshow.</span></td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code js-file-line">  <span class="pl-c">//-------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code js-file-line">  <span class="pl-en">isDirty</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>._dirty;</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code js-file-line">  <span class="pl-c">// Restore an element&#39;s styles to original</span></td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code js-file-line">  <span class="pl-c">// If the style was never modified by the widget, the value passed in</span></td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code js-file-line">  <span class="pl-c">// originalStyle will be undefined.</span></td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code js-file-line">  <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code js-file-line">  <span class="pl-c">//If there originally was no style attribute, but styles were added by the</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code js-file-line">  <span class="pl-c">// widget, the value passed in originalStyle will be null.</span></td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code js-file-line">  <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code js-file-line">  <span class="pl-c">// If there originally was a style attribute, but the widget modified it</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code js-file-line">  <span class="pl-c">// (actually, set some CSS, which changes the style, the value is a string in</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code js-file-line">  <span class="pl-c">// originalStyle.</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code js-file-line">  <span class="pl-en">_restoreStyle</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$ele</span>, <span class="pl-vpf">originalStyle</span>) {</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code js-file-line">    <span class="pl-k">if</span> (originalStyle <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code js-file-line">    <span class="pl-k">if</span> (originalStyle <span class="pl-k">===</span> <span class="pl-c1">null</span>)      { $ele.removeAttr(<span class="pl-s1"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span>); }</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code js-file-line">    <span class="pl-k">else</span>                             { $ele.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span>, originalStyle); }</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code js-file-line">  <span class="pl-c">//------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code js-file-line">  <span class="pl-c">// Functions that we bind to. They are declared as named members rather than as</span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code js-file-line">  <span class="pl-c">// inline closures so we can properly unbind them.</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code js-file-line">  <span class="pl-c">//------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code js-file-line">  <span class="pl-en">_pageBeforeShowFunc</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code js-file-line">   <span class="pl-s">var</span> then <span class="pl-k">=</span> <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>_pageBeforeShowFunc<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code js-file-line">   <span class="pl-k">if</span> (<span class="pl-v">this</span>._dirty) {</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code js-file-line">     <span class="pl-v">this</span>.resizeWrapper(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code js-file-line">     <span class="pl-v">this</span>.refresh(<span class="pl-c1">null</span>, <span class="pl-v">this</span>._dirtyCallbackBefore, <span class="pl-v">this</span>._dirtyCallbackAfter, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code js-file-line">     <span class="pl-v">this</span>._dirty <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code js-file-line">     <span class="pl-v">this</span>._dirtyCallbackBefore <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code js-file-line">     <span class="pl-v">this</span>._dirtyCallbackAfter <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code js-file-line">     }</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code js-file-line">   <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.refreshOnPageBeforeShow <span class="pl-k">||</span> <span class="pl-v">this</span>._sizeDirty) {</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code js-file-line">      <span class="pl-v">this</span>.refresh(<span class="pl-c1">null</span>,$.proxy(<span class="pl-v">this</span>._resizeWrapper, <span class="pl-v">this</span>),<span class="pl-c1">null</span>,<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code js-file-line">   <span class="pl-v">this</span>._sizeDirty <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code js-file-line">   <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>_pageBeforeShowFunc<span class="pl-pds">&quot;</span></span>, e, then);</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code js-file-line">   },</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code js-file-line">  <span class="pl-c">// Called on resize events</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code js-file-line">  <span class="pl-c">// TODO: Detect if size is unchanged, and if so just ignore?</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code js-file-line">  <span class="pl-en">_windowResizeFunc</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code js-file-line">    <span class="pl-s">var</span> then <span class="pl-k">=</span> <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>_windowResizeFunc<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code js-file-line">    <span class="pl-c">// Defer if not active page</span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.deferNonActiveResize <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-v">this</span>.$page.is($.mobile.activePage))) {</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code js-file-line">      <span class="pl-v">this</span>._sizeDirty <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceResizeWrapper) { <span class="pl-v">this</span>._log(<span class="pl-s1"><span class="pl-pds">&quot;</span>resizeWrapper() (deferred)<span class="pl-pds">&quot;</span></span>); }</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code js-file-line">    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code js-file-line">      <span class="pl-v">this</span>.resizeWrapper(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code js-file-line">      <span class="pl-v">this</span>.refresh(<span class="pl-c1">null</span>,<span class="pl-c1">null</span>,<span class="pl-c1">null</span>,<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code js-file-line">    <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>_windowResizeFunc<span class="pl-pds">&quot;</span></span>, e, then);</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code js-file-line">  <span class="pl-c">// On some platforms (iOS, for example) you need to scroll back to top after orientation change,</span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code js-file-line">  <span class="pl-c">// because the address bar pushed the window down. jQuery Mobile handles this for page links,</span></td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code js-file-line">  <span class="pl-c">// but doesn&#39;t for orientationchange</span></td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code js-file-line">  <span class="pl-en">_orientationChangeFunc</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code js-file-line">    <span class="pl-s">var</span> then <span class="pl-k">=</span> <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>_orientationChangeFunc<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollTopOnOrientationChange) {</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code js-file-line">      $.mobile.silentScroll(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code js-file-line">    <span class="pl-v">this</span>._logWidgetEvent(<span class="pl-s1"><span class="pl-pds">&quot;</span>_orientationChangeFunc<span class="pl-pds">&quot;</span></span>, e, then);</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code js-file-line">   <span class="pl-c">// Called when jQuery Mobile updates content such that a reflow is needed. This happens</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code js-file-line">   <span class="pl-c">// on collapsible content, etc.</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code js-file-line">    <span class="pl-en">_updateLayoutFunc</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code js-file-line">      <span class="pl-v">this</span>.refresh();</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code js-file-line">  <span class="pl-c">// Get or set the count of instances on the page containing the widget</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code js-file-line">  <span class="pl-c">// This increases or decreases depending on the number of iscrollview widgets currently</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code js-file-line">  <span class="pl-c">// instantiated on the page.</span></td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code js-file-line">  <span class="pl-en">_instanceCount</span>: <span class="pl-st">function</span>(<span class="pl-vpf">count_in</span>) {</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code js-file-line">    <span class="pl-s">var</span> key <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-private<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code js-file-line">        count <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code js-file-line">        data <span class="pl-k">=</span> <span class="pl-v">this</span>.$page.jqmData(key) <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code js-file-line">    <span class="pl-k">if</span> (count_in <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code js-file-line">      count <span class="pl-k">=</span> count_in;</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code js-file-line">      data.instanceCount <span class="pl-k">=</span> count;</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code js-file-line">      <span class="pl-v">this</span>.$page.jqmData(key, data);</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code js-file-line">    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code js-file-line">      <span class="pl-k">if</span> (data.instanceCount <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code js-file-line">        count <span class="pl-k">=</span> data.instanceCount;</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code js-file-line">    <span class="pl-k">return</span> count;</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code js-file-line">  <span class="pl-en">_nextInstanceID</span>: <span class="pl-st">function</span>(<span class="pl-vpf">id_in</span>) {</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code js-file-line">    <span class="pl-s">var</span> key <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-private<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code js-file-line">        id <span class="pl-k">=</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code js-file-line">        data <span class="pl-k">=</span> <span class="pl-v">this</span>.$page.jqmData(key) <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code js-file-line">    <span class="pl-k">if</span> (id_in <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code js-file-line">      id <span class="pl-k">=</span> id_in;</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code js-file-line">      data.nextInstanceID <span class="pl-k">=</span> id;</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code js-file-line">      <span class="pl-v">this</span>.$page.jqmData(key, data);</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code js-file-line">    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code js-file-line">      <span class="pl-k">if</span> (data.nextInstanceID <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code js-file-line">        id <span class="pl-k">=</span> data.nextInstanceID;</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code js-file-line">    <span class="pl-k">return</span> id;</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code js-file-line">  <span class="pl-en">_pageID</span>: <span class="pl-st">function</span>(<span class="pl-vpf">id_in</span>) {</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code js-file-line">    <span class="pl-s">var</span> key <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-private<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code js-file-line">        id <span class="pl-k">=</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code js-file-line">        data <span class="pl-k">=</span> <span class="pl-v">this</span>.$page.jqmData(key) <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code js-file-line">    <span class="pl-k">if</span> (id_in <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code js-file-line">      id <span class="pl-k">=</span> id_in;</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code js-file-line">      data.pageID <span class="pl-k">=</span> id;</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code js-file-line">      <span class="pl-v">this</span>.$page.jqmData(key, data);</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code js-file-line">    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code js-file-line">      <span class="pl-k">if</span> (data.pageID <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code js-file-line">        id <span class="pl-k">=</span> data.pageID;</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code js-file-line">    <span class="pl-k">return</span> id;</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code js-file-line">  <span class="pl-c">// Adapt the page for this widget</span></td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code js-file-line">  <span class="pl-en">_adaptPage</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code js-file-line">    <span class="pl-s">var</span> _this <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code js-file-line">    <span class="pl-c">// Only adapt the page if this is the only iscrollview widget instantiated on the page</span></td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code js-file-line">    <span class="pl-c">// If the count &gt;1, then the page has already been adapted. When the count goes back</span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code js-file-line">    <span class="pl-c">// to 0, the changes will be un-done</span></td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>._instanceCount() <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code js-file-line">      <span class="pl-v">this</span>.$page.addClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pageClass);</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code js-file-line">      <span class="pl-v">this</span>.$page.<span class="pl-s3">find</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.fixedHeightSelector).each(<span class="pl-st">function</span>() {  <span class="pl-c">// Iterate over headers/footers/etc.</span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code js-file-line">        <span class="pl-s">var</span></td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code js-file-line">          $fixedHeightElement <span class="pl-k">=</span> $(<span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code js-file-line">          <span class="pl-c">// We need to exclude headers/footers in popups and panels.</span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code js-file-line">          <span class="pl-c">// We cannot simply use a selector that requires the fixed-height element</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code js-file-line">          <span class="pl-c">// to be a child of .ui-page, because of the complication that JQM</span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code js-file-line">          <span class="pl-c">// moves persistent headers/footers out of the page during transitions.</span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code js-file-line">          isPopup <span class="pl-k">=</span> $fixedHeightElement.closest(<span class="pl-s1"><span class="pl-pds">&quot;</span>.ui-popup<span class="pl-pds">&quot;</span></span>).<span class="pl-sc">length</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code js-file-line">          isPanel <span class="pl-k">=</span> $fixedHeightElement.closest(<span class="pl-s1"><span class="pl-pds">&quot;</span>.ui-panel<span class="pl-pds">&quot;</span></span>).<span class="pl-sc">length</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>isPopup <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>isPanel) {</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code js-file-line">          $fixedHeightElement.addClass(_this.<span class="pl-sc">options</span>.fixedHeightClass);</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code js-file-line">      <span class="pl-k">if</span> (HasTouch <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.preventPageScroll) {</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code js-file-line">        <span class="pl-v">this</span>._bindPage(<span class="pl-s1"><span class="pl-pds">&quot;</span>touchmove<span class="pl-pds">&quot;</span></span>, _pageTouchmoveFunc);</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code js-file-line">  <span class="pl-en">_undoAdaptPage</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code js-file-line">    <span class="pl-s">var</span> _this <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>._instanceCount() <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code js-file-line">      <span class="pl-v">this</span>.$page.<span class="pl-s3">find</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.fixedHeightSelector).each(<span class="pl-st">function</span>() {  <span class="pl-c">// Iterate over headers/footers/etc.</span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code js-file-line">        $(<span class="pl-v">this</span>).removeClass(_this.<span class="pl-sc">options</span>.fixedHeightClass);</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code js-file-line">      <span class="pl-v">this</span>.$page.removeClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pageClass);</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code js-file-line">  <span class="pl-c">// Calculate total bar heights.</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code js-file-line">  <span class="pl-en">_calculateBarsHeight</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code js-file-line">    <span class="pl-s">var</span> barsHeight <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code js-file-line">        fixedHeightSelector <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.fixedHeightClass,</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code js-file-line">        <span class="pl-c">// Persistent footers are sometimes inside the page, sometimes outside of all pages! (as</span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code js-file-line">        <span class="pl-c">// direct descendant of &lt;body&gt;/.ui-mobile-viewport). And sometimes both. During transitions, the page that</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code js-file-line">        <span class="pl-c">// is transitioning in will have had it&#39;s persistent footer moved outside of the page,</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code js-file-line">        <span class="pl-c">// while all other pages will have their persistent footer internal to the page.</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code js-file-line">        <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code js-file-line">        <span class="pl-c">// To deal with this, we find iscroll-fixed elements in the page, as well as outside</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code js-file-line">        <span class="pl-c">// of the page (as direct descendants of &lt;body&gt;/.ui-mobile-viewport). We avoid double-counting persistent</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code js-file-line">        <span class="pl-c">// footers that have the same data-id. (Experimentally, then, we also permit the user</span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code js-file-line">        <span class="pl-c">// to place fixed-height elements outside of the page, but unsure if this is of any</span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code js-file-line">        <span class="pl-c">// practical use.)</span></td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code js-file-line">        $barsInPage <span class="pl-k">=</span> <span class="pl-v">this</span>.$page.<span class="pl-s3">find</span>(fixedHeightSelector),</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code js-file-line">        $barsOutsidePage <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.ui-mobile-viewport<span class="pl-pds">&quot;</span></span>).children(fixedHeightSelector);</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code js-file-line">    $barsInPage.each(<span class="pl-st">function</span>() {  <span class="pl-c">// Iterate over headers/footers/etc.</span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code js-file-line">        barsHeight <span class="pl-k">+=</span> $(<span class="pl-v">this</span>).<span class="pl-sc">outerHeight</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code js-file-line">    $barsOutsidePage.each(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code js-file-line">      <span class="pl-s">var</span> id <span class="pl-k">=</span> $(<span class="pl-v">this</span>).jqmData(<span class="pl-s1"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>);  <span class="pl-c">// Find data-id if present</span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code js-file-line">      <span class="pl-c">// Count bars outside of the page if they don&#39;t have data-id (so not a persistent</span></td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code js-file-line">      <span class="pl-c">// footer, but something the developer put there and tagged with data-iscroll-fixed class),</span></td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code js-file-line">      <span class="pl-c">// or if a matching data-id is NOT found among the bars that are inside the page.</span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code js-file-line">      <span class="pl-k">if</span> (id <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-k">!</span>$barsInPage.is( <span class="pl-s1"><span class="pl-pds">&quot;</span>:jqmData(id=&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> id <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;)<span class="pl-pds">&quot;</span></span> )) {</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code js-file-line">        barsHeight <span class="pl-k">+=</span> $(<span class="pl-v">this</span>).<span class="pl-sc">outerHeight</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code js-file-line">    <span class="pl-k">return</span> barsHeight;</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code js-file-line">  <span class="pl-c">// Determine the box-sizing model of an element</span></td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code js-file-line">  <span class="pl-c">// While jQuery normalizes box-sizing models when retriving geometry,</span></td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code js-file-line">  <span class="pl-c">// it doesn&#39;t consider it when SETTING geometry. So, this is useful when</span></td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code js-file-line">  <span class="pl-c">// setting geometry. (e.g. the height of the wrapper)</span></td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code js-file-line">  <span class="pl-en">_getBoxSizing</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$elem</span>) {</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code js-file-line">    <span class="pl-s">var</span>  boxSizing,</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code js-file-line">         prefix <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code js-file-line">    <span class="pl-k">if</span> (IsFirefox)     { prefix <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>-moz-<span class="pl-pds">&quot;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code js-file-line">    <span class="pl-k">else</span> <span class="pl-k">if</span> (IsWebkit) { prefix <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>-webkit-<span class="pl-pds">&quot;</span></span>; } <span class="pl-c">// note: can drop prefix for Chrome &gt;=10, Safari &gt;= 5.1 (534.12)</span></td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code js-file-line">    boxSizing <span class="pl-k">=</span> $elem.css(prefix <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>box-sizing<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>boxSizing <span class="pl-k">&amp;&amp;</span> prefix) { boxSizing <span class="pl-k">=</span> $elem.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>box-sizing<span class="pl-pds">&quot;</span></span>); }  <span class="pl-c">// Not found, try again with standard CSS</span></td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>boxSizing) {     <span class="pl-c">// Still not found - no CSS property available to guide us.</span></td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code js-file-line">      <span class="pl-c">// See what JQuery thinks the global box model is</span></td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code js-file-line">      <span class="pl-k">if</span> ($.boxModel) { boxSizing <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>content-box<span class="pl-pds">&quot;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code js-file-line">      <span class="pl-k">else</span>            { boxSizing <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>border-box<span class="pl-pds">&quot;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code js-file-line">    <span class="pl-k">return</span> boxSizing;</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code js-file-line">  <span class="pl-c">// Get the height adjustment for setting the height of an element,</span></td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code js-file-line">  <span class="pl-c">// based on the content-box model</span></td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code js-file-line">  <span class="pl-en">_getHeightAdjustForBoxModel</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$elem</span>) {</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code js-file-line">    <span class="pl-c">// Take into account the box model. This defaults to either W3C or traditional</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code js-file-line">    <span class="pl-c">// model for a given browser, but can be overridden with CSS</span></td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code js-file-line">    <span class="pl-s">var</span> adjust;</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code js-file-line">    <span class="pl-k">switch</span> (<span class="pl-v">this</span>._getBoxSizing($elem)) {</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>border-box<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>      <span class="pl-c">// AKA traditional, or IE5 (old browsers and IE quirks mode)</span></td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code js-file-line">        <span class="pl-c">// only subtract margin</span></td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code js-file-line">        adjust <span class="pl-k">=</span> $elem.<span class="pl-sc">outerHeight</span>(<span class="pl-c1">true</span>) <span class="pl-k">-</span> $elem.<span class="pl-sc">outerHeight</span>();</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>padding-box<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>    <span class="pl-c">// Firefox-only</span></td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code js-file-line">        <span class="pl-c">// subtract margin and border</span></td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code js-file-line">        adjust <span class="pl-k">=</span> $elem.<span class="pl-sc">outerHeight</span>() <span class="pl-k">-</span> $elem.<span class="pl-sc">height</span>();</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>content-box<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>     <span class="pl-c">// AKA W3C  Ignore jshint warning</span></td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code js-file-line">      <span class="pl-k">default</span><span class="pl-k">:</span>                <span class="pl-c">// Ignore jslint warning</span></td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code js-file-line">        <span class="pl-c">// We will subtract padding, border, margin</span></td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code js-file-line">        <span class="pl-c">// However...</span></td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code js-file-line">        <span class="pl-c">// wrapper will never have padding, at least once we are done</span></td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code js-file-line">        <span class="pl-c">// modifying it. This function is called before any removal of</span></td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code js-file-line">        <span class="pl-c">// padding, though. So, if $wrapper, use same calculation as for padding-box,</span></td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code js-file-line">        <span class="pl-c">// ignoring padding.</span></td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code js-file-line">        <span class="pl-c">// (We actually don&#39;t call this for anything but $wrapper, but preseve</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code js-file-line">        <span class="pl-c">// functionality in case we ever use it on another element)</span></td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code js-file-line">          adjust <span class="pl-k">=</span> $elem.<span class="pl-sc">outerHeight</span>($elem <span class="pl-k">!==</span> <span class="pl-v">this</span>.$wrapper ) <span class="pl-k">-</span> $elem.<span class="pl-sc">height</span>();</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code js-file-line">    <span class="pl-k">return</span> adjust;</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code js-file-line">  <span class="pl-c">// If there&#39;s a pull-down element, we need to set the</span></td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code js-file-line">  <span class="pl-c">// topOffset to the height of that element. If user</span></td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code js-file-line">  <span class="pl-c">// specified a topOffset option, use that instead, though.</span></td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code js-file-line">  <span class="pl-en">_setTopOffsetForPullDown</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullDown.<span class="pl-sc">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.topOffset) {</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code js-file-line">      <span class="pl-v">this</span>.<span class="pl-sc">options</span>.topOffset <span class="pl-k">=</span> <span class="pl-v">this</span>.$pullDown.<span class="pl-sc">outerHeight</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code js-file-line">  <span class="pl-c">// If there&#39;s a pull-up element, we need to set the</span></td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code js-file-line">  <span class="pl-c">// bottomOffset to the height of that element. If user</span></td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code js-file-line">  <span class="pl-c">// specified a bottomOffset option, use that instead, though.</span></td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code js-file-line">  <span class="pl-en">_setBottomOffsetForPullUp</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullUp.<span class="pl-sc">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.bottomOffset) {</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code js-file-line">      <span class="pl-v">this</span>.<span class="pl-sc">options</span>.bottomOffset <span class="pl-k">=</span> <span class="pl-v">this</span>.$pullUp.<span class="pl-sc">outerHeight</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code js-file-line">   <span class="pl-en">_removeWrapperPadding</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code js-file-line">     <span class="pl-s">var</span> $wrapper <span class="pl-k">=</span> <span class="pl-v">this</span>.$wrapper;</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code js-file-line">     <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.removeWrapperPadding) {</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code js-file-line">       <span class="pl-c">// Save padding so we can re-apply it to the iscroll-content div that we create</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code js-file-line">       <span class="pl-v">this</span>._origWrapperPaddingLeft   <span class="pl-k">=</span> $wrapper.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>padding-left<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code js-file-line">       <span class="pl-v">this</span>._origWrapperPaddingRight  <span class="pl-k">=</span> $wrapper.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>padding-right<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code js-file-line">       <span class="pl-v">this</span>._origWrapperPaddingTop    <span class="pl-k">=</span> $wrapper.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>padding-top<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code js-file-line">       <span class="pl-v">this</span>._origWrapperPaddingBottom <span class="pl-k">=</span> $wrapper.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>padding-bottom<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code js-file-line">       <span class="pl-v">this</span>.$wrapper.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>padding<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code js-file-line">       }</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code js-file-line">   },</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code js-file-line">  <span class="pl-c">//---------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code js-file-line">  <span class="pl-c">// Modify some wrapper CSS</span></td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code js-file-line">  <span class="pl-c">//---------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code js-file-line">  <span class="pl-en">_modifyWrapperCSS</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code js-file-line">    <span class="pl-v">this</span>._origWrapperStyle <span class="pl-k">=</span> <span class="pl-v">this</span>.$wrapper.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code js-file-line">    <span class="pl-v">this</span>._removeWrapperPadding();</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code js-file-line">  <span class="pl-en">_undoModifyWrapperCSS</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code js-file-line">    <span class="pl-v">this</span>._restoreStyle(<span class="pl-v">this</span>.$wrapper, <span class="pl-v">this</span>._origWrapperStyle);</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code js-file-line">  <span class="pl-c">//---------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code js-file-line">  <span class="pl-c">// Adds padding around scrolled content (not including</span></td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code js-file-line">  <span class="pl-c">// any pull-down or pull-up) using a div with padding</span></td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code js-file-line">  <span class="pl-c">// removed from wrapper.</span></td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code js-file-line">  <span class="pl-c">//---------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code js-file-line">  <span class="pl-en">_addScrollerPadding</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code js-file-line">  <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.removeWrapperPadding <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.addScrollerPadding) {</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code js-file-line">    <span class="pl-c">// We do not store $scrollerContent in the object, because elements might be added/deleted</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code js-file-line">    <span class="pl-c">// after instantiation. When we undo, we need the CURRENT children in order to unwrap</span></td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code js-file-line">    <span class="pl-s">var</span> $scrollerContentWrapper,</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code js-file-line">        $scrollerChildren <span class="pl-k">=</span> <span class="pl-v">this</span>.$scroller.children(),</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code js-file-line">        $scrollerContent <span class="pl-k">=</span> $scrollerChildren.not(<span class="pl-v">this</span>.$pullDown).not(<span class="pl-v">this</span>.$pullUp).not(<span class="pl-v">this</span>.$pullUpSpacer);</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code js-file-line">    $scrollerContent.wrapAll(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div/&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code js-file-line">    $scrollerContentWrapper <span class="pl-k">=</span> $scrollerContent.<span class="pl-sc">parent</span>().addClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollerContentClass);</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code js-file-line">    $scrollerContentWrapper.css({</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>padding-left<span class="pl-pds">&quot;</span></span>   <span class="pl-k">:</span> <span class="pl-v">this</span>._origWrapperPaddingLeft,</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>padding-right<span class="pl-pds">&quot;</span></span>  <span class="pl-k">:</span> <span class="pl-v">this</span>._origWrapperPaddingRight,</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>padding-top<span class="pl-pds">&quot;</span></span>    <span class="pl-k">:</span> <span class="pl-v">this</span>._origWrapperPaddingTop,</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&quot;</span>padding-bottom<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-v">this</span>._origWrapperPaddingBottom</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code js-file-line">  <span class="pl-en">_undoAddScrollerPadding</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.removeWrapperPadding <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.addScrollerPadding) {</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code js-file-line">      $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollerContentClass, <span class="pl-v">this</span>.$scroller).children().unwrap();</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code js-file-line">  <span class="pl-c">//---------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code js-file-line">  <span class="pl-c">// Add some convenient classes in case user wants to style</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code js-file-line">  <span class="pl-c">// wrappers/scrollers that use iscroll.</span></td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code js-file-line">  <span class="pl-c">//---------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code js-file-line">  <span class="pl-en">_addWrapperClasses</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code js-file-line">    <span class="pl-v">this</span>.$wrapper.addClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.wrapperClass);</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code js-file-line">    <span class="pl-v">this</span>.$scroller.addClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollerClass);</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code js-file-line">  <span class="pl-en">_undoAddWrapperClasses</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code js-file-line">    <span class="pl-v">this</span>.$scroller.removeClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollerClass);</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code js-file-line">    <span class="pl-v">this</span>.$wrapper.removeClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.wrapperClass);</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code js-file-line">  <span class="pl-c">// Expands the scroller to fill the wrapper. This permits</span></td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code js-file-line">  <span class="pl-c">// dragging an empty scroller, or one that is shorter than</span></td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code js-file-line">  <span class="pl-c">// the wrapper. Otherwise, you could never do pull to</span></td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code js-file-line">  <span class="pl-c">// refresh if some content wasn&#39;t initially present. As</span></td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code js-file-line">  <span class="pl-c">// well, this pushes any pull-up element down so that it</span></td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code js-file-line">  <span class="pl-c">// will not be visible until the user pulls up.</span></td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code js-file-line">  <span class="pl-en">_expandScrollerToFillWrapper</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollShortContent <span class="pl-k">||</span> <span class="pl-v">this</span>.$pullDown.<span class="pl-sc">length</span> <span class="pl-k">||</span> <span class="pl-v">this</span>.$pullUp.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>._firstScrollerExpand) {</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code js-file-line">        <span class="pl-v">this</span>._origScrollerStyle <span class="pl-k">=</span> <span class="pl-v">this</span>.$scroller.attr(<span class="pl-s1"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code js-file-line">        <span class="pl-v">this</span>._firstScrollerExpand <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code js-file-line">      <span class="pl-v">this</span>.$scroller.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>min-height<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code js-file-line">        <span class="pl-v">this</span>.$wrapper.<span class="pl-sc">height</span>() <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code js-file-line">        (<span class="pl-v">this</span>.$pullDown.<span class="pl-sc">length</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.$pullDown.<span class="pl-sc">outerHeight</span>(<span class="pl-c1">true</span>) <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code js-file-line">        (<span class="pl-v">this</span>.$pullUp.<span class="pl-sc">length</span> <span class="pl-k">?</span> <span class="pl-v">this</span>.$pullUp.<span class="pl-sc">outerHeight</span>(<span class="pl-c1">true</span>) <span class="pl-k">:</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code js-file-line">        );</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code js-file-line">  <span class="pl-en">_undoExpandScrollerToFillWrapper</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code js-file-line">    <span class="pl-v">this</span>._restoreStyle(<span class="pl-v">this</span>.$scroller, <span class="pl-v">this</span>._origScrollerStyle);</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code js-file-line">  <span class="pl-c">//Resize the wrapper for the scrolled region to fill the</span></td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code js-file-line">  <span class="pl-c">// viewport remaining after all fixed-height elements</span></td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code js-file-line">  <span class="pl-c">// force makes it ignore resizeWrapper option</span></td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code js-file-line">  <span class="pl-en">_resizeWrapper</span>: <span class="pl-st">function</span>(<span class="pl-vpf">force</span>) {</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code js-file-line">    <span class="pl-s">var</span> then <span class="pl-k">=</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code js-file-line">         viewportHeight,</td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code js-file-line">         barsHeight,</td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code js-file-line">         newWrapperHeight;</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code js-file-line">    <span class="pl-k">if</span> ( <span class="pl-k">!</span>force <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.resizeWrapper ) {</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceResizeWrapper) {</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code js-file-line">      then <span class="pl-k">=</span> <span class="pl-v">this</span>._log(<span class="pl-s1"><span class="pl-pds">&quot;</span>resizeWrapper() start<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code js-file-line">    <span class="pl-v">this</span>.$wrapper.trigger(<span class="pl-s1"><span class="pl-pds">&quot;</span>updatelayout<span class="pl-pds">&quot;</span></span>);  <span class="pl-c">// Let jQuery mobile update fixed header/footer, collapsables, etc.</span></td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code js-file-line">    <span class="pl-c">// Get technically-correct viewport height. jQuery documentation is in error on this.</span></td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code js-file-line">    <span class="pl-c">// The viewport height is NOT in all cases the same as the window height, because the height</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code js-file-line">    <span class="pl-c">// of window might have been manually set. And, guess what? jQuery Mobile sets it to 99.99%.</span></td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code js-file-line">    <span class="pl-c">// The viewport is considered the parent of window, and can be retrieved as shown below.</span></td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code js-file-line">    <span class="pl-c">// At 99.99% and common browser sizes, this is probably not an issue. But let&#39;s do it right.</span></td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code js-file-line">    <span class="pl-c">//viewportHeight = this.$window.height();   // Wrong</span></td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code js-file-line">    viewportHeight <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-sc">documentElement</span>.clientHeight;</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code js-file-line">    barsHeight <span class="pl-k">=</span> <span class="pl-v">this</span>._calculateBarsHeight();</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code js-file-line">    newWrapperHeight <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code js-file-line">      viewportHeight <span class="pl-k">-</span></td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code js-file-line">      barsHeight <span class="pl-k">-</span>                             <span class="pl-c">// Height of fixed bars or &quot;other stuff&quot; outside of the wrapper</span></td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code js-file-line">      <span class="pl-v">this</span>._wrapperHeightAdjustForBoxModel <span class="pl-k">+</span>   <span class="pl-c">// Make adjustment based on content-box model</span></td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code js-file-line">      <span class="pl-c">// Note: the following will fail for Safari desktop with Develop/User Agent/iPhone</span></td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code js-file-line">      <span class="pl-c">// Fake fullscreen or webview by using custom user agent and removing &quot;Safari&quot; from string</span></td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code js-file-line">      (IsMobileSafari <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>IsIPad <span class="pl-k">?</span> <span class="pl-c1">60</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">+</span>  <span class="pl-c">// Add 60px for space recovered from Mobile Safari address bar</span></td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code js-file-line">      <span class="pl-v">this</span>.<span class="pl-sc">options</span>.wrapperAdd;                <span class="pl-c">// User-supplied fudge-factor if needed</span></td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code js-file-line">    <span class="pl-v">this</span>.$wrapper.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>, newWrapperHeight);</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code js-file-line">    <span class="pl-v">this</span>._expandScrollerToFillWrapper();</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceResizeWrapper) {</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code js-file-line">      <span class="pl-v">this</span>._logInterval(<span class="pl-s1"><span class="pl-pds">&quot;</span>resizeWrapper() end<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-v">this</span>._sizeDirty <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> (dirty)<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), then);</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code js-file-line">    <span class="pl-c">// Internal flag is meant for internal use from jquery.mobile.iscrollview only</span></td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code js-file-line">    <span class="pl-c">// If this flag is omitted, then the force flag is set when calling _resizeWrapper</span></td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code js-file-line">    <span class="pl-c">// This causes it to ignore the resizeWrapper option setting. i.e. if user code</span></td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code js-file-line">    <span class="pl-c">// calls resizeWrapper, always resize the wrapper, regardless of setting.</span></td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code js-file-line">    <span class="pl-en">resizeWrapper</span>: <span class="pl-st">function</span> (<span class="pl-vpf">internal</span>) {</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code js-file-line">      <span class="pl-s">var</span> hidden <span class="pl-k">=</span> <span class="pl-v">this</span>._setPageVisible();</td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code js-file-line">      <span class="pl-v">this</span>._resizeWrapper(internal <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>);</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code js-file-line">      <span class="pl-v">this</span>._restorePageVisibility(hidden);</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code js-file-line">  <span class="pl-en">_undoResizeWrapper</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code js-file-line">  <span class="pl-c">//---------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code js-file-line">  <span class="pl-c">// Make various modifications to the wrapper</span></td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code js-file-line">  <span class="pl-c">//---------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code js-file-line">  <span class="pl-en">_modifyWrapper</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code js-file-line">    <span class="pl-v">this</span>._addWrapperClasses();</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code js-file-line">    <span class="pl-v">this</span>._modifyWrapperCSS();</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code js-file-line">    <span class="pl-v">this</span>._wrapperHeightAdjustForBoxModel <span class="pl-k">=</span> <span class="pl-v">this</span>._getHeightAdjustForBoxModel(<span class="pl-v">this</span>.$wrapper);</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code js-file-line">  <span class="pl-en">_undoModifyWrapper</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code js-file-line">    <span class="pl-v">this</span>._undoResizeWrapper();</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code js-file-line">    <span class="pl-v">this</span>._undoModifyWrapperCSS();</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code js-file-line">    <span class="pl-v">this</span>._undoAddWrapperClasses();</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code js-file-line">  <span class="pl-c">// Modify the pull-down (if any) with reset text</span></td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code js-file-line">  <span class="pl-c">// Also, read data-iscroll-release and data-iscroll-loading</span></td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code js-file-line">  <span class="pl-c">// values (if present ) into the corresponding options.</span></td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code js-file-line">  <span class="pl-en">_modifyPullDown</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code js-file-line">    <span class="pl-s">var</span> $pullDownLabel, pulledText, loadingText;</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullDown.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code js-file-line">    $pullDownLabel <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLabelClass, <span class="pl-v">this</span>.$pullDown);</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code js-file-line">    <span class="pl-k">if</span> ($pullDownLabel.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code js-file-line">      <span class="pl-v">this</span>._origPullDownLabelText <span class="pl-k">=</span> $pullDownLabel.<span class="pl-sc">text</span>();</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>._origPullDownLabelText) { <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullDownResetText <span class="pl-k">=</span> <span class="pl-v">this</span>._origPullDownLabelText; }</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code js-file-line">      <span class="pl-k">else</span> { $pullDownLabel.<span class="pl-sc">text</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullDownResetText); }</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code js-file-line">      pulledText <span class="pl-k">=</span> $pullDownLabel.jqmData(<span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-pulled-text<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code js-file-line">      <span class="pl-k">if</span> (pulledText) { <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullDownPulledText <span class="pl-k">=</span> pulledText; }</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code js-file-line">      loadingText <span class="pl-k">=</span> $pullDownLabel.jqmData(<span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-loading-text<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code js-file-line">      <span class="pl-k">if</span> (loadingText) { <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullDownLoadingText <span class="pl-k">=</span> loadingText; }</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code js-file-line">  <span class="pl-en">_undoModifyPullDown</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullDown.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code js-file-line">    <span class="pl-s">var</span> $pullDownLabel <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLabelClass, <span class="pl-v">this</span>.$pullDown);</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code js-file-line">    <span class="pl-k">if</span> ($pullDownLabel.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code js-file-line">    $pullDownLabel.<span class="pl-sc">text</span>(<span class="pl-v">this</span>._origPullDownLabelText);</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code js-file-line">  <span class="pl-c">// Modify the pullup element (if any) to prevent visual</span></td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code js-file-line">  <span class="pl-c">// glitching. Position at the bottom of the scroller.</span></td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code js-file-line">  <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code js-file-line">  <span class="pl-c">// Modify the pull-up (if any) with reset text</span></td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code js-file-line">  <span class="pl-c">// Also, read data-iscroll-release and data-iscroll-loading</span></td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code js-file-line">  <span class="pl-c">// values (if present ) into the corresponding options.</span></td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code js-file-line">  <span class="pl-c">//--------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code js-file-line">  <span class="pl-en">_modifyPullUp</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code js-file-line">    <span class="pl-s">var</span> $pullUpLabel, pulledText, loadingText;</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullUp.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code js-file-line">    <span class="pl-c">// Since we are positioning the pullUp element absolutely, it is pulled out of the</span></td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code js-file-line">    <span class="pl-c">// document flow. We need to add a dummy &lt;div&gt; with the same height as the pullUp.</span></td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div&gt;&lt;/div&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">insertBefore</span>(<span class="pl-v">this</span>.$pullUp).css(</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code js-file-line">     <span class="pl-s1"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>, <span class="pl-v">this</span>.$pullUp.<span class="pl-sc">outerHeight</span>(<span class="pl-c1">true</span>) );</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code js-file-line">    <span class="pl-v">this</span>.$pullUpSpacer <span class="pl-k">=</span> <span class="pl-v">this</span>.$pullUp.prev();</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code js-file-line">    <span class="pl-v">this</span>.$pullUpSpacer.addClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpSpacerClass);</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code js-file-line">    $pullUpLabel <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLabelClass, <span class="pl-v">this</span>.$pullUp);</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code js-file-line">    <span class="pl-k">if</span> ($pullUpLabel.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code js-file-line">      <span class="pl-v">this</span>._origPullUpLabelText <span class="pl-k">=</span> $pullUpLabel.<span class="pl-sc">text</span>();</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>._origPullUpLabelText) { <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpResetText <span class="pl-k">=</span> <span class="pl-v">this</span>._origPullUpLabelText; }</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code js-file-line">      <span class="pl-k">else</span> { $pullUpLabel.<span class="pl-sc">text</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpResetText); }</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code js-file-line">      pulledText <span class="pl-k">=</span> $pullUpLabel.jqmData(<span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-pulled-text<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code js-file-line">      <span class="pl-k">if</span> (pulledText) { <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpPulledText <span class="pl-k">=</span> pulledText; }</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code js-file-line">      loadingText <span class="pl-k">=</span> $pullUpLabel.jqmData(<span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll-loading-text<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code js-file-line">      <span class="pl-k">if</span> (loadingText) { <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpLoadingText <span class="pl-k">=</span> loadingText; }</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code js-file-line">  <span class="pl-en">_undoModifyPullUp</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullUp.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code js-file-line">    <span class="pl-v">this</span>.$pullUp.prev().<span class="pl-s3">remove</span>();  <span class="pl-c">// Remove the dummy div</span></td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>._origPullUpLabelText) {</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code js-file-line">      $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLabelClass, <span class="pl-v">this</span>.$pullUp).<span class="pl-sc">text</span>(<span class="pl-v">this</span>._origPullUpLabelText);</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code js-file-line">  <span class="pl-en">_correctPushedDownPage</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code js-file-line">    <span class="pl-c">// Scroll to top in case address bar pushed the page down</span></td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.resizeWrapper <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollTopOnResize) {</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code js-file-line">      $.mobile.silentScroll(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code js-file-line">  <span class="pl-c">//----------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code js-file-line">  <span class="pl-c">// Refresh the iscroll object. Insure that refresh is called with proper</span></td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code js-file-line">  <span class="pl-c">// timing. Call optional before and after refresh callbacks and trigger</span></td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code js-file-line">  <span class="pl-c">// before and after refresh events.</span></td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code js-file-line">  <span class="pl-en">refresh</span>: <span class="pl-st">function</span>(<span class="pl-vpf">delay</span>, <span class="pl-vpf">callbackBefore</span>, <span class="pl-vpf">callbackAfter</span>, <span class="pl-vpf">noDefer</span>) {</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code js-file-line">    <span class="pl-s">var</span> _this, _delay, _callbackBefore, _callbackAfter, _noDefer, then;</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code js-file-line">    <span class="pl-c">// If non-active-page refresh is deferred, make a note of it.</span></td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code js-file-line">    <span class="pl-c">// Note that each call to refresh() overwrites the callback and context variables.</span></td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code js-file-line">    <span class="pl-c">// Our expectation is that callback and context will be identical for all such refresh</span></td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code js-file-line">    <span class="pl-c">// calls. In any case, only the last callback and context will be used. This allows</span></td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code js-file-line">    <span class="pl-c">// refresh of jQuery Mobile widgets within the scroller to be deferred, as well.</span></td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>noDefer <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.deferNonActiveRefresh <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-v">this</span>.$page.is($.mobile.activePage))) {</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code js-file-line">      <span class="pl-v">this</span>._dirty <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code js-file-line">      <span class="pl-v">this</span>._dirtyCallbackBefore <span class="pl-k">=</span> callbackBefore;</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code js-file-line">      <span class="pl-v">this</span>._dirtyCallbackAfter <span class="pl-k">=</span> callbackAfter;</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceRefresh) {</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code js-file-line">        <span class="pl-v">this</span>._log(<span class="pl-s1"><span class="pl-pds">&quot;</span>refresh() (deferred)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code js-file-line">  <span class="pl-c">// Let the browser complete rendering, then refresh the scroller</span></td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code js-file-line">  <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code js-file-line">  <span class="pl-c">// Optional delay parameter for timeout before actually calling iscroll.refresh().</span></td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code js-file-line">  <span class="pl-c">// If missing (undefined) or null, use options.refreshDelay.</span></td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code js-file-line">  <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code js-file-line">  <span class="pl-c">// Optional callback parameters are called if present before and after iScroll internal</span></td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code js-file-line">  <span class="pl-c">// refresh() is called.  While the caller might bind to the before or after refresh events,</span></td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code js-file-line">  <span class="pl-c">// this can be more convenient and avoids any ambiguity over WHICH call to refresh is involved.</span></td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code js-file-line">    _this <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code js-file-line">    _delay <span class="pl-k">=</span> delay;</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code js-file-line">    _callbackBefore <span class="pl-k">=</span> callbackBefore;</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code js-file-line">    _callbackAfter <span class="pl-k">=</span> callbackAfter;</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code js-file-line">    _noDefer <span class="pl-k">=</span> noDefer;</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code js-file-line">    then <span class="pl-k">=</span> <span class="pl-v">this</span>._startTiming();</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code js-file-line">    <span class="pl-k">if</span> ((_delay <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) <span class="pl-k">||</span> (_delay <span class="pl-k">===</span> <span class="pl-c1">null</span>) ) { _delay <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.refreshDelay; }</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code js-file-line">    <span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code js-file-line">      <span class="pl-s">var</span> later <span class="pl-k">=</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code js-file-line">          hidden;</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code js-file-line">      <span class="pl-k">if</span> (_this.<span class="pl-sc">options</span>.traceRefresh) {</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code js-file-line">       later <span class="pl-k">=</span>  _this._logInterval(<span class="pl-s1"><span class="pl-pds">&quot;</span>refresh() start<span class="pl-pds">&quot;</span></span>, then);</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code js-file-line">       }</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code js-file-line">       hidden <span class="pl-k">=</span> _this._setPageVisible();</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code js-file-line">        <span class="pl-k">if</span> (_callbackBefore) { _callbackBefore(); }</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code js-file-line">      _this._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onbeforerefresh<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code js-file-line">      <span class="pl-c">// The if below is reportedly needed when using BackboneJS views when switching</span></td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code js-file-line">      <span class="pl-c">// from one view to another. See pull request #80</span></td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code js-file-line">      <span class="pl-k">if</span> (_this.iscroll) { _this.iscroll.refresh(); }</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code js-file-line">      _this._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onafterrefresh<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code js-file-line">        <span class="pl-k">if</span> (_callbackAfter) { _callbackAfter(); }</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code js-file-line">      _this._restorePageVisibility(hidden);</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code js-file-line">      <span class="pl-c">// Scroll to top in case address bar pushed the page down</span></td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>hidden) { _this._correctPushedDownPage(); }</td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code js-file-line">      <span class="pl-k">if</span> (_this.<span class="pl-sc">options</span>.traceRefresh) {</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code js-file-line">        _this._logInterval2(<span class="pl-s1"><span class="pl-pds">&quot;</span>refresh() end<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (_noDefer <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> (dirty)<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), then, later);</td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code js-file-line">      }, _delay);</td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceRefresh) {</td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code js-file-line">      <span class="pl-v">this</span>._log(<span class="pl-s1"><span class="pl-pds">&quot;</span>refresh() will occur after &gt;= <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> _delay <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mS<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code js-file-line">   <span class="pl-c">//---------------------------</span></td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code js-file-line">   <span class="pl-c">// Create the iScroll object</span></td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code js-file-line">   <span class="pl-c">//---------------------------</span></td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code js-file-line">  <span class="pl-en">_create_iscroll_object</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code js-file-line">    <span class="pl-c">/*jslint newcap:true */</span></td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code js-file-line">    <span class="pl-v">this</span>.iscroll <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">IScroll</span>(<span class="pl-v">this</span>, <span class="pl-v">this</span>.$wrapper.get(<span class="pl-c1">0</span>), <span class="pl-v">this</span>._create_iscroll_options());</td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code js-file-line">    <span class="pl-c">/* jslint newcap:false */</span></td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code js-file-line">  <span class="pl-c">// Create scroller</span></td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code js-file-line">  <span class="pl-en">_createScroller</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.createScroller) {</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.$wrapper.children().<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code js-file-line">        <span class="pl-c">// Wrap the content with a div</span></td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code js-file-line">        <span class="pl-v">this</span>.$wrapper.children().wrapAll(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div/&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code js-file-line">      <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code js-file-line">        <span class="pl-c">// Create an empty div for content and wrap with a div</span></td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code js-file-line">        <span class="pl-v">this</span>.$wrapper.append(<span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;div&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code js-file-line">  <span class="pl-en">_undoCreateScroller</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.createScroller) {</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code js-file-line">      <span class="pl-v">this</span>.$scroller.children().unwrap();</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code js-file-line">  <span class="pl-c">// Create spacers</span></td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code js-file-line">  <span class="pl-en">_addSpacers</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code js-file-line">    <span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.addSpacers) {</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code js-file-line">      <span class="pl-v">this</span>.$scrollerContent.before( $( <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.topSpacerClass <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code js-file-line">      <span class="pl-v">this</span>.$scrollerContent.after( $( <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.bottomSpacerClass <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code js-file-line">  <span class="pl-en">_undoAddSpacers</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code js-file-line">    <span class="pl-v">this</span>.$wrapper.<span class="pl-s3">find</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.topSpacerClass).<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code js-file-line">    <span class="pl-v">this</span>.$wrapper.<span class="pl-s3">find</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.bottomSpacerClass).<span class="pl-s3">remove</span>();</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code js-file-line">  <span class="pl-c">// Temporarily change page CSS to make it &quot;visible&quot; so that dimensions can be read.</span></td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code js-file-line">  <span class="pl-c">// This can be used in any event callback, and so can be used in _create(), since it&#39;s called</span></td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code js-file-line">  <span class="pl-c">// from pageinit event. Because event processing is synchronous, the browser won&#39;t render the</span></td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code js-file-line">  <span class="pl-c">// change, as long as the page style is set back before the callback returns. So, a hidden</span></td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code js-file-line">  <span class="pl-c">// page will remain hidden as long as _restorePageVisibility() is called before return.</span></td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code js-file-line">  <span class="pl-c">// This way, we can just use normal dimension functions and avoid using jquery.actual, which</span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code js-file-line">  <span class="pl-c">// slows things down significantly.</span></td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code js-file-line">  <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code js-file-line">  <span class="pl-c">// jquery.actual goes up the tree from the element being measured and sets every element to</span></td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code js-file-line">  <span class="pl-c">// visible, which is unnecessary. (We only have to be concerned about the page element, which</span></td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code js-file-line">  <span class="pl-c">// jQuery Mobile sets to display:none for all but the currently-visible page.) It also does this</span></td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code js-file-line">  <span class="pl-c">// for every dimension read. This essentially does the same thing, but then allows us to &quot;batch&quot;</span></td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code js-file-line">  <span class="pl-c">// reading dimensions</span></td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code js-file-line">  <span class="pl-en">_setPageVisible</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code js-file-line">    <span class="pl-s">var</span> hidden <span class="pl-k">=</span> <span class="pl-v">this</span>.$page.is(<span class="pl-s1"><span class="pl-pds">&quot;</span>:hidden<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code js-file-line">    <span class="pl-k">if</span> (hidden) { <span class="pl-v">this</span>.$page.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>display<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>block<span class="pl-pds">&quot;</span></span>); }</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code js-file-line">    <span class="pl-k">return</span> hidden;</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code js-file-line">  <span class="pl-en">_restorePageVisibility</span>: <span class="pl-st">function</span>(<span class="pl-vpf">hidden</span>) {</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code js-file-line">   <span class="pl-k">if</span> (hidden) { <span class="pl-v">this</span>.$page.css(<span class="pl-s1"><span class="pl-pds">&quot;</span>display<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>); }</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code js-file-line">  },</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code js-file-line">  <span class="pl-c">// Automatically called on page creation</span></td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code js-file-line">  <span class="pl-c">//-----------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code js-file-line">  <span class="pl-en">_create</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code js-file-line">    <span class="pl-s">var</span> then <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(),</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code js-file-line">        hidden;</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code js-file-line">    <span class="pl-v">this</span>.$wrapper <span class="pl-k">=</span> <span class="pl-v">this</span>.element;  <span class="pl-c">// JQuery object containing the element we are creating this widget for</span></td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code js-file-line">    <span class="pl-v">this</span>.$page <span class="pl-k">=</span> <span class="pl-v">this</span>.$wrapper.parents(<span class="pl-s1"><span class="pl-pds">&quot;</span>:jqmData(role=&#39;page&#39;)<span class="pl-pds">&quot;</span></span>);  <span class="pl-c">// The page containing the wrapper</span></td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code js-file-line">    <span class="pl-c">// Merge options from data-iscroll, if present</span></td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code js-file-line">    $.extend(<span class="pl-c1">true</span>, <span class="pl-v">this</span>.<span class="pl-sc">options</span>, <span class="pl-v">this</span>.$wrapper.jqmData(<span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceCreateDestroy) {</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code js-file-line">      <span class="pl-v">this</span>._log(<span class="pl-s1"><span class="pl-pds">&quot;</span>_create() start<span class="pl-pds">&quot;</span></span>, then);</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code js-file-line">    <span class="pl-v">this</span>.createdAt <span class="pl-k">=</span> then;</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code js-file-line">    <span class="pl-v">this</span>._instanceCount(<span class="pl-v">this</span>._instanceCount() <span class="pl-k">+</span> <span class="pl-c1">1</span>);  <span class="pl-c">// The count of extant instances of this widget on the page</span></td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code js-file-line">    <span class="pl-v">this</span>.instanceID <span class="pl-k">=</span> <span class="pl-v">this</span>._nextInstanceID();       <span class="pl-c">// The serial ID of this instance of this widget on the page</span></td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code js-file-line">    <span class="pl-v">this</span>._nextInstanceID(<span class="pl-v">this</span>.instanceID <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.instanceID <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code js-file-line">      <span class="pl-v">this</span>._pageID(nextPageID);</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code js-file-line">      nextPageID <span class="pl-k">+=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code js-file-line">    <span class="pl-v">this</span>.pageID <span class="pl-k">=</span> <span class="pl-v">this</span>._pageID();</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code js-file-line">    hidden <span class="pl-k">=</span> <span class="pl-v">this</span>._setPageVisible();   <span class="pl-c">// Fake page visibility, so dimension functions work</span></td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code js-file-line">    <span class="pl-v">this</span>._adaptPage();</td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code js-file-line">    <span class="pl-v">this</span>._createScroller();</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code js-file-line">    <span class="pl-v">this</span>.$scroller <span class="pl-k">=</span> <span class="pl-v">this</span>.$wrapper.children(<span class="pl-s1"><span class="pl-pds">&quot;</span>:first<span class="pl-pds">&quot;</span></span>);   <span class="pl-c">// Get the first child of the wrapper, which is the</span></td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code js-file-line">                                                         <span class="pl-c">//   element that we will scroll</span></td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$scroller.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code js-file-line">    <span class="pl-c">// Find pull elements, if present</span></td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code js-file-line">    <span class="pl-v">this</span>.$pullDown <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullDownClass, <span class="pl-v">this</span>.$scroller);</td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code js-file-line">    <span class="pl-v">this</span>._modifyPullDown();</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code js-file-line">    <span class="pl-v">this</span>.$pullUp <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpClass, <span class="pl-v">this</span>.$scroller);</td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code js-file-line">    <span class="pl-v">this</span>._modifyPullUp();</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code js-file-line">    <span class="pl-v">this</span>._modifyWrapper(); <span class="pl-c">// Various changes to the wrapper</span></td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code js-file-line">    <span class="pl-c">// Need this for deferred refresh processing</span></td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code js-file-line">    <span class="pl-v">this</span>._bindPage(<span class="pl-s1"><span class="pl-pds">&quot;</span>pagebeforeshow<span class="pl-pds">&quot;</span></span>, <span class="pl-v">this</span>._pageBeforeShowFunc);</td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code js-file-line">    <span class="pl-v">this</span>._setTopOffsetForPullDown();  <span class="pl-c">// If there&#39;s a pull-down, set the top offset</span></td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code js-file-line">    <span class="pl-v">this</span>._setBottomOffsetForPullUp(); <span class="pl-c">// If there&#39;s a pull-up, set the bottom offset</span></td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code js-file-line">    <span class="pl-v">this</span>._resizeWrapper();             <span class="pl-c">// Resize the wrapper to fill available space</span></td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code js-file-line">    <span class="pl-v">this</span>._addScrollerPadding();        <span class="pl-c">// Put back padding removed from wrapper</span></td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code js-file-line">    <span class="pl-v">this</span>.$scrollerContent <span class="pl-k">=</span> <span class="pl-v">this</span>.$scroller.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollerContentClass);</td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code js-file-line">    <span class="pl-v">this</span>._addSpacers();                <span class="pl-c">// Add top/bottom spacers</span></td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code js-file-line">    <span class="pl-v">this</span>._create_iscroll_object();</td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code js-file-line">    <span class="pl-v">this</span>._merge_from_iscroll_options();     <span class="pl-c">// Merge iscroll options into widget options</span></td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code js-file-line">    <span class="pl-v">this</span>._restorePageVisibility(hidden);</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code js-file-line">        <span class="pl-c">// Setup bindings for window resize and orientationchange</span></td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.resizeWrapper) {</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code js-file-line">      <span class="pl-v">this</span>._isvBind(<span class="pl-v">this</span>.$<span class="pl-s3">window</span>, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.resizeEvents, <span class="pl-v">this</span>._windowResizeFunc, <span class="pl-s1"><span class="pl-pds">&quot;</span>$window<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollTopOnOrientationChange) {</td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code js-file-line">         <span class="pl-v">this</span>._isvBind(<span class="pl-v">this</span>.$<span class="pl-s3">window</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>orientationchange<span class="pl-pds">&quot;</span></span>, <span class="pl-v">this</span>._orientationChangeFunc, <span class="pl-s1"><span class="pl-pds">&quot;</span>$window<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code js-file-line">         }</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code js-file-line">    <span class="pl-c">// Refresh on trigger of updatelayout of content</span></td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code js-file-line">    <span class="pl-v">this</span>._isvBind(<span class="pl-v">this</span>.$scrollerContent, <span class="pl-s1"><span class="pl-pds">&quot;</span>updatelayout<span class="pl-pds">&quot;</span></span>, <span class="pl-v">this</span>._updateLayoutFunc, <span class="pl-s1"><span class="pl-pds">&quot;</span>$scrollerContent<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceCreateDestroy) {</td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code js-file-line">      <span class="pl-v">this</span>._logInterval(<span class="pl-s1"><span class="pl-pds">&quot;</span>_create() end<span class="pl-pds">&quot;</span></span>, then);</td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code js-file-line">  <span class="pl-c">//----------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code js-file-line">  <span class="pl-c">// Destroy an instantiated plugin and clean up modifications</span></td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code js-file-line">  <span class="pl-c">// the widget has made to the DOM</span></td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code js-file-line">  <span class="pl-c">//----------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code js-file-line">  <span class="pl-en">destroy</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code js-file-line">    <span class="pl-s">var</span> then <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceCreateDestroy) {</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code js-file-line">      then <span class="pl-k">=</span> <span class="pl-v">this</span>._log(<span class="pl-s1"><span class="pl-pds">&quot;</span>destroy() start<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code js-file-line">    <span class="pl-c">// Unbind events</span></td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code js-file-line">    <span class="pl-v">this</span>._isvUnbind(<span class="pl-v">this</span>.$scrollerContent, <span class="pl-s1"><span class="pl-pds">&quot;</span>updatelayout<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>$scrollerContent<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code js-file-line">    <span class="pl-v">this</span>._isvUnbind(<span class="pl-v">this</span>.$<span class="pl-s3">window</span>, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.resizeEvents, <span class="pl-s1"><span class="pl-pds">&quot;</span>$window<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code js-file-line">    <span class="pl-v">this</span>._isvUnbind(<span class="pl-v">this</span>.$<span class="pl-s3">window</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>orientationchange<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>$window<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>._instanceCount() <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code js-file-line">      <span class="pl-v">this</span>._unbindPage(<span class="pl-s1"><span class="pl-pds">&quot;</span>pagebeforeshow<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code js-file-line">      <span class="pl-k">if</span> (HasTouch) {</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code js-file-line">      <span class="pl-v">this</span>._unbindPage(<span class="pl-s1"><span class="pl-pds">&quot;</span>touchmove<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code js-file-line">    <span class="pl-c">// fastDestroy option skips tearing down the modifications to the page, because we assume</span></td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code js-file-line">    <span class="pl-c">// that the page itself is being removed, and nobody is going to be silly enough to</span></td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code js-file-line">    <span class="pl-c">// un-ehance a scroller and keep the page.</span></td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.fastDestroy) {</td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code js-file-line">      <span class="pl-v">this</span>.iscroll.destroy();</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code js-file-line">      <span class="pl-v">this</span>.iscroll <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code js-file-line">      <span class="pl-v">this</span>._undoExpandScrollerToFillWrapper();</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code js-file-line">      <span class="pl-v">this</span>._undoModifyPullDown();</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code js-file-line">      <span class="pl-v">this</span>._undoModifyPullUp();</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code js-file-line">      <span class="pl-v">this</span>._undoAddSpacers();</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code js-file-line">      <span class="pl-v">this</span>._undoAddScrollerPadding();</td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code js-file-line">      <span class="pl-v">this</span>._undoModifyWrapper();</td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code js-file-line">      <span class="pl-v">this</span>.$wrapper.removeClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.wrapperClass);</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code js-file-line">      <span class="pl-v">this</span>.$scroller.removeClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.scrollerClass);</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code js-file-line">      <span class="pl-v">this</span>._undoCreateScroller();</td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code js-file-line">    <span class="pl-v">this</span>._instanceCount(<span class="pl-v">this</span>._instanceCount() <span class="pl-k">-</span> <span class="pl-c1">1</span>);   <span class="pl-c">// The count of extant instances of this widget on the page</span></td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>._instanceCount() <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code js-file-line">      <span class="pl-v">this</span>._undoAdaptPage();</td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code js-file-line">    <span class="pl-c">// For UI 1.8, destroy must be invoked from the</span></td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code js-file-line">    <span class="pl-c">// base widget</span></td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code js-file-line">    $.Widget.<span class="pl-sc">prototype</span>.destroy.<span class="pl-s3">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">options</span>.debug <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.traceCreateDestroy) {</td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code js-file-line">      <span class="pl-v">this</span>._logInterval(<span class="pl-s1"><span class="pl-pds">&quot;</span>destroy() end<span class="pl-pds">&quot;</span></span>, then);</td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code js-file-line">     <span class="pl-c">// For UI 1.9, define _destroy instead and don&#39;t</span></td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code js-file-line">     <span class="pl-c">// worry about calling the base widget</span></td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code js-file-line">  <span class="pl-c">// Enable the widget</span></td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code js-file-line">  <span class="pl-en">enable</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code js-file-line">    <span class="pl-v">this</span>.iscroll.enable();</td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code js-file-line">    $.Widget.<span class="pl-sc">prototype</span>.enable.<span class="pl-s3">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code js-file-line">  <span class="pl-c">// Disable the widget</span></td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code js-file-line">  <span class="pl-en">disable</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code js-file-line">    <span class="pl-v">this</span>.iscroll.disable();</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code js-file-line">    $.Widget.<span class="pl-sc">prototype</span>.disable.<span class="pl-s3">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code js-file-line">    <span class="pl-c">//----------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code js-file-line">    <span class="pl-c">//Respond to any changes the user makes to the option method</span></td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code js-file-line">    <span class="pl-c">//----------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code js-file-line">    <span class="pl-en">_setOption</span>: <span class="pl-st">function</span>( <span class="pl-vpf">key</span>, <span class="pl-vpf">value</span> ) {</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code js-file-line">      <span class="pl-s">var</span> hidden;</td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code js-file-line">      <span class="pl-c">// iScroll4 doesn&#39;t officially support changing options after an iscroll object has been</span></td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code js-file-line">      <span class="pl-c">// instantiated. However, some changes will work if you do a refresh() after changing the</span></td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code js-file-line">      <span class="pl-c">// option. This is undocumented other than from user comments on the iscroll4 Google</span></td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code js-file-line">      <span class="pl-c">// Groups support group. If an option change doesn&#39;t work with refresh(), then it</span></td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code js-file-line">      <span class="pl-c">// is necessary to destroy and re-create the iscroll object. This is a functionality</span></td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code js-file-line">      <span class="pl-c">// that the author of iscroll4 intends to support in the future.</span></td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code js-file-line">      <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code js-file-line">      <span class="pl-c">// TODO: Research which options can be successfully changed without destroying and</span></td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code js-file-line">      <span class="pl-c">//       re-creating the iscroll object. For now, I&#39;m taking a safe approach and</span></td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code js-file-line">      <span class="pl-c">//       always destroying and re-creating the iscroll object.</span></td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code js-file-line">      <span class="pl-c">//switch (key) {</span></td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code js-file-line">        <span class="pl-c">//case &quot;hScroll&quot;:</span></td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code js-file-line">        <span class="pl-c">//case &quot;vScroll&quot;:</span></td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code js-file-line">        <span class="pl-c">//case &quot;hScrollbar&quot;:</span></td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code js-file-line">        <span class="pl-c">//case &quot;vScrollbar&quot;:</span></td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code js-file-line">          <span class="pl-c">//this.options[ key ] = value;          // Change our options object</span></td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code js-file-line">          <span class="pl-c">//this.iscroll.options[ key ] = value;  // ... and iscroll&#39;s options object</span></td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code js-file-line">          <span class="pl-c">//this.iscroll.refresh();               // Don&#39;t think we need the timing hack here</span></td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code js-file-line">          <span class="pl-c">//break;</span></td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code js-file-line">        <span class="pl-c">//default:</span></td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code js-file-line">          <span class="pl-v">this</span>.<span class="pl-sc">options</span>[ key ] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code js-file-line">          <span class="pl-v">this</span>.iscroll.destroy();</td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code js-file-line">          hidden <span class="pl-k">=</span> <span class="pl-v">this</span>._setPageVisible();</td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code js-file-line">          <span class="pl-v">this</span>._create_iscroll_object();</td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code js-file-line">          <span class="pl-v">this</span>._restorePageVisibility(hidden);</td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code js-file-line">          <span class="pl-c">//break;</span></td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code js-file-line">        <span class="pl-c">//}</span></td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code js-file-line">      <span class="pl-c">// For UI 1.8, _setOption must be manually invoked from</span></td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code js-file-line">      <span class="pl-c">// the base widget</span></td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code js-file-line">      $.Widget.<span class="pl-sc">prototype</span>._setOption.<span class="pl-s3">apply</span>(<span class="pl-v">this</span>, arguments);</td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code js-file-line">      <span class="pl-c">// For UI 1.9 the _super method can be used instead</span></td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code js-file-line">      <span class="pl-c">// this._super( &quot;_setOption&quot;, key, value );</span></td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code js-file-line">    <span class="pl-c">//----------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code js-file-line">    <span class="pl-c">// Convenience wrappers around iscroll4 public methods</span></td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code js-file-line">    <span class="pl-c">// So, you can use:</span></td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code js-file-line">    <span class="pl-c">// $(&quot;.some-class&quot;).iscrollview(&quot;scrollTo&quot;, x, y, time, relative);</span></td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code js-file-line">    <span class="pl-c">// instead of:</span></td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code js-file-line">    <span class="pl-c">// $(&quot;.some-class&quot;).jqmData(&quot;iscrollview&quot;).iscroll.scrollTo(x, y, time, relative);</span></td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code js-file-line">    <span class="pl-c">//----------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code js-file-line">    <span class="pl-en">scrollTo</span>:        <span class="pl-st">function</span>(<span class="pl-vpf">x</span>,<span class="pl-vpf">y</span>,<span class="pl-vpf">time</span>,<span class="pl-vpf">relative</span>) { <span class="pl-v">this</span>.iscroll.<span class="pl-s3">scrollTo</span>(x,y,time,relative); },</td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code js-file-line">    <span class="pl-en">scrollToElement</span>: <span class="pl-st">function</span>(<span class="pl-vpf">el</span>,<span class="pl-vpf">time</span>)           { <span class="pl-v">this</span>.iscroll.scrollToElement(el,time); },</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code js-file-line">    <span class="pl-en">scrollToPage</span>:    <span class="pl-st">function</span>(<span class="pl-vpf">pageX</span>,<span class="pl-vpf">pageY</span>,<span class="pl-vpf">time</span>)  { <span class="pl-v">this</span>.iscroll.scrollToPage(pageX,pageY,time); },</td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code js-file-line">    <span class="pl-en">stop</span>:            <span class="pl-st">function</span>()                  { <span class="pl-v">this</span>.iscroll.<span class="pl-s3">stop</span>(); },</td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code js-file-line">    <span class="pl-en">zoom</span>:            <span class="pl-st">function</span>(<span class="pl-vpf">x</span>,<span class="pl-vpf">y</span>,<span class="pl-vpf">scale</span>,<span class="pl-vpf">time</span>)    { <span class="pl-v">this</span>.iscroll.zoom(x,y,scale,time); },</td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code js-file-line">    <span class="pl-en">isReady</span>:         <span class="pl-st">function</span>()                  { <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.isReady(); },</td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code js-file-line">    <span class="pl-c">// See disable() enable() elsewhere above - they are standard widget methods</span></td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code js-file-line">    <span class="pl-c">//----------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code js-file-line">    <span class="pl-c">// Accessors for iscroll4 internal variables. These are sometimes useful externally.</span></td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code js-file-line">    <span class="pl-c">// For example, let&#39;s say you are adding elements to the end of a scrolled list.</span></td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code js-file-line">    <span class="pl-c">// You&#39;d like to scroll up (using scrollToElement) if the new element would be</span></td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code js-file-line">    <span class="pl-c">// below the visible area. But if the list is intially empty, you&#39;d want to avoid</span></td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code js-file-line">    <span class="pl-c">// this until the scrolling area is initially full. So you need to compare the</span></td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code js-file-line">    <span class="pl-c">// scroller height (scrollerH) to the wrapper height (wrapperH).</span></td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code js-file-line">    <span class="pl-c">// These are also useful for creating &quot;pull to refresh&quot; functionality.</span></td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code js-file-line">    <span class="pl-c">//</span></td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code js-file-line">    <span class="pl-c">//-----------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code js-file-line">    <span class="pl-en">x</span>:          <span class="pl-st">function</span>() { <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.<span class="pl-sc">x</span>; },</td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code js-file-line">    <span class="pl-en">y</span>:          <span class="pl-st">function</span>() { <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.<span class="pl-sc">y</span>; },</td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code js-file-line">    <span class="pl-en">wrapperW</span>:   <span class="pl-st">function</span>() { <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.wrapperW; },</td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code js-file-line">    <span class="pl-en">wrapperH</span>:   <span class="pl-st">function</span>() { <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.wrapperH; },</td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code js-file-line">    <span class="pl-en">scrollerW</span>:  <span class="pl-st">function</span>() { <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.scrollerW; },</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code js-file-line">    <span class="pl-en">scrollerH</span>:  <span class="pl-st">function</span>() { <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.scrollerH; },</td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code js-file-line">    <span class="pl-c">// These have setters. Useful for &quot;pull to refresh&quot;.</span></td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code js-file-line">    <span class="pl-en">minScrollX</span>: <span class="pl-st">function</span>(<span class="pl-vpf">val</span>) { <span class="pl-k">if</span> (val <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) { <span class="pl-v">this</span>.iscroll.minScrollX <span class="pl-k">=</span> val; } <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.minScrollX; },</td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code js-file-line">    <span class="pl-en">minScrollY</span>: <span class="pl-st">function</span>(<span class="pl-vpf">val</span>) { <span class="pl-k">if</span> (val <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) { <span class="pl-v">this</span>.iscroll.minScrollY <span class="pl-k">=</span> val; } <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.minScrollY; },</td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code js-file-line">    <span class="pl-en">maxScrollX</span>: <span class="pl-st">function</span>(<span class="pl-vpf">val</span>) { <span class="pl-k">if</span> (val <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) { <span class="pl-v">this</span>.iscroll.maxScrollX <span class="pl-k">=</span> val; } <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.maxScrollX; },</td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code js-file-line">    <span class="pl-en">maxScrollY</span>: <span class="pl-st">function</span>(<span class="pl-vpf">val</span>) { <span class="pl-k">if</span> (val <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) { <span class="pl-v">this</span>.iscroll.maxScrollY <span class="pl-k">=</span> val; } <span class="pl-k">return</span> <span class="pl-v">this</span>.iscroll.maxScrollY; },</td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code js-file-line">    <span class="pl-c">//-----------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code js-file-line">    <span class="pl-c">// Pull-down/Pull-up support</span></td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code js-file-line">    <span class="pl-c">//-----------------------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code js-file-line">    <span class="pl-c">// Is pull-down in &quot;pulled&quot; state?</span></td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code js-file-line">    <span class="pl-en">_pullDownIsPulled</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.$pullDown.<span class="pl-sc">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.$pullDown.hasClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullPulledClass);</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code js-file-line">    <span class="pl-c">// Is pull-up in &quot;pulled&quot; state?</span></td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code js-file-line">    <span class="pl-en">_pullUpIsPulled</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.$pullUp.<span class="pl-sc">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.$pullUp.hasClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullPulledClass);</td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code js-file-line">    <span class="pl-c">// Replace the text in a pull block</span></td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code js-file-line">    <span class="pl-en">_replacePullText</span>: <span class="pl-st">function</span> (<span class="pl-vpf">$pull</span>, <span class="pl-vpf">text</span>) {</td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code js-file-line">      <span class="pl-s">var</span> $label;</td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code js-file-line">      <span class="pl-k">if</span> (text) {</td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code js-file-line">        $label <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLabelClass, $pull);</td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code js-file-line">        <span class="pl-k">if</span> ($label) { $label.<span class="pl-sc">text</span>(text); }</td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code js-file-line">    <span class="pl-c">// Reset a pull block to the initial state</span></td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code js-file-line">    <span class="pl-en">_pullSetStateReset</span>: <span class="pl-st">function</span> (<span class="pl-vpf">$pull</span>, <span class="pl-vpf">text</span>) {</td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code js-file-line">      <span class="pl-k">if</span> ($pull.is(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLoadingClass <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>, .<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullPulledClass)) {</td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code js-file-line">        <span class="pl-s">var</span></td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code js-file-line">          $iconSpan <span class="pl-k">=</span> $pull.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.iscroll-pull-icon<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code js-file-line">          $iconSpanClone <span class="pl-k">=</span> $iconSpan.clone();</td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code js-file-line">        $pull.removeClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullPulledClass <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLoadingClass);</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code js-file-line">        <span class="pl-v">this</span>._replacePullText($pull, text);</td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code js-file-line">        <span class="pl-c">//force animations to stop on iOS, which doesn&#39;t seem to want to give up. Stubborn bugger.</span></td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code js-file-line">        $iconSpan.replaceWith($iconSpanClone);</td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code js-file-line">    <span class="pl-en">_pullDownSetStateReset</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code js-file-line">        <span class="pl-v">this</span>._pullSetStateReset(<span class="pl-v">this</span>.$pullDown, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullDownResetText);</td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code js-file-line">      <span class="pl-v">this</span>._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onpulldownreset<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code js-file-line">    <span class="pl-en">_pullUpSetStateReset</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code js-file-line">        <span class="pl-v">this</span>._pullSetStateReset(<span class="pl-v">this</span>.$pullUp, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpResetText);</td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code js-file-line">      <span class="pl-v">this</span>._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onpullupreset<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code js-file-line">    <span class="pl-c">// Set a pull block to pulled state</span></td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code js-file-line">    <span class="pl-en">_pullSetStatePulled</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$pull</span>, <span class="pl-vpf">text</span>) {</td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code js-file-line">      $pull.removeClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLoadingClass).addClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullPulledClass);</td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code js-file-line">      <span class="pl-v">this</span>._replacePullText($pull, text);</td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code js-file-line">    <span class="pl-en">_pullDownSetStatePulled</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code js-file-line">        <span class="pl-v">this</span>._pullSetStatePulled(<span class="pl-v">this</span>.$pullDown, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullDownPulledText);</td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code js-file-line">      <span class="pl-v">this</span>._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onpulldownpulled<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code js-file-line">    <span class="pl-en">_pullUpSetStatePulled</span>: <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code js-file-line">        <span class="pl-v">this</span>._pullSetStatePulled(<span class="pl-v">this</span>.$pullUp, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpPulledText);</td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code js-file-line">      <span class="pl-v">this</span>._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onpulluppulled<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code js-file-line">    <span class="pl-c">// Set a pull block to the loading state</span></td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code js-file-line">    <span class="pl-en">_pullSetStateLoading</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$pull</span>, <span class="pl-vpf">text</span>) {</td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code js-file-line">      $pull.removeClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullPulledClass).addClass(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullLoadingClass);</td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code js-file-line">      <span class="pl-v">this</span>._replacePullText($pull, text);</td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code js-file-line">    <span class="pl-en">_pullDownSetStateLoading</span>: <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code js-file-line">        <span class="pl-v">this</span>._pullSetStateLoading(<span class="pl-v">this</span>.$pullDown, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullDownLoadingText);</td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code js-file-line">      <span class="pl-v">this</span>._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onpulldownloading<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code js-file-line">    <span class="pl-en">_pullUpSetStateLoading</span>: <span class="pl-st">function</span>(<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code js-file-line">        <span class="pl-v">this</span>._pullSetStateLoading(<span class="pl-v">this</span>.$pullUp, <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pullUpLoadingText);</td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code js-file-line">      <span class="pl-v">this</span>._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onpulluploading<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code js-file-line">     },</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code js-file-line">    <span class="pl-en">_pullOnRefresh</span>: <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code js-file-line">      <span class="pl-c">// It&#39;s debatable if this is the right place to do this. On one hand, it might be best</span></td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code js-file-line">      <span class="pl-c">// to do this in the pullup/down action function. We expect that we will always do a refresh</span></td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code js-file-line">      <span class="pl-c">// after the action, though (unless the action doesn&#39;t actually update anything, in which</span></td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code js-file-line">      <span class="pl-c">// case it can still call refresh().) On the other hand, it might be desirable to</span></td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code js-file-line">      <span class="pl-c">// &quot;reset&quot; the pull if a refresh comes along for some other reason. If the content were</span></td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code js-file-line">      <span class="pl-c">// updated because of something other than the user&#39;s pull action, then we consider the</span></td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code js-file-line">      <span class="pl-c">// pull moot.</span></td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code js-file-line">      <span class="pl-c">// Reset pull blocks to their initial state</span></td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullDown.<span class="pl-sc">length</span>) { <span class="pl-v">this</span>._pullDownSetStateReset(e); }</td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullUp.<span class="pl-sc">length</span>)   { <span class="pl-v">this</span>._pullUpSetStateReset(e); }</td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code js-file-line">    <span class="pl-en">_pullOnScrollMove</span>: <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code js-file-line">      <span class="pl-s">var</span> pullDownIsPulled, pullUpIsPulled, pullDownHeight, pullDownPast, pullUpHeight, pullUpPast,</td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code js-file-line">          y <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">y</span>();</td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullDown.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code js-file-line">        pullDownIsPulled <span class="pl-k">=</span> <span class="pl-v">this</span>._pullDownIsPulled();</td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code js-file-line">        pullDownHeight <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.topOffset;</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code js-file-line">        <span class="pl-c">// User needs to pull down past the top edge of the pulldown element. To prevent false</span></td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code js-file-line">        <span class="pl-c">// triggers from aggressive scrolling, they should have to pull down some additional</span></td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code js-file-line">        <span class="pl-c">// amount. Half the height of the pulldown seems reasonable, but adjust per preference.</span></td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code js-file-line">        pullDownPast <span class="pl-k">=</span> pullDownHeight / <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code js-file-line">        <span class="pl-c">// Set &quot;pulled&quot; state if not pulled and user has pulled past the pulldown element</span></td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code js-file-line">        <span class="pl-c">// by pullDownPast pixels</span></td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>pullDownIsPulled <span class="pl-k">&amp;&amp;</span> y <span class="pl-k">&gt;</span> pullDownPast ) {</td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code js-file-line">          <span class="pl-v">this</span>._pullDownSetStatePulled(e);</td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code js-file-line">          <span class="pl-v">this</span>.minScrollY(<span class="pl-c1">0</span>);   <span class="pl-c">// Circumvent top offset so pull-down element doesn&#39;t rubber-band</span></td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code js-file-line">        <span class="pl-c">// Allow user to &quot;oopsie&quot;, and scroll back to cancel and avoid pull-down action</span></td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code js-file-line">        <span class="pl-c">// Cancel if pulled and user has scrolled back to top of pulldown element</span></td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (pullDownIsPulled <span class="pl-k">&amp;&amp;</span> y <span class="pl-k">&lt;=</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code js-file-line">          <span class="pl-v">this</span>._pullDownSetStateReset(e);</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code js-file-line">          <span class="pl-v">this</span>.minScrollY(<span class="pl-k">-</span>pullDownHeight);  <span class="pl-c">// Re-instate top offset</span></td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code js-file-line">     <span class="pl-k">if</span> (<span class="pl-v">this</span>.$pullUp.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code js-file-line">          pullUpIsPulled <span class="pl-k">=</span> <span class="pl-v">this</span>._pullUpIsPulled();</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code js-file-line">          pullUpHeight <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">options</span>.bottomOffset;</td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code js-file-line">          pullUpPast <span class="pl-k">=</span> pullUpHeight / <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code js-file-line">       <span class="pl-k">if</span> (<span class="pl-k">!</span>pullUpIsPulled <span class="pl-k">&amp;&amp;</span> y <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.maxScrollY() <span class="pl-k">-</span> pullUpHeight <span class="pl-k">-</span> pullUpPast ) {</td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code js-file-line">         <span class="pl-v">this</span>._pullUpSetStatePulled(e);</td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code js-file-line">         <span class="pl-v">this</span>.maxScrollY(<span class="pl-v">this</span>.wrapperH() <span class="pl-k">-</span> <span class="pl-v">this</span>.scrollerH() <span class="pl-k">+</span> <span class="pl-v">this</span>.minScrollY());</td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code js-file-line">         }</td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (pullUpIsPulled <span class="pl-k">&amp;&amp;</span> y <span class="pl-k">&gt;=</span> <span class="pl-v">this</span>.maxScrollY() ) {</td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code js-file-line">          <span class="pl-v">this</span>._pullUpSetStateReset(e);</td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code js-file-line">          <span class="pl-v">this</span>.maxScrollY(<span class="pl-v">this</span>.wrapperH() <span class="pl-k">-</span> <span class="pl-v">this</span>.scrollerH() <span class="pl-k">+</span> <span class="pl-v">this</span>.minScrollY() <span class="pl-k">+</span> pullUpHeight);</td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code js-file-line">       }</td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code js-file-line">    <span class="pl-en">_pullOnScrollEnd</span>: <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>._pullDownIsPulled(e)) {</td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code js-file-line">          <span class="pl-v">this</span>._pullDownSetStateLoading(e);</td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code js-file-line">        <span class="pl-v">this</span>._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onpulldown<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-v">this</span>._pullUpIsPulled(e)) {</td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code js-file-line">          <span class="pl-v">this</span>._pullUpSetStateLoading(e);</td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code js-file-line">        <span class="pl-v">this</span>._triggerWidget(<span class="pl-s1"><span class="pl-pds">&quot;</span>onpullup<span class="pl-pds">&quot;</span></span>, e);</td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code js-file-line">}( jQuery, <span class="pl-s3">window</span>, <span class="pl-s3">document</span> ));</td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code js-file-line">jQuery(<span class="pl-s3">document</span>).trigger(<span class="pl-s1"><span class="pl-pds">&quot;</span>iscroll_init<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code js-file-line"><span class="pl-c">// Self-init</span></td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code js-file-line">jQuery(<span class="pl-s3">document</span>).bind(<span class="pl-s1"><span class="pl-pds">&quot;</span>pagecreate<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code js-file-line">  <span class="pl-s1"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code js-file-line">  <span class="pl-c">// In here, e.target refers to the page that was created (it&#39;s the target of the pagecreate event)</span></td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code js-file-line">  <span class="pl-c">// So, we can simply find elements on this page that match a selector of our choosing, and call</span></td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code js-file-line">  <span class="pl-c">// our plugin on them.</span></td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code js-file-line">  <span class="pl-c">// The find() below returns an array of elements within a newly-created page that have</span></td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code js-file-line">  <span class="pl-c">// the data-iscroll attribute. The Widget Factory will enumerate these and call the widget</span></td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code js-file-line">  <span class="pl-c">// _create() function for each member of the array.</span></td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code js-file-line">  <span class="pl-c">// If the array is of zero length, then no _create() fucntion is called.</span></td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code js-file-line">  <span class="pl-s">var</span> elements <span class="pl-k">=</span> jQuery(e.<span class="pl-sc">target</span>).<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>:jqmData(iscroll)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code js-file-line">    elements.iscrollview();</td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code js-file-line">
</td>
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
      <li>&copy; 2015 <span title="0.08632s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-9dec5965f0440c271e53f19297ddcf6a6e892652dcbd89ff67742db9834aeeb6.js"></script>
      
      

  </body>
</html>

