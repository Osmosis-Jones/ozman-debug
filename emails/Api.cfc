<cfcomponent>
<cfinclude template="./../dsn.cfm">

<cffunction name="GetMailServerDet" returntype="struct" output="false">

	<cfset var sMailServer = StructNew() />

	<cfquery name="getMailServer" datasource="#dsn#" cachedwithin="#CreateTimeSpan(0, 0, 1, 0)#">
		SELECT * FROM "vMailServer"
	</cfquery>

	<cfif Trim(getMailServer.Value[1]) NEQ "">

		<cfset sMailServer.Server = Trim(getMailServer.Value[1])>

		<cfif Trim(getMailServer.Value[2]) NEQ "">
			<cfset sMailServer.Port = Trim(getMailServer.Value[2])>
		</cfif>

		<cfif Trim(getMailServer.Value[3]) NEQ "">
			<cfset sMailServer.UserName = Trim(getMailServer.Value[3])>
		</cfif>

		<cfif Trim(getMailServer.Value[4]) NEQ "">
			<cfset sMailServer.Password = Trim(getMailServer.Value[4])>
		</cfif>

	</cfif>
	
	<cfreturn sMailServer />

</cffunction>
<cffunction name="subscription" displayname="Set subscription" access="remote" returntype="Any" returnformat="JSON">
<cfargument name="EMAIL" required="true" type="string" />	
		<cfset response = structNew()>
		<cfset device ="Unknown">
		<cfif findNoCase('Android', cgi.http_user_agent,1)>
				<cfset device ="Android">
		<cfelseif findNoCase('iPhone', cgi.http_user_agent,1)>
				<cfset device ="Iphone">
		<cfelseif findNoCase('Windows', cgi.http_user_agent,1)>
				<cfset device ="Windows">
		<cfelseif findNoCase('Linux', cgi.http_user_agent,1)>
				<cfset device ="Linux">
		</cfif>
		<cfquery name="Insert_Subscriber" datasource="#dsn#">
			INSERT INTO "SUBSCRIPTION" ("EMAIL", "CREATED_AT", "IP_ADDRESS", "DEVICE", "STATUS") 
			VALUES ('#arguments.EMAIL#', #Now()#,'#CGI.REMOTE_ADDR#', '#device#', 1)
		</cfquery>
		<cftry>
			<cfset sServer = GetMailServerDet()>
			<cfmail to=#arguments.EMAIL# type="html"
			from = "info@Ed-admin.com" subject = "Ed-admin Subscription" attributeCollection="#sServer#"> 
			<cfinclude template="./subscribe_template.cfm">
			</cfmail>

			<cfcatch type="any">
					<cfset response.success = false>
					<cfset response.message = 'Sending Email Failed'>
					<cfreturn response>
			</cfcatch>
		</cftry>
		<cfset response.success = true>
		<cfset response.message = 'Subscription Done'>
		<cfreturn response>

	</cffunction>
<cffunction name="Contact" displayname="Contact us" access="remote" returntype="Any" returnformat="JSON">
<cfargument name="name" required="true" type="string" />
<cfargument name="email" required="true" type="string" />
<cfargument name="msg_subject" required="true" type="string" />
<cfargument name="msg_InsName" required="true" type="string" />
<cfargument name="phone_number" required="true" type="string" />
<cfargument name="message" required="false" type="string" default=""/>
		<cfset response = structNew()>
		<cfset wrongmail = false>

		<cfif arguments.country EQ '' OR arguments.country EQ 'Please select the country'>
			<cfset wrongmail = true>
		<cfelse>	
		<cfset tomail = "info@Ed-admin.com">	
		<cfif arguments.msg_subject EQ 'Support'>
			<cfset tomail = 'support@Ed-admin.com'>
		<cfelseif arguments.msg_subject EQ 'Other'>
			<cfset tomail = 'info@Ed-admin.com'>	
		<cfelse>
			<cfset tomail = 'clientcare@Ed-admin.com'>
		</cfif>
		<cftry>
			<cfquery name="Insert_Subscriber" datasource="#dsn#">
				INSERT INTO "Contact" ("NAME", "EMAIL", "PHONE", "SUBJECT","InsName" ,"MESSAGE" ,"CREATED_AT") 
				VALUES ('#arguments.name#', '#arguments.email#', '#arguments.phone_number#', '#arguments.msg_subject#','#arguments.msg_InsName#', '#arguments.message#', #Now()#)
			</cfquery>
			
			<cfset ccto = ''>
			
			<cfset sServer = GetMailServerDet()>

			<cfif #arguments.country# EQ 'South Africa'>
				<cfset ccto = 'info@entimex.com'>
			</cfif>
			<cfmail to="#tomail#" cc='#ccto#' type="html"
			from = #arguments.EMAIL# subject = "Ed-admin Contact" attributeCollection="#sServer#"> 
			<html>
				<body>
					<h1>Ed-admin Contact</h1>
					<p>Name: #arguments.name#</p>
					<p>EMAIL: #arguments.email#</p>
					<p>PHONE: #arguments.phone_number#</p>
					<p>COUNTRY: #arguments.country#</p>
					<p>SUBJECT: #arguments.msg_subject#</p>
					<p>Name of Institution/School: #arguments.msg_InsName#</p>
					<p>MESSAGE: #arguments.message#</p>
				</body>
			</html>
			</cfmail>
			
			<cfcatch type="any">
				<cfset response.success = false>
				<cfset response.message = 'submission failed'>
				
			</cfcatch>
		</cftry>
		</cfif>
		<cfif wrongmail EQ true>
			<cfset response.message = 'Please select the country'>
			<cfset response.success = false>
		<cfelse>
			<cfset response.success = true>
			<cfset response.message = 'We will  #wrongmail# contact with you as soon as possible'>
		</cfif>
		<cfreturn response>

</cffunction>
</cfcomponent>