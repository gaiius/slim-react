<?php

namespace SlimReact;

class TwigExtension extends \Twig_Extension
{
    public function getName()
    {
        return 'slim-react';
    }

    public function getFunctions()
    {
        $options = ['is_safe' => ['html']];
        return [
            new \Twig_SimpleFunction('react', array($this, 'react'), $options),
        ];
    }

    public function react($module, $props)
    {
        $props = json_encode($props);
        $query = http_build_query(compact('module', 'props'));

        try {
            $server_markup = file_get_contents(
                'http://localhost:3000/?' . $query
            );
        } catch (\ErrorException $e) {
            $server_markup = '';
        }

        $container_id = uniqid();

        $module_code =
            '<script type="application/json" '.
            'data-id="'. $container_id .'" '.
            'rel="module">'.
            json_encode($module).
            '</script>';

        $props_code =
            '<script type="application/json" '.
            'data-id="'. $container_id .'" '.
            'rel="props">'.
            $props.
            '</script>';

        $container_markup = '<div id="'. $container_id .'" rel="react">'.
            $server_markup .'</div>';

        return $container_markup . $module_code . $props_code;
    }
}
