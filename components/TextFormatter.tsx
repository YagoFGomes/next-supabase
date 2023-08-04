"use client"
import React from "react";


interface FormattedTextProps{
  html: string,
}

export default function FormattedText({ html }:FormattedTextProps) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};