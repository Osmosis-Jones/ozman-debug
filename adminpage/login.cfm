<cfif IsDefined("user") AND isDefined("password")>
	<cfif user EQ "Ed-admin" and password EQ "ipm!+3Dp">
    <cfset SESSION.UserID = true>
    <cflocation url="/adminpage/dashboard/index.cfm" addtoken="no">
	<cfelse>
		<cfset Error = true>
	</cfif>
</cfif>

<cfif IsDefined("Act") AND Act EQ "Logoff">
  <cfset CFID = SESSION.CFID>
  <cfset CFToken = SESSION.CFToken>

	<cfif IsDefined("SESSION.SESSIONID")>
	    <cfset SESSIONID = SESSION.SESSIONID>
	</cfif>

    <cfset temp = structclear(SESSION)>
    <cfset SESSION.CFID = CFID>
	<cfset SESSION.CFToken = CFToken>

	<cfif IsDefined("SESSIONID")>
		<cfset SESSION.SESSIONID = SESSIONID>
	</cfif>
  <cfset temp = structclear(SESSION)>
</cfif>

<cfoutput>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ed-admin | Log in</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <!-- /.login-logo -->
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="##" class="h1"><b>Ed-admin</b></a>
    </div>
    <div class="card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form action="#CGI.SCRIPT_NAME#" method="post">
        <div class="input-group mb-3">
          <input type="text" name="user" class="form-control" placeholder="User">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="password" class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Ed-admin App -->
<script src="dist/js/adminlte.min.js"></script>
</body>
</html>
</cfoutput>
