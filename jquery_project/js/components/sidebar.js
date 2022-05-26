const adminLinks = [{
    icon: "<i class='fas fa-users'></i>",
    name: "User Information",
    link: "/admin/viewUsersPage.html",
},{
    icon: "<i class='fas fa-chair'></i>",
    name: "Class Allocation",
    link: "/admin/classAllocation.html"
},{
    icon: "<i class='far fa-file'></i>",
    name: "Report",
    link: "",
    subMenu: [{
        name: "Student's attendance",
        link: "/admin/studentAttendance.html",
    },{
        name: "School report",
        link: "/admin/generateSchoolReport.html",
    }]
}]

const studentLinks = [{
    icon: "<i class='far fa-user'></i>",
    name: "Profile",
    link: "/student/viewProfilePage.html",
},{
    icon: "<i class='fas fa-chair'></i>",
    name: "View Class Allocation",
    link: "/student/viewClassAllocation.html"
},{
    icon: "<i class='far fa-file'></i>",
    name: "Attendance records",
    link: "/student/attendanceRecordPage.html",
},{
    icon: "<i class='fas fa-chalkboard'></i>",
    name: "Event Room Booking",
    link: "/student/roomBookingMenu.html",
},{
    icon: "<i class='fas fa-comments'></i>",
    name: "Chat Room",
    link: "/student/chatRoom.html",
}]


const teacherLinks = [{
    icon: "<i class='far fa-user'></i>",
    name: "Account Management",
    link: "",
    subMenu: [{
        name: "Personal profile",
        link: "/teacher/viewProfilePage.html",
    },{
        name: "View student infomation",
        link: "/teacher/viewStudentInfoPage.html",
    }]
},{
    icon: "<i class='fas fa-chair'></i>",
    name: "Class Allocation",
    link: "/teacher/classAllocation.html",
},{
    icon: "<i class='far fa-file'></i>",
    name: "User Information",
    link: "",
    subMenu: [{
        name: "Student's attendance",
        link: "/teacher/attendanceRecordPage.html",
    },{
        name: "Class report",
        link: "/teacher/generateClassReport.html",
    }]
},{
    icon: "<i class='fas fa-chalkboard'></i>",
    name: "Event Room Booking",
    link: "/student/roomBookingMenu.html",
},{
    icon: "<i class='fas fa-comments'></i>",
    name: "Chat Room",
    link: "/student/chatRoom.html",
}]

$(document).ready(function(){
    let loopLinks;
    if(localStorage.getItem("role") === "admin"){
        loopLinks = adminLinks;
    }else if(localStorage.getItem("role") === "teacher"){
        loopLinks = teacherLinks;
    }else if(localStorage.getItem("role") === "student"){
        loopLinks = studentLinks;
    }

    loopLinks.forEach(link => {
        let element;

        if(link.link.length > 0){
            element = `
            <li class="sidebar-nav-item">
                <a href=${link.link} class="sidebar-nav-link">
                    ${link.icon}
                    <span>${link.name}</span>
                </a>
            </li>
            `
        }else{
            element = `
            <li class="sidebar-nav-item">
                <button class="sidebar-nav-btn">
                    ${link.icon}
                    <span>${link.name}</span>
                </button>
                <ul class="sidebar-sub-menu">
                ${link.subMenu.map((subLink) =>{
                    return `<li class="sidebar-sub-menu-item">
                    <a class="sidebar-sub-menu-link" href=${subLink.link}>${subLink.name}</a>
                    </li>`;
                }).join("")}
                </ul>
            </li>
            `
        }
        $("#sidebar-nav-links").append(element);
    });

    $(".sidebar-nav-btn").click(function(){
        $(this).next().eq(0).toggleClass("show");
    })

    $("#overlay").click(function () {
        if ($(".sidebar-container").eq(0).hasClass("show")) {
            $(".sidebar-container").eq(0).removeClass("show");
            $("#overlay").removeClass("show");
        }
    });

    $(".sidebar-nav-link,.sidebar-sub-menu-link").click(function(e){
        $(".sidebar-container").eq(0).removeClass("show");
        $("#overlay").removeClass("show");

        e.preventDefault();
        const page = $(this).attr("href");
        $("#main-panel").load("./components/" + page)
    })

    $(".logout-btn").click(function(){
        localStorage.removeItem("role");
        location.href = "./index.html";
    })
})