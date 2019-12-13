<?php
$link = get_db_link();

    if($request['method'] === "GET") {
        if (isset($_GET['userId'])){
            $user = $_GET['userId'];
            }
            else {
            $user = $_SESSION['user_id'];
            }
            $data = getProjectsAndTickets($link, $user);
            $response['body'] = $data;
            send($response);
    }

    function get_user() {
        if (isset($_SESSION['user_id'])) {
            $userId  = $_SESSION['user_id'];
            return $userId;
        }
            throw new ApiError("No user exists", 404);
    }

    function getProjectsAndTickets($link, $user) {
        $query = "SELECT `userProjects`.`projectId` FROM `userProjects` WHERE `userProjects`.`userId` = $user";
        $res = mysqli_query($link, $query);
        $outputP = mysqli_fetch_all($res, MYSQLI_ASSOC);
        $numProjects = count($outputP);

        $query = "SELECT `id` FROM `tickets` WHERE `assigneeId` = $user AND `statusCodeId`=1";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        $numOpenTickets = count($output);

        $query = "SELECT `id` FROM `tickets` WHERE `assigneeId` = $user AND `statusCodeId`=2";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        $numProgressTicket = count($output);

        $query = "SELECT `id` FROM `tickets` WHERE `assigneeId` = $user AND `statusCodeId`=3";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        $numClosedTicket = count($output);

        return [
            "projects" => $numProjects,
            "openTicket" => $numOpenTickets,
            "progressTicket" => $numProgressTicket,
            "closedTicket" => $numClosedTicket
        ];
    }


?>

