class PagesController < ApplicationController
  def app
    puts "SESSION:"
    # p session
    p @current_user
    # raise 'hell'
  end
end
