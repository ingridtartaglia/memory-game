var memoryGameApp = angular.module('memoryGameApp', []);

memoryGameApp.controller('memoryGameCtrl', function ($scope, $timeout) {
    $scope.cards = _.shuffle([
        {
            front: "img/facebook.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/google.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/instagram.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/linkedin.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/twitter.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/youtube.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/facebook.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/google.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/instagram.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/linkedin.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/twitter.png",
            back: "img/black.png",
            flipped: false
        },
        {
            front: "img/youtube.png",
            back: "img/black.png",
            flipped: false
        }]);
    $scope.previousSelectedCard;
    $scope.gameEnded = false;
    $scope.selectCard = function (card){
        card.flipped = true;

        $timeout(function () {
            if($scope.previousSelectedCard){
                if ($scope.previousSelectedCard.front !== card.front) {
                    card.flipped = false;
                    $scope.previousSelectedCard.flipped = false;
                }
                $scope.previousSelectedCard = undefined;
            } else {
                $scope.previousSelectedCard = card;
            }
        }, 1000);

        if (_.every($scope.cards, 'flipped', true)){
            $scope.gameEnded = true;
        }
    };
 });
