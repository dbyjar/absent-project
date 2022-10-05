<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Absent</title>

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="{{ mix('css/vendor.css') }}">
    </head>
    <body>
        <div id="app"></div>

        <script src="{{ mix('js/jquery.min.js') }}" type="text/javascript"></script>
        <script src="{{ mix('js/popper.min.js') }}" type="text/javascript"></script>
        <script src="{{ mix('js/vendor.js') }}" type="text/javascript"></script>

        <script src="{{ mix('js/index.js') }}" type="text/javascript"></script>
    </body>
</html>
