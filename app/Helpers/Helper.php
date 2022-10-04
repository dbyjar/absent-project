<?php

function is_base64($val)
{
  $str = base64_decode($val, true);

  if (!$str) {
    return false;
  } else {
    $base64 = base64_encode($str);

    if ($val === $base64) {
      return true;
    } else {
      return false;
    }
  }
}