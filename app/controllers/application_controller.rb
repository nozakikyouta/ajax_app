class ApplicationController < ActionController::Base
  def index
    @post = post.all
end
