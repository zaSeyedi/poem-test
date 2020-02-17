import React from 'react'

export const Bookmark = ({className, width=20, height=20, strokeWidth='0.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-bookmark" viewBox="0 0 32 32" width={width} height={height} fill="#E4E4E4" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
  </svg>
)

export const Bookmark2 = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-bookmark" viewBox="0 0 32 32" width={width} height={height} fill="#F5F5F5" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
  </svg>
)

