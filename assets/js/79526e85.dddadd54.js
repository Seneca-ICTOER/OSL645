"use strict";(self.webpackChunkOSL645=self.webpackChunkOSL645||[]).push([[711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(n),d=i,c=k["".concat(s,".").concat(d)]||k[d]||u[d]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(3117),i=(n(7294),n(3905));const r={},l="OPS145 - Introduction to Linux and Unix",p={unversionedId:"ExtraResources/course-outline",id:"ExtraResources/course-outline",title:"OPS145 - Introduction to Linux and Unix",description:"OPS145 Subject Description",source:"@site/docs/ExtraResources/course-outline.md",sourceDirName:"ExtraResources",slug:"/ExtraResources/course-outline",permalink:"/OSL645/ExtraResources/course-outline",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OSL640dev/tree/main/docs/ExtraResources/course-outline.md",tags:[],version:"current",frontMatter:{},sidebar:"courseNotesSidebar",previous:{title:"Course Policies",permalink:"/OSL645/ExtraResources/course-policies"},next:{title:"Project",permalink:"/OSL645/Project/"}},s={},o=[],m={toc:o};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ops145---introduction-to-linux-and-unix"},"OPS145 - Introduction to Linux and Unix"),(0,i.kt)("h1",{id:"ops145-subject-description"},"OPS145 Subject Description"),(0,i.kt)("p",null,"  Today Linux powers most servers and mobile devices.\nThis subject introduces students to the use and management of Linux through the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Interact with Linux by typing commands on command lines and clicking on graphical user interfaces."),(0,i.kt)("li",{parentName:"ul"},"Personalize and control Linux."),(0,i.kt)("li",{parentName:"ul"},"Make personalization settings reboot persistent by saving edits to plain text files."),(0,i.kt)("li",{parentName:"ul"},"Run Linux locally on Windows or macOS."),(0,i.kt)("li",{parentName:"ul"},"From Linux running locally, connect to and manage remote Linux servers."),(0,i.kt)("li",{parentName:"ul"},"Automate repetitive tasks on Linux by creating or modifying scripts.")),(0,i.kt)("h1",{id:"ops145-learning-outcomes"},"OPS145 Learning Outcomes"),(0,i.kt)("p",null,"Upon successful completion of this subject the student will be able to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use Linux file system from the command line as user and administrator."),(0,i.kt)("li",{parentName:"ol"},"Get information, configure, and manage: users, files, processes, networks, and disks."),(0,i.kt)("li",{parentName:"ol"},"Use pipes to send output of one command as input to another.\nUse files to redirect input and output."),(0,i.kt)("li",{parentName:"ol"},"Use regular expressions to filter, edit, and format plain text files."),(0,i.kt)("li",{parentName:"ol"},"Search files based on file properties: ownership, time stamp, size, permissions, and more."),(0,i.kt)("li",{parentName:"ol"},"Edit configuration files and modify scripts using command line, graphical, and web-based editors."),(0,i.kt)("li",{parentName:"ol"},"Create, modify, and execute scripts to automate tasks for users and administrators."),(0,i.kt)("li",{parentName:"ol"},"Backup and restore configurations for local and remote Linux systems."),(0,i.kt)("li",{parentName:"ol"},"Create and maintain documentation for sysadmin work done using paper and digital logbooks."),(0,i.kt)("li",{parentName:"ol"},"Detect, troubleshoot, and fix broken system configurations and network routing.")),(0,i.kt)("h1",{id:"ops145-weekly-topics"},"OPS145 Weekly Topics"),(0,i.kt)("h1",{id:"week-1---introduction"},"Week 1 - Introduction"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Linux background and open source philosophy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Introduction to using command line interfaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Introduction to system administration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Understanding differences between working and failed sysadmin tasks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accessing matrix server on- and off-campus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Logging in to matrix to do course work"),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ssh to matrix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cp to copy notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"vimtutor"))),(0,i.kt)("h1",{id:"week-2---file-management"},"Week 2 - File Management"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Understanding how to read man pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"File management: create, read, update, and delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Text editing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"File system links: hard and symbolic links"),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic navigation: pwd, cd, ls, tree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"File management: cp, mv, rm, mkdir, rmdir, ln")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Common utilities: cat, more, less, touch, file, find"))),(0,i.kt)("h1",{id:"week-3---tree-navigation-and-shell-expansion"},"Week 3 - Tree Navigation and Shell Expansion"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Understanding Linux file system using 'man 7 hier'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Path names: absolute and relative")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Quotes: single and double; escaping quote expansion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using shell wildcards in file name expansion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command execution and history")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Recalling and editing previous commands")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Environment variables"),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Quoting special characters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shell basics: command execution and managing command history"))),(0,i.kt)("h1",{id:"week-4---permissions"},"Week 4 - Permissions"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data Representation: binary and octal number system representation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"File and directory permissions for user, group, and others")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shell Variables"),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"chmod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"umask")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"stat"))),(0,i.kt)("h1",{id:"week-5---filters-pipes-and-redirection"},"Week 5 - Filters, Pipes, and Redirection"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Devices: stdin, stdout, stderr, and /dev/null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Input and Output redirection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Redirection and piping"),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filter commands: head, tail, cut, sort, tr, wc, grep")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Redirection using >, >>, <, >&, |&")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tee"))),(0,i.kt)("h1",{id:"week-6---file-transfer-and-sending-email"},"Week 6 - File Transfer and Sending Email"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transferring files across network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sending email from the command line")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sending email with file attachments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"grep based filtering"),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"scp and sftp utilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"mail and mailx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using grep with options"))),(0,i.kt)("h1",{id:"week-7---midterm"},"Week 7 - Midterm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Course Review"),(0,i.kt)("li",{parentName:"ul"},"Midterm Test (20%)")),(0,i.kt)("h1",{id:"week-8---management-of-processes-and-disks"},"Week 8 - Management of Processes and Disks"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Process management: view, start, suspend, and kill processes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Foreground and background jobs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shell aliases"),(0,i.kt)("p",{parentName:"li"},"Shell Scripting:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Positional parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using test statements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Commands: echo and read")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Simple scripts to display output and get input from user")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Making decisions with if statement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Looping with for statement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command Substitution / Math Operations"),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ps, jobs, fg, bg, top")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"df, du, quota")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"lsblk, mount, umount"))),(0,i.kt)("h1",{id:"week-9---regular-expressions-with-grep"},"Week 9 - Regular Expressions with grep"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Regular expressions basics"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Literal matching"),(0,i.kt)("li",{parentName:"ul"},"Character classes"),(0,i.kt)("li",{parentName:"ul"},"Using symbols: . and *"),(0,i.kt)("li",{parentName:"ul"},"Anchoring")),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"grep"))),(0,i.kt)("h1",{id:"week-10---regular-expressions-with-sed-and-awk"},"Week 10 - Regular Expressions with sed and awk"),(0,i.kt)("p",null,"  Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using cut and grep")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filter and edit with sed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filter, edit, and pretty print with awk"),(0,i.kt)("p",{parentName:"li"},"Command Line:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cut")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"awk"))),(0,i.kt)("h1",{id:"week-11---scripting-for-system-administration"},"Week 11 - Scripting for System Administration"),(0,i.kt)("p",null,"  Shell Scripting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scripts for sysadmin related tasks"),(0,i.kt)("li",{parentName:"ul"},"Using variables in scripts"),(0,i.kt)("li",{parentName:"ul"},"Passing arguments and options to scripts"),(0,i.kt)("li",{parentName:"ul"},"More test statements"),(0,i.kt)("li",{parentName:"ul"},"Making decisions with if-else statements"),(0,i.kt)("li",{parentName:"ul"},"Using for loop statements to loop over files in directory")),(0,i.kt)("h1",{id:"week-12---scripts-bundled--with-linux-distros"},"Week 12 - Scripts bundled  with Linux distros"),(0,i.kt)("p",null,"  Shell Scripting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Making decisions with if - elif - else statement"),(0,i.kt)("li",{parentName:"ul"},"Using for loop with output from commands run in sub-shells"),(0,i.kt)("li",{parentName:"ul"},"Command Substitution"),(0,i.kt)("li",{parentName:"ul"},"while loop statement"),(0,i.kt)("li",{parentName:"ul"},"Error-Checking with Loops"),(0,i.kt)("li",{parentName:"ul"},"exit and break statements"),(0,i.kt)("li",{parentName:"ul"},"export command"),(0,i.kt)("li",{parentName:"ul"},"Creating and using functions in shells"),(0,i.kt)("li",{parentName:"ul"},"Shell start-up files"),(0,i.kt)("li",{parentName:"ul"},"Understanding scripts bundled with Linux")),(0,i.kt)("h1",{id:"week-13---faculty-led-interest-topic"},"Week 13 - Faculty Led Interest Topic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tutorials and Project based on minimal Ubuntu VM due"),(0,i.kt)("li",{parentName:"ul"},"Review Questions")),(0,i.kt)("h1",{id:"week-14---final-test"},"Week 14 - Final Test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Course Review"),(0,i.kt)("li",{parentName:"ul"},"Final Test (20%)")),(0,i.kt)("h1",{id:"mode-of-instruction"},"Mode of Instruction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modes: In-class lecture, in-class exercises, and hands-on activity"),(0,i.kt)("li",{parentName:"ul"},"Hours per week: 4"),(0,i.kt)("li",{parentName:"ul"},"Room configuration: Computer lab"),(0,i.kt)("li",{parentName:"ul"},"Typical scheduling pattern: Fall, Winter, and summer terms")),(0,i.kt)("h1",{id:"prescribed-texts"},"Prescribed Texts"),(0,i.kt)("p",null,"  None"),(0,i.kt)("h1",{id:"reference-material"},"Reference Material"),(0,i.kt)("p",null,"  ",(0,i.kt)("a",{parentName:"p",href:"https://matrix.senecapolytechnic.ca/~ops145"},"https://matrix.senecapolytechnic.ca/~ops145")),(0,i.kt)("h1",{id:"required-supplies"},"Required Supplies"),(0,i.kt)("p",null,"  None"),(0,i.kt)("h1",{id:"student-progression-and-promotion-policy"},"Student Progression and Promotion Policy"),(0,i.kt)("p",null,"  To obtain a credit in this subject, a student must:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Achieve an average of 50% or better for the two tests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Achieve a grade of 50% or better on the overall course"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.senecapolytechnic.ca/about/policies/student-progression-and-promotion-policy.html"},"https://www.senecapolytechnic.ca/about/policies/student-progression-and-promotion-policy.html")))),(0,i.kt)("h1",{id:"modes-of-evaluation"},"Modes of Evaluation"),(0,i.kt)("p",null,"  Assessment Summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"30% Linux Online Tutorials:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"20% Weekly tutorials with due dates"),(0,i.kt)("li",{parentName:"ul"},"10% Interactive review tutorials"))),(0,i.kt)("li",{parentName:"ul"},"30% Lab Quizzes (best 6 marks of 6 or more quizzes)"),(0,i.kt)("li",{parentName:"ul"},"40% Tests (2 at 20%)")))}u.isMDXComponent=!0}}]);