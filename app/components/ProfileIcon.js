'use client'
import { useState, useEffect, useRef } from 'react'
import { FaUser } from 'react-icons/fa'
import AuthModal from './AuthModal'

const ProfileIcon = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const modalRef = useRef(null)

  const handleClick = (event) => {
    event.stopPropagation()
    setModalVisible((prev) => !prev)
  }

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalVisible(false)
    }
  }

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isModalVisible])

  return (
    <div className="relative w-7 h-7">
      <FaUser
        size={25}
        onClick={handleClick}
        className="hover:cursor-pointer"
      />
      {isModalVisible && (
        <div ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <AuthModal isVisible={isModalVisible} />
        </div>
      )}
    </div>
  )
}

export default ProfileIcon
