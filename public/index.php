<?php

chdir(__DIR__.'/..');

require 'vendor/autoload.php';

$app = new \Slim\Slim([
    'debug' => true,
    'view' => new \Slim\Views\Twig(),
    'templates.path' => 'templates',
]);

$app->view()->parserExtensions = [
    new \SlimReact\TwigExtension(),
];

$app->get('/', function () use ($app) {
    $app->render('test.twig');
});
$app->run();
